import { useState } from "react";
import Info from "../components/Info"
import RepoInput from "../components/RepoInput"
import RepoResult from "./RepoResult";

export default function Home() {
    const [repo, setRepo] = useState("");

    return(
        <main className="w-full h-auto flex flex-col justify-center items-center gap-2 p-10">
            <Info />
            <RepoInput setRepo={setRepo}/>
            <RepoResult repo={repo} setRepo={setRepo}/>
        </main>
    )
}