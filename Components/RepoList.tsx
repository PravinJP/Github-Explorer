import RepoCard from "./RepoCard";
import { GitHubRepo } from "@/types/github";

interface RepoListProps {
  repos: GitHubRepo[];
}

export default function RepoList({ repos }: RepoListProps) {
  if (repos.length === 0) {
    return (
      <p className="text-gray-500">
        No repositories found.
      </p>
    );
  }

  return (
    <div className="space-y-4">
      {repos.map((repo) => (
        <RepoCard key={repo.id} repo={repo} />
      ))}
    </div>
  );
}
