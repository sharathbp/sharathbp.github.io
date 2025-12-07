import React from 'react';
import { Mail, ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
    return (
        <section id="contact" className="reveal py-12 border-t border-slate-200 dark:border-white/5 text-center relative overflow-hidden">
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
                className="btn-mech-primary group inline-flex items-center gap-3 text-xl px-10 py-4"
            >
                <span>Say Hello</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

        </section>
    );
};

export default Contact;