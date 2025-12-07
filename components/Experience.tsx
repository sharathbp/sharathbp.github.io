
import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Experience as ExperienceType } from '../types';

const experiences: ExperienceType[] = [
  {
    id: 'aws',
    role: 'Software Development Engineer',
    company: 'AWS',
    period: 'Oct 2022 — Present',
    description: [
      "Improved write forwarding performance in Aurora Global Database by implementing optimized query routing algorithms, resulting in 41% faster DML operations across multi-region deployments.",
      "Architected and deployed automated infrastructure release pipelines using LPT framework, enabling zero-downtime deployments and reducing manual intervention by 90%.",
      "Led automation initiatives for new region builds, reducing deployment time from 14-21 days to 7 days through comprehensive validation workflows and infrastructure-as-code migration."
    ],
    skills: ['Java', 'AWS', 'Distributed Systems', 'Aurora', 'Infrastructure as Code', 'Terraform'],
    link: 'https://aws.amazon.com',
    color: 'text-cyan-400',
    bg: 'bg-cyan-500',
    border: 'border-cyan-500'
  },
  {
    id: 'amazon',
    role: 'Software Development Engineer I',
    company: 'Amazon',
    period: 'Oct 2021 — Oct 2022',
    description: [
      "Migrated legacy Subscribe & Save widgets to Java Servlets Horizonte framework, improving page load times by 30% and enhancing maintainability for the e-commerce platform.",
      "Mentored 2 interns on full-stack development for 'Manage Your Deliveries' dashboard, guiding architecture decisions and code reviews for customer-facing features serving millions of users."
    ],
    skills: ['Java', 'Spring Boot', 'React', 'AWS', 'Microservices'],
    link: 'https://amazon.com',
    color: 'text-purple-400',
    bg: 'bg-purple-500',
    border: 'border-purple-500'
  },
  {
    id: 'onedirect',
    role: 'Software Developer',
    company: 'OneDirect',
    period: 'Jan 2020 — Oct 2021',
    description: [
      "Built Mobile Gateway and Email Recall features for enterprise communication platform, enabling seamless cross-channel messaging for 100+ enterprise clients.",
      "Designed and developed real-time Feedback Cloud Analytics dashboard using React and Django, providing actionable insights through data visualization and custom reporting.",
      "Developed Android SDK for Bot Analytics, enabling third-party integration and expanding platform capabilities for chatbot performance monitoring."
    ],
    skills: ['Python', 'Django', 'React', 'React Native', 'Android', 'PostgreSQL', 'Redis'],
    link: '#',
    color: 'text-pink-400',
    bg: 'bg-pink-500',
    border: 'border-pink-500'
  },
  {
    id: 'flintzy',
    role: 'Full Stack Developer',
    company: 'Flintzy',
    period: 'Jun 2019 — Dec 2019',
    description: [
      "Built Sales Analytics Dashboard from scratch for B2B SaaS platform, implementing data visualization and reporting features that helped sales teams track performance metrics in real-time.",
      "Developed email service infrastructure and blog platform, establishing core communication channels for the startup's customer engagement strategy."
    ],
    skills: ['JavaScript', 'Node.js', 'React', 'MongoDB', 'Express'],
    link: '#',
    color: 'text-yellow-400',
    bg: 'bg-yellow-500',
    border: 'border-yellow-500'
  }
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-10">
      <div className="flex items-center gap-3 mb-10 reveal">
        <span className="w-2 h-2 bg-pink-500 rounded-none animate-pulse"></span>
        <h2 className="text-2xl font-bold text-[var(--text-main)] font-display tracking-widest uppercase">
          &lt; System.Log /&gt;
        </h2>
      </div>

      <div className="relative space-y-12">
        {/* Vertical Line - Data Stream */}
        <div className="absolute left-4 md:left-6 top-4 bottom-4 w-0.5 bg-gradient-to-b from-cyan-500/50 via-purple-500/20 to-transparent border-l border-dashed border-cyan-500/30"></div>

        {experiences.map((exp, idx) => (
          <div key={exp.id} className="reveal relative pl-12 md:pl-20" style={{ transitionDelay: `${idx * 150}ms` }}>

            {/* Timeline Node - Mechanical Node */}
            <div className={`absolute left-2 md:left-4 top-0 w-4 h-4 bg-[#020617] border-2 ${exp.border} z-10 hover:scale-125 transition-transform duration-300 shadow-[0_0_10px_rgba(6,182,212,0.5)]`}></div>

            <div className={`group relative tech-card p-8 clip-tech hover:border-${exp.border?.split('-')[1] || 'cyan-500'} transition-all duration-300 hover:-translate-y-1`}>

              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold text-[var(--text-main)] group-hover:text-cyan-400 transition-colors font-display uppercase tracking-wide">
                    {exp.role}
                  </h3>
                  <a href={exp.link} target="_blank" rel="noreferrer" className={`font-medium ${exp.color} hover:underline flex items-center gap-1 mt-1 text-base font-mono`}>
                    {exp.company} <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
                <span className="text-xs font-bold tracking-widest uppercase text-[var(--text-dim)] mt-4 md:mt-0 bg-slate-100 dark:bg-white/5 px-4 py-2 border border-slate-200 dark:border-white/10 font-mono">
                  [{exp.period}]
                </span>
              </div>

              <ul className="space-y-4 mb-8">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex items-start text-[var(--text-dim)] text-sm leading-relaxed font-sans">
                    <span className={`mt-2 min-w-[6px] h-1.5 ${exp.bg} mr-4 opacity-80`}></span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 pt-6 border-t border-slate-200 dark:border-white/10">
                {exp.skills.map(skill => (
                  <span key={skill} className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-white/10 hover:border-cyan-500/50 hover:text-cyan-400 transition-colors cursor-default font-mono">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
