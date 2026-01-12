import { motion } from "framer-motion";
import { Github, ExternalLink, Folder } from "lucide-react";

export const ProjectCard = ({ title, description, tags, links }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="group relative bg-slate-800/50 rounded-xl overflow-hidden border border-white/10 hover:border-blue-500/50 transition-colors duration-300"
    >
      {/* Hover Glow Effect */}
      <div className="absolute inset-0 bg-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="p-8 h-full flex flex-col">
        <div className="flex justify-between items-start mb-6">
          <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400">
            <Folder size={24} />
          </div>
          <div className="flex gap-4">
            {links.github && (
              <a
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                title="View Source"
              >
                <Github size={20} />
              </a>
            )}
            {links.live && (
              <a
                href={links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
                title="Live Demo"
              >
                <ExternalLink size={20} />
              </a>
            )}
          </div>
        </div>

        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
          {title}
        </h3>

        <p className="text-gray-400 mb-6 line-clamp-3 leading-relaxed">
          {description}
        </p>

        <div className="mt-auto">
          <ul className="flex flex-wrap gap-2 text-sm text-slate-300">
            {tags.map((tag) => (
              <li key={tag} className="bg-white/5 px-3 py-1 rounded-full text-xs">
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};
