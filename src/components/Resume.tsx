export default function ResumeCTA() {
  return (
    <section id="resume" className="py-12 md:py-20 scroll-mt-24">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Resume
        </h2>
        <p className="text-gray-400 mb-8">View my full resume in a dedicated viewer page.</p>
        <a
          href="/Hasnain_Resume_2025.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-medium text-white hover:opacity-95 shadow-md"
          style={{
            background:
              "linear-gradient(90deg, rgba(59,130,246,0.85), rgba(168,85,247,0.85), rgba(236,72,153,0.85))",
          }}
        >
          View Resume
        </a>
      </div>
    </section>
  );
}


