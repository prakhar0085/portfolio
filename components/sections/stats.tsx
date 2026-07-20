'use client';

import { motion } from 'framer-motion';
import { STATS } from '@/lib/data';
import { AnimatedCounter } from '@/components/animation-utils';
import { StaggerGroup, staggerItem } from '@/components/reveal';

export function Stats() {
  return (
    <section id="stats" className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <StaggerGroup className="grid grid-cols-2 gap-px overflow-hidden rounded-xl surface sm:grid-cols-3 lg:grid-cols-5">
          {STATS.map((s) => (
            <motion.div
              key={s.label}
              variants={staggerItem}
              className="bg-background p-6 text-center sm:p-8"
            >
              <div className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                <AnimatedCounter value={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-1.5 font-mono text-[11px] uppercase tracking-wider text-tertiary">
                {s.label}
              </div>
            </motion.div>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
