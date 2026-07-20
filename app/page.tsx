'use client';

import { Navbar } from '@/components/navbar';
import { Loader } from '@/components/loader';
import { SmoothScroll } from '@/components/smooth-scroll';
import { GridBackground, ScrollProgress } from '@/components/background';
import { Hero } from '@/components/sections/hero';
import { About } from '@/components/sections/about';
import { Skills } from '@/components/sections/skills';
import { Experience } from '@/components/sections/experience';
import { Projects } from '@/components/sections/projects';
import { Services } from '@/components/sections/services';
import { Contact } from '@/components/sections/contact';
import { Footer } from '@/components/sections/footer';

export default function Home() {
  return (
    <SmoothScroll>
      <Loader />
      <ScrollProgress />
      <GridBackground />
      <Navbar />
      <main className="relative">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Services />
        <Contact />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
