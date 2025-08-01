import { useState, useEffect } from "react";
import Statistics from "../components/Statistics";
import { NoData } from "../components/NoData";
import Error from "../components/Error";

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

  return (
    <section className="border border-[#1f2937] rounded-lg h-auto w-full sm:w-auto max-w-2xl p-4 sm:p-6 md:p-8 m-2 sm:m-4 md:m-8 flex flex-col justify-center items-center gap-4 sm:gap-6 md:gap-10">
      {showNoData && <NoData />}
      {showStats && <Statistics repoURL={repoURL} setError={setError} />}
      {showError && <Error error={error} />}
    </section>
  );
}