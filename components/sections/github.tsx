'use client';

import { motion } from 'framer-motion';
import { Github, Star, GitFork, GitCommit } from 'lucide-react';
import { GITHUB_REPOS, GITHUB_LANGUAGES, RECENT_COMMITS, SOCIAL_LINKS } from '@/lib/data';
import { SectionHeading, Reveal, StaggerGroup, staggerItem } from '@/components/reveal';
import { AnimatedCounter } from '@/components/animation-utils';

const contributionGrid = Array.from({ length: 52 * 7 }, (_, i) => {
  const seed = (i * 9301 + 49297) % 233280;
  const r = seed / 233280;
  if (r > 0.85) return 4;
  if (r > 0.65) return 3;
  if (r > 0.45) return 2;
  if (r > 0.25) return 1;
  return 0;
});

const levelColor = [
  'bg-foreground/[0.06]',
  'bg-foreground/20',
  'bg-foreground/40',
  'bg-foreground/65',
  'bg-foreground',
];

export function GitHub() {
  return (
    <section id="github" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          eyebrow="GitHub"
          title={<>Open source is a habit</>}
          description="Live activity from my GitHub — contributions, top languages, pinned repos, and the latest commits."
        />

        <div className="mt-14 grid gap-4 lg:grid-cols-[1.5fr_1fr]">
          <Reveal>
            <div className="surface h-full rounded-xl p-6">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <Github className="h-4 w-4" />
                  <h3 className="font-display text-sm font-semibold">Contributions</h3>
                </div>
                <a
                  href={SOCIAL_LINKS.github}
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono text-xs text-tertiary hover:text-foreground transition-colors"
                >
                  View profile →
                </a>
              </div>

              <div className="mt-5 grid grid-cols-3 gap-px overflow-hidden rounded-lg surface">
                {[
                  { label: 'Contributions', value: 1800, suffix: '+' },
                  { label: 'Repositories', value: 34, suffix: '' },
                  { label: 'Total stars', value: 1163, suffix: '' },
                ].map((s) => (
                  <div key={s.label} className="bg-background p-3 text-center">
                    <div className="font-display text-lg font-semibold">
                      <AnimatedCounter value={s.value} suffix={s.suffix} />
                    </div>
                    <div className="font-mono text-[10px] uppercase tracking-wider text-tertiary">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-5 overflow-x-auto no-scrollbar">
                <div className="grid min-w-[640px] grid-flow-col grid-rows-7 gap-1">
                  {contributionGrid.map((lvl, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: (i % 100) * 0.002 }}
                      className={`h-2.5 w-2.5 rounded-sm ${levelColor[lvl]}`}
                    />
                  ))}
                </div>
                <div className="mt-2 flex items-center justify-end gap-1 font-mono text-[10px] text-tertiary">
                  Less
                  {levelColor.map((c, i) => (
                    <span key={i} className={`h-2.5 w-2.5 rounded-sm ${c}`} />
                  ))}
                  More
                </div>
              </div>
            </div>
          </Reveal>

          <div className="flex flex-col gap-4">
            <Reveal delay={0.04}>
              <div className="surface rounded-xl p-6">
                <h3 className="font-display text-sm font-semibold">Top languages</h3>
                <div className="mt-4 flex h-2 overflow-hidden rounded-full bg-foreground/[0.06]">
                  {GITHUB_LANGUAGES.map((l) => (
                    <motion.div
                      key={l.name}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${l.value}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1 }}
                      style={{ background: l.color }}
                    />
                  ))}
                </div>
                <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
                  {GITHUB_LANGUAGES.map((l) => (
                    <div key={l.name} className="flex items-center gap-1.5 font-mono text-xs">
                      <span className="h-2 w-2 rounded-full" style={{ background: l.color }} />
                      <span className="text-tertiary">{l.name}</span>
                      <span className="ml-auto text-secondary">{l.value}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="surface rounded-xl p-6">
                <h3 className="font-display text-sm font-semibold">Recent commits</h3>
                <ul className="mt-4 flex flex-col gap-3">
                  {RECENT_COMMITS.map((c) => (
                    <li key={c.message} className="flex items-start gap-3 text-sm">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-foreground/[0.05]">
                        <GitCommit className="h-3 w-3 text-tertiary" />
                      </span>
                      <div className="min-w-0 flex-1">
                        <div className="truncate text-secondary">{c.message}</div>
                        <div className="font-mono text-[11px] text-tertiary">
                          {c.repo} · {c.time}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>

        <StaggerGroup className="mt-4 grid gap-px overflow-hidden rounded-xl surface sm:grid-cols-2 lg:grid-cols-4">
          {GITHUB_REPOS.map((r) => (
            <motion.a
              key={r.name}
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noreferrer"
              variants={staggerItem}
              className="group bg-background p-5 transition-colors hover:bg-foreground/[0.02]"
            >
              <div className="flex items-center justify-between">
                <Github className="h-3.5 w-3.5 text-tertiary group-hover:text-foreground transition-colors" />
                <span className="h-2 w-2 rounded-full" style={{ background: r.color }} />
              </div>
              <h4 className="mt-3 font-display text-sm font-semibold group-hover:text-foreground transition-colors">
                {r.name}
              </h4>
              <p className="mt-1 text-xs text-tertiary line-clamp-2">{r.description}</p>
              <div className="mt-3 flex items-center gap-3 font-mono text-[11px] text-tertiary">
                <span className="flex items-center gap-1">
                  <Star className="h-3 w-3" /> {r.stars}
                </span>
                <span className="flex items-center gap-1">
                  <GitFork className="h-3 w-3" /> {r.forks}
                </span>
                <span className="ml-auto" style={{ color: r.color }}>
                  {r.language}
                </span>
              </div>
            </motion.a>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
