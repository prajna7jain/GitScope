import { useState } from "react";
import Info from "../components/Info"
import RepoInput from "../components/RepoInput"
import RepoResult from "./RepoResult";

export default function Home() {
    const [repoURL, setRepoURL] = useState("");

    return(
        <main className="w-full h-auto flex flex-col justify-center items-center gap-2 p-10">
            <Info />
            <RepoInput  setRepoURL={setRepoURL}/>
            <RepoResult repoURL={repoURL} />
        </main>
    )
}