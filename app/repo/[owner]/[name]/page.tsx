import { getRepository, getCommits } from "@/Lib/github";
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
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50 px-6 py-16">
      <div className="max-w-5xl mx-auto">

        {/* Repo Header Card */}
        <div className="bg-white rounded-2xl shadow p-8 mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {repo.owner.login}/{repo.name}
          </h1>

          {repo.description && (
            <p className="text-gray-600 mb-6">
              {repo.description}
            </p>
          )}

          {/* Stats */}
          <div className="flex flex-wrap gap-6 text-sm text-gray-500 mb-6">
            <span>⭐ {repo.stargazers_count} stars</span>
            <span>🍴 {repo.forks_count} forks</span>
            <span>🐞 {repo.open_issues_count} open issues</span>
            {repo.language && <span>🧠 {repo.language}</span>}
            <span>🌿 {repo.default_branch}</span>
            <span>
              🕒 {new Date(repo.updated_at).toLocaleDateString()}
            </span>
          </div>

          <a
            href={repo.html_url}
            target="_blank"
            className="inline-block text-indigo-600 font-medium hover:underline"
          >
            View on GitHub →
          </a>
        </div>

        {/* Commits Section */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Latest Commits
          </h2>

          <div className="space-y-4">
            {commits.map((commit) => (
              <div
                key={commit.sha}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-5"
              >
                <p className="font-medium text-gray-900 mb-2 line-clamp-2">
                  {commit.commit.message}
                </p>

                <div className="text-sm text-gray-500 flex flex-wrap gap-4">
                  <span>👤 {commit.commit.author.name}</span>
                  <span>
                    🕒{" "}
                    {new Date(
                      commit.commit.author.date
                    ).toLocaleDateString()}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}
