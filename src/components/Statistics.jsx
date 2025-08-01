import { useEffect, useState } from "react";
import { RepoData, userData, PullRs, contribution } from "../services/RepoData.js";

export default function Statistics({ repoURL, setError }) {
  const [repoData, setRepoData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepoData = async () => {
      try {
        setLoading(true);
        const [owner, repo] = new URL(repoURL).pathname.slice(1).split("/");
        const Data = await RepoData(owner, repo);
        const user = await userData(owner);
        const pulls = await PullRs(owner, repo);

        const user_name = Data.full_name.split("/")[0];
        const mergePR = pulls.filter((m) => m.merged_at).length;
        const openPR = pulls.filter((o) => o.state === "open").length;
        const closePR = pulls.filter((c) => c.state === "closed").length;
        const totalContribution = await contribution(owner, repo);

        setRepoData({
          repo: Data,
          user: user_name,
          user_profile: user.avatar_url,
          PR: pulls.length,
          mergePR,
          openPR,
          closePR,
          totalContribution
        });

        setError("");
        setLoading(false);
      } catch (err) {
        const errMsg = "⚠️ Invalid or Not Found Repository URL";
        setError(errMsg);
        console.error(err);
        setLoading(false);
      }
    };
    fetchRepoData();
  }, [repoURL]);

  if (loading)
    return <p className="text-gray-500 text-xs sm:text-sm md:text-base">Loading repository data...</p>;

  return (
    <section className="border border-[#1f2937] rounded-lg h-auto w-full max-w-4xl p-3 sm:p-4 md:p-8 m-2 sm:m-4 md:m-6 flex flex-col gap-3 sm:gap-4 md:gap-6">
      <div id="heading" className="flex flex-row justify-between items-center gap-2 md:gap-4">
        <div id="left-side" className="flex items-center gap-2 md:gap-3">
          <img src="Assests/contribution.svg" alt="Contribution" className="w-5 md:w-8" />
          <h1 className="text-sm sm:text-base md:text-xl font-bold">Contributors</h1>
        </div>
      </div>

      <div id="repo-result" className="w-full">
        <div className="bg-[#272e36] w-full h-auto flex flex-row p-3 sm:p-4 md:p-8 gap-3 md:gap-6 rounded-lg">
          <div id="profile-pic" className="w-12 h-12 md:w-24 md:h-24 flex-shrink-0">
            <img
              src={repoData.user_profile}
              alt="Owner Profile Pic"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <div id="all-stats" className="flex flex-col gap-2 md:gap-5 w-full">
            <div id="heading" className="flex flex-row items-center gap-2 md:gap-4">
              <h3 className="font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 text-xs sm:text-sm md:text-lg truncate max-w-[120px] sm:max-w-[150px] md:max-w-[200px]">
                {repoData.user}
              </h3>
              <span className="inline-flex items-center px-1 py-0.5 md:px-2 md:py-1 rounded text-xs md:text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 border border-blue-200 dark:border-blue-800 whitespace-nowrap">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-3 h-3 md:w-4 md:h-4 mr-1"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
                Contributor
              </span>
            </div>

            <div id="stats" className="w-full">
              <div className="grid grid-cols-2 gap-2 md:gap-4">
                <div id="pull-req" className="flex items-center gap-1 md:gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#2563eb"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-3 h-3 md:w-5 md:h-5"
                  >
                    <circle cx="18" cy="18" r="3"></circle>
                    <circle cx="6" cy="6" r="3"></circle>
                    <path d="M13 6h3a2 2 0 0 1 2 2v7"></path>
                    <line x1="6" x2="6" y1="9" y2="21"></line>
                  </svg>
                  <span className="text-xs md:text-base">{repoData.PR} PRs</span>
                </div>
                <div id="merge" className="flex items-center gap-1 md:gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#16a34a"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-3 h-3 md:w-5 md:h-5 text-green-600"
                  >
                    <circle cx="18" cy="18" r="3"></circle>
                    <circle cx="6" cy="6" r="3"></circle>
                    <path d="M6 21V9a9 9 0 0 0 9 9"></path>
                  </svg>
                  <span className="text-xs md:text-base">{repoData.mergePR} merged</span>
                </div>
                <div id="open" className="flex items-center gap-1 md:gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-3 h-3 md:w-5 md:h-5 text-yellow-600"
                  >
                    <circle cx="18" cy="18" r="3"></circle>
                    <circle cx="6" cy="6" r="3"></circle>
                    <path d="M13 6h3a2 2 0 0 1 2 2v7"></path>
                    <line x1="6" x2="6" y1="9" y2="21"></line>
                  </svg>
                  <span className="text-xs md:text-base">{repoData.openPR} Open</span>
                </div>
                <div id="closed" className="flex items-center gap-1 md:gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-3 h-3 md:w-5 md:h-5 text-red-600"
                  >
                    <circle cx="6" cy="6" r="3"></circle>
                    <path d="M6 9v12"></path>
                    <path d="m21 3-6 6"></path>
                    <path d="m21 9-6-6"></path>
                    <path d="M18 11.5V15"></path>
                    <circle cx="18" cy="18" r="3"></circle>
                  </svg>
                  <span className="text-xs md:text-base">{repoData.closePR} Close</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="total-contributors" className="w-full text-center">
        <h1 className="px-3 py-1.5 rounded-lg bg-[#1f2937] text-xs md:text-base font-semibold text-white">
          Total Contributors: {repoData.totalContribution}
        </h1>
      </div>
    </section>
  );
}