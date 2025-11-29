import { systemStatus } from "@/data/system-status";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between font-mono text-sm">
        <div className="flex items-center gap-4">
          <span className="font-bold text-accent">{systemStatus.name}</span>
          <span className="text-textSecondary hidden sm:inline">|</span>
          <span className="text-textSecondary hidden sm:inline">{systemStatus.domain}</span>
        </div>
        <nav className="flex items-center gap-6">
          <a href="#system-status" className="hover:text-accent transition-colors">System Status</a>
          <a href="#project-manifest" className="hover:text-accent transition-colors">Project Manifest</a>
          <a href="#experience-log" className="hover:text-accent transition-colors">Experience Log</a>
        </nav>
      </div>
    </header>
  );
}
