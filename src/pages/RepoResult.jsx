import Statistics from "../components/Statistics"

export default function RepoResult({ repo }) {
    return(
        <main className="border border-[#1f2937] rounded-lg  h-auto w-1/2 p-8 m-8 flex flex-col gap-10">
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
                <Statistics />
            </div>
        </main>
    )
}