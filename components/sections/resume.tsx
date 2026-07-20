'use client';

import { motion } from 'framer-motion';
import { Download, FileText, GraduationCap, Briefcase, Wrench, Award } from 'lucide-react';
import { MagneticButton } from '@/components/magnetic-button';
import { SectionHeading, Reveal } from '@/components/reveal';

const RESUME_SECTIONS = [
  {
    icon: Briefcase,
    title: 'Experience',
    items: [
      { primary: 'Full Stack Developer Intern', secondary: 'NimbleEdge · 2024 — Present' },
      { primary: 'AI Engineer (Freelance)', secondary: 'Independent · 2023 — 2024' },
    ],
  },
  {
    icon: GraduationCap,
    title: 'Education',
    items: [{ primary: 'B.Tech, Computer Science', secondary: '9.1 CGPA · 2021 — 2025' }],
  },
  {
    icon: Award,
    title: 'Certifications',
    items: [
      { primary: 'AWS Solutions Architect — Associate', secondary: 'Amazon Web Services · 2024' },
      { primary: 'Docker Certified Associate', secondary: 'Docker Inc. · 2024' },
    ],
  },
  {
    icon: Wrench,
    title: 'Core skills',
    items: [
      { primary: 'Node.js · React · FastAPI', secondary: 'Full stack & microservices' },
      { primary: 'LangGraph · LangChain · RAG', secondary: 'AI engineering & agents' },
    ],
  },
];

export function Resume() {
  return (
    <section id="resume" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          eyebrow="Resume"
          title={<>The one-page version</>}
          description="A quick preview of my resume. Download the full PDF for the details."
        />

        <div className="mt-14 grid gap-4 lg:grid-cols-[1.7fr_1fr]">
          <Reveal>
            <div className="surface rounded-xl p-7">
              <div className="flex flex-wrap items-end justify-between gap-3 hairline-b pb-5">
                <div>
                  <h3 className="font-display text-xl font-semibold">Prakhar Tiwari</h3>
                  <p className="text-sm text-tertiary">Full Stack Developer & AI Engineer</p>
                </div>
                <div className="text-right font-mono text-xs text-tertiary">
                  <div>prakhar.tiwari.dev@gmail.com</div>
                  <div>India · Remote</div>
                </div>
              </div>

              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                {RESUME_SECTIONS.map((s) => (
                  <div key={s.title}>
                    <div className="flex items-center gap-2">
                      <s.icon className="h-3.5 w-3.5 text-tertiary" />
                      <h4 className="font-mono text-xs font-medium uppercase tracking-wider text-tertiary">
                        {s.title}
                      </h4>
                    </div>
                    <ul className="mt-3 flex flex-col gap-3">
                      {s.items.map((it) => (
                        <li key={it.primary}>
                          <div className="text-sm font-medium">{it.primary}</div>
                          <div className="font-mono text-xs text-tertiary">{it.secondary}</div>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <div className="surface flex h-full flex-col items-center justify-center rounded-xl p-8 text-center">
              <motion.span
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="flex h-16 w-16 items-center justify-center rounded-xl bg-foreground text-background"
              >
                <FileText className="h-7 w-7" />
              </motion.span>
              <h3 className="mt-5 font-display text-base font-semibold">Full resume</h3>
              <p className="mt-1 font-mono text-xs text-tertiary">PDF · 2 pages · Updated Jul 2025</p>
              <MagneticButton
                href="https://drive.google.com/file/d/1AAQI2bFA_oHVsc7XgcxD-R9OWt-L_nAu/view?usp=sharing"
                as="a"
                target="_blank"
                rel="noreferrer"
                className="mt-5 rounded-full bg-foreground text-background px-4 py-2 text-sm font-medium hover:opacity-90 transition-opacity"
              >
                <Download className="h-3.5 w-3.5" /> Download PDF
              </MagneticButton>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
