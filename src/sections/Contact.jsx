import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Download, Send } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-black relative border-t border-white/5">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        
        <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                Let’s Work Together
            </h2>
            <div className="space-y-4">
                <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                    I’m actively seeking full-time Software Engineer opportunities for 2026.
                </p>
                <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                    If you’re looking for someone who understands production systems, cloud infrastructure, and AI-powered applications, let’s connect.
                </p>
                <p className="text-sm font-mono text-blue-500/80 max-w-2xl mx-auto border-t border-white/5 pt-4 uppercase tracking-wider">
                    Experienced with AWS, Docker, CI/CD, Redis, real-time systems, and Generative AI in production environments.
                </p>
            </div>
        </div>

        <div className="flex flex-col items-center gap-6 mb-16">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                <button 
                    onClick={() => {
                        const email = "prakhartiwari942@gmail.com";
                        window.location.href = `mailto:${email}?subject=Project Enquiry - [Your Name]`;
                        navigator.clipboard.writeText(email);
                        alert("Email address copied to clipboard & Mail client opened!");
                    }}
                    className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all flex items-center gap-3 shadow-lg shadow-blue-500/10 active:scale-95 group w-full md:w-auto"
                >
                    📩 <span>Email Me</span>
                </button>
                <a 
                    href="/Prakhar_Tiwari_Resume.pdf" 
                    download="Prakhar_Tiwari_Resume.pdf"
                    className="px-8 py-4 bg-zinc-900 hover:bg-zinc-800 text-white font-bold rounded-xl border border-zinc-700 transition-all flex items-center gap-3 active:scale-95 w-full md:w-auto"
                >
                    📄 <span>Download Resume</span>
                </a>
            </div>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-x-12 gap-y-4 pt-4">
                <a 
                    href="mailto:prakhartiwari942@gmail.com"
                    className="flex items-center gap-2.5 text-slate-400 hover:text-blue-400 transition-colors group"
                >
                    <Mail size={18} className="text-slate-500 group-hover:text-blue-400" />
                    <span className="font-medium">prakhartiwari942@gmail.com</span>
                </a>
            </div>

            <p className="text-slate-600 text-sm">
                Prefer LinkedIn? <a href="https://www.linkedin.com/in/prakhar-tiwari-693b3b251/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Connect with me there.</a>
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
             <a 
                href="https://github.com/prakhar0085" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-6 bg-zinc-900/30 rounded-2xl border border-zinc-800 hover:border-white/20 transition-all flex flex-col items-center gap-3 group"
             >
                <Github size={32} className="text-slate-500 group-hover:text-white transition-colors" />
                <span className="text-slate-400 group-hover:text-white font-medium">GitHub</span>
             </a>

             <a 
                href="https://www.linkedin.com/in/prakhar-tiwari-693b3b251/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-6 bg-zinc-900/30 rounded-2xl border border-zinc-800 hover:border-blue-500/30 transition-all flex flex-col items-center gap-3 group"
             >
                <Linkedin size={32} className="text-slate-500 group-hover:text-blue-400 transition-colors" />
                <span className="text-slate-400 group-hover:text-white font-medium">LinkedIn</span>
             </a>

             <button 
                onClick={() => {
                    const email = "prakhartiwari942@gmail.com";
                    window.location.href = `mailto:${email}`;
                    navigator.clipboard.writeText(email);
                    alert("Email copied to clipboard!");
                }}
                className="p-6 bg-zinc-900/30 rounded-2xl border border-zinc-800 hover:border-green-500/30 transition-all flex flex-col items-center gap-3 group w-full"
             >
                <Send size={32} className="text-slate-500 group-hover:text-green-400 transition-colors" />
                <span className="text-slate-400 group-hover:text-white font-medium">Email</span>
             </button>
        </div>

      </div>
    </section>
  );
};
