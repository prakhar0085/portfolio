'use client';

import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Search, ArrowRight, CornerDownLeft } from 'lucide-react';
import { NAV_LINKS, PROJECTS, SOCIAL_LINKS } from '@/lib/data';
import { cn } from '@/lib/utils';

type Item = {
  id: string;
  label: string;
  hint: string;
  group: string;
  action: () => void;
};

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setOpen((o) => !o);
      }
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    if (open) {
      setQuery('');
      setActive(0);
      setTimeout(() => inputRef.current?.focus(), 40);
    }
  }, [open]);

  const items: Item[] = [
    ...NAV_LINKS.map((l) => ({
      id: l.href,
      label: l.label,
      hint: 'Navigate',
      group: 'Navigation',
      action: () => {
        document.querySelector(l.href)?.scrollIntoView({ behavior: 'smooth' });
        setOpen(false);
      },
    })),
    ...PROJECTS.map((p) => ({
      id: `proj-${p.slug}`,
      label: p.title,
      hint: p.tagline,
      group: 'Projects',
      action: () => {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
        setOpen(false);
        setTimeout(
          () => window.dispatchEvent(new CustomEvent('open-project', { detail: p.slug })),
          500,
        );
      },
    })),
    {
      id: 'gh',
      label: 'GitHub',
      hint: 'Open profile',
      group: 'Links',
      action: () => {
        window.open(SOCIAL_LINKS.github, '_blank');
        setOpen(false);
      },
    },
    {
      id: 'li',
      label: 'LinkedIn',
      hint: 'Open profile',
      group: 'Links',
      action: () => {
        window.open(SOCIAL_LINKS.linkedin, '_blank');
        setOpen(false);
      },
    },
    {
      id: 'email',
      label: 'Email',
      hint: 'Send a message',
      group: 'Links',
      action: () => {
        window.location.href = SOCIAL_LINKS.email;
        setOpen(false);
      },
    },
  ];

  const filtered = items.filter(
    (i) =>
      i.label.toLowerCase().includes(query.toLowerCase()) ||
      i.hint.toLowerCase().includes(query.toLowerCase()),
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setActive((a) => Math.min(a + 1, filtered.length - 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setActive((a) => Math.max(a - 1, 0));
      } else if (e.key === 'Enter' && filtered[active]) {
        filtered[active].action();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, filtered, active]);

  const groups = Array.from(new Set(filtered.map((i) => i.group)));

  return (
    <>
      <button
        aria-label="Open command palette"
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 rounded-md hairline px-2 py-1.5 text-xs text-tertiary hover:text-foreground hover:bg-foreground/[0.04] transition-colors"
      >
        <Search className="h-3.5 w-3.5" />
        <span className="hidden lg:inline">Search</span>
        <kbd className="kbd">⌘K</kbd>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[120] flex items-start justify-center pt-[18vh] px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-background/70 backdrop-blur-sm" onClick={() => setOpen(false)} />
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-lg overflow-hidden rounded-xl surface-elevated shadow-2xl"
            >
              <div className="flex items-center gap-2.5 hairline-b px-3.5 py-3">
                <Search className="h-4 w-4 text-tertiary" />
                <input
                  ref={inputRef}
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value);
                    setActive(0);
                  }}
                  placeholder="Search sections, projects, links…"
                  className="flex-1 bg-transparent text-sm outline-none placeholder:text-tertiary"
                />
                <kbd className="kbd">esc</kbd>
              </div>
              <div className="max-h-[52vh] overflow-y-auto p-1.5">
                {filtered.length === 0 && (
                  <div className="px-3 py-8 text-center text-sm text-tertiary">
                    No results for “{query}”
                  </div>
                )}
                {groups.map((group) => (
                  <div key={group} className="mb-1">
                    <div className="px-2.5 py-1.5 text-[10px] font-medium uppercase tracking-wider text-tertiary">
                      {group}
                    </div>
                    {filtered
                      .filter((i) => i.group === group)
                      .map((item) => {
                        const idx = filtered.indexOf(item);
                        return (
                          <button
                            key={item.id}
                            onMouseEnter={() => setActive(idx)}
                            onClick={item.action}
                            className={cn(
                              'flex w-full items-center justify-between gap-3 rounded-md px-2.5 py-2 text-left text-sm transition-colors',
                              active === idx
                                ? 'bg-foreground/[0.06] text-foreground'
                                : 'text-secondary hover:text-foreground',
                            )}
                          >
                            <span className="flex flex-col min-w-0">
                              <span className="font-medium truncate">{item.label}</span>
                              <span className="text-xs text-tertiary truncate">{item.hint}</span>
                            </span>
                            {active === idx && <CornerDownLeft className="h-3.5 w-3.5 shrink-0 text-tertiary" />}
                          </button>
                        );
                      })}
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between hairline-t px-3 py-2 text-[10px] text-tertiary">
                <span className="flex items-center gap-2">
                  <kbd className="kbd">↑</kbd>
                  <kbd className="kbd">↓</kbd> navigate
                </span>
                <span>Prakhar Tiwari</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
