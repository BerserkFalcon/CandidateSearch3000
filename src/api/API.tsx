const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

export async function searchGithub() {
  const res = await fetch('https://api.github.com/search/users?q=type:user', {
    headers: {
      Authorization: `Bearer ${GITHUB_TOKEN}`,
    },
  });
  const data = await res.json();
  return data.items || [];
}

export async function searchGithubUser(username: string) {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`, {
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
      },
    });
    const data = await response.json();
    console.log(response.headers.get('X-RateLimit-Remaining'));
    if (!response.ok) {
      throw new Error('invalid API response, check the network tab');
    }
    return data;
  } catch (err) {
    return {};
  }
}

