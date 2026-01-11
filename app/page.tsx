import { searchRepositories } from "@/lib/github";
import RepoList from "@/components/RepoList";

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

      <form method="GET" className="mb-6">
        <input
          type="text"
          name="q"
          placeholder="Search repositories..."
          defaultValue={q}
          className="border p-2 w-full rounded"
        />
      </form>

      {data && <RepoList repos={data.items} />}
    </main>
  );
}
