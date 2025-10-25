import { education } from "@/data/education";

export default function Education() {
  return (
    <section id="education" className="py-12 md:py-20 scroll-mt-24">
      <h2 className="text-center text-3xl sm:text-4xl font-extrabold tracking-tight mb-10 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
        Education
      </h2>
      <div className="mx-auto max-w-3xl space-y-6">
        {education.map((e) => (
          <div key={e.degree} className="rounded-xl bg-gray-900/60 backdrop-blur-sm p-6 shadow-md">
            <h3 className="text-xl font-semibold text-gray-100">{e.degree}</h3>
            <p className="text-gray-300">{e.school}</p>
            <p className="text-gray-400">{e.dates} • {e.focus}</p>
          </div>
        ))}
      </div>
    </section>
  );
}


