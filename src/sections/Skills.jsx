import { motion } from "framer-motion";
import { Server, Database, Cloud, Cpu, Layout, Terminal, Blocks, Zap, ShieldCheck, Gauge } from "lucide-react";

// Helper component for Evidence-based Skill Items
const SkillItem = ({ name, evidence }) => (
    <div className="group/item relative pl-4 mb-4 last:mb-0 border-l border-zinc-800 hover:border-blue-500/50 transition-colors">
        <div className="flex items-center gap-2 mb-1">
            <span className="text-white font-semibold text-sm tracking-tight group-hover/item:text-blue-400 transition-colors">{name}</span>
        </div>
        <p className="text-slate-500 text-xs leading-relaxed">
            {evidence}
        </p>
    </div>
);

const SkillCategory = ({ title, icon: Icon, skills, delay, color }) => {
    const colorMap = {
        blue: "text-blue-400 bg-blue-500/10 border-blue-500/20",
        emerald: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
        purple: "text-purple-400 bg-purple-500/10 border-purple-500/20",
        orange: "text-orange-400 bg-orange-500/10 border-orange-500/20",
        indigo: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20",
    };

    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay }}
            viewport={{ once: true }}
            className="group relative glass-card glass-card-hover p-7 rounded-[2rem] overflow-hidden"
        >
            {/* Subtle Gradient Background */}
            <div className={`absolute -right-16 -top-16 w-32 h-32 blur-[80px] rounded-full opacity-0 group-hover:opacity-20 transition-opacity bg-current ${colorMap[color].split(' ')[0]}`} />
            
            <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border transition-transform group-hover:scale-110 duration-500 ${colorMap[color]}`}>
                        <Icon size={24} />
                    </div>
                    <h3 className="text-lg font-black text-white tracking-tight">{title}</h3>
                </div>
            </div>
            
            <div className="space-y-6">
                {skills.map((skill, idx) => (
                    <SkillItem key={idx} name={skill.name} evidence={skill.evidence} />
                ))}
            </div>
        </motion.div>
    );
};

export const Skills = () => {
  return (
    <section id="skills" className="py-32 bg-[#030303] relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none overflow-hidden -z-0">
            <div className="absolute top-[10%] right-[10%] w-[30%] h-[30%] bg-blue-600/5 rounded-full blur-[120px]" />
            <div className="absolute bottom-[10%] left-[10%] w-[30%] h-[30%] bg-purple-600/5 rounded-full blur-[120px]" />
        </div>

       <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="flex flex-col items-center text-center mb-24">
            <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6"
            >
                Technical Capabilities
            </motion.div>
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter"
            >
                Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500 uppercase italic">Arsenal</span>.
            </motion.h2>
            <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-slate-500 text-lg max-w-2xl"
            >
                I don’t just use tools; I architect production systems with them. Every skill is backed by real-world deployment experience.
            </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            <SkillCategory 
                title="Backend Core" 
                icon={Terminal}
                delay={0.1}
                color="blue"
                skills={[
                    { name: "Node.js & Express", evidence: "Architected REST APIs handling 1,000+ concurrent requests." },
                    { name: "WebSockets (Socket.io)", evidence: "Implemented sub-millisecond real-time messaging pipelines." },
                    { name: "System Design", evidence: "Experience designing microservices & event-driven architectures." }
                ]}
            />

            <SkillCategory 
                title="Cloud & DevOps" 
                icon={Cloud}
                delay={0.2}
                color="purple"
                skills={[
                    { name: "AWS (EC2, S3)", evidence: "Deployed production apps with auto-scaling & load balancing." },
                    { name: "Docker", evidence: "Containerized microservices for consistent production environments." },
                    { name: "CI/CD (GitHub Actions)", evidence: "Automated multi-stage testing and deployment workflows." }
                ]}
            />

            <SkillCategory 
                title="AI & Intelligence" 
                icon={Cpu}
                delay={0.3}
                color="emerald"
                skills={[
                    { name: "Google Gemini API", evidence: "Integrated semantic search for intelligent course discovery." },
                    { name: "RAG Pipelines", evidence: "Built context-aware AI agents using vector embeddings." },
                    { name: "LangChain", evidence: "Orchestrated complex LLM workflows for task automation." }
                ]}
            />

            <SkillCategory 
                title="Data & Storage" 
                icon={Database}
                delay={0.4}
                color="orange"
                skills={[
                    { name: "Redis", evidence: "Used for real-time Pub/Sub and high-speed distributed caching." },
                    { name: "PostgreSQL", evidence: "Managed relational data with optimized indexing and schemas." },
                    { name: "MongoDB", evidence: "Designed complex aggregations for heavy analytics loads." }
                ]}
            />

            <SkillCategory 
                title="Web Architecture" 
                icon={Layout}
                delay={0.5}
                color="indigo"
                skills={[
                    { name: "React.js & Next.js", evidence: "Built component-driven UIs with SSR/SSG for peak performance." },
                    { name: "TypeScript", evidence: "Developed type-safe applications for long-term maintainability." },
                    { name: "Tailwind CSS", evidence: "Rapidly prototyped responsive, high-performance UI systems." }
                ]}
            />

            {/* Impact Metric Module */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="bg-gradient-to-br from-blue-600/20 to-indigo-600/20 p-8 rounded-[2rem] border border-blue-500/20 flex flex-col justify-center items-center text-center relative overflow-hidden group"
            >
                <div className="relative z-10">
                    <Gauge className="text-blue-400 mb-6 mx-auto group-hover:rotate-45 transition-transform duration-700" size={48} />
                    <h4 className="text-white text-2xl font-black mb-2 tracking-tight">Production Grade</h4>
                    <p className="text-blue-300/60 text-sm font-medium">Focused on performance, security, and scalability above all else.</p>
                </div>
                <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-40 transition-opacity">
                    <ShieldCheck size={120} className="text-blue-400" />
                </div>
            </motion.div>

        </div>
       </div>
    </section>
  );
};
