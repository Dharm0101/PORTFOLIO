import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { ProjectModal } from './components/ProjectModal';
import { Experience } from './components/Experience';
import { TerminalWidget } from './components/TerminalWidget';
import { ResumeModal } from './components/ResumeModal';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export function App() {
  const [theme, setTheme] = useState('dark');
  const [selectedProject, setSelectedProject] = useState(null);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4500);
  };

  const cycleTheme = () => {
    setTheme((prev) => {
      if (prev === 'dark') return 'light';
      if (prev === 'light') return 'neon';
      return 'dark';
    });
  };

  return (
    <div className="portfolio-app" style={{ minHeight: '100vh', position: 'relative' }}>
      {/* Background Ambient Glows */}
      <div className="ambient-glow">
        <div className="glow-orb-1" />
        <div className="glow-orb-2" />
      </div>

      {/* Navigation */}
      <Navbar
        theme={theme}
        setTheme={setTheme}
        onOpenTerminal={() => setTerminalOpen(true)}
        onOpenResume={() => setResumeOpen(true)}
      />

      {/* Main Page Content */}
      <main>
        <Hero
          onOpenTerminal={() => setTerminalOpen(true)}
          onOpenResume={() => setResumeOpen(true)}
        />
        <About onOpenResume={() => setResumeOpen(true)} />
        <Skills />
        <Projects onSelectProject={(p) => setSelectedProject(p)} />
        <Experience />
        <Contact onShowToast={showToast} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Modals */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />

      <TerminalWidget
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
        onCycleTheme={cycleTheme}
      />

      {/* Toast Notification Banner */}
      {toastMessage && (
        <div
          style={{
            position: 'fixed',
            bottom: '28px',
            right: '28px',
            zIndex: 200,
            background: 'var(--bg-secondary)',
            border: '1px solid var(--accent-cyan)',
            padding: '16px 24px',
            borderRadius: '14px',
            color: 'var(--text-primary)',
            boxShadow: '0 12px 40px rgba(0,0,0,0.6), 0 0 20px rgba(6, 182, 212, 0.3)',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            animation: 'slideUp 0.3s ease-out',
            fontSize: '0.94rem',
            maxWidth: '380px',
          }}
        >
          <div className="pulse-dot" />
          <span>{toastMessage}</span>
        </div>
      )}

      <style>{`
        @keyframes slideUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
      `}</style>
    </div>
  );
}

export default App;
