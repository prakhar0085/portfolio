import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin, BookOpen } from "lucide-react";

const EducationCard = ({ institution, degree, year, location, desc, coursework, cgpa }) => (
    <motion.div 
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="relative pl-8 md:pl-0"
    >
        {/* Timeline Line (Desktop) */}
        <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-zinc-800" />
        
        {/* Timeline Dot (Desktop) */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-6 w-4 h-4 rounded-full bg-black border-2 border-blue-500 z-10 items-center justify-center">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
            {/* Left Side (Time & Place) */}
            <div className="md:text-right md:pt-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium mb-2">
                    <Calendar size={14} />
                    {year}
                </div>
                <div className="text-zinc-500 text-sm flex items-center md:justify-end gap-1 mb-2">
                     <MapPin size={14} />
                     {location}
                </div>
                {cgpa && (
                    <div className="text-zinc-300 text-sm font-bold md:justify-end flex">
                        <span className="bg-zinc-800 px-2 py-1 rounded border border-zinc-700">CGPA: {cgpa}</span>
                    </div>
                )}
            </div>

            {/* Right Side (Content) */}
            <div className="bg-zinc-900/50 p-6 rounded-2xl border border-zinc-800 hover:border-zinc-700 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center text-white">
                        <GraduationCap size={20} />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-white">{institution}</h3>
                        <p className="text-blue-400 font-medium">{degree}</p>
                    </div>
                </div>
                
                <p className="text-zinc-400 leading-relaxed mb-6">
                    {desc}
                </p>

                <div>
                    <h4 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-3 flex items-center gap-2">
                        <BookOpen size={14} />
                        Academic & Practical Focus
                    </h4>
                    <div className="flex flex-wrap gap-2">
                        {coursework.map(course => (
                            <span key={course} className="px-2.5 py-1 bg-zinc-800 text-zinc-300 text-xs rounded border border-zinc-700/50">
                                {course}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </motion.div>
);

export const Education = () => {
    return (
        <section id="education" className="py-24 bg-black relative">
            <div className="container mx-auto px-6 max-w-5xl">
                <div className="text-center mb-20">
                    <h2 className="text-4xl font-bold text-white mb-4">Education</h2>
                    <p className="text-slate-400 text-lg">My engineering foundation and academic focus.</p>
                </div>

                <div className="space-y-12">
                     <EducationCard 
                        institution="VIT Bhopal University"
                        degree="B.Tech in Computer Science & Engineering"
                        year="2022 — 2026"
                        location="Bhopal, India"
                        cgpa="8.05 / 10"
                        desc="Final-year Computer Science student focused on backend engineering, full-stack development, and AI-powered systems. Built and deployed production-grade applications using MERN, PostgreSQL, Redis, Docker, AWS, and Generative AI."
                        coursework={[
                            "Data Structures & Algorithms", 
                            "Operating Systems", 
                            "DBMS", 
                            "Computer Networks", 
                            "Cloud Computing", 
                            "Artificial Intelligence",
                            "Scaling SaaS Systems",
                            "Real-time Architectures"
                        ]}
                     />
                </div>
            </div>
        </section>
    );
};
