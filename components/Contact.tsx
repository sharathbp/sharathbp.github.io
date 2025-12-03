import React from 'react';
import { Mail, ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="reveal py-24 border-t border-slate-200 dark:border-white/5 text-center relative overflow-hidden">
        {/* Background gradient blob */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-google-blue/5 rounded-full filter blur-[100px] -z-10"></div>

        <div className="inline-block p-4 rounded-full bg-google-blue/10 text-google-blue mb-6">
            <Mail className="w-6 h-6 animate-bounce" />
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white font-display mb-6">
            Ready to collaborate?
        </h2>
        <p className="max-w-lg mx-auto text-slate-600 dark:text-gray-400 mb-10 text-lg">
            I'm always open to discussing distributed systems, React performance, or just sharing travel stories.
        </p>
        
        <a 
            href="mailto:sharathbp@outlook.com" 
            className="group relative inline-flex items-center justify-center px-10 py-5 rounded-full bg-slate-900 dark:bg-white text-white dark:text-google-dark font-bold text-xl tracking-wide shadow-2xl hover:shadow-google-blue/20 transition-all duration-300 hover:-translate-y-2 hover:scale-105 active:scale-95"
        >
            <span>Say Hello</span>
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
        </a>

        <div className="mt-20 pt-8 border-t border-slate-100 dark:border-white/5 flex flex-col md:flex-row items-center justify-between text-sm font-medium text-slate-500 dark:text-gray-500 max-w-4xl mx-auto">
            <p>© {new Date().getFullYear()} Sharath B P.</p>
            <p className="flex items-center gap-1 mt-2 md:mt-0">
                Made with <span className="text-google-red animate-pulse">♥</span> using React & Tailwind
            </p>
        </div>
    </section>
  );
};

export default Contact;