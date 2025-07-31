export default function Statistics() 
{
    return (
           <main className="border border-[#1f2937] rounded-lg  h-auto w-full p-8 m-8 flex flex-col gap-10">
            <div id="heading" className="flex justify-between">
               <div id="left-side" className="flex gap-3 items-center">
                 <img src="Assests/contribution.svg" alt="Contribution" />
                <h1 className="text-lg font-bold">Contributors</h1>
               </div>
               <div id="right-side" className="">
                    <h1 className="p-2 rounded-lg bg-[#272e36]">Total contributors: </h1>
               </div>
            </div> 

            <div id="repo-result" className="">
                 <main className="bg-[#272e36] w-fit h-auto flex p-10 gap-10 rounded-lg">
            <div id="profile-pic" className="w-20 h-20">
                <img src="Assests/image.jpg" alt="Owner Profile Pic" className="w-full h-full rounded-full object-cover"/>
            </div>
            <div id="all-stats" className="flex flex-col gap-5">
                <div id="heading" className="flex gap-6">
                    <h3 class="font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">ig-ayush</h3>
                <span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 border border-blue-200 dark:border-blue-800"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users w-3 h-3 mr-1"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>Contributor</span>
                </div>

                <div id="stats">
                    <div className="grid grid-cols-2 grid-rows-2 gap-4">
                        <div id="pull-req" className="flex items-center gap-2">
                           <svg xmlns="http://www.w3.org/2000/svg"
                            width="24" height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#2563eb"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="w-4 h-4">
                            <circle cx="18" cy="18" r="3"></circle>
                            <circle cx="6" cy="6" r="3"></circle>
                            <path d="M13 6h3a2 2 0 0 1 2 2v7"></path>
                            <line x1="6" x2="6" y1="9" y2="21"></line>
                            </svg>
                            <span>5 PRs</span>
                        </div>
                        <div id="merge" className="flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                 width="24" height="24"
                                 viewBox="0 0 24 24"
                                 fill="none"
                                 stroke="#16a34a"
                                 stroke-width="2"
                                 stroke-linecap="round"
                                 stroke-linejoin="round"
                                 class="w-4 h-4 text-green-600">
                              <circle cx="18" cy="18" r="3"></circle>
                              <circle cx="6" cy="6" r="3"></circle>
                              <path d="M6 21V9a9 9 0 0 0 9 9"></path>
                            </svg>
                            
                            <span>5 PRs</span>
                        </div>
                        <div id="open" className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-git-pull-request w-4 h-4 text-yellow-600"><circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M13 6h3a2 2 0 0 1 2 2v7"></path><line x1="6" x2="6" y1="9" y2="21"></line></svg>
                            <span>5 PRs</span>
                        </div>
                        <div id="closed" className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-git-pull-request-closed w-4 h-4 text-red-600"><circle cx="6" cy="6" r="3"></circle><path d="M6 9v12"></path><path d="m21 3-6 6"></path><path d="m21 9-6-6"></path><path d="M18 11.5V15"></path><circle cx="18" cy="18" r="3"></circle></svg>
                            <span>5 PRs</span>
                        </div>
                    </div>
                </div>
            </div>
        </main>
            </div>
        </main>
    )
}