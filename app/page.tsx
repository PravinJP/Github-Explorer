import { searchRepositories } from "@/Lib/github";
import RepoList from "@/Components/RepoList";
import SearchBar from "@/Components/SearchBar";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;
  const data = q ? await searchRepositories(q) : null;

  return (
  <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50">

    {/* HERO SECTION */}
    <section className="px-6 pt-20 pb-14">
      <div className="max-w-3xl mx-auto text-center">

        {/* Title */}
        <h1 className="text-6xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          Improva Searcher
        </h1>

        {/* Search Bar */}
        <div className="mt-10">
          <SearchBar />
        </div>

        {/* Subtitle */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800">
            GitHub Repository Searcher
          </h2>
          <p className="mt-2 text-gray-600 text-lg">
            Discover and explore public GitHub repositories with a clean, fast,
            and developer-friendly search experience.
          </p>
        </div>

        {/* Result count */}
        {data && (
          <div className="mt-10">
            <span className="inline-block rounded-full bg-indigo-100 px-6 py-2 text-sm font-semibold text-indigo-700 shadow">
              {data.total_count.toLocaleString()} repositories found
            </span>
          </div>
        )}
      </div>
    </section>

    {/* RESULTS SECTION */}
    <section className="px-6 pb-20">
      <div className="max-w-7xl mx-auto">

        {data ? (
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <RepoList repos={data.items} />
          </div>
        ) : (
          <div className="text-center py-24">
            <div className="text-7xl mb-6">🔍</div>
            <h3 className="text-3xl font-bold text-gray-800 mb-3">
              Start searching GitHub
            </h3>
            <p className="text-gray-500 text-lg max-w-md mx-auto">
              Enter a repository name, topic, or keyword above to explore open-source projects.
            </p>
          </div>
        )}

      </div>
    </section>

  </main>
);

}
