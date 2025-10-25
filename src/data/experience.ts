export type ExperienceItem = {
  role: string;
  org: string;
  dates: string;
  bullets: string[];
  tech?: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: "Full-Stack Developer",
    org: "Independent",
    dates: "2023 — Present",
    bullets: [
      "Built performant web apps with Next.js, TypeScript, and TailwindCSS.",
      "Designed scalable backend services and integrated AI/ML workflows.",
      "Collaborated on product design with a focus on usability and reliability.",
    ],
    tech: ["Next.js", "TypeScript", "TailwindCSS", "Node.js"],
  },
];


