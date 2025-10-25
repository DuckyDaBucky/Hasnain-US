import { missionData } from '@/data/mission';

export default function Mission() {
  return (
    <section id="mission" className="py-20 text-center">
      <div className="max-w-3xl mx-auto space-y-6">
        <div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="mx-auto mt-3 h-px w-24 bg-gradient-to-r from-blue-400/30 via-purple-400/30 to-pink-400/30" />
        </div>
        {missionData.missionStatement.map((paragraph, index) => (
          <p key={index} className="text-lg sm:text-xl leading-relaxed text-gray-300">
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}
