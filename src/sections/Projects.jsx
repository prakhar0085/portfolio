import project1 from '../assets/skillssprint.png';
import project2 from '../assets/teamsync.png';
import project3 from '../assets/talkative.png';

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { ExternalLink, Github, CheckCircle2, Server, Activity, ShieldCheck, Zap, Layers, Terminal as TerminalIcon } from "lucide-react";
import { useRef } from "react";

const ProjectFeature = ({ project, index }) => {
    const isEven = index % 2 === 0;
    const cardRef = useRef(null);

    // 3D Tilt Values
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };
    
    return (
        <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-24 items-center mb-52 last:mb-0`}
        >
            {/* Context/Text Side */}
            <div className="flex-1 space-y-8">
                <div className="space-y-4">
                    <div className="flex items-center gap-3">
                        <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold uppercase tracking-[0.2em]">
                            {project.isSaaS ? 'Production SaaS' : 'Infrastructure'}
                        </span>
                        <div className="flex items-center gap-1.5 text-emerald-500 text-[10px] font-bold uppercase tracking-widest bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                            <Activity size={10} className="animate-pulse" />
                            Live System
                        </div>
                    </div>
                    
                    <h3 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-[0.9]">
                        {project.title.split(' – ')[0]} <br/>
                        <span className="text-slate-600 text-2xl md:text-3xl font-medium tracking-tight">
                            {project.title.split(' – ')[1]}
                        </span>
                    </h3>
                </div>
                
                <p className="text-lg text-slate-400 leading-relaxed font-medium">
                    {project.description}
                </p>

                {/* Technical Modules */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <motion.div 
                        whileHover={{ y: -5 }}
                        className="p-6 bg-[#0A0A0A] rounded-[2rem] border border-white/5 space-y-4 group hover:border-blue-500/30 transition-all duration-500"
                    >
                        <div className="flex items-center gap-2 text-blue-400">
                            <Zap size={18} />
                            <h4 className="text-[10px] font-black uppercase tracking-widest">Key Capabilities</h4>
                        </div>
                        <ul className="space-y-3">
                            {project.features && project.features.map((feature, i) => (
                                <li key={i} className="flex items-start gap-2 text-slate-400 text-xs font-semibold group-hover:text-slate-200 transition-colors">
                                    <span className="text-blue-500 mt-1 w-1 h-1 rounded-full bg-blue-500" />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div 
                        whileHover={{ y: -5 }}
                        className="p-6 bg-[#0A0A0A] rounded-[2rem] border border-white/5 space-y-4 group hover:border-indigo-500/30 transition-all duration-500"
                    >
                        <div className="flex items-center gap-2 text-indigo-400">
                            <Layers size={18} />
                            <h4 className="text-[10px] font-black uppercase tracking-widest">Architecture</h4>
                        </div>
                        <ul className="space-y-3">
                            {project.architecture && project.architecture.map((item, i) => (
                                <li key={i} className="flex items-start gap-2 text-slate-300 text-[11px] font-mono opacity-60 group-hover:opacity-100 transition-opacity">
                                    <span className="text-indigo-500">→</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

                <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                        <motion.span 
                            key={tag}
                            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.05)" }}
                            className="px-4 py-2 bg-zinc-900 text-zinc-400 text-[10px] font-bold uppercase rounded-xl border border-white/5 tracking-wider cursor-default shadow-sm"
                        >
                            {tag}
                        </motion.span>
                    ))}
                </div>

                <div className="flex items-center gap-8 pt-6">
                     <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 text-white font-bold hover:text-blue-400 transition-all">
                        <span className="p-3 rounded-2xl bg-white/5 group-hover:bg-blue-500/20 group-hover:rotate-12 transition-all duration-300">
                            <ExternalLink size={20} />
                        </span>
                        Launch System
                     </a>
                     <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 text-slate-500 font-bold hover:text-white transition-all">
                        <span className="p-3 rounded-2xl bg-white/5 group-hover:bg-white/10 group-hover:-rotate-12 transition-all duration-300">
                            <Github size={20} />
                        </span>
                        Browse Code
                     </a>
                </div>
            </div>

            {/* Visual Side: 3D Interactive Browser */}
            <div className="flex-1 w-full lg:sticky lg:top-36 perspective-1000">
                <motion.div 
                    ref={cardRef}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    style={{ rotateX, rotateY }}
                    className="relative transition-all duration-200"
                >
                    {/* Dynamic Outer Glow */}
                    <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-[2.5rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                    
                    {/* Main Frame */}
                    <div className="relative bg-[#080808] border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl group cursor-crosshair">
                        {/* Browser Bar */}
                        <div className="h-14 bg-zinc-900/50 border-b border-white/5 flex items-center px-8 gap-6 backdrop-blur-xl">
                            <div className="flex gap-2.5">
                                <div className="w-3.5 h-3.5 rounded-full bg-[#FF5F56] shadow-lg shadow-red-500/20" />
                                <div className="w-3.5 h-3.5 rounded-full bg-[#FFBD2E] shadow-lg shadow-yellow-500/20" />
                                <div className="w-3.5 h-3.5 rounded-full bg-[#27C93F] shadow-lg shadow-emerald-500/20" />
                            </div>
                            <div className="flex-1 max-w-md h-8 bg-white/5 rounded-2xl border border-white/10 flex items-center px-5 group-hover:bg-white/10 transition-colors">
                                <div className="flex items-center gap-3 text-[11px] text-slate-500 font-mono">
                                    <ShieldCheck size={12} className="text-emerald-500" />
                                    <span className="opacity-60 tracking-wider">https://{project.title.split(' – ')[0].toLowerCase().replace(/\s/g, '')}.prakhar.dev</span>
                                </div>
                            </div>
                        </div>

                        {/* Image Container with Interactive Overlays */}
                        <div className="aspect-[16/10] relative overflow-hidden bg-black flex items-center justify-center">
                            {project.image ? (
                                <>
                                    <img 
                                        src={project.image} 
                                        alt="" 
                                        className="absolute inset-0 w-full h-full object-cover blur-3xl opacity-10 scale-150"
                                    />
                                    <motion.img 
                                        src={project.image} 
                                        alt={project.title} 
                                        className="relative z-10 w-full h-full object-contain p-6 transition-all duration-700 group-hover:scale-[1.08] drop-shadow-2xl"
                                    />
                                </>
                            ) : (
                                <div className="flex flex-col items-center gap-4 opacity-10">
                                    <Server size={80} className="text-blue-500" />
                                    <span className="font-mono text-sm uppercase tracking-[0.6em]">Core Active</span>
                                </div>
                            )}

                            {/* Floating Terminal Log Overlay */}
                            <motion.div 
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="absolute top-6 right-6 z-30 w-48 bg-black/80 backdrop-blur-xl p-4 rounded-2xl border border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-500"
                            >
                                <div className="flex items-center gap-2 mb-3 border-b border-white/5 pb-2">
                                    <TerminalIcon size={12} className="text-blue-400" />
                                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Logs</span>
                                </div>
                                <div className="space-y-2 font-mono text-[9px]">
                                    <div className="flex gap-2">
                                        <span className="text-emerald-500">READY</span>
                                        <span className="text-slate-500 italic">v2.4.0</span>
                                    </div>
                                    <div className="flex gap-2">
                                        <span className="text-blue-500">SYNC</span>
                                        <span className="text-slate-500">CloudNode:01</span>
                                    </div>
                                    <div className="flex gap-2 text-indigo-400 animate-pulse">
                                        <span>•</span>
                                        <span>Heartbeat OK</span>
                                    </div>
                                </div>
                            </motion.div>
                            
                            {/* System Status Pill */}
                            <div className="absolute bottom-8 left-8 z-30">
                                <motion.div 
                                    className="px-5 py-2.5 bg-black/90 backdrop-blur-md rounded-2xl border border-emerald-500/20 flex items-center gap-3 shadow-xl"
                                >
                                    <div className="relative">
                                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                                        <div className="absolute inset-0 w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping opacity-75" />
                                    </div>
                                    <span className="text-[10px] font-black text-white uppercase tracking-[0.2em] whitespace-nowrap">Cluster: Online</span>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

const projects = [
  {
    title: "SkillsSprint – AI-Powered LMS",
    isSaaS: true,
    image: project1,
    description: "A production-grade Learning Management System designed for intent-based course discovery. Built as a scalable SaaS platform with optimized media delivery and secure processing.",
    features: [
        "Semantic Search driven by Google Gemini AI",
        "Secure MVC backend with JWT & Google OAuth",
        "Razorpay production payment integration",
        "Optimized media pipeline via Cloudinary"
    ],
    architecture: [
        "Cloud-native MERN ecosystem",
        "PostgreSQL + Redis clustering",
        "Stateless Docker containers",
        "Automated GitHub Actions CI/CD",
        "AWS EC2 multi-region deployment"
    ],
    tags: ["MERN Stack", "Generative AI", "AWS Infrastructure", "Docker", "Redis"],
    links: { 
        github: "https://github.com/prakhar0085/Learning_Management_System",
        live: "http://51.20.148.95:5173/"
    },
  },
  {
    title: "TeamSync – GenAI Task Orchestration",
    isSaaS: true,
    image: project2,
    description: "An intelligent autonomous task system that converts natural language into complex organizational workflows, featuring event-driven automation at its core.",
    features: [
        "Natural language to workflow via Gemini",
        "Event-driven automation using Inngest",
        "Multi-tenant RBAC with Clerk Auth",
        "Real-time status synchronization"
    ],
    architecture: [
        "Serverless-ready Event Architecture",
        "PostgreSQL (Neon) with Prisma ORM",
        "Edge-optimized Middleware",
        "Clerk Enterprise Auth Patterns"
    ],
    tags: ["Next.js", "Inngest", "Prisma", "Clerk", "AI Agents"],
    links: { 
        github: "https://github.com/prakhar0085/TeamSync", 
        live: "https://team-sync-alpha.vercel.app/" 
    },
  },
  {
    title: "Talkative – Real-Time Chat System",
    isSaaS: true,
    image: project3,
    description: "A horizontally scalable messaging engine optimized for low-latency communication and end-to-end encrypted data transmission at massive scale.",
    features: [
        "Scalable WebSockets via Redis Pub/Sub",
        "End-to-End Encryption (Web Crypto API)",
        "AI-powered intelligence using Groq",
        "Low-latency WebRTC video signaling"
    ],
    architecture: [
        "Redis Adapter for Horizontal Scaling",
        "End-to-end Encrypted API Gateways",
        "LLaMA-3 / Groq High-speed Inference",
        "Stateless WebSocket Clustering"
    ],
    tags: ["Socket.IO", "Redis Pub/Sub", "WebRTC", "E2E Encryption"],
    links: { 
        github: "https://github.com/prakhar0085/Talkative", 
        live: "https://talkative-3ndq.onrender.com/" 
    },
  },
];

export const Projects = () => {
    return (
      <section id="projects" className="py-40 bg-[#030303] relative overflow-hidden">
        {/* Background Grid */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center text-center mb-32">
            <motion.span 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6"
            >
                Portfolio Case Studies
            </motion.span>
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-7xl font-black text-white tracking-tighter"
            >
                Production <span className="text-slate-600 italic">Systems</span>.
            </motion.h2>
            <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-slate-500 text-lg max-w-2xl mt-6 italic"
            >
                Systems architected for scale, longevity, and real-world impact.
            </motion.p>
          </div>
  
          <div>
            {projects.map((project, index) => (
              <ProjectFeature key={index} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>
    );
  };

