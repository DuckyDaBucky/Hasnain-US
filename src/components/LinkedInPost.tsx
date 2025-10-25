export default function LinkedInPost() {
  return (
    <section className="py-12 md:py-20 scroll-mt-24">
      <h2 className="text-center text-3xl sm:text-4xl font-extrabold tracking-tight mb-10 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
        My LinkedIn
      </h2>
      <div className="flex justify-center">
        <div className="w-full max-w-xl rounded-xl overflow-hidden shadow-lg bg-gray-900/60 backdrop-blur-sm transition-opacity">
          {/* TODO: move iframe src into /data/socialEmbeds.ts */}
          <iframe
            src="https://www.linkedin.com/embed/feed/update/urn:li:share:7387294306698514432"
            title="LinkedIn Post: Cognizant x Aston Martin F1"
            frameBorder={0}
            allowFullScreen
            className="w-full h-[650px] sm:h-[550px] md:h-[650px]"
          />
        </div>
      </div>
    </section>
  );
}


