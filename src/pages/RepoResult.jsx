import { useState, useEffect } from "react";
import Statistics from "../components/Statistics"
import { NoData } from "../components/NoData"
import Error from "../components/Error"

export default function RepoResult({ repoURL }) {
  const [error, setError] = useState("");

    useEffect(() => {
      if (repoURL !== "") {
        setError("");
      }
    }, [repoURL]);

    const showNoData = repoURL === "";
    const showError = error !== "";
    const showStats = !showNoData && !showError;

    return(
     <main className="border border-[#1f2937] rounded-lg  h-auto w-1/2 p-8 m-8 flex flex-col justify-center items-center gap-10">
       {showNoData && <NoData />}
       {showStats &&  <Statistics repoURL={ repoURL } setError={setError}/>}
       {showError != "" && <Error error={error}/>}
     </main>
    )
}