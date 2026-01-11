"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <main className="p-6 max-w-4xl mx-auto">
      <h2 className="text-xl font-semibold text-red-600">
        Something went wrong
      </h2>

      <p className="text-gray-600 mt-2">
        Failed to load repository details. Please try again.
      </p>

      <button
        onClick={() => reset()}
        className="mt-4 px-4 py-2 bg-black text-white rounded"
      >
        Retry
      </button>
    </main>
  );
}
