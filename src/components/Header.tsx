export default function Header() {
  const linkBase = "text-sm md:text-base text-gray-300 hover:text-[#7F8CAA] transition-colors";

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="relative backdrop-blur supports-[backdrop-filter]:bg-transparent">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,transparent,rgba(11,18,34,0.18)_15%,rgba(11,18,34,0.32)_50%,rgba(11,18,34,0.18)_85%,transparent)]" />
        <nav className="max-w-6xl mx-auto px-6 h-14 md:h-16 flex items-center justify-center">
          <div className="flex items-center gap-6 md:gap-8">
            <a href="#mission" className={linkBase}>About</a>
            <a href="#projects" className={linkBase}>Projects</a>
            <a href="#contact" className={linkBase}>Contact</a>
          </div>
        </nav>
        <div className="mx-auto max-w-7xl px-3">
          <div className="h-px w-full rounded-full bg-[linear-gradient(to_right,rgba(96,165,250,0.5),rgba(168,85,247,0.5),rgba(236,72,153,0.5))]" />
        </div>
      </div>
    </header>
  );
}
