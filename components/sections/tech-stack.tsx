'use client';

import { motion } from 'framer-motion';
import { TECH_STACK } from '@/lib/data';
import { SectionHeading } from '@/components/reveal';

export function TechStack() {
  const doubled = [...TECH_STACK, ...TECH_STACK];
  return (
    <section id="tech-stack" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          eyebrow="Tech Stack"
          title={<>Tools I reach for daily</>}
          description="The stack behind the work — battle-tested, boring where it should be, modern where it counts."
        />
      </div>

      <div className="relative mt-14 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        <div className="flex w-max gap-2 animate-[marquee_40s_linear_infinite]">
          {doubled.map((t, i) => (
            <motion.div
              key={`${t.name}-${i}`}
              whileHover={{ y: -3 }}
              className="surface flex shrink-0 items-center gap-2.5 rounded-lg px-4 py-3"
            >
              <span className="text-lg" style={{ color: t.color }}>
                {t.glyph}
              </span>
              <span className="font-display text-sm font-medium">{t.name}</span>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`@keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }`}</style>
    </section>
  );
}
