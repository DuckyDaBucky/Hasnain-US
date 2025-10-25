import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-12 md:py-20 scroll-mt-24">
      <h2 className="text-center text-3xl sm:text-4xl font-extrabold tracking-tight mb-10 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
        Experience
      </h2>
      <div className="mx-auto max-w-3xl space-y-8">
        {experience.map((item) => (
          <article key={`${item.role}-${item.org}`} className="rounded-xl bg-gray-900/60 backdrop-blur-sm p-6 shadow-md">
            <header className="mb-2">
              <h3 className="text-xl font-semibold text-gray-100">{item.role}</h3>
              <p className="text-gray-400">{item.org} • {item.dates}</p>
            </header>
            <ul className="list-disc pl-5 space-y-1 text-gray-300">
              {item.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
            {item.tech && (
              <div className="mt-4 flex flex-wrap gap-2">
                {item.tech.map((t) => (
                  <span key={t} className="px-3 py-1 rounded-full text-sm bg-gray-700/60 text-gray-200">{t}</span>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}


