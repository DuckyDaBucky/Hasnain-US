import { systemStatus } from "@/data/system-status";
import { Github, Linkedin, FileText, Mail, Phone, MapPin } from "lucide-react";
import SystemStatusWidget from "./SystemStatusWidget";

export default function Hero() {
  return (
    <section id="system-status" className="pt-32 pb-16">
      <div className="space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          <span className="text-accent">&gt;</span> {systemStatus.name}
        </h1>
        <p className="text-xl md:text-2xl text-textSecondary font-mono border-l-4 border-accent pl-4">
          {systemStatus.role}
        </p>

        <div className="flex flex-wrap gap-6 text-sm text-textSecondary font-mono">
          <div className="flex items-center gap-2">
            <Mail size={16} className="text-accent" />
            <a href={`mailto:${systemStatus.contact.email}`} className="hover:text-textPrimary transition-colors">
              {systemStatus.contact.email}
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Phone size={16} className="text-accent" />
            <span>{systemStatus.contact.phone}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={16} className="text-accent" />
            <span>{systemStatus.contact.location}</span>
          </div>
        </div>

        <SystemStatusWidget />

        <div className="flex gap-4 pt-4">
          <a
            href={systemStatus.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 system-border hover:bg-surfaceHover transition-colors text-sm font-mono"
          >
            <Github size={16} />
            <span>GitHub</span>
          </a>
          <a
            href={systemStatus.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 system-border hover:bg-surfaceHover transition-colors text-sm font-mono"
          >
            <Linkedin size={16} />
            <span>LinkedIn</span>
          </a>
          <a
            href={systemStatus.links.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-accent text-background font-bold hover:bg-opacity-90 transition-colors text-sm font-mono"
          >
            <FileText size={16} />
            <span>Download Resume PDF</span>
          </a>
        </div>
      </div>
    </section>
  );
}
