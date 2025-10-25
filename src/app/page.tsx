import Hero from '@/components/Hero';
import Mission from '@/components/Mission';
import Projects from '@/components/Projects';
import LinkedInPost from '@/components/LinkedInPost';
import ResumeCTA from '@/components/Resume';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Hero />
      <Mission />
      <Projects />
      <LinkedInPost />
      <ResumeCTA />
      <Contact />
      <Footer />
    </>
  );
}
