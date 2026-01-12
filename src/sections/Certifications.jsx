import { motion } from "framer-motion";
import { BadgeCheck, Award, Calendar, ExternalLink } from "lucide-react";

// Helper for Certification Card
const CertificationCard = ({ title, issuer, date, id, desc, delay, image, url }) => (
    <motion.a 
        href={url || "#"}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay }}
        whileHover={{ y: -5 }}
        viewport={{ once: true }}
        className="glass-card glass-card-hover p-6 rounded-xl group h-full flex flex-col cursor-pointer"
    >
        <div className="flex justify-between items-start mb-4">
             <div className="flex items-center gap-2 text-blue-400">
                 <Award size={24} />
                 <span className="text-xs font-bold uppercase tracking-wider bg-blue-500/10 px-2 py-0.5 rounded text-blue-300">
                    {issuer}
                 </span>
             </div>
             <div className="flex items-center gap-1.5 text-pink-500/70 text-[10px] group-hover:text-pink-400 transition-colors uppercase font-bold tracking-tighter">
                <span>Verify</span>
                <ExternalLink size={12} />
             </div>
             {id && (
                 <div className="flex items-center gap-1 text-green-500 text-xs font-medium bg-green-500/10 px-2 py-0.5 rounded-full">
                     <BadgeCheck size={12} />
                     Verified
                 </div>
             )}
        </div>

        {image && (
            <div className="mb-4 rounded-lg overflow-hidden border border-zinc-800 bg-zinc-950 aspect-[4/3] flex items-center justify-center p-2">
                <img 
                    src={image} 
                    alt={title} 
                    className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-700"
                />
            </div>
        )}
        
        <h3 className="text-xl font-bold text-white mb-2 leading-tight group-hover:text-blue-400 transition-colors">
            {title}
        </h3>
        
        <div className="flex items-center gap-2 text-slate-500 text-sm mb-4">
            <Calendar size={14} />
            <span>Issued: {date}</span>
        </div>

        <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
            {desc}
        </p>
        
        {id && (
            <div className="text-xs text-slate-600 font-mono pt-4 border-t border-zinc-800 break-all">
                Credential ID: {id}
            </div>
        )}
    </motion.a>
);

export const Certifications = () => {
    return (
      <section id="certifications" className="py-24 bg-black relative">
        <div className="container mx-auto px-6 max-w-6xl">
           <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">Certifications</h2>
              <p className="text-slate-400">Validated expertise in Cloud and Development.</p>
           </div>
           
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <CertificationCard 
                    title="AWS Certified Cloud Practitioner"
                    issuer="AWS (Ethnus)"
                    date="Jan 2025"
                    id="G62KDP2T"
                    url="https://drive.google.com/file/d/1yfNuCkhg255UE8mBV3Y8D5LZHRFGdj72/view?usp=sharing" // Put your verification link here
                    desc="Validated knowledge of AWS Cloud platform, security, architecture, and billing practices via the Ethnus AWS Academy program."
                    delay={0.1}
                />
                <CertificationCard 
                    title="MERN Full Stack Certification"
                    issuer="Ethnus"
                    date="Dec 2024"
                    id="X53XC2TH"
                    url="https://drive.google.com/file/d/1aFSUv7O1GUgR5dQAtxzS40BxXfPiBLIS/view?usp=sharing" // Put your link here
                    desc="Comprehensive bootcamp covering advanced React patterns, Node.js microservices, and MongoDB aggregations."
                    delay={0.2}
                />
                <CertificationCard 
                    title="DevOps Foundations: CI/CD"
                    issuer="LinkedIn"
                    date="Dec 2025"
                    id="9e10bbb68305630fa91bea4622fbb6edf052ee12927d1651b94f6cbd58bd1112"
                    url="https://drive.google.com/file/d/1iypZgpfaWDe_zROY1cHRFNSxbObfV3yG/view?usp=sharing"
                    desc="Mastered the principles of Continuous Integration and Deployment using modern toolchains."
                    delay={0.3}
                />
                 <CertificationCard 
                    title="Docker for Developers"
                    issuer="LinkedIn"
                    date="Dec 2025"
                    id="d573956969a047231437e252ca73f7f9c19556f879b29921a3df4845289e74b6"
                    url="https://drive.google.com/file/d/1vrVOANw7B5GGyKjxP60gpGLJTPTTzO6V/view?usp=sharing"
                    desc="In-depth training on containerization, multi-stage builds, and docker-compose for production."
                    delay={0.4}
                />
                <CertificationCard 
                    title="Python for Beginners"
                    issuer="Udemy"
                    date="Sep 2022"
                    id="UC-251e3ba5-0a45-49f5-98e7-dcf2a350475f"
                    url="https://drive.google.com/file/d/1aoPiXk0ef7Svpgf2Jeo-ZyL0uJ_-HK7U/view?usp=sharing"
                    desc="Mastered Python fundamentals including data structures, object-oriented programming, and functional programming principles."
                    delay={0.5}
                />
            </div>
        </div>
      </section>
    );
};
