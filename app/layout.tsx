import './globals.css';
import type { Metadata } from 'next';
import { Inter, JetBrains_Mono, Playfair_Display } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});
const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});
const display = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
});

const SITE_URL = 'https://prakhar-tiwari.dev';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Prakhar Tiwari — Full Stack Developer & AI Engineer',
    template: '%s — Prakhar Tiwari',
  },
  description:
    'Prakhar Tiwari is a Full Stack Developer and AI Engineer specializing in Node.js, React, FastAPI, LangGraph, and scalable backend systems. Building AI-powered products from idea to production.',
  keywords: [
    'Prakhar Tiwari',
    'Full Stack Developer',
    'AI Engineer',
    'Node.js Developer',
    'React Developer',
    'FastAPI',
    'LangGraph',
    'Backend Developer',
    'Software Engineer',
    'Portfolio',
  ],
  authors: [{ name: 'Prakhar Tiwari' }],
  creator: 'Prakhar Tiwari',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    title: 'Prakhar Tiwari — Full Stack Developer & AI Engineer',
    description:
      'Full Stack Developer & AI Engineer building AI-powered products with Node.js, React, FastAPI, and LangGraph.',
    siteName: 'Prakhar Tiwari',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'Prakhar Tiwari — Full Stack Developer & AI Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Prakhar Tiwari — Full Stack Developer & AI Engineer',
    description:
      'Full Stack Developer & AI Engineer building AI-powered products with Node.js, React, FastAPI, and LangGraph.',
    images: ['/og.png'],
    creator: '@prakhar_tiwari',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  manifest: '/manifest.webmanifest',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  themeColor: '#050816',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Prakhar Tiwari',
  url: SITE_URL,
  jobTitle: 'Full Stack Developer & AI Engineer',
  knowsAbout: [
    'Node.js',
    'React',
    'Next.js',
    'FastAPI',
    'LangGraph',
    'LangChain',
    'PostgreSQL',
    'MongoDB',
    'Docker',
    'AWS',
    'Microservices',
    'Artificial Intelligence',
  ],
  sameAs: [
    'https://github.com/prakhar-tiwari',
    'https://linkedin.com/in/prakhar-tiwari',
    'https://leetcode.com/u/prakhar_tiwari',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${mono.variable} ${display.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
