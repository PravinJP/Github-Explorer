"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function SearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const initialQuery = searchParams.get("q") || "";
  const [query, setQuery] = useState(initialQuery);

  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    const timer = setTimeout(() => {
      if (query.trim().length === 0) {
      
        router.push("/");
      } else {
        
        router.push(`/?q=${query}`);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [query, router]);

  return (
    <input
      type="text"
      placeholder="Search repositories..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      className="w-full rounded-xl border border-gray-300 px-4 py-3 text-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
    />
  );
}
