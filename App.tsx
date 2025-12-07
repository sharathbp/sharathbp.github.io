import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import AIChatWidget from './components/AIChatWidget';
import Archive from './components/Archive';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

const HomePage: React.FC = () => (
  <>
    <div className="fixed inset-0 bg-grid-hex z-[-1]" />
    <CustomCursor />
    <Navbar />
    <main className="mx-auto max-w-6xl px-6 pb-24 md:px-12 pt-24 space-y-12 relative z-10">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </main>
    <Footer />
    <AIChatWidget />
  </>
);

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 transition-colors duration-500 overflow-hidden">

      {/* --- APPLE LIQUID GLASS BACKGROUND --- */}

      {/* Soft Gradient Mesh Orbs with Parallax */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {/* Gradient Orb 1 - Blue/Purple - Slowest */}
        <div className="parallax absolute top-[10%] left-[10%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-blue-400/20 to-purple-400/20 blur-[120px] animate-float" data-speed="0.3"></div>

        {/* Gradient Orb 2 - Purple/Pink - Medium */}
        <div className="parallax absolute top-[60%] right-[10%] w-[500px] h-[500px] rounded-full bg-gradient-to-br from-purple-400/20 to-pink-400/20 blur-[120px] animate-float-delayed" data-speed="0.5"></div>

        {/* Gradient Orb 3 - Cyan/Blue - Fastest */}
        <div className="parallax absolute bottom-[20%] left-[20%] w-[450px] h-[450px] rounded-full bg-gradient-to-br from-cyan-400/15 to-blue-400/15 blur-[100px] animate-float-slow" data-speed="0.7"></div>

        {/* Subtle Mesh Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgb(100 100 100) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}>
        </div>
      </div>

      {/* --- CONTENT LAYER --- */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/archive" element={<Archive />} />
      </Routes>
    </div>
  );
};

export default App;
