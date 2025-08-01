export default function Footer() {
    return(
         <main className="bg-[#010409] w-full h-auto p-7 pl-[5.5rem] pr-[5.5rem] flex flex-col gap-5">
           <div className="flex justify-around">
             <div id="logo" className="flex items-center gap-5 ">
                <img src="Assests/Icon.svg" alt="Logo" className="w-8" />
                <h1 className="text-xl font-bold">RepoRadar</h1>
            </div>

            <div id="btn-options" className="flex items-center gap-15">
                <div id="links" className="flex text-xl gap-5">
                    <section id="linkedin" className="flex items-center gap-2 cursor-pointer hover:text-blue-300">
                        <i className="fa-brands fa-linkedin"></i>
                        <a href="https://www.linkedin.com/in/ayush-acharya-65943132b/" className="text-lg">LinkedIn</a>
                    </section>
                    <section id="twitter" className="flex items-center gap-2 cursor-pointer hover:text-blue-300">
                        <i className="fa-brands fa-x-twitter"></i>
                        <a href="https://x.com/ig_ayushacharya" className="text-lg">Twitter</a>
                    </section>
                    <section id="github" className="flex items-center gap-2 cursor-pointer hover:text-blue-300">
                        <i className="fa-brands fa-github"></i>
                        <a href="https://github.com/ig-ayush" className="text-lg">GitHub</a>
                    </section>
                </div>
                <button className="p-2 rounded-lg flex gap-2 items-center cursor-pointer">
                    <i className="fa-solid fa-star text-lg"></i>
                    <span className="text-lg font-semibold"><a href="https://github.com/ig-ayush/RepoRadar" target="_blank">Star on Github</a></span>
                </button>
            </div>

           </div>

           <div className="flex items-center w-full">
            <div className="mt-5 m-3 w-full flex justify-around border-t-1 p-5">
                <h1>RepoRadar © 2025 — Powered by open APIs.</h1>
                <h1>Built with using React & Tailwind</h1>
            </div>
           </div>
        </main>
    )
}