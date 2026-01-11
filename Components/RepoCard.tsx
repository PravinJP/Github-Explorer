import Link from "next/link";
import { GitHubRepo } from "@/types/github";

interface RepoCardProps {
  repo: GitHubRepo;
}

export default function RepoCard({ repo }: RepoCardProps) {
  return (
    <Link href={`/repo/${repo.owner.login}/${repo.name}`}>
      <div className="border rounded p-4 hover:bg-gray-50 transition cursor-pointer">
        <h2 className="text-xl font-semibold">
          {repo.owner.login}/{repo.name}
        </h2>

        {repo.description && (
          <p className="text-gray-600 mt-1">
            {repo.description}
          </p>
        )}

        <div className="flex gap-4 text-sm text-gray-500 mt-2">
          <span>⭐ {repo.stargazers_count}</span>
          <span>🍴 {repo.forks_count}</span>
          {repo.language && <span>🧠 {repo.language}</span>}
        </div>
      </div>
    </Link>
  );
}
