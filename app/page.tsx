import { searchRepositories } from "@/Lib/github";
import RepoList from "@/Components/RepoList";

export default async function Home({
  searchParams,
}: {
  searchParams: { q?: string };
}) {
  const query = searchParams.q;

  const data = query ? await searchRepositories(query) : null;

  return (
    <main className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">
        GitHub Repository Explorer
      </h1>

      <form className="mb-6">
        <input
          name="q"
          placeholder="Search repositories..."
          className="border p-2 w-full rounded"
          defaultValue={query}
        />
      </form>

      {data && <RepoList repos={data.items} />}
    </main>
  );
}
