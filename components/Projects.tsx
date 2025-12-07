
import React from 'react';
import { ArrowUpRight, Github } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Project } from '../types';

const projects: Project[] = [
  {
    id: 'war-and-peace',
    title: 'War & Peace 3D',
    description: 'Multiplayer aerial combat game built with OpenGL and C++. Features real-time 3D graphics rendering, network synchronization for multiplayer gameplay, and physics-based flight mechanics. Implements custom game engine architecture with collision detection and particle systems.',
    tags: ['C++', 'OpenGL', 'Networking', 'Game Dev'],
    imageUrl: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=600&auto=format&fit=crop',
    link: 'https://github.com/sharathbp/WarAndPeace',
    span: 'md:col-span-2'
  },
  {
    id: 'chatbot',
    title: 'Service Booking Chatbot',
    description: 'Conversational AI agent integrated with Google Assistant for booking, tracking, and canceling service requests. Built using DialogFlow NLP engine with Node.js backend and Firebase for real-time data synchronization. Supports multi-turn conversations and context management.',
    tags: ['DialogFlow', 'Node.js', 'Firebase', 'NLP'],
    imageUrl: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=400&auto=format&fit=crop',
    link: 'https://github.com/sharathbp/Chatbot',
    span: 'md:col-span-1'
  },
  {
    id: 'paging-simulator',
    title: 'Paging Algorithm Visualizer',
    description: 'Interactive OpenGL application demonstrating various page replacement algorithms including FIFO, LRU, and Optimal strategies. Provides real-time visual animations of memory management, helping students understand operating system concepts through interactive simulations.',
    tags: ['C++', 'OpenGL', 'OS Concepts', 'Visualization'],
    imageUrl: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=400&auto=format&fit=crop',
    link: 'https://github.com/sharathbp/Paging-Simulator',
    span: 'md:col-span-1'
  },
  {
    id: 'diabetes-predictor',
    title: 'Diabetes Risk Predictor',
    description: 'Machine learning model for diabetes prediction using various classification algorithms including Random Forest, SVM, and Logistic Regression. Achieved 85%+ accuracy through comprehensive feature engineering, data preprocessing, and ensemble methods. Built with scikit-learn and pandas.',
    tags: ['Python', 'Scikit-learn', 'ML', 'Data Science'],
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=600&auto=format&fit=crop',
    link: 'https://github.com/sharathbp/Diabetes-Predictor',
    span: 'md:col-span-2'
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-10">
      <div className="flex items-center gap-3 mb-10 reveal">
        <span className="w-2 h-2 bg-purple-500 rounded-none animate-pulse"></span>
        <h2 className="text-2xl font-bold text-white font-display tracking-widest uppercase">
          &lt; Mission.Files /&gt;
        </h2>
      </div>

      <div className="space-y-16">
        {projects.map((project, idx) => (
          <div
            key={project.id}
            className="reveal group"
            style={{ transitionDelay: `${idx * 100}ms` }}
          >
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="grid md:grid-cols-[250px_1fr] gap-6 hover:opacity-100 transition-opacity duration-300 tech-card p-6 clip-tech"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden border border-white/10 bg-slate-800 aspect-video md:aspect-auto md:h-32 clip-tech-sm">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Project Content */}
              <div className="flex flex-col justify-center">
                <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2 group-hover:text-cyan-400 transition-colors font-display uppercase tracking-wide">
                  {project.title}
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed mb-4 font-sans">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 bg-white/5 text-slate-400 border border-white/10 font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>

      {/* View Archive Link */}
      <div className="mt-12 text-center reveal">
        <Link
          to="/archive"
          className="btn-mech inline-flex items-center gap-2"
        >
          ACCESS FULL ARCHIVE
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
};

export default Projects;
