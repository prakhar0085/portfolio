'use client';

import { SERVICES } from '@/lib/data';
import { SectionHeading } from '@/components/reveal';
import { ArrowUpRight } from 'lucide-react';

export function Services() {
  const row1 = SERVICES.slice(0, 4);
  const row2 = SERVICES.slice(4);

  return (
    <section id="services" className="relative py-12 sm:py-16 overflow-hidden">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          eyebrow="Services"
          title={<>Services</>}
          description="Focused offerings for teams that need senior execution across the stack and the AI lifecycle."
        />
      </div>

      {/* Double Track Running Marquees - Edge-to-Edge Full Viewport Width */}
      <div className="mt-10 flex flex-col gap-5 relative overflow-hidden w-full py-4 [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
        
        {/* Marquee Row 1 (Left to Right) */}
        <div className="relative w-full overflow-hidden">
          <div className="flex w-max gap-5 animate-[servicesMarquee_40s_linear_infinite] hover:[animation-play-state:paused] cursor-pointer">
            {[...row1, ...row1, ...row1, ...row1].map((s, i) => {
              const Icon = s.icon;
              return (
                <div
                  key={`s1-${s.title}-${i}`}
                  style={{
                    ['--service-glow' as any]: `${s.color}20`,
                  }}
                  className="flex flex-col justify-between w-[230px] sm:w-[265px] shrink-0 rounded-xl border border-border bg-foreground/[0.02] backdrop-blur-md p-4 transition-all duration-300 hover:border-accent/40 hover:scale-105 hover:bg-foreground/[0.04] hover:shadow-[0_0_20px_var(--service-glow)]"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div
                        className="flex h-8.5 w-8.5 items-center justify-center rounded-lg border"
                        style={{
                          borderColor: `${s.color}40`,
                          backgroundColor: `${s.color}15`,
                          color: s.color,
                        }}
                      >
                        <Icon className="h-4 w-4" />
                      </div>
                      <ArrowUpRight className="h-3.5 w-3.5 text-tertiary transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>

                    <h3 className="mt-3 font-display text-sm font-semibold text-foreground">
                      {s.title}
                    </h3>
                    <p className="mt-1 text-[11px] text-secondary leading-relaxed line-clamp-2">
                      {s.description}
                    </p>
                  </div>

                  <div className="mt-3 flex flex-wrap gap-1 pt-2.5 border-t border-border/40">
                    {s.features.slice(0, 3).map((f) => (
                      <span
                        key={f}
                        className="rounded-full border border-border/60 bg-foreground/[0.03] px-2 py-0.5 font-mono text-[9px] text-tertiary"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Marquee Row 2 (Right to Left / Reverse) */}
        <div className="relative w-full overflow-hidden mt-1">
          <div className="flex w-max gap-5 animate-[servicesMarqueeReverse_40s_linear_infinite] hover:[animation-play-state:paused] cursor-pointer">
            {[...row2, ...row2, ...row2, ...row2].map((s, i) => {
              const Icon = s.icon;
              return (
                <div
                  key={`s2-${s.title}-${i}`}
                  style={{
                    ['--service-glow' as any]: `${s.color}20`,
                  }}
                  className="flex flex-col justify-between w-[230px] sm:w-[265px] shrink-0 rounded-xl border border-border bg-foreground/[0.02] backdrop-blur-md p-4 transition-all duration-300 hover:border-accent/40 hover:scale-105 hover:bg-foreground/[0.04] hover:shadow-[0_0_20px_var(--service-glow)]"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div
                        className="flex h-8.5 w-8.5 items-center justify-center rounded-lg border"
                        style={{
                          borderColor: `${s.color}40`,
                          backgroundColor: `${s.color}15`,
                          color: s.color,
                        }}
                      >
                        <Icon className="h-4 w-4" />
                      </div>
                      <ArrowUpRight className="h-3.5 w-3.5 text-tertiary transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>

                    <h3 className="mt-3 font-display text-sm font-semibold text-foreground">
                      {s.title}
                    </h3>
                    <p className="mt-1 text-[11px] text-secondary leading-relaxed line-clamp-2">
                      {s.description}
                    </p>
                  </div>

                  <div className="mt-3 flex flex-wrap gap-1 pt-2.5 border-t border-border/40">
                    {s.features.slice(0, 3).map((f) => (
                      <span
                        key={f}
                        className="rounded-full border border-border/60 bg-foreground/[0.03] px-2 py-0.5 font-mono text-[9px] text-tertiary"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>

      <style>{`
        @keyframes servicesMarquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes servicesMarqueeReverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </section>
  );
}
