"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function SearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const initialQuery = searchParams.get("q") || "";
  const [query, setQuery] = useState(initialQuery);

  useEffect(() => {
   
    const timer = setTimeout(() => {
      if (query.trim()) {
        router.push(`/?q=${query}`);
      } else {
        router.push(`/`);
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
      className="border p-2 w-full rounded"
    />
  );
}
