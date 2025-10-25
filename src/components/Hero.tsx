"use client";

import { missionData } from '@/data/mission';
import { ChevronDown } from 'lucide-react';
import { socialsData } from '@/data/socials';

export default function Hero() {
  const scrollToMission = () => {
    document.getElementById('mission')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-[90vh] flex flex-col items-center justify-center text-center relative">
      <div className="flex-grow flex flex-col justify-center items-center space-y-3">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          {missionData.name}
        </h1>
        <p className="text-lg sm:text-xl text-gray-200">
          {missionData.tagline}
        </p>
        <div className="pt-2 flex flex-wrap justify-center gap-3">
          {socialsData.map((s) => (
            <a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center p-2.5 text-gray-300 hover:text-[#7F8CAA] transition-colors"
              aria-label={s.name}
              title={s.name}
            >
              <s.icon className="h-6 w-6 md:h-7 md:w-7" />
            </a>
          ))}
        </div>
      </div>
      <button
        onClick={scrollToMission}
        className="absolute bottom-10 text-gray-400 animate-pulse hover:text-gray-200 transition-colors"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
}
