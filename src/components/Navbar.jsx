import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Certifications", path: "/certifications" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled ? "py-4 bg-black/60 backdrop-blur-xl border-b border-white/5" : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 max-sm:px-4">
        <div className="flex items-center justify-between h-8">
          <Link to="/" className="flex-shrink-0 font-bold text-2xl tracking-tighter text-white group">
            Prakhar<span className="text-blue-500 group-hover:pl-1 transition-all">.dev</span>
          </Link>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="relative px-4 py-2 text-sm font-bold tracking-tight transition-colors group"
                >
                  <span className={`${
                    location.pathname === item.path ? "text-white" : "text-zinc-500 group-hover:text-zinc-300"
                  } transition-colors relative z-10`}>
                    {item.name}
                  </span>
                  
                  {location.pathname === item.path && (
                    <motion.div 
                      layoutId="nav-active"
                      className="absolute inset-0 bg-white/5 border border-white/10 rounded-full -z-0"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </Link>
              ))}
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2"
            >
              <AnimatePresence mode="wait">
                {isOpen ? <X key="close" size={24} /> : <Menu key="open" size={24} />}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-2xl border-t border-white/5 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-xl text-lg font-bold ${
                    location.pathname === item.path
                        ? "text-blue-400 bg-white/5 border border-white/10"
                        : "text-zinc-500 hover:text-white"
                  } transition-all`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

