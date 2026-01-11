import { searchRepositories } from "@/lib/github";
import RepoList from "@/components/RepoList";
import SearchBar from "@/Components/SearchBar";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;

  const data = q ? await searchRepositories(q) : null;

  return (
    <main className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">
        GitHub Repository Explorer
      </h1>

       <div className="mb-6">
        <SearchBar />
      </div>
      

      {data && <RepoList repos={data.items} />}
    </main>
  );
}
