import { useState } from "react";

export default function RepoInput({ setRepoURL }) {
  const [inputValue, setInputValue] = useState("");

  const submit = (event) => {
    event.preventDefault();
    setRepoURL(inputValue);
  };

  return (
    <main className="border border-[#1f2937] rounded-lg h-auto w-full max-w-md sm:max-w-lg md:max-w-xl p-4 sm:p-6 md:p-10 m-2 sm:m-4 md:m-8">
      <h1 className="text-sm sm:text-base md:text-lg mb-1 text-center md:text-left">
        Repository URL or Path
      </h1>
      <form
        className="flex flex-col md:flex-row items-center justify-between w-full gap-2 sm:gap-4 md:gap-10"
        onSubmit={submit}
      >
        <div id="repo-name" className="flex flex-col gap-2 sm:gap-3 md:gap-4 w-full md:w-[30vw]">
          <input
            type="text"
            aria-label="GitHub repository URL"
            className="border border-[#1f2937] p-2 sm:p-3 md:p-4 w-full bg-[#272e36] rounded-lg text-sm sm:text-base md:text-xl truncate"
            placeholder="github.com/owner/repo"
            onChange={(e) => setInputValue(e.target.value)}
          />
        </div>
        <button
          id="statisticsBtn"
          type="submit"
          className="w-full md:w-max h-fit p-2 sm:p-3 md:p-3.5 text-sm sm:text-base md:text-xl font-semibold flex items-center justify-center gap-1 sm:gap-2 md:gap-2 rounded-lg group cursor-pointer bg-blue-500 text-white hover:bg-blue-600 transition-colors"
        >
          <span>Get Statistics</span>
          <i className="fa-solid fa-arrow-right group-hover:translate-x-1 sm:group-hover:translate-x-2 md:group-hover:translate-x-2 transition-all duration-300"></i>
        </button>
      </form>
    </main>
  );
}