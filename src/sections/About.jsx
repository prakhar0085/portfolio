import { motion } from "framer-motion";
import { Code2, Server, Zap, Cpu, Rocket, Globe, Shield, Terminal } from "lucide-react";

export const About = () => {
  const stack = [
    { name: "MERN Stack", color: "blue" },
    { name: "PostgreSQL", color: "indigo" },
    { name: "Redis", color: "red" },
    { name: "Docker", color: "blue" },
    { name: "AWS", color: "orange" },
    { name: "Generative AI", color: "emerald" },
    { name: "CI/CD", color: "purple" },
    { name: "TypeScript", color: "blue" },
  ];

  return (
    <section id="about" className="py-32 bg-[#030303] relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] -z-0" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/5 rounded-full blur-[120px] -z-0" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-20">
            <motion.span 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6"
            >
                Engineering Philosophy
            </motion.span>
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-6xl font-black text-white tracking-tighter"
            >
                Beyond Just Code.
            </motion.h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Narrative */}
            <div className="lg:col-span-7 space-y-8">
                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="space-y-6 text-lg md:text-xl text-slate-400 leading-relaxed"
                >
                    <p>
                        I’m <span className="text-white font-bold">Prakhar Tiwari</span>, a final-year CS student at VIT Bhopal who bridges the gap between software engineering and system architecture. I don't just build apps; I architect <span className="text-blue-400">production-grade systems</span>.
                    </p>
                    <p>
                        My expertise lies in building scalable, cloud-native platforms where <span className="text-white">GenAI meets robust backend logic</span>. I specialize in the MERN stack, Docker, and AWS, focusing on end-to-end ownership—from initial schema design to automated CI/CD deployments.
                    </p>
                    <p>
                        Whether it's orchestrating complex AI agents or optimizing real-time systems for <span className="text-white">1,000+ concurrent users</span>, my goal is always the same: Build software that works at scale, handles real traffic, and solves actual business problems.
                    </p>
                </motion.div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-3 pt-4">
                    {stack.map((tech, i) => (
                        <motion.span
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.05 }}
                            className="px-4 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 text-sm font-medium hover:border-blue-500/50 hover:text-white transition-all pointer-events-none"
                        >
                            {tech.name}
                        </motion.span>
                    ))}
                </div>
            </div>

            {/* Right Column: Key Pillars (Bento Style) */}
            <div className="lg:col-span-5 grid gap-6">
                
                {[
                    {
                        title: "Production Mindset",
                        desc: "I build systems, not toys. Every line of code I write is containerized and ready for cloud deployment.",
                        icon: Shield,
                        color: "blue"
                    },
                    {
                        title: "AI First",
                        desc: "Specialized in integrating LLMs, RAG pipelines, and AI agents into scalable SaaS platforms.",
                        icon: Zap,
                        color: "emerald"
                    },
                    {
                        title: "Scalability",
                        desc: "Experience with Redis caching, WebRTC, and message queues to handle high-concurrency environments.",
                        icon: Server,
                        color: "indigo"
                    }
                ].map((pillar, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="group p-6 bg-zinc-900/40 rounded-3xl border border-zinc-800/50 hover:bg-zinc-900/60 transition-all"
                    >
                        <div className="flex gap-5">
                            <div className={`p-3 rounded-2xl bg-${pillar.color}-500/10 text-${pillar.color}-500 group-hover:scale-110 transition-transform`}>
                                <pillar.icon size={24} />
                            </div>
                            <div>
                                <h4 className="text-white font-bold mb-1">{pillar.title}</h4>
                                <p className="text-slate-500 text-sm leading-relaxed">{pillar.desc}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}

                {/* Callout Card */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="p-8 bg-gradient-to-br from-blue-600/20 to-indigo-600/20 rounded-3xl border border-blue-500/20 relative overflow-hidden group"
                >
                    <div className="relative z-10">
                        <p className="text-white font-bold text-lg mb-2 italic">"Systems, Not Just Software."</p>
                        <p className="text-blue-300 text-sm">Full-cycle ownership from dev to production.</p>
                    </div>
                </motion.div>
            </div>
        </div>

      </div>
    </section>
  );
};
