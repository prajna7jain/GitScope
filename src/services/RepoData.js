export async function RepoData(owner, repo) {
  const response = await fetch(`http://localhost:8000/api/repo/${owner}/${repo}`);
  const repoData = await response.json();
  return repoData;
}

export async function userData(owner) {
  const userRes = await fetch(`http://localhost:8000/api/user/${owner}`);
  const user = await userRes.json();
  return user;
}

export async function PullRs(owner, repo) {
    const response = await fetch(`http://localhost:8000/api/repo/${owner}/${repo}/pulls?state=all`);
    const PR = response.json();
    return PR;
}

export async function contribution(owner, repo) {
  const reponse = await fetch(`http://localhost:8000/api/repo/${owner}/${repo}/contributors`);
  const contributions = await reponse.json();
  const totalContribution = contributions.reduce((sum, user) => sum + user.contributions, 0);

  return totalContribution;
}