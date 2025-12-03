import React from 'react';
import { Database, Code, Cloud, Terminal, Cpu, Globe, Zap, BookOpen, Users, Github, Linkedin, Mail, Instagram } from 'lucide-react';
import { CodepenIcon } from 'lucide-react';

const About: React.FC = () => {
  const startDate = new Date('2019-06-01');
  const today = new Date();
  const yearsOfExperience = today.getFullYear() - startDate.getFullYear() -
    (today.getMonth() < startDate.getMonth() || (today.getMonth() === startDate.getMonth() && today.getDate() < startDate.getDate()) ? 1 : 0);

  return (
    <section id="about" className="py-20">
      <div className="flex items-center gap-3 mb-10 reveal">
        <span className="w-3 h-3 bg-google-yellow rounded-full animate-pulse"></span>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white font-display">About Me</h2>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Main Bio Card - Spans 2 cols */}
        <div className="reveal md:col-span-2 bg-white/60 dark:bg-google-darksurface/60 backdrop-blur-xl rounded-[2rem] p-8 md:p-10 shadow-sm border border-slate-100 dark:border-white/5 hover-spring group relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-5 dark:opacity-10 transition-transform group-hover:scale-110 duration-700">
            <Terminal className="w-48 h-48" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 relative z-10">The Engineering Journey</h3>
          <div className="space-y-4 text-slate-600 dark:text-gray-300 leading-relaxed text-base relative z-10">
            <p>
              I’m a software engineer with <span className="font-bold text-google-blue">{yearsOfExperience}+ years</span> of experience, passionate about building scalable distributed systems and exploring the frontiers of AI. My work blends robust engineering with thoughtful design, ensuring that every system I build—from mobile SDKs to massive database engines—is performant, reliable, and user-centric.
            </p>
            <p>
              I have engineered the cloud at <strong className="text-google-blue">AWS</strong>, where I improved write forward performance of Global db and automated the new region build for AWS. My experience also includes modernizing core customer experiences at <strong className="text-google-yellow">Amazon</strong> and building real-time communication platforms at <strong className="text-google-green">OneDirect</strong>.
            </p>
            <p>
              My journey started in the fast-paced startup world at <strong className="text-google-red">Flintzy</strong>, where I wore many hats building dashboards and email services. When I'm not coding, you'll find me jamming on my guitar, in the boxing ring, rock climbing, or trekking through nature.
            </p>
          </div>
        </div>

        {/* Stats / Tech Card */}
        <div className="reveal bg-google-blue/10 dark:bg-google-blue/20 backdrop-blur-xl rounded-[2rem] p-8 shadow-sm border border-google-blue/10 hover-spring flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-bold text-google-blue mb-2">Core Focus</h3>
            <p className="text-slate-600 dark:text-gray-400 text-sm">What I do best.</p>
          </div>
          <div className="mt-8 space-y-4">
            <div className="flex items-center gap-3 text-slate-700 dark:text-gray-200 font-medium text-sm">
              <Database className="w-4 h-4 text-google-red" /> Distributed Systems
            </div>
            <div className="flex items-center gap-3 text-slate-700 dark:text-gray-200 font-medium text-sm">
              <Cloud className="w-4 h-4 text-google-blue" /> Cloud Architecture
            </div>
            <div className="flex items-center gap-3 text-slate-700 dark:text-gray-200 font-medium text-sm">
              <Code className="w-4 h-4 text-google-green" /> Full Stack Dev
            </div>
            <div className="flex items-center gap-3 text-slate-700 dark:text-gray-200 font-medium text-sm">
              <Zap className="w-4 h-4 text-google-yellow" /> AI & Machine Learning
            </div>
            <div className="flex items-center gap-3 text-slate-700 dark:text-gray-200 font-medium text-sm">
              <Users className="w-4 h-4 text-purple-500" /> Technical Leadership
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-google-blue/10 flex items-center justify-between">
            <p className="text-xs font-medium text-slate-500 dark:text-gray-400">Connect</p>
            <div className="flex items-center gap-3">
              <a href="https://github.com/sharathbp" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"><Github className="w-4 h-4" /></a>
              <a href="https://linkedin.com/in/sharath-bp" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-[#0077b5] dark:text-slate-400 transition-colors"><Linkedin className="w-4 h-4" /></a>
              <a href="https://instagram.com/sharathbpx" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-[#E4405F] dark:text-slate-400 transition-colors"><Instagram className="w-4 h-4" /></a>
              <a href="https://codepen.io/sharathbp" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"><CodepenIcon className="w-4 h-4" /></a>
              <a href="mailto:sharathbp@outlook.com" className="text-slate-500 hover:text-google-red dark:text-slate-400 transition-colors"><Mail className="w-4 h-4" /></a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
