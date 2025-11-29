import { experience } from "@/data/experience";

export default function ExperienceLog() {
    return (
        <div className="space-y-6">
            {experience.map((job, index) => (
                <div key={index} className="border-l-2 border-border pl-6 relative">
                    <div className="absolute -left-[5px] top-0 h-2.5 w-2.5 rounded-full bg-accent" />
                    <h3 className="text-lg font-bold text-textPrimary">
                        {job.company} <span className="text-accent">|</span> {job.role}
                    </h3>
                    <p className="text-sm font-mono text-textSecondary mb-4">{job.period}</p>
                    <ul className="list-disc list-inside space-y-2 text-sm text-textSecondary">
                        {job.points.map((point, i) => (
                            <li key={i}>
                                <span className="text-textPrimary">{point.split(" with ")[0]}</span>
                                {point.includes(" with ") && ` with ${point.split(" with ")[1]}`}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}
