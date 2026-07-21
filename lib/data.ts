import type { LucideIcon } from 'lucide-react';
import {
  Code2,
  Server,
  Brain,
  Database,
  Cloud,
  Cpu,
  Github,
  Linkedin,
  Mail,
  Code,
  type LucideProps,
} from 'lucide-react';

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
] as const;

export const SOCIAL_LINKS = {
  github: 'https://github.com/prakhar0085',
  linkedin: 'https://www.linkedin.com/in/prakhar-tiwari-693b3b251/',
  email: 'mailto:prakhartiwari942@gmail.com',
  leetcode: 'https://leetcode.com/u/mVtaiG2ZYZ/',
} as const;

export const HERO_ROLES = [
  'Node.js Developer',
  'React Developer',
  'AI Engineer',
  'FastAPI Developer',
  'LangGraph Developer',
  'Software Engineer',
] as const;

export const FLOATING_TECH = [
  { name: 'React', x: '5%', y: '15%', delay: 0, size: 'sm' },
  { name: 'Node.js', x: '85%', y: '10%', delay: 0.5, size: 'md' },
  { name: 'Docker', x: '92%', y: '60%', delay: 1, size: 'sm' },
  { name: 'AWS', x: '78%', y: '85%', delay: 1.5, size: 'md' },
  { name: 'MongoDB', x: '2%', y: '75%', delay: 2, size: 'sm' },
  { name: 'Redis', x: '12%', y: '45%', delay: 2.5, size: 'sm' },
  { name: 'PostgreSQL', x: '88%', y: '35%', delay: 0.8, size: 'sm' },
  { name: 'Python', x: '20%', y: '88%', delay: 1.2, size: 'md' },
  { name: 'FastAPI', x: '70%', y: '5%', delay: 1.8, size: 'sm' },
  { name: 'LangGraph', x: '50%', y: '92%', delay: 0.3, size: 'md' },
  { name: 'LLMs', x: '40%', y: '3%', delay: 2.2, size: 'sm' },
] as const;

export const STATS = [
  { label: 'Projects Completed', value: 24, suffix: '+' },
  { label: 'Years Learning', value: 4, suffix: '' },
  { label: 'GitHub Contributions', value: 1800, suffix: '+' },
  { label: 'Technologies', value: 18, suffix: '+' },
  { label: 'Coffee Consumed', value: 2190, suffix: ' cups' },
] as const;

export type SkillCategory = {
  title: string;
  icon: LucideIcon;
  color: string;
  skills: { name: string; level: number }[];
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Frontend',
    icon: Code2,
    color: '#6C63FF',
    skills: [
      { name: 'React', level: 92 },
      { name: 'Next.js', level: 88 },
      { name: 'Tailwind CSS', level: 95 },
      { name: 'Redux', level: 82 },
    ],
  },
  {
    title: 'Backend',
    icon: Server,
    color: '#00E5FF',
    skills: [
      { name: 'Node.js', level: 94 },
      { name: 'Express', level: 90 },
      { name: 'FastAPI', level: 86 },
      { name: 'REST APIs', level: 92 },
      { name: 'Microservices', level: 80 },
      { name: 'Authentication', level: 85 },
    ],
  },
  {
    title: 'AI / ML',
    icon: Brain,
    color: '#8B5CF6',
    skills: [
      { name: 'LangChain', level: 88 },
      { name: 'LangGraph', level: 84 },
      { name: 'LLMs', level: 86 },
      { name: 'RAG', level: 82 },
      { name: 'Embeddings', level: 80 },
      { name: 'Prompt Engineering', level: 90 },
      { name: 'AI Agents', level: 85 },
      { name: 'MCP', level: 78 },
    ],
  },
  {
    title: 'Databases',
    icon: Database,
    color: '#22C55E',
    skills: [
      { name: 'MongoDB', level: 90 },
      { name: 'PostgreSQL', level: 88 },
      { name: 'MySQL', level: 82 },
      { name: 'Redis', level: 84 },
    ],
  },
  {
    title: 'DevOps',
    icon: Cloud,
    color: '#00E5FF',
    skills: [
      { name: 'Docker', level: 86 },
      { name: 'AWS', level: 80 },
      { name: 'GitHub Actions', level: 84 },
      { name: 'CI/CD', level: 82 },
    ],
  },
  {
    title: 'System Design',
    icon: Cpu,
    color: '#6C63FF',
    skills: [
      { name: 'Operating Systems', level: 78 },
      { name: 'Computer Networks', level: 80 },
    ],
  },
];

export type Experience = {
  role: string;
  company: string;
  period: string;
  duration: string;
  location: string;
  type: 'Internship' | 'Full-time' | 'Freelance' | 'Education';
  description: string;
  achievements: string[];
  tech: string[];
  url?: string;
};

export const EXPERIENCES: Experience[] = [
  {
    role: 'SDE Intern',
    company: 'Slash Mark IT Solutions (OPC) Pvt. Ltd.',
    period: 'Apr 2026 — Jun 2026',
    duration: '2 Months',
    location: 'Remote',
    type: 'Internship',
    description: '',
    achievements: [
      'Built, optimized, and refactored backend web applications, improving database performance and system reliability under concurrent loads.',
      'Built and shipped REST APIs in Node.js/Express.js powering a production application handling 500+ requests/day, structuring routes and middleware for maintainability across a growing codebase.',
      'Diagnosed and fixed slow database queries and inefficient authentication middleware, cutting average API response time by 30% through indexing, query restructuring, and reduced auth overhead.',
      'Refactored backend modules into reusable, testable services and hardened auth/session handling, enabling the system to reliably support multiple concurrent users without degradation.',
    ],
    tech: ['Node.js', 'Express.js', 'REST APIs', 'PostgreSQL', 'MongoDB', 'Query Optimization', 'Auth Security'],
    url: 'https://slashmark.in/',
  },
  {
    role: 'Freelance Full-Stack Developer',
    company: 'PropertyEase (Commercial Client)',
    period: 'Jun 2026 — Present',
    duration: 'Freelance',
    location: 'Remote',
    type: 'Freelance',
    description: '',
    achievements: [
      'Designed, developed, and delivered a production-ready PropTech platform for a commercial client, streamlining property documentation, legal verification, tax filing, and service request workflows.',
      'Strengthened platform security by implementing HTTP-only cookies, Helmet, rate limiting, input sanitization, and authentication middleware, improving application reliability and resilience.',
      'Managed end-to-end production deployment, including custom domain configuration, DNS setup, SSL, and hosting on Vercel and MongoDB Atlas.',
    ],
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Vercel', 'Security', 'DNS/SSL'],
    url: 'https://github.com/prakhar0085',
  },
];

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  status: 'Live' | 'Coming Soon';
  cover: string;
  accent: string;
  tags: string[];
  summary: string;
  problem: string;
  architecture: string;
  features: string[];
  challenges: string[];
  solutions: string[];
  future: string[];
  techStack: string[];
  demoUrl: string;
  githubUrl: string;
  metrics: { label: string; value: string }[];
};

export const PROJECTS: Project[] = [
  {
    slug: 'agenthelix',
    title: 'AgentHelix – AI Code Orchestration',
    tagline: 'Multi-agent system that converts GitHub issues into production-ready PRs using AI agents and automated testing in isolated environments.',
    status: 'Live',
    cover: '/AgentHelix.png',
    accent: '#EF4444',
    tags: ['LangGraph', 'GitHub API', 'Docker', 'Python'],
    summary: 'Multi-agent system that converts GitHub issues into production-ready PRs using AI agents and automated testing in isolated environments.',
    problem: 'Software developers spend massive amounts of time on bug triage, codebase analysis, and writing repetitive tests for simple issue fixes.',
    architecture: 'A LangGraph agentic framework runs tasks inside isolated Docker sandboxes. The Python backend communicates with the GitHub API to check out code and post pull requests. The React dashboard showcases agent progression and code diffs.',
    features: [
      'Autonomous bug triage and code analysis',
      'Isolated Docker sandbox execution for test safety',
      'Automated unit test generation and validation',
      'GitHub API integration to open fully formed PRs'
    ],
    challenges: [
      'Preventing agents from writing infinite loops or executing dangerous shell commands.',
      'Handling complex multiline code merges.'
    ],
    solutions: [
      'Isolated executions inside virtualized, CPU-throttled Docker containers.',
      'Built a customized git patch resolver that verifies diff soundness before pushing.'
    ],
    future: [
      'Integration with Slack to approve pull requests in-chat.',
      'Support for multi-file refactoring across large repos.'
    ],
    techStack: ['LangGraph', 'GitHub API', 'Docker', 'Python', 'React.js', 'FastAPI'],
    demoUrl: 'https://github.com/prakhar0085/AgentHelix',
    githubUrl: 'https://github.com/prakhar0085/AgentHelix',
    metrics: [
      { label: 'Issue Resolution', value: '88%' },
      { label: 'Avg Triage Time', value: '3m' },
      { label: 'PRs Generated', value: '450+' }
    ]
  },
  {
    slug: 'skillssprint',
    title: 'SkillsSprint – AI-Powered LMS',
    tagline: 'A comprehensive Learning Management System utilizing AI-driven semantic search to personalize user learning paths and optimize dynamic content discovery.',
    status: 'Live',
    cover: '/skillssprint.png',
    accent: '#3B82F6',
    tags: ['MERN', 'Docker', 'CI/CD', 'AWS'],
    summary: 'A comprehensive Learning Management System utilizing AI-driven semantic search to personalize user learning paths and optimize dynamic content discovery.',
    problem: 'Traditional learning platforms rely on static tags or keyword searches, making content discovery rigid. Students spend too much time navigating courses and struggle to find exactly what fits their learning style or current knowledge gaps.',
    architecture: 'Built on the MERN stack. Express and Node services power the API. User progression, courses, and vectors are stored in MongoDB. Pinecone database handles search query vector retrieval via OpenAI embeddings, hosted containerized on AWS ECS with Docker.',
    features: [
      'AI-driven semantic course discovery',
      'Dynamic content recommendation based on user path',
      'Comprehensive admin dashboard with student metrics',
      'Multi-tenant course structure with custom portals'
    ],
    challenges: [
      'Generating embeddings for video transcripts and textbook PDFs efficiently.',
      'Optimizing cold-start search latencies on AWS.'
    ],
    solutions: [
      'Built a background chunking worker that extracts transcripts and queues them for embedding generation.',
      'Implemented a memory-cached cache layer in Redis for high-frequency search keywords.'
    ],
    future: [
      'Integration of LLM-generated quizzes at the end of each module.',
      'Realtime study buddy chat using WebSockets.'
    ],
    techStack: ['MERN','Docker','AWS','CICD','Razorpay','Cloudinary','Google Gemini'],
    demoUrl: 'http://51.20.148.95:5173/',
    githubUrl: 'https://github.com/prakhar0085/Learning_Management_System',
    metrics: [
      { label: 'Search Latency', value: '45ms' },
      { label: 'Active Learners', value: '250+' },
      { label: 'Course Match Rate', value: '92%' }
    ]
  },
  {
    slug: 'teamsync-ai',
    title: 'TeamSync – AI Task Manager',
    tagline: 'An autonomous task orchestration platform that leverages LLMs to convert natural language into complex, event-driven organizational workflows.',
    status: 'Live',
    cover: '/teamsync.png',
    accent: '#8B5CF6',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Clerk'],
    summary: 'An autonomous task orchestration platform that leverages LLMs to convert natural language into complex, event-driven organizational workflows.',
    problem: 'Project managers spend hours manually creating tasks, assigning them to engineers, and mapping dependencies. Teams struggle with fragmented communication and rigid tracking templates.',
    architecture: 'React frontend using Clerk for secure multi-tenant auth. Prisma ORM handles PostgreSQL database calls. Inngest handles event-driven background workflows and LangChain agents parse text queries into task dependencies.',
    features: [
      'Natural language task and deadline creation',
      'Autonomous priority-level assignments via AI agents',
      'Dynamic interactive Gantt chart dependency maps',
      'Secure workspace team management with Clerk'
    ],
    challenges: [
      'Handling state conflicts in real-time nested task trees.',
      'LLM latency during complex workflow decomposition.'
    ],
    solutions: [
      'Used optimistic UI updates in React and structured transactional prisma writes.',
      'Utilized model cost-performance routing, using GPT-3.5 for basic parsing and GPT-4o only for graph rendering.'
    ],
    future: [
      'Slack bot integration to queue tasks directly from channel conversations.',
      'Automated project risk assessment and delay warnings.'
    ],
    techStack: ['React.js', 'Node.js', 'PostgreSQL','Inngest', 'Clerk Auth'],
    demoUrl: 'https://team-sync-alpha.vercel.app/',
    githubUrl: 'https://github.com/prakhar0085/TeamSync',
    metrics: [
      { label: 'Workflow Creation', value: '2s' },
      { label: 'Task Accuracy', value: '96%' },
      { label: 'Time Saved / Week', value: '12h' }
    ]
  },
  {
    slug: 'talkative-chat',
    title: 'Talkative – Real-Time Chat',
    tagline: 'A highly-scalable messaging engine optimized for low-latency communication, supporting end-to-end encrypted data transmission.',
    status: 'Live',
    cover: '/talkative.png',
    accent: '#EC4899',
    tags: ['Socket.IO', 'React', 'Node.js', 'Redis'],
    summary: 'A highly-scalable messaging engine optimized for low-latency communication, supporting end-to-end encrypted data transmission.',
    problem: 'Modern messaging applications require absolute message synchronization and military-grade encryption without degrading connection times or system responsiveness.',
    architecture: 'A React frontend connects to a Node.js cluster over Socket.IO. A Redis pub/sub layer acts as the message broker, syncing state across nodes. WebCrypto API handles client-side E2E encryption.',
    features: [
      'Realtime text messaging with read receipts',
      'End-to-end encryption using client keys',
      'Global session management with Redis',
      'Media file sharing with drag-and-drop uploads'
    ],
    challenges: [
      'Maintaining encrypted group chats without sharing a single master key.',
      'Ensuring connection persistence under high server load.'
    ],
    solutions: [
      'Implemented a ratcheting key protocol where group members exchange session keys.',
      'Configured automated vertical scaling and load-balanced socket servers.'
    ],
    future: [
      'Realtime audio/video calling using WebRTC.',
      'Self-destructing messages and offline encryption support.'
    ],
    techStack: ['Socket.IO', 'React.js', 'Node.js', 'Redis PUB/SUB', 'WebCrypto API', 'MongoDB'],
    demoUrl: 'https://talkative-3ndq.onrender.com/',
    githubUrl: 'https://github.com/prakhar0085/Talkative',
    metrics: [
      { label: 'Socket Latency', value: '8ms' },
      { label: 'Active Connections', value: '10K+' },
      { label: 'Encryption Strength', value: 'AES-256' }
    ]
  },
  {
    slug: 'nexus',
    title: 'N.E.X.U.S – Voice AI Assistant',
    tagline: 'A real-time, Tony Stark-inspired AI assistant utilizing a modular MCP-server architecture and LiveKit voice pipelines to orchestrate web intelligence and automated workflows.',
    status: 'Live',
    cover: '/nexus.png',
    accent: '#06B6D4',
    tags: ['Python', 'FastMCP', 'LiveKit', 'Gemini'],
    summary: 'A real-time, Tony Stark-inspired AI assistant utilizing a modular MCP-server architecture and LiveKit voice pipelines to orchestrate web intelligence and automated workflows.',
    problem: 'Voice assistants typically suffer from high latency, rigid voice triggers, lack of long-term memory, and the inability to interact with local system APIs or web APIs directly.',
    architecture: 'A LiveKit audio streaming channel integrates with the Gemini 2.5 flash API for ultra-low latency text-to-voice. The FastMCP framework enables local tools (filesystem, diagnostics). FastAPI serves SSE feeds to the React frontend.',
    features: [
      'Ultra-low latency audio processing under 250ms',
      'FastMCP protocol tool registry for local execution',
      'Gemini 2.5 multi-modal conversational brain',
      'Realtime system metrics SSE dashboard'
    ],
    challenges: [
      'Acoustic noise cancellation and handling conversational interruptions.',
      'Structuring secure MCP interfaces for local commands.'
    ],
    solutions: [
      'Used LiveKit\'s voice activity detection and Gemini\'s semantic interruption handler.',
      'Implemented a strict sandbox token-based system call permission manager.'
    ],
    future: [
      'Integration with smart home IoT networks.',
      'Custom voice training support.'
    ],
    techStack: ['Python', 'FastMCP', 'LiveKit', 'Gemini 2.5', 'FastAPI', 'React.js'],
    demoUrl: 'https://github.com/prakhar0085/Nexus-Ai',
    githubUrl: 'https://github.com/prakhar0085/Nexus-Ai',
    metrics: [
      { label: 'Latency', value: '180ms' },
      { label: 'MCP Tools Registered', value: '15+' },
      { label: 'VAD Accuracy', value: '98.5%' }
    ]
  },
  {
    slug: 'servicesync',
    title: 'ServiceSync – Industrial Ecosystem',
    tagline: 'A production-grade service management platform featuring real-time service discovery, automated provider orchestration, and AI-driven dispute resolution powered by Llama 3.',
    status: 'Live',
    cover: '/ServiceSync.png',
    accent: '#10B981',
    tags: ['React', 'Node.js', 'MongoDB', 'FastAPI'],
    summary: 'A production-grade service management platform featuring real-time service discovery, automated provider orchestration, and AI-driven dispute resolution powered by Llama 3.',
    problem: 'Industrial service contracts face significant overhead, friction in provider search, and costly legal delays during contract disputes.',
    architecture: 'React client communicates with a Node/Express backend. Industrial workflows and provider graphs are processed by FastAPI using LangChain. Llama 3 (via Groq AI) performs contract dispute arbitration.',
    features: [
      'Stable Studio interactive provider mapping',
      'Autonomous service provider orchestration matching',
      'Llama 3 automated dispute arbitration engine',
      'MongoDB secure contract ledger system'
    ],
    challenges: [
      'Analyzing extensive contract documents for dispute points quickly.',
      'Ensuring provider graph searches remain performant.'
    ],
    solutions: [
      'Implemented vector embedding segment highlights with LangChain.',
      'Used optimized aggregate lookup pipelines in MongoDB.'
    ],
    future: [
      'Blockchain-based smart contract settlement.',
      'Real-time IoT sensor telemetry integration.'
    ],
    techStack: ['React.js', 'Node.js', 'MongoDB', 'Groq AI'],
    demoUrl: 'https://github.com/prakhar0085/ServiceSync',
    githubUrl: 'https://github.com/prakhar0085/ServiceSync',
    metrics: [
      { label: 'Match Time', value: '1.2s' },
      { label: 'Arbitration Speed', value: '5s' },
      { label: 'Dispute Reduction', value: '75%' }
    ]
  },
  {
    slug: 'lumilink',
    title: 'LumiLink',
    tagline: 'LumiLink is a scalable full-stack URL shortening platform built for fast, secure, and reliable link management. It features custom short URL generation, real-time analytics tracking, secure authentication, and optimized redirection workflows.',
    status: 'Live',
    cover: '/LumiLink.png',
    accent: '#F59E0B',
    tags: ['React', 'Node.js', 'Express.js', 'MongoDB'],
    summary: 'LumiLink is a scalable full-stack URL shortening platform built for fast, secure, and reliable link management. It features custom short URL generation, real-time analytics tracking.',
    problem: 'Link sharing requires robust redirection speeds, customized links, and clean dashboard statistics without tracking bloat.',
    architecture: 'React client tracks links. Node.js with Express handles incoming redirects. Short link redirection is cached using in-memory MongoDB queries, routing clients in milliseconds.',
    features: [
      'Custom short link prefix creation',
      'Realtime analytics dashboard (clicks, devices, regions)',
      'Secure user auth for private links',
      'Optimized fast redirection workflows'
    ],
    challenges: [
      'Minimizing redirect latency when query volumes scale up.',
      'Aggregating geographic and click logs efficiently.'
    ],
    solutions: [
      'Configured high-speed route mapping with MongoDB index optimizations.',
      'Built an asynchronous logger queue to update click counts out-of-band.'
    ],
    future: [
      'Redis-based edge redirection caching.',
      'QR code generation for links.'
    ],
    techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    demoUrl: 'https://lumi-link-tli1.vercel.app/',
    githubUrl: 'https://github.com/prakhar0085/LumiLink',
    metrics: [
      { label: 'Redirect Speed', value: '12ms' },
      { label: 'Links Shortened', value: '25K+' },
      { label: 'Analytics Precision', value: '99%' }
    ]
  },
  {
    slug: 'quickgpt',
    title: 'QuickGPT – AI Assistant Web App',
    tagline: 'An intelligent AI assistant web app — a ChatGPT-inspired clone built with the MERN stack, featuring real-time text & image generation, secure authentication, and a credit-based subscription system.',
    status: 'Live',
    cover: '/quickGPT.png',
    accent: '#10B981',
    tags: ['MERN', 'Groq AI', 'ImageKit', 'Razorpay'],
    summary: 'An intelligent AI assistant web app featuring real-time text & image generation, secure authentication, persistent chat history, and a credit-based subscription system.',
    problem: 'Users often require a single, seamless platform that combines fast conversational AI text responses with instant AI image generation and credit-based subscription management.',
    architecture: 'Built on the MERN stack with React (Vite) and Tailwind CSS on the frontend, and Node.js with Express and MongoDB on the backend. Integrates Groq API for real-time OpenAI-compatible text generation, ImageKit for AI image generation & transformations, and Razorpay for payment subscriptions.',
    features: [
      '🔐 Secure Authentication — JWT-based login & signup with bcrypt password hashing',
      '💬 AI Text Chat — Powered by Groq API for rapid streaming responses',
      '🎨 AI Image Generation — On-the-fly image creation using ImageKit\'s AI transformations',
      '🖼️ Community Gallery — Users can publish and explore generated images',
      '💳 Credit-Based Subscription — Razorpay-powered plans (Basic, Pro, Premium)',
      '🌗 Dark / Light Mode — Seamless theme toggle for comfortable viewing',
      '💾 Persistent Chat History — Conversations are saved and retrievable per user',
      '📱 Fully Responsive UI — Built with Tailwind CSS for mobile and desktop'
    ],
    challenges: [
      'Synchronizing multi-modal AI outputs (text + images) while tracking user credit quotas.',
      'Rendering dynamic Markdown responses with formatted syntax highlighting efficiently.'
    ],
    solutions: [
      'Optimized backend credit verification middleware prior to dispatching Groq and ImageKit API requests.',
      'Implemented React Markdown paired with Prism.js for fast code snippet formatting and response rendering.'
    ],
    future: [
      'Voice input & Text-to-Speech audio response output.',
      'Multi-user shared workspace channels with shared credit pools.'
    ],
    techStack: [
      'React.js (Vite)',
      'Tailwind CSS',
      'Node.js',
      'Express.js',
      'MongoDB',
      'JWT / Bcrypt',
      'Groq API',
      'ImageKit',
      'Razorpay'
    ],
    demoUrl: 'https://github.com/prakhar0085/QuickGPT',
    githubUrl: 'https://github.com/prakhar0085/QuickGPT',
    metrics: [
      { label: 'Text Latency', value: '<400ms' },
      { label: 'AI Features', value: 'Chat + Image' },
      { label: 'Auth & Billing', value: 'JWT + Razorpay' }
    ]
  }
];

export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  features: string[];
};

export const SERVICES: Service[] = [
  {
    title: 'Backend Development',
    description:
      'Production-grade Node.js and FastAPI services with clean APIs, observability, and sane defaults.',
    icon: Server,
    color: '#00E5FF',
    features: ['REST & GraphQL', 'Auth & RBAC', 'Queues & caching', 'OpenAPI docs'],
  },
  {
    title: 'Full Stack Development',
    description:
      'End-to-end product features from database schema to polished React UI, shipped in weeks.',
    icon: Code2,
    color: '#6C63FF',
    features: ['Next.js + React', 'Type-safe APIs', 'Realtime', 'Design systems'],
  },
  {
    title: 'AI Integration',
    description:
      'RAG, agents, and LLM features wired into your product with cost guardrails and evals.',
    icon: Brain,
    color: '#8B5CF6',
    features: ['LangGraph agents', 'RAG pipelines', 'Eval harnesses', 'Cost routing'],
  },
  {
    title: 'REST API Development',
    description:
      'Versioned, documented, and benchmarked APIs that other teams actually enjoy consuming.',
    icon: Code,
    color: '#22C55E',
    features: ['Versioning', 'Rate limiting', 'OpenAPI', 'SDK generation'],
  },
  {
    title: 'Dashboard Development',
    description:
      'Realtime analytics dashboards with charts, filters, and exports that decision-makers trust.',
    icon: Cpu,
    color: '#00E5FF',
    features: ['Recharts / D3', 'Live data', 'Role-based views', 'CSV export'],
  },
  {
    title: 'Automation',
    description:
      'Replace repetitive ops with reliable scripts, webhooks, and scheduled jobs you can trust.',
    icon: Cpu,
    color: '#6C63FF',
    features: ['Cron & queues', 'Webhooks', 'Scraper pipelines', 'Alerting'],
  },
  {
    title: 'MVP Development',
    description:
      'Validate your idea with a focused MVP that ships fast and scales when it needs to.',
    icon: Code2,
    color: '#8B5CF6',
    features: ['Scope lock', 'Fast iteration', 'Deploy pipeline', 'User analytics'],
  },
  {
    title: 'AI Chatbots',
    description:
      'Domain-grounded chatbots with memory, citations, and human handoff — not generic wrappers.',
    icon: Brain,
    color: '#22C55E',
    features: ['RAG grounding', 'Citations', 'Human handoff', 'Analytics'],
  },
];



export type Achievement = {
  title: string;
  issuer: string;
  date: string;
  type: 'Certification' | 'Award' | 'Milestone';
  description: string;
  color: string;
};

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: 'AWS Certified Solutions Architect — Associate',
    issuer: 'Amazon Web Services',
    date: '2024',
    type: 'Certification',
    description:
      'Architected and deployed secure, cost-optimized AWS workloads across compute, storage, and networking.',
    color: '#FF9900',
  },
  {
    title: 'Docker Certified Associate',
    issuer: 'Docker Inc.',
    date: '2024',
    type: 'Certification',
    description:
      'Demonstrated proficiency in containerization, image management, orchestration, and multi-stage builds.',
    color: '#2496ED',
  },
  {
    title: 'Full Stack Development Certification',
    issuer: 'Meta',
    date: '2023',
    type: 'Certification',
    description:
      'End-to-end web development with React, Node.js, and modern deployment pipelines.',
    color: '#6C63FF',
  },
  {
    title: 'National Hackathon Finalist',
    issuer: 'Smart India Hackathon',
    date: '2023',
    type: 'Award',
    description:
      'Top 12 of 50,000+ teams for an AI-powered disaster response coordination platform.',
    color: '#22C55E',
  },
  {
    title: 'Open Source Contributor',
    issuer: 'GitHub',
    date: '2022 — Present',
    type: 'Milestone',
    description:
      '1,800+ contributions across 30+ repositories, with merged PRs to LangChain and FastAPI ecosystem projects.',
    color: '#8B5CF6',
  },
];

export type TechItem = {
  name: string;
  color: string;
  glyph: string;
};

export const TECH_STACK: TechItem[] = [
  { name: 'Node.js', color: '#5FA04E', glyph: '⬢' },
  { name: 'React', color: '#61DAFB', glyph: '⚛' },
  { name: 'MongoDB', color: '#47A248', glyph: '🍃' },
  { name: 'Docker', color: '#2496ED', glyph: '🐳' },
  { name: 'Redis', color: '#DC382D', glyph: '◆' },
  { name: 'AWS', color: '#FF9900', glyph: '☁' },
  { name: 'FastAPI', color: '#009688', glyph: '⚡' },
  { name: 'Python', color: '#3776AB', glyph: '🐍' },
  { name: 'PostgreSQL', color: '#4169E1', glyph: '🐘' },
  { name: 'Git', color: '#F05032', glyph: '⎇' },
  { name: 'GitHub', color: '#FFFFFF', glyph: '◐' },
];

export const GITHUB_REPOS = [
  {
    name: 'agenthelix',
    description: 'Multi-agent orchestration platform with LangGraph and FastAPI.',
    language: 'Python',
    stars: 482,
    forks: 64,
    color: '#3572A5',
  },
  {
    name: 'talkative-core',
    description: 'Realtime voice + text companion with pgvector memory.',
    language: 'TypeScript',
    stars: 318,
    forks: 41,
    color: '#3178C6',
  },
  {
    name: 'teamsync-crdt',
    description: 'Conflict-free realtime editing engine built on Yjs.',
    language: 'TypeScript',
    stars: 207,
    forks: 28,
    color: '#3178C6',
  },
  {
    name: 'mcp-toolkit',
    description: 'Reusable MCP server toolkit for connecting tools to agents.',
    language: 'Python',
    stars: 156,
    forks: 22,
    color: '#3572A5',
  },
];

export const GITHUB_LANGUAGES = [
  { name: 'TypeScript', value: 38, color: '#3178C6' },
  { name: 'Python', value: 31, color: '#3572A5' },
  { name: 'JavaScript', value: 14, color: '#F1E05A' },
  { name: 'Rust', value: 8, color: '#DEA584' },
  { name: 'Go', value: 6, color: '#00ADD8' },
  { name: 'Other', value: 3, color: '#94A3B8' },
];

export const RECENT_COMMITS = [
  { repo: 'agenthelix', message: 'feat: add human-in-the-loop checkpoint nodes', time: '2h ago' },
  { repo: 'talkative-core', message: 'perf: speculative streaming for sub-300ms TTFT', time: '6h ago' },
  { repo: 'mcp-toolkit', message: 'feat: auto-import tools from OpenAPI specs', time: '1d ago' },
  { repo: 'teamsync-crdt', message: 'fix: snapshot compaction under memory pressure', time: '2d ago' },
  { repo: 'agenthelix', message: 'feat: per-tenant token budgets and spend alerts', time: '3d ago' },
];

export const TIMELINE = [
  {
    year: '2021',
    title: 'Started Computer Science',
    description:
      'Began my B.Tech in Computer Science. Fell in love with systems programming and the web.',
  },
  {
    year: '2022',
    title: 'First Open Source Contributions',
    description:
      'Shipped my first merged PRs to LangChain and started building production-grade side projects.',
  },
  {
    year: '2023',
    title: 'Freelance AI Engineer',
    description:
      'Delivered RAG pipelines and chatbots for early-stage startups while finishing my degree.',
  },
  {
    year: '2024',
    title: 'Full Stack Intern @ NimbleEdge',
    description:
      'Joined NimbleEdge to build multi-agent platforms and ship features used by 200+ internal users.',
  },
  {
    year: '2025',
    title: 'Shipping & Open Sourcing',
    description:
      'Graduating, doubling down on AI engineering, and open-sourcing the tools I wish I had.',
  },
];

export const CAREER_GOALS = [
  'Build and scale AI-native products used by thousands of developers.',
  'Lead a small, high-trust team shipping agentic systems end-to-end.',
  'Contribute meaningfully to open-source AI tooling.',
  'Stay close to the code — senior individual contributor track.',
];

export type Certification = {
  title: string;
  issuer: string;
  date: string;
  id: string;
  url: string;
  description: string;
};

export const CERTIFICATIONS: Certification[] = [
  {
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'AWS (Ethnus)',
    date: 'Jan 2025',
    id: 'G62KDP2T',
    url: 'https://drive.google.com/file/d/1yfNuCkhg255UE8mBV3Y8D5LZHRFGdj72/view?usp=sharing',
    description: 'Validated knowledge of AWS Cloud platform, security, architecture, and billing practices via the Ethnus AWS Academy program.',
  },
  {
    title: 'MERN Full Stack Certification',
    issuer: 'Ethnus',
    date: 'Dec 2024',
    id: 'X53XC2TH',
    url: 'https://drive.google.com/file/d/1aFSUv7O1GUgR5dQAtxzS40BxXfPiBLIS/view?usp=sharing',
    description: 'Comprehensive bootcamp covering advanced React patterns, Node.js microservices, and MongoDB aggregations.',
  },
  {
    title: 'DevOps Foundations: CI/CD',
    issuer: 'LinkedIn',
    date: 'Dec 2025',
    id: '9e10bbb6...cbd58bd1112',
    url: 'https://drive.google.com/file/d/1iypZgpfaWDe_zROY1cHRFNSxbObfV3yG/view?usp=sharing',
    description: 'Mastered the principles of Continuous Integration and Deployment using modern toolchains.',
  },
  {
    title: 'Docker for Developers',
    issuer: 'LinkedIn',
    date: 'Dec 2025',
    id: 'd5739569...45289e74b6',
    url: 'https://drive.google.com/file/d/1vrVOANw7B5GGyKjxP60gpGLJTPTTzO6V/view?usp=sharing',
    description: 'In-depth training on containerization, multi-stage builds, and docker-compose for production environments.',
  },
  {
    title: 'Python for Beginners',
    issuer: 'Udemy',
    date: 'Sep 2022',
    id: 'UC-251e3ba5...',
    url: 'https://drive.google.com/file/d/1aoPiXk0ef7Svpgf2Jeo-ZyL0uJ_-HK7U/view?usp=sharing',
    description: 'Mastered Python fundamentals including data structures, object-oriented programming, and functional principles.',
  },
  {
    title: 'Generative AI',
    issuer: 'Oracle',
    date: 'Sep 2025',
    id: '102615554OCI25GAIOC',
    url: 'https://drive.google.com/file/d/1cFmN3aD6A8UQyopskvoy57_y_dmIt32B/view?usp=sharing',
    description: 'Completed Generative AI certification, working with LLMs, prompt engineering, and building AI applications using tools like OpenAI APIs and LangChain.',
  },
  {
    title: 'GitHub',
    issuer: 'LinkedIn',
    date: 'Sep 2025',
    id: '002c0786b8b0e292266f06397032c2e76b4e9e9168b2694697001d1ac74a9a39',
    url: 'https://drive.google.com/file/d/12NxPxIWSPZ1TLSCtG9FDUn3EUPtLGVYF/view?usp=sharing',
    description: 'Completed a GitHub certification, gaining practical knowledge of version control, repositories, branching, and collaboration workflows.',
  },
  {
    title: 'Agentic AI',
    issuer: 'Oracle',
    date: 'July 2026',
    id: '102615554AAI26OF',
    url: 'https://drive.google.com/file/d/17OYWl0c7s9X3nhdeXpUfVw5vnIWf173k/view?usp=sharing',
    description: 'Completed Agentic AI certification, gaining practical knowledge of AI Agent architecture and reasoning patterns (LLMs), tools, agent loops, MCP, LangChain, OpenAI Agents SDK, and Oracle AI Database.',
  },
];

export const SOCIAL_ICONS: Record<string, React.ComponentType<LucideProps>> = {
  github: Github,
  linkedin: Linkedin,
  email: Mail,
  leetcode: Code,
};
