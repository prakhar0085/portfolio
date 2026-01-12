import { Download, ExternalLink } from "lucide-react";

export const Resume = () => {
  return (
    <section id="resume" className="py-20 bg-blue-900/10">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6 text-white">Need a detailed overview?</h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Grab a copy of my resume to learn more about my experience, education, and technical qualifications.
        </p>
        
        <div className="flex justify-center gap-4">
            <a 
                href="/Prakhar_Tiwari_Resume.pdf" 
                download="Prakhar_Tiwari_Resume.pdf"
                className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all shadow-lg shadow-blue-500/20"
            >
                <Download size={20} />
                Download Resume
            </a>
            <a 
                href="/Prakhar_Tiwari_Resume.pdf" 
                target="_blank"
                className="flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-lg font-medium transition-all"
            >
                <ExternalLink size={20} />
                View Resume
            </a>
        </div>
      </div>
    </section>
  );
};
