
import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    if (document.documentElement.classList.contains('dark')) setIsDark(true);
    
    // Scroll Spy
    const handleScroll = () => {
        const sections = ['hero', 'about', 'experience', 'projects', 'contact'];
        const scrollY = window.scrollY;
        
        // Simple logic to determine active section
        for (const section of sections) {
            const el = document.getElementById(section);
            if (el && el.offsetTop - 300 <= scrollY) {
                setActiveSection(section);
            }
        }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      setIsDark(true);
    }
  };

  const navLinks = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 dark:bg-google-dark/70 backdrop-blur-2xl border-b border-slate-200/50 dark:border-white/5 transition-all duration-300 supports-[backdrop-filter]:bg-white/60">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group hover-jelly">
           <span className="font-display font-bold text-2xl tracking-tight text-slate-900 dark:text-white">
             S<span className="text-google-blue">.</span>
           </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-2 bg-slate-100/80 dark:bg-white/5 p-1.5 rounded-full border border-slate-200/50 dark:border-white/5 backdrop-blur-sm">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`relative px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeSection === link.id 
                  ? 'text-slate-900 dark:text-white' 
                  : 'text-slate-500 dark:text-gray-400 hover:text-slate-700 dark:hover:text-gray-200'
              }`}
            >
              {activeSection === link.id && (
                  <span className="absolute inset-0 bg-white dark:bg-white/10 rounded-full shadow-sm animate-spring -z-10"></span>
              )}
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
             <button 
                onClick={toggleTheme} 
                className="p-3 rounded-full hover:bg-slate-100 dark:hover:bg-white/10 text-slate-600 dark:text-gray-300 transition-colors hover-jelly"
                aria-label="Toggle Theme"
             >
                 {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
             </button>

            {/* Mobile Toggle */}
            <button 
                onClick={() => setIsOpen(!isOpen)} 
                className="md:hidden text-slate-800 dark:text-white p-2"
                aria-label="Menu"
            >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white dark:bg-google-dark border-b border-slate-100 dark:border-white/5 p-6 shadow-xl flex flex-col space-y-4 animate-fade-in-up origin-top">
           {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-6 py-4 rounded-2xl bg-slate-50 dark:bg-white/5 text-xl font-bold text-slate-900 dark:text-white hover:bg-slate-100 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
