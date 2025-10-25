import { socialsData } from "@/data/socials";

export default function Contact() {
  return (
    <section id="contact" className="py-12 md:py-20 text-center">
      <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-10 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
        Get In Touch
      </h2>

      <div className="flex flex-wrap justify-center gap-6">
        {socialsData.map((s) => (
          <a
            key={s.name}
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-lg px-6 py-3 text-sm font-medium text-white shadow-sm transition-transform hover:scale-[1.03]"
            style={{ backgroundColor: s.bg || "#111827" }}
          >
            <s.icon className="h-5 w-5" />
            <span>{s.name}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
