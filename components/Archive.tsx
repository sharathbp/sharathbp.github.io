import React from 'react';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Repository {
    year: string;
    name: string;
    description: string;
    tech: string[];
    link: string;
    stars?: number;
}

const repositories: Repository[] = [
    {
        year: '2024',
        name: 'Portfolio',
        description: 'Personal portfolio website built with React and Vite',
        tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
        link: 'https://github.com/sharathbp/sharathbp.github.io'
    },
    {
        year: '2022',
        name: 'Spring Demo',
        description: 'Sample Spring Boot application demonstrating REST API patterns',
        tech: ['Java', 'Spring Boot', 'REST API'],
        link: 'https://github.com/sharathbp/spring-demo'
    },
    {
        year: '2020',
        name: 'Todo App',
        description: 'RESTful API for task management using Spring Boot',
        tech: ['Java', 'Spring Boot', 'REST API'],
        link: 'https://github.com/sharathbp/Todo-App'
    },
    {
        year: '2019',
        name: 'Paging Simulator',
        description: 'OpenGL visualization of page replacement algorithms',
        tech: ['C++', 'OpenGL', 'OS Concepts'],
        link: 'https://github.com/sharathbp/Paging-Simulator',
        stars: 1
    },
    {
        year: '2019',
        name: 'War & Peace 3D',
        description: 'Multiplayer aerial combat game with OpenGL',
        tech: ['C++', 'OpenGL', 'Networking'],
        link: 'https://github.com/sharathbp/WarAndPeace'
    },
    {
        year: '2019',
        name: 'Machine Learning Lab',
        description: 'Collection of machine learning algorithms and experiments',
        tech: ['Python', 'Scikit-learn', 'ML'],
        link: 'https://github.com/sharathbp/Machine-Learning-Lab'
    },
    {
        year: '2019',
        name: 'Diabetes Predictor',
        description: 'ML model for diabetes prediction with 85%+ accuracy',
        tech: ['Python', 'Scikit-learn', 'Data Science'],
        link: 'https://github.com/sharathbp/Diabetes-Predictor'
    },
    {
        year: '2019',
        name: 'Symbol Table Generator',
        description: 'Python script to generate symbol tables from C code',
        tech: ['Python', 'Compiler Design'],
        link: 'https://github.com/sharathbp/Symbol-Table-Generator'
    },
    {
        year: '2018',
        name: 'Chatbot',
        description: 'DialogFlow-powered service booking chatbot',
        tech: ['JavaScript', 'DialogFlow', 'Node.js'],
        link: 'https://github.com/sharathbp/Chatbot'
    },
    {
        year: '2018',
        name: 'Taj Mahal',
        description: '3D rendering of Taj Mahal using C graphics API',
        tech: ['C++', 'Graphics API'],
        link: 'https://github.com/sharathbp/Taj-Mahal'
    }
];

const Archive: React.FC = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-[#0B1121] transition-colors duration-500">
            <div className="mx-auto max-w-6xl px-6 py-20 md:px-12">

                {/* Header */}
                <div className="mb-12">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-google-blue hover:text-google-blue/80 transition-colors mb-6 group"
                    >
                        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                        <span className="font-medium">Sharath BP</span>
                    </Link>

                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white font-display mb-4">
                        All Projects
                    </h1>
                    <p className="text-slate-600 dark:text-gray-300">
                        A complete archive of my work from 2018 to present
                    </p>
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-slate-200 dark:border-white/10">
                                <th className="text-left py-4 px-4 text-sm font-bold text-slate-900 dark:text-white">Year</th>
                                <th className="text-left py-4 px-4 text-sm font-bold text-slate-900 dark:text-white">Project</th>
                                <th className="text-left py-4 px-4 text-sm font-bold text-slate-900 dark:text-white hidden md:table-cell">Built with</th>
                                <th className="text-left py-4 px-4 text-sm font-bold text-slate-900 dark:text-white">Link</th>
                            </tr>
                        </thead>
                        <tbody>
                            {repositories.map((repo, idx) => (
                                <tr
                                    key={idx}
                                    className="border-b border-slate-100 dark:border-white/5 hover:bg-slate-100/50 dark:hover:bg-white/5 transition-colors"
                                >
                                    <td className="py-4 px-4 text-google-blue font-medium text-sm">
                                        {repo.year}
                                    </td>
                                    <td className="py-4 px-4">
                                        <div>
                                            <div className="font-semibold text-slate-900 dark:text-white mb-1">
                                                {repo.name}
                                                {repo.stars && (
                                                    <span className="ml-2 text-xs text-slate-500 dark:text-gray-400">
                                                        ★ {repo.stars}
                                                    </span>
                                                )}
                                            </div>
                                            <div className="text-sm text-slate-600 dark:text-gray-400 md:hidden mb-2">
                                                {repo.description}
                                            </div>
                                            <div className="flex flex-wrap gap-2 md:hidden">
                                                {repo.tech.map((tech, i) => (
                                                    <span
                                                        key={i}
                                                        className="text-xs px-2 py-1 rounded bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-gray-400"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-4 px-4 hidden md:table-cell">
                                        <div className="flex flex-wrap gap-2">
                                            {repo.tech.map((tech, i) => (
                                                <span
                                                    key={i}
                                                    className="text-xs px-2 py-1 rounded bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-gray-400"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </td>
                                    <td className="py-4 px-4">
                                        <a
                                            href={repo.link}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center gap-1 text-slate-600 dark:text-gray-400 hover:text-google-blue dark:hover:text-google-blue transition-colors"
                                        >
                                            <span className="text-sm hidden sm:inline">GitHub</span>
                                            <ArrowUpRight className="w-4 h-4" />
                                        </a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Footer Stats */}
                <div className="mt-12 text-center text-sm text-slate-500 dark:text-gray-400">
                    <p>{repositories.length} projects • Built over {parseInt(repositories[0].year) - parseInt(repositories[repositories.length - 1].year)} years</p>
                </div>
            </div>
        </div>
    );
};

export default Archive;
