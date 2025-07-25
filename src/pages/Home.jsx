import Info from "../components/Info"
import RepoInput from "../components/RepoInput"

export default function Home() {
    return(
        <main className="w-full h-auto flex flex-col justify-center items-center gap-2 p-10">
            <Info />
            <RepoInput />
        </main>
    )
}