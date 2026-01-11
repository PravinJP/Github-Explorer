import { getRepository,getCommits } from "@/Lib/github";
import { GitHubCommit, GitHubRepo } from "@/types/github";

interface RepoDetailsPageProps {
  params: Promise<{
    owner: string;
    name: string;
  }>;
}

export default async function RepoDetailsPage({
  params,
}: RepoDetailsPageProps) {
  const { owner, name } = await params;

  const repo: GitHubRepo = await getRepository(owner, name);
  const commits: GitHubCommit[] = await getCommits(owner, name);

  return (
    <main className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold">
        {repo.owner.login}/{repo.name}
      </h1>

      {repo.description && (
        <p className="text-gray-600 mt-2">
          {repo.description}
        </p>
      )}

      <div className="flex flex-wrap gap-4 mt-4 text-sm">
        <span>⭐ Stars: {repo.stargazers_count}</span>
        <span>🍴 Forks: {repo.forks_count}</span>
        <span>🐞 Open Issues: {repo.open_issues_count}</span>
        {repo.language && <span>🧠 Language: {repo.language}</span>}
        <span>🌿 Default Branch: {repo.default_branch}</span>
        <span>
          🕒 Updated:{" "}
          {new Date(repo.updated_at).toLocaleDateString()}
        </span>
      </div>

      <a
        href={repo.html_url}
        target="_blank"
        className="inline-block mt-4 text-blue-600 underline"
      >
        View on GitHub
      </a>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-2">
          Latest Commits
        </h2>

        <ul className="space-y-2">
          {commits.map((commit) => (
            <li key={commit.sha} className="border p-3 rounded">
              <p className="font-medium">
                {commit.commit.message}
              </p>
              <p className="text-sm text-gray-500">
                {commit.commit.author.name} —{" "}
                {new Date(
                  commit.commit.author.date
                ).toLocaleDateString()}
              </p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
