import { ExternalLink, Github } from "lucide-react";

interface ProjectProps {
    project: {
        title: string;
        coreFunction?: string;
        technicalImpact?: string;
        productThinking?: string;
        leadership?: string;
        mlPipeline?: string;
        embedded?: string;
        implementation?: string;
        stack: string[];
        links: {
            demo: string;
            repo: string;
        };
    };
}

export default function ProjectCard({ project }: ProjectProps) {
    const renderContent = (label: string, content: string) => (
        <p>
            <strong className="text-accent">{label}:</strong>{" "}
            <span dangerouslySetInnerHTML={{ __html: content }} />
        </p>
    );

    return (
        <div className="system-card p-6 flex flex-col h-full">
            <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-textPrimary">{project.title}</h3>
                <div className="flex gap-3">
                    <a
                        href={project.links.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-textSecondary hover:text-accent transition-colors"
                        aria-label="GitHub Repo"
                    >
                        <Github size={20} />
                    </a>
                </div>
            </div>

            <div className="flex-grow space-y-3 text-sm text-textSecondary mb-6">
                {project.coreFunction && renderContent("Core Function", project.coreFunction)}
                {project.technicalImpact && renderContent("Technical Impact", project.technicalImpact)}
                {project.productThinking && renderContent("Product Thinking", project.productThinking)}
                {project.leadership && renderContent("Leadership/Collaboration", project.leadership)}
                {project.mlPipeline && renderContent("ML/Data Pipeline", project.mlPipeline)}
                {project.embedded && renderContent("Embedded/Hardware", project.embedded)}
                {project.implementation && renderContent("Implementation", project.implementation)}
            </div>

            <div className="flex flex-col gap-4 mt-auto">
                <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                        <span key={tech} className="px-2 py-1 text-xs font-mono border border-accent/50 rounded text-accent bg-surface">
                            {tech}
                        </span>
                    ))}
                </div>

                <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-2 bg-surface hover:bg-surfaceHover border border-accent/50 hover:border-accent transition-all text-sm font-mono text-accent w-full"
                >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                </a>
            </div>
        </div>
    );
}
