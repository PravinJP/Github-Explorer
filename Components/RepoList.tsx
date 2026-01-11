import RepoCard from "./RepoCard";
import { GitHubRepo } from "@/types/github";

interface RepoListProps {
  repos: GitHubRepo[];
}

export default function RepoList({ repos }: RepoListProps) {
  if (repos.length === 0) {
    return (
      <p className="text-center text-gray-500 col-span-full">
        No repositories found.
      </p>
    );
  }

  return (
    <>
      {repos.map((repo) => (
        <RepoCard key={repo.id} repo={repo} />
      ))}
    </>
  );
}
