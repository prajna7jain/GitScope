export default function Footer() {
  return (
    <footer className="bg-[#010409] w-full h-auto p-4 sm:p-6 md:p-7 md:pl-[5.5rem] md:pr-[5.5rem] flex flex-col gap-3 sm:gap-4 md:gap-5">
      <div className="flex flex-col md:flex-row justify-around items-center md:items-start gap-4 md:gap-8">
        <div id="logo" className="flex items-center gap-3 md:gap-5">
          <img src="Assests/Icon.svg" alt="Logo" className="w-6 sm:w-7 md:w-8" />
          <h1 className="text-base sm:text-lg md:text-xl font-bold">RepoRadar</h1>
        </div>

        <div id="btn-options" className="flex flex-col md:flex-row items-center gap-4 md:gap-10">
          <div id="links" className="flex flex-wrap justify-center gap-3 md:gap-5 text-base md:text-xl">
            <section id="linkedin" className="flex items-center gap-1 md:gap-2 cursor-pointer hover:text-blue-300">
              <i className="fa-brands fa-linkedin text-sm md:text-base"></i>
              <a href="https://www.linkedin.com/in/ayush-acharya-65943132b/" className="text-sm md:text-lg">
                LinkedIn
              </a>
            </section>
            <section id="twitter" className="flex items-center gap-1 md:gap-2 cursor-pointer hover:text-blue-300">
              <i className="fa-brands fa-x-twitter text-sm md:text-base"></i>
              <a href="https://x.com/ig_ayushacharya" className="text-sm md:text-lg">
                Twitter
              </a>
            </section>
            <section id="github" className="flex items-center gap-1 md:gap-2 cursor-pointer hover:text-blue-300">
              <i className="fa-brands fa-github text-sm md:text-base"></i>
              <a href="https://github.com/ig-ayush" className="text-sm md:text-lg">
                GitHub
              </a>
            </section>
          </div>
          <button className="p-1.5 sm:p-2 rounded-lg flex gap-1 md:gap-2 items-center cursor-pointer bg-blue-500 text-white hover:bg-blue-600 transition-colors">
            <i className="fa-solid fa-star text-sm md:text-lg"></i>
            <span className="text-sm md:text-lg font-semibold">
              <a href="https://github.com/ig-ayush/RepoRadar" target="_blank">
                Star on Github
              </a>
            </span>
          </button>
        </div>
      </div>

      <div className="flex items-center w-full">
        <div className="mt-3 sm:mt-4 md:mt-5 mx-2 sm:mx-3 w-full flex flex-col sm:flex-row justify-around border-t border-gray-700 p-3 sm:p-4 md:p-5 text-center sm:text-left">
          <h1 className="text-xs sm:text-sm md:text-base">
            RepoRadar © 2025 — Powered by open APIs.
          </h1>
          <h1 className="text-xs sm:text-sm md:text-base">
            Built with using React & Tailwind
          </h1>
        </div>
      </div>
    </footer>
  );
}