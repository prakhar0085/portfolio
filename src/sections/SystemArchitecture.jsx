import { motion } from "framer-motion";
import { Users, Database, Server, ArrowRight } from "lucide-react";

export const SystemArchitecture = () => {
  return (
    <section className="py-20 bg-black border-b border-white/5">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">How I Build Production Systems</h2>
          <p className="text-slate-400">Architecting scalable solutions, not just writing code.</p>
        </div>

        {/* Simplistic Visualization of a Full Stack Architecture */}
        <div className="bg-zinc-900/30 p-8 rounded-2xl border border-white/5 relative overflow-hidden">
          
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[80px] pointer-events-none" />

          {/* Flow Diagram (Responsive Grid) */}
          <div className="hidden md:flex items-center justify-between gap-4 text-center">
             
             {/* Client */}
             <div className="flex flex-col items-center gap-3">
                 <div className="w-16 h-16 rounded-xl bg-slate-800 border border-white/10 flex items-center justify-center text-blue-400 shadow-lg">
                    <Users size={28} />
                 </div>
                 <span className="text-xs text-slate-400 font-mono">Client (React)</span>
             </div>

             {/* Arrow */}
             <ArrowRight className="text-slate-600 animate-pulse" />

             {/* Backend */}
             <div className="flex flex-col items-center gap-3">
                 <div className="w-16 h-16 rounded-xl bg-slate-800 border border-white/10 flex items-center justify-center text-green-400 shadow-lg relative">
                    <Server size={28} />
                    <span className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-green-500 animate-ping opacity-75" />
                 </div>
                 <span className="text-xs text-slate-400 font-mono">API Gateway (Node.js)</span>
             </div>

             {/* Arrow */}
             <ArrowRight className="text-slate-600" />

             {/* Cache/Queue */}
             <div className="flex flex-col items-center gap-3">
                 <div className="w-16 h-16 rounded-xl bg-slate-800 border border-white/10 flex items-center justify-center text-red-400 shadow-lg">
                    <Database size={28} />
                 </div>
                 <span className="text-xs text-slate-400 font-mono">Redis (Cache/PubSub)</span>
             </div>

             {/* Arrow */}
             <ArrowRight className="text-slate-600" />

             {/* DB */}
             <div className="flex flex-col items-center gap-3">
                 <div className="w-16 h-16 rounded-xl bg-slate-800 border border-white/10 flex items-center justify-center text-yellow-400 shadow-lg">
                    <Database size={28} />
                 </div>
                 <span className="text-xs text-slate-400 font-mono">Primary DB (Mongo/Postgres)</span>
             </div>
          </div>

          <div className="md:hidden text-center text-slate-400 text-sm">
             [Architecture Visualization available on Desktop]
          </div>

          {/* Explanation Grid */}
          <div className="grid md:grid-cols-3 gap-8 mt-12 pt-12 border-t border-white/5">
              <div>
                  <h4 className="text-white font-bold mb-2">High Availability</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">
                      Stateless backend services containerized with Docker, deployed on AWS EC2 behind Nginx for load balancing.
                  </p>
              </div>
              <div>
                  <h4 className="text-white font-bold mb-2">Real-Time Scaling</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">
                      Redis used for session management and Pub/Sub messaging, ensuring sub-millisecond latency for chat apps.
                  </p>
              </div>
              <div>
                  <h4 className="text-white font-bold mb-2">Automated CI/CD</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">
                      GitHub Actions pipelines that automatically build, test, and deploy to production on every push to main.
                  </p>
              </div>
          </div>

        </div>
      </div>
    </section>
  );
};
