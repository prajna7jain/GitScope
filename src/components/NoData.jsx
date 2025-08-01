export function NoData() {
  return (
    <section className="w-full h-auto flex flex-col items-center justify-center gap-3 sm:gap-5 p-2 sm:p-4 rounded-lg">
      <div id="nodata-icon" className="bg-[#272e36] p-6 sm:p-8 md:p-10 rounded-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-12 h-12 sm:w-14 md:w-16 sm:h-14 md:h-16 text-blue-500 dark:text-blue-400"
        >
          <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
          <path d="M21 3v5h-5" />
          <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
          <path d="M8 16H3v5" />
        </svg>
      </div>

      <div id="Informations" className="text-center">
        <h1 className="text-lg sm:text-xl md:text-2xl font-bold p-1.5 sm:p-2.5">
          No data to display
        </h1>
        <h2 className="text-sm sm:text-base md:text-lg font-semibold text-[#5d7086]">
          Enter a GitHub repository URL and select a time period to analyze
          contributions and pull requests.
        </h2>
      </div>
    </section>
  );
}