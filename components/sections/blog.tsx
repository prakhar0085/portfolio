'use client';

import { motion } from 'framer-motion';
import { Bell, ArrowUpRight } from 'lucide-react';
import { SectionHeading, Reveal } from '@/components/reveal';

const POSTS = [
  {
    title: 'Designing multi-agent graphs that don\u2019t fall over',
    excerpt: 'Patterns for state, checkpoints, and human-in-the-loop in LangGraph — learned the hard way.',
    tag: 'AI',
    date: 'Jul 2025',
    read: '8 min',
  },
  {
    title: 'Cutting RAG costs 40% with model routing',
    excerpt: 'A pragmatic routing layer that sends easy queries to a small model and saves the big guns for hard ones.',
    tag: 'LLMs',
    date: 'Jun 2025',
    read: '6 min',
  },
  {
    title: 'Postgres indexes I wish I knew earlier',
    excerpt: 'Partial, expression, and BRIN indexes that quietly took my p95 latency from 800ms to 200ms.',
    tag: 'Backend',
    date: 'May 2025',
    read: '10 min',
  },
];

export function Blog() {
  return (
    <section id="blog" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          eyebrow="Blog"
          title={<>Writing is coming soon</>}
          description="I'm polishing a few deep dives on agents, RAG, and backend performance. Drop your email to be notified."
        />

        <Reveal className="mt-12">
          <div className="surface relative overflow-hidden rounded-xl p-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-md bg-foreground/[0.05] text-secondary">
                  <Bell className="h-4 w-4" />
                </span>
                <div>
                  <h3 className="font-display text-sm font-semibold">Get notified when I publish</h3>
                  <p className="text-xs text-tertiary">No spam. One email when the first post lands.</p>
                </div>
              </div>
              <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
                <input
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="rounded-md hairline bg-background px-3 py-2 text-sm outline-none placeholder:text-tertiary focus:border-foreground/30 transition-colors"
                />
                <button className="rounded-md bg-foreground text-background px-4 py-2 text-sm font-medium hover:opacity-90 transition-opacity">
                  Notify me
                </button>
              </form>
            </div>
          </div>
        </Reveal>

        <div className="mt-6 grid gap-3 md:grid-cols-3">
          {POSTS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.05}>
              <div className="surface group h-full rounded-xl p-5 opacity-70 transition-opacity hover:opacity-100">
                <div className="flex items-center justify-between font-mono text-[11px]">
                  <span className="text-secondary">{p.tag}</span>
                  <span className="text-tertiary">{p.date} · {p.read}</span>
                </div>
                <h3 className="mt-3 font-display text-sm font-semibold leading-snug">{p.title}</h3>
                <p className="mt-1.5 text-xs text-tertiary leading-relaxed">{p.excerpt}</p>
                <div className="mt-4 inline-flex items-center gap-1 font-mono text-[11px] text-tertiary">
                  Coming soon <ArrowUpRight className="h-3 w-3" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
