import React from 'react';
import { Github, Linkedin, Mail, Instagram, Codepen } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="relative z-10 py-8 border-t border-slate-200/50 dark:border-slate-800/50 backdrop-blur-sm">
            <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">

                {/* Copyright & Credits */}
                <div className="text-center md:text-left">
                    <p className="text-sm text-slate-600 dark:text-slate-400 font-medium">
                        © {new Date().getFullYear()} Sharath. All rights reserved.
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-500 mt-1">
                        Designed & Built with React, Tailwind & Love.
                    </p>
                </div>

                {/* Social Links */}
                <div className="flex items-center gap-6">
                    <a
                        href="https://github.com/sharath-b-p"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors duration-300"
                        aria-label="GitHub"
                    >
                        <Github size={20} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/sharath-b-p/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors duration-300"
                        aria-label="LinkedIn"
                    >
                        <Linkedin size={20} />
                    </a>
                    <a
                        href="https://www.instagram.com/sharath_b_p"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-500 hover:text-pink-600 dark:text-slate-400 dark:hover:text-pink-400 transition-colors duration-300"
                        aria-label="Instagram"
                    >
                        <Instagram size={20} />
                    </a>
                    <a
                        href="https://codepen.io/sharath-b-p"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-500 hover:text-purple-600 dark:text-slate-400 dark:hover:text-purple-400 transition-colors duration-300"
                        aria-label="CodePen"
                    >
                        <Codepen size={20} />
                    </a>
                    <a
                        href="mailto:sharath.bp99@gmail.com"
                        className="text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors duration-300"
                        aria-label="Email"
                    >
                        <Mail size={20} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
