import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import SkillMatrix from "@/components/SkillMatrix";
import ExperienceLog from "@/components/ExperienceLog";
import Footer from "@/components/Footer";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <main className="min-h-screen max-w-6xl mx-auto px-6 pb-20">
      <Hero />

      <section id="project-manifest" className="py-16 border-t border-border">
        <h2 className="text-3xl font-bold mb-8 text-textPrimary flex items-center gap-3">
          <span className="text-accent">#</span> Project Manifest
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>

      <section id="dependency-matrix" className="py-16 border-t border-border">
        <h2 className="text-3xl font-bold mb-8 text-textPrimary flex items-center gap-3">
          <span className="text-accent">#</span> Dependency Matrix
        </h2>
        <SkillMatrix />
      </section>

      <section id="experience-log" className="py-16 border-t border-border">
        <h2 className="text-3xl font-bold mb-8 text-textPrimary flex items-center gap-3">
          <span className="text-accent">#</span> Experience Log
        </h2>
        <ExperienceLog />
      </section>

      <Footer />
    </main>
  );
}
