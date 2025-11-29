import { systemStatus } from "@/data/system-status";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="border-t border-border mt-20 bg-surface">
            <div className="max-w-6xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-xl font-bold text-textPrimary mb-4">
                            <span className="text-accent">&gt;</span> Initialize Contact
                        </h3>
                        <div className="space-y-4 font-mono text-sm text-textSecondary">
                            <div className="flex items-center gap-3">
                                <Mail className="text-accent" size={20} />
                                <a href={`mailto:${systemStatus.contact.email}`} className="hover:text-textPrimary transition-colors text-lg">
                                    {systemStatus.contact.email}
                                </a>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone className="text-accent" size={20} />
                                <span className="text-lg">{systemStatus.contact.phone}</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <MapPin className="text-accent" size={20} />
                                <span>{systemStatus.contact.location}</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col justify-between">
                        <div>
                            <h3 className="text-xl font-bold text-textPrimary mb-4">
                                <span className="text-accent">&gt;</span> System Links
                            </h3>
                            <div className="flex gap-4">
                                <a
                                    href={systemStatus.links.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-textSecondary hover:text-accent transition-colors"
                                >
                                    <Github size={24} />
                                </a>
                                <a
                                    href={systemStatus.links.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-textSecondary hover:text-accent transition-colors"
                                >
                                    <Linkedin size={24} />
                                </a>
                            </div>
                        </div>
                        <p className="text-xs text-textSecondary font-mono mt-8 md:mt-0">
                            © {new Date().getFullYear()} {systemStatus.name}. All systems nominal.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
