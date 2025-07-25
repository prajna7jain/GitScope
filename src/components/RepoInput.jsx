export default function RepoInput({ setRepo }) {
   
    const submit = (event) =>{
        event.preventDefault();
    }
    
    return (
        <main className="border border-[#1f2937] rounded-lg  h-auto p-10 m-8">
            <h1 className="text-lg mb-1">Repository URL or Path</h1>
            <form className="flex items-center justify-around w-full gap-10" onSubmit={submit}>
                <div id="repo-name" className="flex flex-col gap-4">
                    <input type="text" className="border border-[#1f2937] p-4 w-[30vw] bg-[#272e36] rounded-lg text-xl" 
                    placeholder="github.com/owner/repo"
                    onChange={(e)=> setRepo(e.target.value)}
                    required
                    />
                </div>
                <button id="statisticsBtn" type="submit" className="w-max h-fit p-3.5 text-xl font-semibold flex items-center gap-2 rounded-lg group cursor-pointer">
                    <span>Get Statistics</span>
                    <i className="fa-solid fa-arrow-right group-hover:translate-x-2 transition-all duration-300"></i>
                </button>
            </form>            
        </main>
    )
}