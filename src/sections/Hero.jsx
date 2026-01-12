import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Server, Layout, Shield, MoveRight, Download, Cpu, Database, Network } from "lucide-react";
import { useEffect } from "react";

export const Hero = () => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 150 };
    const dx = useSpring(mouseX, springConfig);
    const dy = useSpring(mouseY, springConfig);

    useEffect(() => {
        const handleMouseMove = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    // Parallax transforms for background elements
    const bgX = useTransform(dx, [0, window.innerWidth], [20, -20]);
    const bgY = useTransform(dy, [0, window.innerHeight], [20, -20]);

    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative bg-[#000] overflow-hidden selection:bg-blue-500/30">
            
            {/* Interactive Spotlight Background */}
            <motion.div 
                className="absolute inset-0 z-0 pointer-events-none opacity-40"
                style={{
                    background: useTransform(
                        [dx, dy],
                        ([x, y]) => `radial-gradient(600px circle at ${x}px ${y}px, rgba(37, 99, 235, 0.15), transparent 80%)`
                    )
                }}
            />

            {/* Floating Infrastructure Nodes (Interactive Parallax) */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[
                    { Icon: Server, top: '20%', left: '15%', delay: 0, size: 40 },
                    { Icon: Database, top: '70%', left: '25%', delay: 1, size: 30 },
                    { Icon: Cpu, top: '15%', left: '80%', delay: 2, size: 35 },
                    { Icon: Network, top: '60%', left: '75%', delay: 1.5, size: 45 },
                ].map((node, i) => (
                    <motion.div
                        key={i}
                        style={{ 
                            top: node.top, 
                            left: node.left,
                            x: useTransform(dx, [0, window.innerWidth], [i * 10, -i * 10]),
                            y: useTransform(dy, [0, window.innerHeight], [i * 15, -i * 15]),
                        }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ 
                            opacity: [0.1, 0.3, 0.1],
                            scale: [1, 1.1, 1],
                        }}
                        transition={{ 
                            duration: 4, 
                            repeat: Infinity, 
                            delay: node.delay 
                        }}
                        className="absolute text-blue-500/20"
                    >
                        <node.Icon size={node.size} />
                    </motion.div>
                ))}
            </div>

            {/* Subtle Grid Interaction with Premium Utility */}
            <motion.div 
                style={{ x: bgX, y: bgY }}
                className="absolute inset-0 opacity-20 pointer-events-none bg-grid-premium fading-grid" 
            />

            <div className="container mx-auto px-6 relative z-10 max-w-6xl pt-32 md:pt-40">
                <div className="flex flex-col items-center text-center">
                    
                    {/* 1. Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.2] tracking-tight mb-8 font-cal"
                    >
                        Full-Stack Software Engineer <br className="hidden md:block" />
                        <span className="text-gradient">
                            (Final-year CS Student)
                        </span>
                    </motion.h1>

                    {/* 2. Sub-headline */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-slate-400 text-lg md:text-xl max-w-4xl leading-relaxed mb-12 font-medium"
                    >
                        I’m <span className="text-white font-semibold">Prakhar Tiwari</span>, a final-year Computer Science student building cloud-native, AI-powered applications using <span className="text-blue-400">MERN, Redis, Docker, AWS, and Generative AI.</span>
                    </motion.p>

                    {/* 3. Actions */}
                    <div className="flex flex-col items-center gap-6 mb-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="flex flex-col sm:flex-row items-center gap-6"
                        >
                            <a 
                                href="/projects"
                                className="group relative px-8 py-4 bg-white text-black font-bold rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95"
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    🚀 View Production Systems
                                    <MoveRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </span>
                            </a>
                            <a 
                                href="/Prakhar_Tiwari_Resume.pdf"
                                download="Prakhar_Tiwari_Resume.pdf"
                                className="group px-8 py-4 bg-transparent text-white font-bold rounded-full border border-white/10 hover:bg-white/5 transition-all flex items-center gap-2"
                            >
                                📄 Download Resume
                            </a>
                        </motion.div>
                        
                        <motion.p 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.4 }}
                            className="text-slate-500 text-sm font-medium italic"
                        >
                            Built with real SaaS architecture — authentication, payments, AI, CI/CD, and cloud deployment included.
                        </motion.p>
                    </div>

                    {/* 4. Horizontal Impact Band */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="w-full border-y border-white/[0.05] py-10 flex flex-wrap justify-center gap-x-16 gap-y-8"
                    >
                        <div className="flex items-center gap-3 group/metric cursor-default">
                            <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500 transition-all group-hover/metric:bg-blue-500 group-hover/metric:text-white group-hover/metric:scale-110">
                                <Server size={20} />
                            </div>
                            <div className="text-left">
                                <div className="text-white font-bold text-sm">3+ Deployed</div>
                                <div className="text-slate-500 text-[11px] uppercase tracking-wider font-bold">Production Systems</div>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 group/metric cursor-default">
                            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-500 transition-all group-hover/metric:bg-indigo-500 group-hover/metric:text-white group-hover/metric:scale-110">
                                <Layout size={20} />
                            </div>
                            <div className="text-left">
                                <div className="text-white font-bold text-sm">1000+ Users</div>
                                <div className="text-slate-500 text-[11px] uppercase tracking-wider font-bold">Concurrent Scale</div>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 group/metric cursor-default">
                            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 transition-all group-hover/metric:bg-emerald-500 group-hover/metric:text-white group-hover/metric:scale-110">
                                <Shield size={20} />
                            </div>
                            <div className="text-left">
                                <div className="text-white font-bold text-sm">AWS / Docker</div>
                                <div className="text-slate-500 text-[11px] uppercase tracking-wider font-bold">Automated CI/CD</div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};
