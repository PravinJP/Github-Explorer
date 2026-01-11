const BASE_URL = "https://api.github.com";

export async function searchRepositories(query: string) {
  const res = await fetch(
    `${BASE_URL}/search/repositories?q=${encodeURIComponent(query)}`,
    {
      headers: {
        Accept: "application/vnd.github+json",
      },
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch repositories");
  }

  return res.json();
}

export async function getRepository(owner: string, repo: string) {
  const res = await fetch(
    `${BASE_URL}/repos/${owner}/${repo}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch repository");
  }

  return res.json();
}

export async function getCommits(owner: string, repo: string) {
  const res = await fetch(
    `${BASE_URL}/repos/${owner}/${repo}/commits?per_page=5`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch commits");
  }

  return res.json();
}
