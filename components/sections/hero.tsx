'use client';

import { motion } from 'framer-motion';
import { Download, Github, Linkedin, Mail, Code, Rocket, Star, ArrowUpRight } from 'lucide-react';
import { SOCIAL_LINKS } from '@/lib/data';
import { MagneticButton } from '@/components/magnetic-button';
import { 
  JavaScriptIcon, TypeScriptIcon, ReactIcon, NodeIcon, PythonIcon, NextjsIcon, TailwindIcon, MongoIcon, PostgresIcon, AwsIcon, DockerIcon, GitIcon
} from '@/components/brand-icons';

const HERO_TECH = [
  { name: 'JavaScript', icon: JavaScriptIcon, iconPath: '/icons/JavaScript.svg', color: '#F7DF1E' },
  { name: 'TypeScript', icon: TypeScriptIcon, color: '#3178C6' },
  { name: 'React', icon: ReactIcon, iconPath: '/icons/React-Dark.svg', color: '#61DAFB' },
  { name: 'Node.js', icon: NodeIcon, iconPath: '/icons/NodeJS-Dark.svg', color: '#339933' },
  { name: 'Python', icon: PythonIcon, color: '#3776AB' },
  { name: 'Next.js', icon: NextjsIcon, color: '#FFFFFF' },
  { name: 'Tailwind CSS', icon: TailwindIcon, iconPath: '/icons/Tailwind CSS.png', color: '#38BDF8' },
  { name: 'MongoDB', icon: MongoIcon, iconPath: '/icons/MongoDB.svg', color: '#47A248' },
  { name: 'PostgreSQL', icon: PostgresIcon, iconPath: '/icons/PostgreSQL-Dark.svg', color: '#336791' },
  { name: 'AWS', icon: AwsIcon, iconPath: '/icons/AWS-Dark.svg', color: '#FF9900' },
  { name: 'Docker', icon: DockerIcon, iconPath: '/icons/Docker.svg', color: '#2496ED' },
  { name: 'Git', icon: GitIcon, color: '#F05032' },
];

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden pt-28 pb-16 sm:pt-36 flex flex-col justify-between">
      
      {/* Ambient background decoration mesh/grid */}
      <div className="absolute inset-0 -z-10 grid-bg opacity-[0.25]" />
      <div className="absolute top-[10%] right-[5%] -z-10 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_at_center,var(--accent)_0%,transparent_70%)] opacity-[0.08] blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-5xl px-6 w-full flex-1 flex flex-col justify-center">
        <div className="grid md:grid-cols-12 gap-12 md:gap-8 items-center w-full">
          
          {/* Left Column (Content) */}
          <div className="md:col-span-7 flex flex-col space-y-6">
            
            {/* Availability Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="w-fit flex items-center gap-2 rounded-full border border-border bg-foreground/[0.02] backdrop-blur-md px-3.5 py-1.5 text-xs text-secondary"
            >
              {/* <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </span> */}
             
            </motion.div>

            {/* Headline H1 */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display text-[2.5rem] font-bold leading-[1.1] tracking-tight sm:text-5xl md:text-[3.2rem] text-foreground"
            >
              Building scalable software and{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-[#8B5CF6] to-pink-500">
                AI-powered
              </span>{' '}
              products.
            </motion.h1>

            {/* Description/Bio */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-xl text-sm sm:text-base leading-relaxed text-secondary"
            >
              Full stack developer and AI engineer specializing in modern web technologies, cloud infrastructure, and intelligent systems.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center gap-3 pt-2"
            >
              <MagneticButton
                href="#projects"
                as="a"
                className="rounded-full bg-gradient-to-r from-accent to-[#8B5CF6] text-white px-6 py-3 text-sm font-semibold shadow-lg shadow-accent/20 hover:opacity-95 transition-opacity"
              >
                View My Work
              </MagneticButton>
              <MagneticButton
                href="https://drive.google.com/file/d/1AAQI2bFA_oHVsc7XgcxD-R9OWt-L_nAu/view?usp=sharing"
                as="a"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-border bg-foreground/[0.01] hover:bg-foreground/[0.04] px-6 py-3 text-sm font-semibold text-secondary hover:text-foreground transition-colors flex items-center gap-1.5"
              >
                Download Resume <Download className="h-4 w-4" />
              </MagneticButton>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center gap-3 pt-2"
            >
              {/* GitHub */}
              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-tertiary hover:text-white hover:bg-[#24292e] hover:border-[#24292e] transition-all duration-200"
              >
                <Github className="h-4 w-4" />
              </a>
              {/* LinkedIn */}
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-tertiary hover:text-white hover:bg-[#0A66C2] hover:border-[#0A66C2] transition-all duration-200"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              {/* Email */}
              <a
                href={SOCIAL_LINKS.email}
                target="_blank"
                rel="noreferrer"
                aria-label="Email"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-tertiary hover:text-white hover:bg-[#EA4335] hover:border-[#EA4335] transition-all duration-200"
              >
                <Mail className="h-4 w-4" />
              </a>
              {/* LeetCode */}
              <a
                href={SOCIAL_LINKS.leetcode}
                target="_blank"
                rel="noreferrer"
                aria-label="LeetCode"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-tertiary hover:text-white hover:bg-[#FFA116] hover:border-[#FFA116] transition-all duration-200"
              >
                <Code className="h-4 w-4" />
              </a>
            </motion.div>

            {/* Subtext */}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="block font-mono text-[10px] uppercase tracking-widest text-tertiary select-none pt-4"
            >
              
            </motion.span>
          </div>

          {/* Right Column (Avatar & Floating cards) */}
          <div className="md:col-span-5 flex flex-col items-center justify-center relative pt-8 md:pt-0">
            
            {/* Outer Glow container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: 'spring', damping: 25, stiffness: 120, delay: 0.2 }}
              className="relative w-[280px] sm:w-[320px] aspect-[4/5] rounded-3xl border border-border/40 bg-foreground/[0.01] backdrop-blur-md p-3 shadow-2xl"
            >
              {/* Background gradient spotlight behind the photo */}
              <div className="absolute inset-0 -z-10 rounded-3xl opacity-60 blur-xl bg-[radial-gradient(circle_at_center,var(--accent)_0%,transparent_70%)]" />

              {/* Decorative dynamic circles/lines wrapping the photo */}
              <div className="absolute -inset-4 border border-accent/15 rounded-[36px] -z-10 animate-[spin_60s_linear_infinite]" />
              <div className="absolute -inset-8 border border-primary/10 border-dashed rounded-[44px] -z-10 animate-[spin_90s_linear_infinite_reverse]" />

              {/* Profile Image */}
              <div className="w-full h-full rounded-2xl overflow-hidden border border-border/30 bg-neutral-900">
                <img
                  src="https://github.com/prakhar0085.png"
                  alt="Prakhar Tiwari"
                  className="w-full h-full object-cover grayscale opacity-95 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
                />
              </div>

              {/* Floating Card 1: Experience (Top Left) */}
              <motion.div
                initial={{ opacity: 0, x: -20, y: -20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ type: 'spring', damping: 15, delay: 0.5 }}
                className="absolute top-[10%] -left-[18%] backdrop-blur-md bg-background/80 border border-border/40 p-2.5 rounded-xl flex items-center gap-2.5 shadow-xl select-none"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/15 text-emerald-400">
                  <Code className="h-4 w-4" />
                </div>
                {/* <div className="flex flex-col text-left">
                  <span className="text-[9px] uppercase tracking-wider text-tertiary leading-none">Experience</span>
                  <span className="text-[11px] font-bold text-foreground mt-0.5 leading-none">2+ Years</span>
                </div> */}
              </motion.div>

              {/* Floating Card 2: Projects (Top Right) */}
              <motion.div
                initial={{ opacity: 0, x: 20, y: -20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ type: 'spring', damping: 15, delay: 0.6 }}
                className="absolute top-[25%] -right-[15%] backdrop-blur-md bg-background/80 border border-border/40 p-2.5 rounded-xl flex items-center gap-2.5 shadow-xl select-none"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-500/15 text-red-400">
                  <Rocket className="h-4 w-4" />
                </div>
                {/* <div className="flex flex-col text-left">
                  <span className="text-[9px] uppercase tracking-wider text-tertiary leading-none">Projects</span>
                  <span className="text-[11px] font-bold text-foreground mt-0.5 leading-none">12+ Completed</span>
                </div> */}
              </motion.div>

              {/* Floating Card 3: Satisfaction (Bottom Right) */}
              <motion.div
                initial={{ opacity: 0, x: 20, y: 20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ type: 'spring', damping: 15, delay: 0.7 }}
                className="absolute bottom-[15%] -right-[10%] backdrop-blur-md bg-background/80 border border-border/40 p-2.5 rounded-xl flex items-center gap-2.5 shadow-xl select-none"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-500/15 text-purple-400">
                  <Star className="h-4 w-4" />
                </div>
                {/* <div className="flex flex-col text-left">
                  <span className="text-[9px] uppercase tracking-wider text-tertiary leading-none">Satisfaction</span>
                  <span className="text-[11px] font-bold text-foreground mt-0.5 leading-none">100% Commitment</span>
                </div> */}
              </motion.div>
            </motion.div>

            {/* Under-avatar "Open to Work" Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-6 flex items-center gap-2.5 rounded-full border border-border bg-foreground/[0.02] backdrop-blur-md px-4 py-2 text-xs text-secondary shadow-lg"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              <span className="font-semibold text-foreground font-sans">Open to work</span>
              <span className="text-tertiary">|</span>
              <span className="text-[11px] text-secondary font-sans">Full Stack • AI Engineer • Remote / Onsite</span>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Technologies Section Container */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mt-20 w-full text-center space-y-6 shrink-0 z-10"
      >
        <div className="flex flex-col items-center mx-auto max-w-5xl px-6">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent font-bold select-none">
            Technologies I Work With
          </span>
          <div className="h-px w-8 bg-gradient-to-r from-transparent via-accent to-transparent mt-2.5" />
        </div>

        {/* Brand-styled infinite marquee - Edge-to-Edge Full Viewport Width */}
        <div className="w-full py-6 overflow-hidden relative border-y border-border/30 bg-foreground/[0.01] backdrop-blur-md [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
          <div className="flex w-max gap-10 animate-[heroMarquee_35s_linear_infinite] hover:[animation-play-state:paused] cursor-pointer">
            {[...HERO_TECH, ...HERO_TECH, ...HERO_TECH, ...HERO_TECH].map((tech, i) => {
              const Icon = tech.icon;
              const iconPath = tech.iconPath;
              return (
                <div
                  key={`${tech.name}-${i}`}
                  className="flex flex-col items-center gap-3 shrink-0 select-none group/tech"
                >
                  {/* Icon Wrapper with glow */}
                  <div
                    style={{
                      ['--icon-glow' as any]: `${tech.color}15`
                    }}
                    className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-foreground/[0.01] backdrop-blur-md transition-all duration-300 group-hover/tech:scale-110 group-hover/tech:border-accent/30 group-hover/tech:shadow-[0_0_15px_var(--icon-glow)] [&_svg]:h-8 [&_svg]:w-8 [&_div]:h-8 [&_div]:w-8 [&_div_span]:text-[10px] [&_div_span]:tracking-normal"
                  >
                    {iconPath ? (
                      <img src={iconPath} alt={tech.name} className="h-8 w-8 object-contain" />
                    ) : (
                      <Icon />
                    )}
                  </div>
                  {/* Label */}
                  <span className="font-display text-[10px] font-bold tracking-wide text-secondary group-hover/tech:text-foreground transition-colors leading-none">
                    {tech.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>

      <style>{`
        @keyframes heroMarquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-25%); }
        }
      `}</style>
    </section>
  );
}
