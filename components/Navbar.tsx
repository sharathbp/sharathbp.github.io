
import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    // Initialize theme
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const initialTheme = savedTheme || systemTheme;

    setTheme(initialTheme);
    document.documentElement.classList.toggle('dark', initialTheme === 'dark');

    // Scroll Spy
    const handleScroll = () => {
      const sections = ['hero', 'about', 'experience', 'projects', 'contact'];
      const scrollY = window.scrollY;

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
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  const navLinks = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--bg-main)]/90 backdrop-blur-md border-b border-[var(--border-tech)] transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo - HUD Style */}
        {/* Logo - HUD Style */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative flex items-center gap-2">
            {/* Transformer Icon (Image) */}
            <img
              src="/transformer-logo.svg"
              alt="Transformer Logo"
              className="w-10 h-10 object-contain drop-shadow-[0_0_5px_var(--color-primary)] group-hover:drop-shadow-[0_0_10px_var(--color-accent)] transition-all duration-300"
            />

            <span className="font-display font-black text-2xl tracking-tighter text-[var(--text-main)] group-hover:text-[var(--color-primary)] transition-colors duration-300">
              SHARATH
            </span>
            <div className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </div>
        </a>

        {/* Desktop Nav - Tech Bar */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`relative font-sans text-sm font-bold uppercase tracking-widest transition-all duration-300 ${activeSection === link.id
                ? 'text-[var(--color-primary)] text-glow'
                : 'text-[var(--text-dim)] hover:text-[var(--text-main)]'
                }`}
            >
              {activeSection === link.id && (
                <span className="absolute -left-3 text-[var(--color-primary)] animate-pulse">[</span>
              )}
              {link.name}
              {activeSection === link.id && (
                <span className="absolute -right-3 text-[var(--color-primary)] animate-pulse">]</span>
              )}
            </a>
          ))}

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-[var(--bg-surface)] border border-[var(--border-tech)] text-[var(--color-primary)] hover:bg-[var(--border-tech)] hover:text-[var(--text-main)] transition-all duration-300 group relative overflow-hidden"
            aria-label="Toggle Theme"
          >
            <div className="relative z-10">
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </div>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 text-[var(--color-primary)] hover:text-[var(--text-main)] transition-colors"
          >
            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[var(--color-primary)] hover:text-[var(--text-main)] transition-colors"
            aria-label="Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Tech Panel */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-[var(--bg-main)] border-b border-[var(--border-tech)] p-6 shadow-2xl shadow-[var(--glow-tech)] flex flex-col space-y-4 animate-fade-in-up">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-6 py-4 border-l-2 border-transparent hover:border-[var(--color-primary)] bg-[var(--bg-surface)] hover:bg-[var(--border-tech)] text-xl font-display font-bold text-[var(--text-main)] transition-all uppercase tracking-wider"
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
