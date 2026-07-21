'use client';

import { ArrowUpRight } from 'lucide-react';
import { CERTIFICATIONS } from '@/lib/data';
import { SectionHeading, Reveal } from '@/components/reveal';

function getIssuerBadgeStyle(issuer: string) {
  const iss = issuer.toLowerCase();
  if (iss.includes('aws')) {
    return {
      bg: 'bg-amber-500/10 border border-amber-500/20',
      text: 'text-amber-500',
    };
  }
  if (iss.includes('ethnus')) {
    return {
      bg: 'bg-emerald-500/10 border border-emerald-500/20',
      text: 'text-emerald-400',
    };
  }
  if (iss.includes('linkedin')) {
    return {
      bg: 'bg-sky-500/10 border border-sky-500/20',
      text: 'text-sky-400',
    };
  }
  if (iss.includes('udemy')) {
    return {
      bg: 'bg-purple-500/10 border border-purple-500/20',
      text: 'text-purple-400',
    };
  }
  if (iss.includes('oracle')) {
    return {
      bg: 'bg-red-500/10 border border-red-500/20',
      text: 'text-red-400',
    };
  }
  return {
    bg: 'bg-neutral-500/10 border border-neutral-500/20',
    text: 'text-neutral-400',
  };
}

export function Certifications() {
  // Multiply the list of certifications to ensure a seamless looping marquee track
  const loopList = [...CERTIFICATIONS, ...CERTIFICATIONS, ...CERTIFICATIONS, ...CERTIFICATIONS];

  return (
    <section id="certifications" className="relative py-12 sm:py-16 overflow-hidden">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          eyebrow="Credentials"
          title={<>Certifications</>}
          description="A selection of my technical certifications, training programs, and professional credentials."
        />
      </div>

      {/* Edge-to-Edge Running Marquee Container with fade masks */}
      <Reveal delay={0.1}>
        <div className="mt-10 flex flex-col gap-5 relative overflow-hidden w-full py-4 [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
          <div className="relative w-full overflow-hidden">
            <div className="flex w-max gap-5 animate-[certsMarquee_45s_linear_infinite] hover:[animation-play-state:paused] cursor-pointer">
              {loopList.map((cert, i) => {
                const badgeStyle = getIssuerBadgeStyle(cert.issuer);

                return (
                  <div
                    key={`${cert.id}-${i}`}
                    className="group relative overflow-hidden rounded-[24px] border border-border/60 bg-foreground/[0.02] p-6 flex flex-col justify-between w-[280px] sm:w-[340px] shrink-0 transition-all duration-300 hover:border-foreground/15 hover:bg-foreground/[0.03]"
                  >
                    <div>
                      {/* Top Row: Issuer Badge and circular Link */}
                      <div className="flex items-center justify-between">
                        <span className={`text-[10px] uppercase tracking-wider font-bold px-3 py-1.5 rounded-full ${badgeStyle.bg} ${badgeStyle.text}`}>
                          {cert.issuer}
                        </span>
                        <a
                          href={cert.url}
                          target="_blank"
                          rel="noreferrer"
                          className="flex h-9 w-9 items-center justify-center rounded-full border border-border/80 text-secondary transition-all duration-300 hover:text-foreground hover:border-foreground/40"
                        >
                          <ArrowUpRight className="h-4 w-4" />
                        </a>
                      </div>

                      {/* Title */}
                      <h3 className="font-display text-lg font-bold text-foreground mt-6 leading-tight tracking-tight line-clamp-2">
                        {cert.title}
                      </h3>

                      {/* Description */}
                      <p className="text-secondary text-xs sm:text-sm mt-3 leading-relaxed line-clamp-3">
                        {cert.description}
                      </p>
                    </div>

                    <div>
                      {/* Divider Line */}
                      <div className="h-px bg-border/40 my-5" />

                      {/* Footer Row */}
                      <div className="flex items-center justify-between gap-4">
                        {/* Issued Date */}
                        <div className="flex flex-col">
                          <span className="text-[9px] uppercase tracking-wider text-tertiary font-bold">Issued</span>
                          <span className="text-xs font-semibold text-foreground mt-0.5">{cert.date}</span>
                        </div>

                        {/* Credential ID */}
                        <div className="flex flex-col items-end">
                          <span className="text-[9px] uppercase tracking-wider text-tertiary font-bold">Credential ID</span>
                          <div className="flex items-center gap-1 mt-0.5">
                            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 text-emerald-400 shrink-0 fill-none stroke-current" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                              <polyline points="22 4 12 14.01 9 11.01" />
                            </svg>
                            <span className="font-mono text-xs font-semibold text-foreground select-all truncate max-w-[100px] sm:max-w-[120px]">
                              {cert.id}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Reveal>

      <style>{`
        @keyframes certsMarquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
