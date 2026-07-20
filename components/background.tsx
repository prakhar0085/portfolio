'use client';

import { useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export function GridBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 grid-bg opacity-60 [mask-image:radial-gradient(ellipse_70%_50%_at_50%_0%,black,transparent)]"
      aria-hidden
    />
  );
}

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    mass: 0.2,
  });
  return (
    <motion.div
      className="fixed left-0 top-0 z-[60] h-px w-full origin-left bg-accent"
      style={{ scaleX }}
      aria-hidden
    />
  );
}
