export default function Error({ error }) {
  return (
    <section className="w-full max-w-4xl p-3 sm:p-4 md:p-6 text-center">
      <p className="text-sm sm:text-base md:text-xl text-red-600 font-semibold truncate">
        {error}
      </p>
    </section>
  );
}