import Statistics from "../components/Statistics"
import { NoData } from "../components/NoData"

export default function RepoResult({ repo }) {
    return(
     <main className="border border-[#1f2937] rounded-lg  h-auto w-1/2 p-8 m-8 flex flex-col justify-center items-center gap-10">
       {repo == "" && <NoData />}
       {repo != "" && <Statistics />}
     </main>
    )
}