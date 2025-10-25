import { projectsData } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-12 md:py-20">
      <h2 className="text-center text-3xl sm:text-4xl font-extrabold tracking-tight mb-10 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
        Featured Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projectsData.map((project, idx) => (
          <article
            key={idx}
            className="bg-gradient-to-b from-gray-800/80 to-gray-900/80 rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow will-change-transform transform-gpu hover:-translate-y-1 flex flex-col min-h-[260px]"
          >
            <header className="mb-3">
              <h3 className="text-2xl font-semibold text-gray-100">
                {project.title}
              </h3>
            </header>

            <p className="text-gray-300 leading-relaxed mb-6">
              {project.description}
            </p>

            <div className="mt-auto flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-full text-sm bg-gray-700/60 text-gray-200"
                >
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
