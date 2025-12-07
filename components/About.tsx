import React from 'react';
import { Database, Code, Cloud, Terminal, Cpu, Globe, Zap, BookOpen, Users, Github, Linkedin, Mail, Instagram } from 'lucide-react';
import { CodepenIcon } from 'lucide-react';

const About: React.FC = () => {
  const startDate = new Date('2019-06-01');
  const today = new Date();
  const yearsOfExperience = today.getFullYear() - startDate.getFullYear() -
    (today.getMonth() < startDate.getMonth() || (today.getMonth() === startDate.getMonth() && today.getDate() < startDate.getDate()) ? 1 : 0);

  return (
    <section id="about" className="py-10">
      <div className="flex items-center gap-3 mb-10 reveal">
        <span className="w-2 h-2 bg-cyan-500 rounded-none animate-pulse"></span>
        <h2 className="text-2xl font-bold text-white font-display tracking-widest uppercase">
          &lt; System.Identity /&gt;
        </h2>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Main Bio Card - Spans 2 cols */}
        <div className="reveal md:col-span-2 tech-card p-8 md:p-10 clip-tech group relative">
          <div className="absolute top-0 right-0 p-8 opacity-10 transition-transform group-hover:scale-110 duration-700">
            <Terminal className="w-48 h-48 text-cyan-500" />
          </div>
          <h3 className="text-xl font-bold text-white mb-6 relative z-10 font-display uppercase tracking-wider text-glow">
            // The Engineering Journey
          </h3>
          <div className="space-y-4 text-slate-400 leading-relaxed text-base relative z-10 font-sans">
            <p>
              I’m a software engineer with <span className="font-bold text-cyan-400">{yearsOfExperience}+ years</span> of experience, passionate about building scalable distributed systems and exploring the frontiers of AI. My work blends robust engineering with thoughtful design, ensuring that every system I build—from mobile SDKs to massive database engines—is performant, reliable, and user-centric.
            </p>
            <p>
              I have engineered the cloud at <strong className="text-cyan-400">AWS</strong>, where I improved write forward performance of Global db and automated the new region build for AWS. My experience also includes modernizing core customer experiences at <strong className="text-purple-500">Amazon</strong> and building real-time communication platforms at <strong className="text-pink-500">OneDirect</strong>.
            </p>
            <p>
              My journey started in the fast-paced startup world at <strong className="text-yellow-500">Flintzy</strong>, where I wore many hats building dashboards and email services. When I'm not coding, you'll find me jamming on my guitar, in the boxing ring, rock climbing, or trekking through nature.
            </p>
          </div>
        </div>

        {/* Stats / Tech Card */}
        <div className="reveal tech-card p-8 clip-tech flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-bold text-cyan-400 mb-2 font-display uppercase">Core Modules</h3>
            <p className="text-slate-500 text-xs font-mono">&gt;&gt; LOADING CAPABILITIES...</p>
          </div>
          <div className="mt-8 space-y-4">
            <div className="flex items-center gap-3 text-slate-300 font-medium text-sm font-mono">
              <Database className="w-4 h-4 text-pink-500" /> Distributed Systems
            </div>
            <div className="flex items-center gap-3 text-slate-300 font-medium text-sm font-mono">
              <Cloud className="w-4 h-4 text-cyan-500" /> Cloud Architecture
            </div>
            <div className="flex items-center gap-3 text-slate-300 font-medium text-sm font-mono">
              <Code className="w-4 h-4 text-purple-500" /> Full Stack Dev
            </div>
            <div className="flex items-center gap-3 text-slate-300 font-medium text-sm font-mono">
              <Zap className="w-4 h-4 text-yellow-500" /> AI & Machine Learning
            </div>
            <div className="flex items-center gap-3 text-slate-300 font-medium text-sm font-mono">
              <Users className="w-4 h-4 text-green-500" /> Technical Leadership
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-cyan-500/20 flex items-center justify-between">
            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Uplink</p>
            <div className="flex items-center gap-3">
              <a href="https://github.com/sharathbp" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-white transition-colors"><Github className="w-4 h-4" /></a>
              <a href="https://linkedin.com/in/sharath-bp" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-[#0077b5] transition-colors"><Linkedin className="w-4 h-4" /></a>
              <a href="https://instagram.com/sharathbpx" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-[#E4405F] transition-colors"><Instagram className="w-4 h-4" /></a>
              <a href="https://codepen.io/sharathbp" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-white transition-colors"><CodepenIcon className="w-4 h-4" /></a>
              <a href="mailto:sharathbp@outlook.com" className="text-slate-500 hover:text-pink-500 transition-colors"><Mail className="w-4 h-4" /></a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
