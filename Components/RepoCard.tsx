import Link from "next/link";
import { GitHubRepo } from "@/types/github";

interface RepoCardProps {
  repo: GitHubRepo;
}

export default function RepoCard({ repo }: RepoCardProps) {
  return (
    <Link href={`/repo/${repo.owner.login}/${repo.name}`}>
      <div className="h-full bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-lg transition-all cursor-pointer flex flex-col">

        
        <h2 className="text-lg font-semibold text-blue-600 mb-2 line-clamp-1">
          {repo.owner.login}/{repo.name}
        </h2>

        
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {repo.description || "No description provided."}
        </p>

        
        <div className="flex-grow" />

        
        <div className="flex flex-wrap gap-4 text-sm text-gray-500">
          <span>⭐ {repo.stargazers_count}</span>
          <span>🍴 {repo.forks_count}</span>
          {repo.language && <span>🧠 {repo.language}</span>}
        </div>
      </div>
    </Link>
  );
}
