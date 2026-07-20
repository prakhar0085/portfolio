'use client';

import { GraduationCap, Target } from 'lucide-react';
import { Reveal, SectionHeading } from '@/components/reveal';

const FOCUS_AREAS = [
  'Data Structures & Algorithms',
  'Operating Systems',
  'Databases',
  'Computer Networks',
  'DBMS',
  'Cloud Computing',
  'Artificial Intelligence',
  'Scaling SaaS Systems',
  'Real-time Architectures',
];

export function About() {
  return (
    <section id="about" className="relative py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-6 space-y-8">
        
        {/* Centered Section Header matching Skills title */}
        <SectionHeading
          eyebrow="About"
          title={<>About</>}
          description="Engineer who ships, not just plans."
        />

        {/* Two Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Detailed Bio & Philosophy Quote Card */}
          <div className="lg:col-span-6 space-y-6">
            <Reveal delay={0.04}>
              <div className="space-y-4 text-sm sm:text-base text-secondary leading-relaxed">
                <p>
                  I&apos;m <strong className="text-foreground font-semibold">Prakhar Tiwari</strong>, a Full Stack Developer who builds resilient, scalable, and high-performance web applications.
                </p>
                <p>
                  My expertise spans the entire software development lifecycle from designing intuitive user interfaces to architecting robust backend systems, optimizing databases, and deploying production-ready applications on the cloud.
                </p>
                <p>I believe great software is more than clean code. It's about thoughtful architecture, strong performance, intuitive design, and building products that solve meaningful problems at scale. Every project I create is an opportunity to learn, improve, and deliver software that users genuinely enjoy using.</p>
                <p>
                  I architect systems from the ground up from robust database schemas and <span className="text-purple-400 font-medium">microservice deployments</span> to <span className="text-purple-400 font-medium">Gen-AI workflows</span> and secure <span className="text-purple-400 font-medium">CI/CD pipelines</span>.
                </p>
              </div>
            </Reveal>

            {/* Philosophy Quote Card */}
            <Reveal delay={0.08}>
              <div className="relative overflow-hidden rounded-2xl border border-border bg-foreground/[0.02] backdrop-blur-md p-6 flex items-start gap-4">
                <span className="font-serif text-5xl font-bold text-purple-400/80 leading-none select-none">
                  &ldquo;
                </span>
                <p className="font-serif italic text-sm leading-relaxed text-secondary pt-1">
                  I believe that writing clean, maintainable code is just as critical as delivering the feature itself. Every technical decision I make prioritizes system performance, data security, and long-term scalability.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Education Card & Core Focus Areas Card */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Education Card */}
            <Reveal delay={0.06}>
              <div className="rounded-2xl border border-border bg-foreground/[0.02] backdrop-blur-md p-6 space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400">
                      <GraduationCap className="h-5.5 w-5.5" />
                    </div>
                    <div>
                      <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-purple-400 block">
                        Education
                      </span>
                      <h3 className="font-display text-lg font-bold text-foreground">
                        VIT Bhopal University
                      </h3>
                    </div>
                  </div>

                  <div className="text-right shrink-0">
                    <span className="font-mono text-xs text-secondary font-medium block">
                      2022 — 2026
                    </span>
                    <span className="font-mono text-[10px] text-tertiary block mt-0.5">
                      Bhopal, India
                    </span>
                  </div>
                </div>

                <div className="pl-14">
                  <p className="text-xs text-secondary font-medium">
                    B.Tech in Computer Science & Engineering
                  </p>
                  <div className="mt-2 font-mono text-xs text-secondary">
                    <span>CGPA: </span>
                    <strong className="text-purple-400 font-bold">8.05</strong>
                    <span> / 10</span>
                  </div>
                </div>

                <div className="border-t border-border/60 pt-4">
                  <p className="text-xs text-secondary leading-relaxed">
                    Graduated with a strong foundation in computer science, software engineering, data structures & algorithms, databases, operating systems, computer networks, and cloud computing.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Core Focus Areas Card */}
            <Reveal delay={0.1}>
              <div className="rounded-2xl border border-border bg-foreground/[0.02] backdrop-blur-md p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400">
                    <Target className="h-5.5 w-5.5" />
                  </div>
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-purple-400">
                    Core Focus Areas
                  </span>
                </div>

                <div className="flex flex-wrap gap-2 pt-1">
                  {FOCUS_AREAS.map((area) => (
                    <span
                      key={area}
                      className="rounded-xl border border-border/80 bg-foreground/[0.03] px-3 py-1.5 font-sans text-xs text-secondary font-medium select-none hover:border-purple-500/30 hover:text-foreground transition-colors"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>

          </div>
        </div>

      </div>
    </section>
  );
}
