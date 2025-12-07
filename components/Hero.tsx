
import React from 'react';
import { Github, Linkedin, Mail, Download, ArrowRight, Cpu, Terminal, Shield } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-[85vh] flex flex-col justify-center text-center items-center py-10 relative overflow-hidden">

      {/* Background Tech Elements */}
      <div className="absolute top-1/4 left-10 w-24 h-24 border-t-2 border-l-2 border-cyan-500/20 rounded-tl-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-10 w-24 h-24 border-b-2 border-r-2 border-purple-500/20 rounded-br-3xl animate-pulse delay-700"></div>

      {/* System Status Badge */}
      <div className="reveal inline-flex items-center gap-2 px-4 py-1 mb-8 text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase bg-cyan-900/20 border border-cyan-500/30 clip-tech-sm">
        <span className="w-2 h-2 bg-cyan-500 rounded-full animate-ping"></span>
        System Online // Engineer.Class
      </div>

      {/* Jumbo Typography */}
      <h1 className="reveal delay-100 text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter font-display mb-8 leading-[0.85] uppercase">
        <span className="block text-white text-glow hover-glitch" data-text="CODE">Code.</span>
        <span className="block text-gradient-cyber pb-4 hover-glitch" data-text="TRANSFORM">
          Transform.
        </span>
        <span className="block text-slate-500 hover:text-white transition-colors duration-300 hover-glitch" data-text="DEPLOY">Deploy.</span>
      </h1>

      <p className="reveal delay-200 max-w-2xl text-lg md:text-xl text-slate-400 font-sans leading-relaxed mb-12 border-l-2 border-purple-500 pl-6 text-left mx-auto bg-white/5 p-4 clip-tech-sm">
        <span className="text-purple-400 font-bold">&gt;&gt; IDENTITY CONFIRMED:</span> Sharath B P.<br />
        <span className="text-cyan-400 font-bold">&gt;&gt; MISSION:</span> Architecting scalable distributed systems at <span className="text-white font-bold">AWS</span>. Turning chaos into structured code.
      </p>

      {/* Mechanical Buttons */}
      <div className="reveal delay-300 flex flex-wrap items-center justify-center gap-6">
        <a href="#projects" className="btn-mech-primary group flex items-center gap-2">
          <Cpu className="w-5 h-5" />
          <span>Initiate Projects</span>
        </a>

        <a href="/resume.pdf" className="btn-mech group flex items-center gap-2">
          <Download className="w-5 h-5 group-hover:animate-bounce" />
          <span>Download Data</span>
        </a>
      </div>

      <div className="reveal delay-300 mt-20 flex items-center gap-8 p-4 border-t border-white/10 w-full max-w-lg justify-center">
        <SocialIcon href="https://github.com/sharathbp" icon={<Github className="w-6 h-6" />} label="GITHUB" />
        <SocialIcon href="https://linkedin.com/in/sharath-bp" icon={<Linkedin className="w-6 h-6" />} label="LINKEDIN" />
        <SocialIcon href="mailto:sharathbp@outlook.com" icon={<Mail className="w-6 h-6" />} label="EMAIL" />
      </div>
    </section>
  );
};

const SocialIcon = ({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="flex flex-col items-center gap-1 text-slate-500 hover:text-cyan-400 transition-all duration-300 hover:scale-110 group"
    aria-label={label}
  >
    {icon}
    <span className="text-[10px] font-mono tracking-widest opacity-0 group-hover:opacity-100 transition-opacity text-cyan-500">{label}</span>
  </a>
);

export default Hero;
