'use client';

import { Briefcase, Calendar, Globe, Database } from 'lucide-react';
import { EXPERIENCES } from '@/lib/data';
import { SectionHeading, Reveal } from '@/components/reveal';

import { 
  ReactIcon, NodeIcon, ExpressIcon, RestApiIcon, MongoIcon, PostgresIcon, AwsIcon, DockerIcon 
} from '@/components/brand-icons';

// Mapping helper to retrieve appropriate icon for tags
function getTechIcon(name: string) {
  const iconClass = "h-3.5 w-3.5 shrink-0 text-secondary";
  switch (name.toLowerCase()) {
    case 'react':
    case 'react.js':
      return <div className="scale-90"><ReactIcon /></div>;
    case 'node.js':
    case 'node':
      return <div className="scale-90"><NodeIcon /></div>;
    case 'express':
    case 'express.js':
      return <div className="scale-90"><ExpressIcon /></div>;
    case 'rest apis':
      return <div className="scale-90"><RestApiIcon /></div>;
    case 'mongodb':
      return <div className="scale-90"><MongoIcon /></div>;
    case 'postgresql':
      return <div className="scale-90"><PostgresIcon /></div>;
    case 'aws':
      return <div className="scale-90"><AwsIcon /></div>;
    case 'docker':
      return <div className="scale-90"><DockerIcon /></div>;
    case 'query optimization':
      return <Database className={iconClass} />;
    default:
      return null;
  }
}

export function Experience() {
  return (
    <section id="experience" className="relative py-12 sm:py-16 overflow-hidden">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          eyebrow="Experience"
          title={<>Experience</>}
          description="A timeline of my professional and freelance work."
        />

        {/* Timeline Container */}
        <div className="relative mt-10 max-w-4xl mx-auto">

          <div className="flex flex-col gap-10 sm:gap-12">
            {EXPERIENCES.map((exp, idx) => {
              const isLast = idx === EXPERIENCES.length - 1;

              return (
                <div 
                  key={exp.role} 
                  className="relative flex flex-col md:flex-row w-full group gap-6 md:gap-8"
                >
                  {/* Timeline track line segment */}
                  {!isLast && (
                    <div className="absolute left-[17px] top-[24px] bottom-[-60px] w-[2px] bg-gradient-to-b from-purple-500/40 via-purple-500/20 to-border/30 z-0" />
                  )}

                  {/* Centered Node Icon Dot */}
                  <div className="absolute left-[11px] top-[20px] flex items-center justify-center pointer-events-none z-10">
                    <div className="h-3.5 w-3.5 rounded-full bg-purple-500 ring-4 ring-purple-500/20 shadow-[0_0_12px_rgba(168,85,247,0.5)] transition-transform duration-300 group-hover:scale-125" />
                  </div>

                  {/* Left Column: Date & Meta Details */}
                  <div className="relative pl-12 md:w-1/3 flex flex-col justify-start">
                    
                    {/* Meta Section: Icon box, Period, Duration, Location */}
                    <div className="flex items-start gap-3.5">
                      {/* Left icon wrapper */}
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 transition-all duration-300 group-hover:border-purple-500/40 group-hover:scale-105">
                        <Briefcase className="h-5 w-5" />
                      </div>

                      {/* Details list */}
                      <div className="flex flex-col text-left">
                        <span className="font-mono text-xs font-bold text-purple-400 tracking-wide block">
                          {exp.period}
                        </span>
                        
                        <div className="flex flex-col gap-1.5 mt-2 text-xs text-secondary font-medium">
                          <span className="flex items-center gap-1.5">
                            <Calendar className="h-3.5 w-3.5 opacity-60 shrink-0 text-purple-400" />
                            {exp.duration}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <Globe className="h-3.5 w-3.5 opacity-60 shrink-0 text-purple-400" />
                            {exp.location}
                          </span>
                        </div>
                      </div>
                    </div>

                  </div>

                  {/* Right Column: Experience Card */}
                  <div className="flex-1 pl-8 md:pl-0">
                    <Reveal>
                      {/* Premium Card Container */}
                      <div className="relative w-full border border-border rounded-2xl p-6 sm:p-7 bg-foreground/[0.02] backdrop-blur-md transition-all duration-300 hover:border-purple-500/30 hover:bg-foreground/[0.03] hover:shadow-xl overflow-hidden">
                        
                        {/* Card Header metadata */}
                        <div className="flex flex-col gap-1.5 mb-5 items-start text-left">
                          <span className="inline-block rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-0.5 font-mono text-[9px] font-bold uppercase tracking-wider text-purple-400">
                            {exp.type}
                          </span>
                          
                          <h3 className="font-display text-xl font-bold text-foreground leading-tight mt-1">
                            {exp.role}
                          </h3>
                          
                          <span className="font-display text-xs font-semibold text-purple-400/90">
                            {exp.company}
                          </span>
                        </div>

                        {/* Achievements bullet list */}
                        <ul className="flex flex-col gap-3 mb-6">
                          {exp.achievements.map((a, i) => (
                            <li 
                              key={i} 
                              className="flex items-start gap-3 text-xs text-secondary text-left leading-relaxed"
                            >
                              <span className="h-1.5 w-1.5 rounded-full bg-purple-400 mt-1.5 shrink-0 shadow-[0_0_6px_rgba(168,85,247,0.6)]" />
                              <span>{a}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Technologies Tags strip */}
                        <div className="pt-4 border-t border-border/60 flex flex-wrap gap-1.5 justify-start">
                          {exp.tech.map((t) => (
                            <span
                              key={t}
                              className="inline-flex items-center gap-1.5 rounded-lg bg-foreground/[0.03] border border-border/80 px-2.5 py-1 font-mono text-[9.5px] text-secondary hover:text-foreground hover:border-purple-500/30 transition-all duration-200 select-none"
                            >
                              {getTechIcon(t)}
                              <span>{t}</span>
                            </span>
                          ))}
                        </div>
                      </div>
                    </Reveal>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
