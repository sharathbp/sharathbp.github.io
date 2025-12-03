
import React from 'react';
import { Github, Linkedin, Mail, Download, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-[85vh] flex flex-col justify-center text-center items-center py-20 relative">

      {/* Badge with Spring Animation */}
      <div className="reveal inline-block px-4 py-1.5 mb-8 text-sm font-bold tracking-widest text-google-blue uppercase bg-white/80 dark:bg-white/10 backdrop-blur-sm rounded-full border border-google-blue/30 shadow-lg shadow-google-blue/10 animate-spring hover:scale-105 transition-transform duration-300 cursor-default">
        Software Engineer • AWS
      </div>

      {/* Jumbo Typography */}
      <h1 className="reveal delay-100 text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-slate-900 dark:text-white font-display mb-8 leading-[0.9] drop-shadow-sm">
        <span className="block hover:text-google-blue transition-colors duration-300">Code.</span>
        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-google-blue via-google-red to-google-yellow pb-2">
          Scale.
        </span>
        <span className="block hover:text-google-green transition-colors duration-300">Repeat.</span>
      </h1>

      <p className="reveal delay-200 max-w-2xl text-base md:text-lg text-slate-600 dark:text-gray-300 leading-relaxed mb-12 font-medium bg-white/30 dark:bg-black/20 backdrop-blur-sm p-4 rounded-2xl">
        Hey, I'm <span className="text-slate-900 dark:text-white font-bold">Sharath</span>—a Software Engineer at <span className="text-google-blue font-bold">AWS</span> who turns messy problems into clean, scalable solutions.
      </p>

      {/* Magnetic Buttons Container */}
      <div className="reveal delay-300 flex flex-wrap items-center justify-center gap-5">
        <a
          href="#projects"
          className="group relative px-8 py-4 rounded-full bg-slate-900 dark:bg-white text-white dark:text-google-dark font-bold text-lg tracking-wide shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 active:scale-95 flex items-center gap-2 overflow-hidden"
        >
          <span className="relative z-10">View Work</span>
          <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
          <div className="absolute inset-0 bg-google-blue transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 ease-out"></div>
        </a>

        <a
          href="/resume.pdf"
          className="group px-8 py-4 rounded-full bg-white/80 dark:bg-white/5 backdrop-blur-sm text-slate-900 dark:text-white border border-slate-200 dark:border-white/10 font-bold text-lg tracking-wide shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 active:scale-95 flex items-center gap-2 hover:border-google-red"
        >
          <Download className="w-5 h-5 group-hover:animate-bounce" /> Resume
        </a>
      </div>

      <div className="reveal delay-300 mt-16 flex items-center gap-8 p-4 rounded-full bg-white/30 dark:bg-black/10 backdrop-blur-sm">
        <SocialIcon href="https://github.com/sharathbp" icon={<Github className="w-6 h-6" />} color="hover:text-slate-900 dark:hover:text-white" />
        <SocialIcon href="https://linkedin.com/in/sharath-bp" icon={<Linkedin className="w-6 h-6" />} color="hover:text-[#0077b5]" />
        <SocialIcon href="mailto:sharathbp@outlook.com" icon={<Mail className="w-6 h-6" />} color="hover:text-google-red" />
      </div>
    </section>
  );
};

const SocialIcon = ({ href, icon, color }: { href: string; icon: React.ReactNode; color: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className={`text-slate-400 transition-all duration-300 hover:scale-125 hover:-translate-y-1 ${color}`}
    aria-label="Social Link"
  >
    {icon}
  </a>
);

export default Hero;
