import { socialEmbeds } from "@/data/socialEmbeds";

export default function LinkedInCard() {
  const href = socialEmbeds.linkedinWidget ? undefined : "https://www.linkedin.com/in/hasnain-niazi-a51bb2349/";
  return (
    <section id="linkedin" className="py-12 md:py-20 scroll-mt-24">
      <h2 className="text-center text-3xl sm:text-4xl font-extrabold tracking-tight mb-10 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
        LinkedIn Highlights
      </h2>
      <div className="mx-auto max-w-3xl rounded-xl bg-gray-900/60 backdrop-blur-sm p-6 shadow-md text-center">
        <p className="text-gray-300 mb-4">Follow for updates, posts, and project threads.</p>
        <a
          href={href || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-medium text-white hover:opacity-95"
          style={{
            background:
              "linear-gradient(90deg, rgba(59,130,246,0.85), rgba(168,85,247,0.85), rgba(236,72,153,0.85))",
          }}
        >
          View on LinkedIn
        </a>
      </div>
    </section>
  );
}


