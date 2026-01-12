import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export const Footer = () => {
    return (
      <footer className="bg-black py-8 border-t border-white/5">
        <div className="container mx-auto px-6 flex flex-col items-center">
            
            <div className="flex gap-6 mb-6">
                <a href="https://github.com/prakhar0085" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-white transition-colors">
                    <Github size={20} />
                </a>
                <a href="https://www.linkedin.com/in/prakhar-tiwari-693b3b251/" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-blue-400 transition-colors">
                    <Linkedin size={20} />
                </a>
                <a href="mailto:prakhartiwari942@gmail.com" className="text-slate-500 hover:text-red-400 transition-colors">
                    <Mail size={20} />
                </a>
            </div>

            <div className="container mx-auto px-6 flex flex-col items-center text-center">
                <p className="text-slate-400 text-sm mb-4 font-medium">
                    &copy; 2025 – 2026 Prakhar Tiwari. All rights reserved.
                </p>
                <p className="text-slate-500 text-xs font-mono mb-3 leading-relaxed max-w-2xl px-4">
                    Built with React, Tailwind, Node.js, and deployed using Docker, GitHub Actions, and AWS.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[10px] md:text-xs text-blue-500/60 uppercase tracking-widest font-bold border-t border-white/5 pt-4">
                    <span>Production-grade architecture</span>
                    <span className="hidden md:inline text-white/20">•</span>
                    <span>Real-time systems</span>
                    <span className="hidden md:inline text-white/20">•</span>
                    <span>AI-powered applications</span>
                </div>
            </div>
        </div>
      </footer>
    );
};
