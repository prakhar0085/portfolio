'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUp, Github, Linkedin, Mail, Code } from 'lucide-react';
import { NAV_LINKS, SOCIAL_LINKS } from '@/lib/data';

export function Footer() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <footer className="relative hairline-t py-14">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <a href="#home" className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-md bg-foreground text-background text-[11px] font-bold">
                PT
              </span>
              <span className="font-display text-sm font-semibold">Prakhar Tiwari</span>
            </a>
            <p className="mt-4 max-w-sm text-sm text-secondary leading-relaxed">
              Full Stack Developer & AI Engineer building AI-powered products from idea to
              production. Open to select work.
            </p>
            <div className="mt-5 flex gap-2">
              {[
                { href: SOCIAL_LINKS.github, icon: Github, label: 'GitHub' },
                { href: SOCIAL_LINKS.linkedin, icon: Linkedin, label: 'LinkedIn' },
                { href: SOCIAL_LINKS.email, icon: Mail, label: 'Email' },
                { href: SOCIAL_LINKS.leetcode, icon: Code, label: 'LeetCode' },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  aria-label={label}
                  className="flex h-8 w-8 items-center justify-center rounded-md hairline text-tertiary hover:text-foreground hover:bg-foreground/[0.04] transition-colors"
                >
                  <Icon className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-mono text-xs font-medium uppercase tracking-wider text-tertiary">
              Quick links
            </h4>
            <ul className="mt-4 grid grid-cols-2 gap-1.5">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-secondary hover:text-foreground transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-xs font-medium uppercase tracking-wider text-tertiary">
              Get in touch
            </h4>
            <a
              href={SOCIAL_LINKS.email}
              className="mt-4 block text-sm text-secondary hover:text-foreground transition-colors"
            >
              prakhartiwari942@gmail.com
            </a>
            <p className="mt-1 text-sm text-tertiary">India · Remote worldwide</p>
            <a
              href="#contact"
              className="mt-4 inline-flex items-center rounded-full bg-foreground text-background px-3.5 py-1.5 text-xs font-medium hover:opacity-90 transition-opacity"
            >
              Hire me
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 hairline-t pt-6 sm:flex-row">
          <p className="font-mono text-xs text-tertiary">
            © {new Date().getFullYear()} Prakhar Tiwari. All rights reserved.
          </p>
          <p className="font-mono text-xs text-tertiary">
            Built with Next.js · Tailwind · Framer Motion
          </p>
        </div>
      </div>

      <AnimatePresence>
        {show && (
          <motion.button
            aria-label="Back to top"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            whileHover={{ y: -2 }}
            className="fixed bottom-5 right-5 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-foreground text-background shadow-lg hover:opacity-90 transition-opacity"
          >
            <ArrowUp className="h-4 w-4" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}
