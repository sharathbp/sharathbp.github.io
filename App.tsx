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
import TransformerBackground from './components/TransformerBackground';

const HomePage: React.FC = () => (
  <>
    {/* <div className="fixed inset-0 bg-grid-hex z-[-1]" />  Removed to show animated background */}
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

      {/* --- CYBERTRON ANIMATED BACKGROUND (v2 - Phantom Grid) --- */}
      <TransformerBackground />

      {/* Subtle Mesh Pattern Overlay (Optional, keeping for texture) */}
      <div className="fixed inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none z-0"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(100 100 100) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}>
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
