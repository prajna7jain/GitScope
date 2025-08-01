export default function Info() {
  return (
    <section className="flex flex-col gap-3 sm:gap-5 w-full max-w-2xl text-center p-2 sm:p-4">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold">
        RepoRadar
      </h1>
      <h2 className="text-base sm:text-lg md:text-xl p-2 sm:p-3">
        Analyze GitHub repository contributions to discover active GSoC participants and track their pull request activity across projects.
      </h2>
    </section>
  );
}