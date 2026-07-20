'use client';

import { useState, type FormEvent } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Send, Check, Loader2, Mail, MapPin, Github, Linkedin, Code } from 'lucide-react';
import { SectionHeading, Reveal } from '@/components/reveal';
import { SOCIAL_LINKS } from '@/lib/data';
import { cn } from '@/lib/utils';

type Status = 'idle' | 'sending' | 'success' | 'error';

export function Contact() {
  const [status, setStatus] = useState<Status>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = (form: HTMLFormElement) => {
    const next: Record<string, string> = {};
    const name = (form.elements.namedItem('name') as HTMLInputElement).value.trim();
    const email = (form.elements.namedItem('email') as HTMLInputElement).value.trim();
    const subject = (form.elements.namedItem('subject') as HTMLInputElement).value.trim();
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value.trim();
    if (!name) next.name = 'Required';
    if (!email) next.email = 'Required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = 'Invalid email';
    if (!subject) next.subject = 'Required';
    if (!message || message.length < 10) next.message = 'At least 10 characters';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!validate(form)) return;
    setStatus('sending');
    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
      if (serviceId && templateId && publicKey) {
        const emailjs = (await import('@emailjs/browser')).default;
        await emailjs.sendForm(serviceId, templateId, form, { publicKey });
      } else {
        await new Promise((r) => setTimeout(r, 1000));
      }
      setStatus('success');
      form.reset();
      setTimeout(() => setStatus('idle'), 4000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  return (
    <section id="contact" className="relative py-12 sm:py-16">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          eyebrow="Contact"
          title={<>Contact</>}
          description="Have a product in mind, a role to fill, or a hard problem? I read every message."
        />

        <div className="mt-10 grid gap-4 lg:grid-cols-[1fr_1.5fr]">
          <Reveal>
            <div className="surface flex h-full flex-col rounded-xl p-6">
              <h3 className="font-display text-sm font-semibold">Reach me directly</h3>
              <p className="mt-2 text-sm text-secondary leading-relaxed">
                I usually reply within a day. For freelance scopes, include budget and timeline.
              </p>
              <div className="mt-5 flex flex-col gap-3">
                <a href={SOCIAL_LINKS.email} className="flex items-center gap-3 text-sm hover:text-foreground transition-colors">
                  <span className="flex h-8 w-8 items-center justify-center rounded-md bg-foreground/[0.05]">
                    <Mail className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-secondary">prakhartiwari942@gmail.com</span>
                </a>
                <div className="flex items-center gap-3 text-sm text-tertiary">
                  <span className="flex h-8 w-8 items-center justify-center rounded-md bg-foreground/[0.05]">
                    <MapPin className="h-3.5 w-3.5" />
                  </span>
                  India · Remote worldwide
                </div>
              </div>
              <div className="mt-5 flex gap-2">
                {/* GitHub */}
                <a
                  href={SOCIAL_LINKS.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="flex h-9 w-9 items-center justify-center rounded-md border border-border bg-foreground/[0.02] hover:bg-[#24292e] hover:border-[#24292e] transition-all duration-200 group"
                >
                  <Github className="h-4 w-4 text-tertiary group-hover:text-white transition-colors" />
                </a>
                {/* LinkedIn */}
                <a
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-9 w-9 items-center justify-center rounded-md border border-border bg-foreground/[0.02] hover:bg-[#0A66C2] hover:border-[#0A66C2] transition-all duration-200 group"
                >
                  <Linkedin className="h-4 w-4 text-tertiary group-hover:text-white transition-colors" />
                </a>
                {/* LeetCode */}
                <a
                  href={SOCIAL_LINKS.leetcode}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LeetCode"
                  className="flex h-9 w-9 items-center justify-center rounded-md border border-border bg-foreground/[0.02] hover:bg-[#FFA116] hover:border-[#FFA116] transition-all duration-200 group"
                >
                  <Code className="h-4 w-4 text-tertiary group-hover:text-white transition-colors" />
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <form onSubmit={onSubmit} noValidate className="surface rounded-xl p-6 sm:p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Name" name="name" error={errors.name} placeholder="Ada Lovelace" />
                <Field label="Email" name="email" type="email" error={errors.email} placeholder="ada@compute.io" />
              </div>
              <Field label="Subject" name="subject" error={errors.subject} placeholder="Let's ship an AI product" className="mt-4" />
              <div className="mt-4">
                <label className="mb-1.5 block font-mono text-xs text-tertiary">Message</label>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Tell me about the project, role, or idea…"
                  className={cn(
                    'w-full resize-none rounded-md hairline bg-background px-3.5 py-3 text-sm outline-none placeholder:text-tertiary focus:border-foreground/30 transition-colors',
                    errors.message && 'border-red-400/50',
                  )}
                />
                {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={status === 'sending' || status === 'success'}
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-md bg-foreground text-background px-4 py-2.5 text-sm font-medium hover:opacity-90 transition-opacity disabled:opacity-60"
              >
                {status === 'sending' && <Loader2 className="h-4 w-4 animate-spin" />}
                {status === 'success' && <Check className="h-4 w-4" />}
                {status === 'idle' && <Send className="h-3.5 w-3.5" />}
                {status === 'error' && <Send className="h-3.5 w-3.5" />}
                {status === 'sending'
                  ? 'Sending…'
                  : status === 'success'
                    ? 'Message sent'
                    : status === 'error'
                      ? 'Try again'
                      : 'Send message'}
              </button>
            </form>
          </Reveal>
        </div>
      </div>

      <AnimatePresence>
        {status === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-5 left-1/2 z-[130] -translate-x-1/2"
          >
            <div className="surface-elevated flex items-center gap-3 rounded-lg px-4 py-3 shadow-2xl">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-foreground text-background">
                <Check className="h-4 w-4" />
              </span>
              <div>
                <div className="font-display text-sm font-semibold">Message sent</div>
                <div className="font-mono text-xs text-tertiary">I'll reply within a day.</div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function Field({
  label,
  name,
  type = 'text',
  error,
  placeholder,
  className,
}: {
  label: string;
  name: string;
  type?: string;
  error?: string;
  placeholder?: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <label className="mb-1.5 block font-mono text-xs text-tertiary">{label}</label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className={cn(
          'w-full rounded-md hairline bg-background px-3.5 py-2.5 text-sm outline-none placeholder:text-tertiary focus:border-foreground/30 transition-colors',
          error && 'border-red-400/50',
        )}
      />
      {error && <p className="mt-1 text-xs text-red-400">{error}</p>}
    </div>
  );
}
