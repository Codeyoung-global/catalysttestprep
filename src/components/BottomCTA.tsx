export default function BottomCTA() {
  return (
    <section className="bg-surface-dark" style={{ padding: "var(--section-gap) 0" }}>
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
          Ready to Add 150+ Points to Your SAT Score?
        </h2>
        <a
          href="#hero-form"
          className="inline-block rounded-lg bg-green-primary px-10 py-4 text-lg font-bold text-white transition-colors hover:bg-green-dark"
        >
          Start My Free SAT Prep Trial &rarr;
        </a>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-gray-400">
          <span className="flex items-center gap-1">
            <svg className="h-4 w-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Money-back guarantee
          </span>
          <span className="flex items-center gap-1">
            <svg className="h-4 w-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Free diagnostic test
          </span>
          <span className="flex items-center gap-1">
            <svg className="h-4 w-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            No commitment
          </span>
        </div>
      </div>
    </section>
  );
}
