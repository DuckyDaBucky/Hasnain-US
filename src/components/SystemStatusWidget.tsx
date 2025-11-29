import { systemStatus } from "@/data/system-status";

export default function SystemStatusWidget() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
            {systemStatus.metrics.map((metric, index) => (
                <a
                    key={index}
                    href={metric.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="system-card p-4 flex items-center gap-3 hover:scale-[1.02] transition-transform cursor-pointer group"
                >
                    <div className="h-2 w-2 rounded-full bg-accent animate-pulse group-hover:bg-highlight" />
                    <div>
                        <p className="text-sm font-bold text-accent group-hover:text-highlight transition-colors">{metric.label}</p>
                        <p className="text-xs text-textSecondary font-mono">{metric.event}</p>
                    </div>
                </a>
            ))}
        </div>
    );
}
