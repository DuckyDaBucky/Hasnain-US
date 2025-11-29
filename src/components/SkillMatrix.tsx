import { skills } from "@/data/skills";

export default function SkillMatrix() {
    return (
        <div className="system-card p-6 overflow-x-auto">
            <table className="w-full text-left text-sm">
                <thead>
                    <tr className="border-b border-border text-accent font-mono">
                        <th className="py-3 px-4">Category</th>
                        <th className="py-3 px-4">Skills to Highlight</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-border">
                    {Object.entries(skills).map(([key, value]) => (
                        <tr key={key} className="hover:bg-surfaceHover transition-colors">
                            <td className="py-3 px-4 font-bold capitalize text-textPrimary">
                                {key.replace("_", " ")}
                            </td>
                            <td className="py-3 px-4 text-textSecondary font-mono">
                                {value.join(", ")}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
