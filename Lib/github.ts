const GITHUB_API_BASE = "https://api.github.com";


async function githubFetch<T>(endpoint: string): Promise<T> {
  const res = await fetch(`${GITHUB_API_BASE}${endpoint}`, {
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
    },
    next: { revalidate: 60 },
  });

  
  if (res.status === 403) {
    const remaining = res.headers.get("x-ratelimit-remaining");
    const reset = res.headers.get("x-ratelimit-reset");

    if (remaining === "0" && reset) {
      const resetTime = new Date(Number(reset) * 1000);
      throw new Error(
        `GitHub API rate limit exceeded. Try again after ${resetTime.toLocaleTimeString()}`
      );
    }
  }

  
  if (!res.ok) {
    throw new Error(`GitHub API error: ${res.status} ${res.statusText}`);
  }

  return res.json();
}



export function searchRepositories(query: string) {
  return githubFetch(
    `/search/repositories?q=${encodeURIComponent(query)}`
  );
}

export function getRepository(owner: string, repo: string) {
  return githubFetch(
    `/repos/${owner}/${repo}`
  );
}

export function getCommits(owner: string, repo: string) {
  return githubFetch(
    `/repos/${owner}/${repo}/commits?per_page=5`
  );
}
