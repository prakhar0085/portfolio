'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Github, X, Lightbulb, Layers, Wrench, Rocket, Sparkles } from 'lucide-react';
import { PROJECTS, type Project } from '@/lib/data';
import { SectionHeading, Reveal } from '@/components/reveal';
import { createPortal } from 'react-dom';

export function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handler = (e: Event) => {
      const slug = (e as CustomEvent<string>).detail;
      const p = PROJECTS.find((x) => x.slug === slug);
      if (p) setSelected(p);
    };
    window.addEventListener('open-project', handler);
    return () => window.removeEventListener('open-project', handler);
  }, []);

  useEffect(() => {
    if (selected) {
      const originalBodyStyle = document.body.style.overflow;
      const originalHtmlStyle = document.documentElement.style.overflow;
      
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';

      const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setSelected(null);
      window.addEventListener('keydown', onKey);
      return () => {
        document.body.style.overflow = originalBodyStyle;
        document.documentElement.style.overflow = originalHtmlStyle;
        window.removeEventListener('keydown', onKey);
      };
    }
  }, [selected]);

  return (
    <section id="projects" className="relative py-12 sm:py-16 overflow-hidden">
      {/* Background ambient glows */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden select-none">
        <div className="absolute left-1/4 top-1/3 h-[500px] w-[500px] rounded-full bg-purple-500/5 blur-3xl" />
        <div className="absolute right-1/4 bottom-1/3 h-[500px] w-[500px] rounded-full bg-cyan-500/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Featured Projects"
          title={<>Projects</>}
          description="A curated selection of real-world platforms, web applications, and autonomous agent systems I designed and shipped."
        />

        {/* 3-Column Grid matching reference image */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((p, index) => {
            const titleParts = p.title.split(' – ');
            const mainTitle = titleParts[0];
            const subTitle = titleParts[1] || p.tags[0] || 'Web Application';

            return (
              <Reveal key={p.slug} delay={index * 0.05} className="h-full">
                <div
                  onClick={() => setSelected(p)}
                  className="group relative cursor-pointer overflow-hidden rounded-2xl border border-border bg-foreground/[0.02] backdrop-blur-md flex flex-col justify-between h-full transition-colors hover:border-foreground/25"
                >
                  {/* Top Image Box: Flush screenshot with browser dots bar */}
                  <div className="w-full aspect-[16/10] overflow-hidden relative border-b border-border bg-foreground/[0.04] shrink-0">
                    <div className="flex items-center gap-1.5 px-3 py-1.5 border-b border-border bg-foreground/[0.03] backdrop-blur z-10 relative">
                      <span className="h-2 w-2 rounded-full bg-red-500/80" />
                      <span className="h-2 w-2 rounded-full bg-yellow-500/80" />
                      <span className="h-2 w-2 rounded-full bg-green-500/80" />
                      <span className="ml-2 font-mono text-[9px] text-tertiary truncate">
                        {p.slug}.dev
                      </span>
                    </div>

                    <div className="h-[calc(100%-25px)] w-full overflow-hidden flex items-center justify-center p-1">
                      <img
                        src={p.cover}
                        alt={p.title}
                        className="h-full w-full object-contain rounded-sm"
                      />
                    </div>
                  </div>

                  {/* Content Padding Area - Compact & Tight Spacing */}
                  <div className="p-4 sm:p-4.5 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Title & Subtitle */}
                      <h3 className="font-display text-lg font-bold text-foreground tracking-tight">
                        {mainTitle}
                      </h3>
                      <span className="text-xs font-semibold text-secondary mt-0.5 block">
                        {subTitle}
                      </span>

                      {/* Description Paragraph */}
                      <p className="mt-2 text-xs text-secondary leading-relaxed line-clamp-3">
                        {p.summary || p.tagline}
                      </p>
                    </div>

                    <div className="mt-3.5">
                      {/* Uppercase Tech Stack Pills */}
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {p.techStack.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="rounded-lg border border-border/80 bg-foreground/[0.04] px-2.5 py-0.5 font-mono text-[9px] text-secondary uppercase font-medium select-none"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Bottom Action Row: Live Demo + GitHub square button */}
                      <div className="flex items-center gap-2">
                        <a
                          href={p.demoUrl}
                          target="_blank"
                          rel="noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="flex-1 text-center py-2 rounded-xl bg-foreground text-background font-semibold text-xs hover:opacity-90 transition-opacity select-none"
                        >
                          Live Demo
                        </a>
                        <a
                          href={p.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-xl border border-border bg-foreground/[0.04] text-foreground hover:bg-foreground/[0.08] transition-colors"
                          aria-label="GitHub Repository"
                        >
                          <Github className="h-3.5 w-3.5" />
                        </a>
                      </div>
                    </div>
                  </div>

                </div>
              </Reveal>
            );
          })}
        </div>
      </div>

      {/* Case Study Side Slider Drawer Portal */}
      {mounted && createPortal(
        <AnimatePresence>
          {selected && (
            <>
              {/* Backdrop blur underlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelected(null)}
                className="fixed inset-0 z-[120] bg-background/70 backdrop-blur-md"
              />

              {/* Sliding Drawer Container */}
              <motion.div
                initial={{ right: '-100%' }}
                animate={{ right: '0%' }}
                exit={{ right: '-100%' }}
                transition={{ type: 'spring', damping: 26, stiffness: 220 }}
                className="fixed top-0 bottom-0 z-[130] w-full sm:w-[540px] md:w-[620px] bg-background border-l border-border/40 shadow-2xl flex flex-col h-full overflow-hidden pointer-events-auto"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelected(null)}
                  aria-label="Close"
                  className="absolute right-4 top-4 z-50 flex h-8 w-8 items-center justify-center rounded-md border border-border bg-background/70 backdrop-blur hover:bg-background text-foreground transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>

                {/* Header Image area - Uncropped Entire Image */}
                <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden border-b border-border/40 bg-neutral-950 flex items-center justify-center p-2">
                  <img
                    src={selected.cover}
                    alt={selected.title}
                    className="h-full w-full object-contain rounded-lg"
                  />
                </div>

                {/* Scrollable details container */}
                <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-6 [scrollbar-width:thin]">
                  
                  {/* Title & Status Header */}
                  <div>
                    <span className="rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/20 px-2.5 py-0.5 font-mono text-[9px] uppercase tracking-wider inline-block">
                      {selected.status}
                    </span>
                    <h2 className="mt-2 font-display text-xl font-bold sm:text-2xl text-foreground leading-tight">
                      {selected.title}
                    </h2>
                  </div>

                  {/* Primary Actions */}
                  <div className="flex flex-wrap gap-2.5 pt-2">
                    <a
                      href={selected.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 min-w-[120px] inline-flex items-center justify-center gap-1.5 rounded-full bg-foreground text-background px-4 py-2.5 text-xs font-semibold hover:opacity-90 transition-opacity"
                    >
                      Live Demo <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                    <a
                      href={selected.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 min-w-[120px] inline-flex items-center justify-center gap-1.5 rounded-full border border-border px-4 py-2.5 text-xs font-semibold text-secondary hover:text-foreground hover:bg-foreground/[0.04] transition-colors"
                    >
                      <Github className="h-3.5 w-3.5" /> View Source
                    </a>
                  </div>

                  {/* Full Tech Stack */}
                  <div className="rounded-xl border border-border/30 bg-foreground/[0.01] p-4">
                    <h4 className="font-mono text-[9px] uppercase tracking-widest text-tertiary font-semibold mb-2.5">
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {selected.techStack.map((t) => (
                        <span
                          key={t}
                          style={{ borderColor: `${selected.accent}20`, color: selected.accent }}
                          className="rounded-md border bg-foreground/[0.01] px-2.5 py-1 font-mono text-[10px]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Summary */}
                  <div>
                    <h4 className="font-mono text-[10px] uppercase tracking-widest text-purple-400 font-semibold mb-2">
                      Overview
                    </h4>
                    <p className="text-sm text-secondary leading-relaxed">
                      {selected.tagline}
                    </p>
                  </div>

                  {/* Case study segments */}
                  <DrawerSection icon={Lightbulb} title="The Problem" color={selected.accent}>
                    {selected.problem}
                  </DrawerSection>

                  <DrawerSection icon={Layers} title="Architecture" color={selected.accent}>
                    {selected.architecture}
                  </DrawerSection>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <DrawerList icon={Sparkles} title="Key Features" items={selected.features} color={selected.accent} />
                    <DrawerList icon={Wrench} title="Technical Challenges" items={selected.challenges} color={selected.accent} />
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <DrawerList icon={Lightbulb} title="Engineered Solutions" items={selected.solutions} color={selected.accent} />
                    <DrawerList icon={Rocket} title="Future Roadmap" items={selected.future} color={selected.accent} />
                  </div>

                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>,
        document.body
      )}
    </section>
  );
}

// Drawer components for sections
function DrawerSection({
  icon: Icon,
  title,
  children,
  color,
}: {
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  title: string;
  children: React.ReactNode;
  color: string;
}) {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <Icon className="h-4 w-4" style={{ color }} />
        <h4 className="font-display text-sm font-bold text-foreground">{title}</h4>
      </div>
      <p className="text-xs sm:text-sm text-secondary leading-relaxed pl-6">{children}</p>
    </div>
  );
}

function DrawerList({
  icon: Icon,
  title,
  items,
  color,
}: {
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  title: string;
  items: string[];
  color: string;
}) {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2">
        <Icon className="h-4 w-4" style={{ color }} />
        <h4 className="font-display text-sm font-bold text-foreground">{title}</h4>
      </div>
      <ul className="space-y-2 pl-6">
        {items.map((i) => (
          <li key={i} className="flex items-start gap-2 text-xs text-secondary leading-relaxed">
            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-neutral-600" />
            {i}
          </li>
        ))}
      </ul>
    </div>
  );
}
