'use client';

import { motion } from 'framer-motion';
import { BadgeCheck, Trophy, Flag } from 'lucide-react';
import { ACHIEVEMENTS } from '@/lib/data';
import { SectionHeading, StaggerGroup, staggerItem } from '@/components/reveal';

const typeIcon = {
  Certification: BadgeCheck,
  Award: Trophy,
  Milestone: Flag,
} as const;

export function Achievements() {
  return (
    <section id="achievements" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          eyebrow="Achievements"
          title={<>Certifications & milestones</>}
          description="Proof of the work — credentials, awards, and the open-source habit."
        />

        <div className="relative mt-14">
          <div className="absolute left-[7px] top-0 bottom-0 w-px bg-border" />
          <StaggerGroup className="flex flex-col gap-4">
            {ACHIEVEMENTS.map((a) => {
              const Icon = typeIcon[a.type] ?? BadgeCheck;
              return (
                <motion.div key={a.title} variants={staggerItem} className="relative pl-7">
                  <span className="absolute left-0 top-2 flex h-4 w-4 items-center justify-center rounded-full border-2 border-background bg-foreground">
                    <Icon className="h-2 w-2 text-background" />
                  </span>
                  <div className="surface rounded-xl p-5">
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <h3 className="font-display text-base font-semibold">{a.title}</h3>
                      <span className="font-mono text-[11px] text-tertiary">
                        {a.type} · {a.date}
                      </span>
                    </div>
                    <div className="mt-0.5 text-sm text-tertiary">{a.issuer}</div>
                    <p className="mt-2 text-sm text-secondary leading-relaxed">{a.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </StaggerGroup>
        </div>
      </div>
    </section>
  );
}
