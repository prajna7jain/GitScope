export async function RepoData(owner, repo) {
  const response = await fetch(`http://api.github.com/repos/${owner}/${repo}`);
  const repoData = await response.json();
  return repoData;
}

export async function userData(owner) {
  const userRes = await fetch(`https://api.github.com/users/${owner}`);
  const user = await userRes.json();
  return user;
}

export async function PullRs(owner, repo) {
    const response = await fetch(`https://api.github.com/repos/${owner}/${repo}/pulls?state=all`);
    const PR = response.json();
    return PR;
}