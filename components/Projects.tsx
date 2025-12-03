
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
    <section id="projects" className="py-20">
      <div className="flex items-center gap-3 mb-10 reveal">
        <span className="w-3 h-3 bg-google-green rounded-full animate-pulse"></span>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white font-display">Featured Projects</h2>
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
              className="grid md:grid-cols-[250px_1fr] gap-6 hover:opacity-100 transition-opacity duration-300"
            >
              {/* Project Image */}
              <div className="relative rounded-lg overflow-hidden border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-slate-800 aspect-video md:aspect-auto md:h-32">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Project Content */}
              <div className="flex flex-col justify-center">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2 group-hover:text-google-blue transition-colors">
                  {project.title}
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>

                <p className="text-slate-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="text-xs font-medium px-3 py-1 rounded-full bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-gray-400 border border-slate-200 dark:border-white/5"
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
          className="inline-flex items-center gap-2 text-slate-600 dark:text-gray-300 hover:text-google-blue dark:hover:text-google-blue transition-colors font-medium"
        >
          view full project archive
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
};

export default Projects;
