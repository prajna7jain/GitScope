import Statistics from "../components/Statistics"
import { NoData } from "../components/NoData"
import Error from "../components/Error"

export default function RepoResult({ repoURL }) {
    return(
     <main className="border border-[#1f2937] rounded-lg  h-auto w-1/2 p-8 m-8 flex flex-col justify-center items-center gap-10">
       {repoURL == "" && <NoData />}
       {repoURL != "" && <Statistics repoURL={ repoURL }/>}
     </main>
    )
}