'use client';

import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useRef, type ReactNode, type MouseEvent } from 'react';
import { cn } from '@/lib/utils';

export function MagneticButton({
  children,
  className,
  strength = 0.25,
  onClick,
  as = 'button',
  href,
  target,
  rel,
  ariaLabel,
}: {
  children: ReactNode;
  className?: string;
  strength?: number;
  onClick?: () => void;
  as?: 'button' | 'a';
  href?: string;
  target?: string;
  rel?: string;
  ariaLabel?: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 300, damping: 20, mass: 0.2 });
  const sy = useSpring(y, { stiffness: 300, damping: 20, mass: 0.2 });

  const handleMove = (e: MouseEvent<HTMLElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    x.set((e.clientX - (rect.left + rect.width / 2)) * strength);
    y.set((e.clientY - (rect.top + rect.height / 2)) * strength);
  };
  const reset = () => {
    x.set(0);
    y.set(0);
  };

  const shared = {
    ref: ref as never,
    onMouseMove: handleMove,
    onMouseLeave: reset,
    style: { x: sx, y: sy },
    className: cn('relative inline-flex items-center justify-center', className),
  };

  if (as === 'a') {
    return (
      <motion.a href={href} target={target} rel={rel} aria-label={ariaLabel} onClick={onClick} {...shared}>
        {children}
      </motion.a>
    );
  }
  return (
    <motion.button onClick={onClick} aria-label={ariaLabel} {...shared}>
      {children}
    </motion.button>
  );
}
