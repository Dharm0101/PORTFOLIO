import React, { useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import { X, Printer, Download, Mail, Globe, MapPin, CheckCircle2 } from 'lucide-react';

export const ResumeModal = ({ isOpen, onClose }) => {
  const { personal, skills, experience } = portfolioData;

  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = 'auto';
      return;
    }
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      className="resume-backdrop"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 120,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
        background: 'rgba(5, 8, 14, 0.85)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
      }}
      onClick={onClose}
    >
      <div
        className="glass-panel resume-container"
        style={{
          maxWidth: '860px',
          width: '100%',
          maxHeight: '92vh',
          overflowY: 'auto',
          position: 'relative',
          padding: '40px',
          borderRadius: '20px',
          background: 'var(--bg-secondary)',
          color: 'var(--text-primary)',
          boxShadow: '0 25px 60px rgba(0,0,0,0.7)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar controls */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '28px',
            paddingBottom: '16px',
            borderBottom: '1px solid var(--border-glass)',
          }}
          className="no-print"
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <button onClick={handlePrint} className="btn btn-primary btn-sm">
              <Printer size={16} />
              <span>Print / Save as PDF</span>
            </button>
          </div>

          <button
            onClick={onClose}
            aria-label="Close resume"
            style={{
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid var(--border-glass)',
              borderRadius: '50%',
              width: '36px',
              height: '36px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--text-primary)',
              cursor: 'pointer',
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Printable Resume Document */}
        <div className="resume-sheet">
          {/* Header */}
          <div style={{ marginBottom: '28px', borderBottom: '2px solid var(--border-glass)', paddingBottom: '20px' }}>
            <h1 style={{ fontSize: '2.2rem', marginBottom: '6px' }}>{personal.name}</h1>
            <p style={{ fontSize: '1.15rem', color: 'var(--accent-cyan)', fontWeight: 600, marginBottom: '12px' }}>
              Full Stack Developer (Frontend & Backend)
            </p>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '18px',
                fontSize: '0.86rem',
                color: 'var(--text-muted)',
              }}
            >
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <MapPin size={14} /> {personal.location}
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Mail size={14} /> {personal.email}
              </span>
              <a
                href={personal.github}
                target="_blank"
                rel="noreferrer"
                style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--accent-cyan)', textDecoration: 'none' }}
              >
                <Globe size={14} /> github.com/Dharm0101
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div style={{ marginBottom: '28px' }}>
            <h3 style={{ fontSize: '1.05rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--accent-primary)', marginBottom: '10px' }}>
              Professional Summary
            </h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '0.94rem' }}>
              Passionate Full Stack Developer pursuing BE in AIML (2024–2028) at LJ University, Ahmedabad. Specialized strictly in Frontend and Backend engineering, with proven capability in designing responsive React applications, building scalable Node.js & Express REST APIs, and architecting PostgreSQL and MongoDB databases.
            </p>
          </div>

          {/* Education */}
          <div style={{ marginBottom: '28px' }}>
            <h3 style={{ fontSize: '1.05rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--accent-primary)', marginBottom: '14px' }}>
              Education
            </h3>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '4px' }}>
                <strong style={{ fontSize: '1.05rem', color: 'var(--text-primary)' }}>
                  BE in Artificial Intelligence & Machine Learning (AIML)
                </strong>
                <span style={{ fontSize: '0.82rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-cyan)' }}>
                  2024 - 2028
                </span>
              </div>
              <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '8px' }}>
                LJ University • Ahmedabad, Gujarat, India
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                Bachelor of Engineering in Artificial Intelligence & Machine Learning (AIML). Foundational studies in software engineering, database architectures, data structures, and production web systems.
              </p>
            </div>
          </div>

          {/* Technical Proficiencies - ONLY Frontend & Backend */}
          <div style={{ marginBottom: '28px' }}>
            <h3 style={{ fontSize: '1.05rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--accent-primary)', marginBottom: '14px' }}>
              Technical Proficiencies (Frontend & Backend Only)
            </h3>
            <div className="resume-skills-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
              {skills.categories.map((cat) => (
                <div key={cat.id} style={{ background: 'rgba(255,255,255,0.03)', padding: '16px', borderRadius: '12px', border: '1px solid var(--border-glass)' }}>
                  <strong style={{ fontSize: '0.92rem', color: 'var(--accent-cyan)', display: 'block', marginBottom: '8px' }}>
                    {cat.name}
                  </strong>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    {cat.items.map(i => i.name).join(' • ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Full Stack Projects */}
          <div style={{ marginBottom: '20px' }}>
            <h3 style={{ fontSize: '1.05rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--accent-primary)', marginBottom: '16px' }}>
              Featured Engineering Projects
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {portfolioData.projects.map((proj) => (
                <div key={proj.id} style={{ background: 'rgba(255,255,255,0.02)', padding: '18px', borderRadius: '12px', border: '1px solid var(--border-glass)' }}>
                  <div className="resume-project-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '8px', marginBottom: '6px' }}>
                    <strong style={{ fontSize: '1.02rem', color: 'var(--text-primary)' }}>{proj.title}</strong>
                    <div style={{ display: 'flex', gap: '10px', fontSize: '0.82rem' }}>
                      {proj.liveUrl && (
                        <a href={proj.liveUrl} target="_blank" rel="noreferrer" style={{ color: 'var(--accent-cyan)', textDecoration: 'none' }}>
                          Live Demo ↗
                        </a>
                      )}
                      {proj.githubUrl && (
                        <a href={proj.githubUrl} target="_blank" rel="noreferrer" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>
                          GitHub ↗
                        </a>
                      )}
                    </div>
                  </div>
                  <div style={{ fontSize: '0.84rem', color: 'var(--accent-emerald)', marginBottom: '8px', fontFamily: 'var(--font-mono)' }}>
                    {proj.technologies.slice(0, 6).join(' | ')}
                  </div>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '8px' }}>
                    {proj.summary}
                  </p>
                  <ul style={{ paddingLeft: '20px', color: 'var(--text-muted)', fontSize: '0.84rem', lineHeight: 1.5 }}>
                    {proj.features.slice(0, 2).map((feat, fIdx) => (
                      <li key={fIdx}>{feat}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .resume-backdrop {
            padding: 10px !important;
          }
          .resume-container {
            padding: 20px 16px !important;
            max-height: 94vh !important;
            border-radius: 14px !important;
          }
          .resume-skills-grid {
            grid-template-columns: 1fr !important;
          }
          .resume-project-header {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 6px !important;
          }
        }
        @media print {
          .no-print { display: none !important; }
          body { background: white !important; color: black !important; }
          .resume-container {
            max-width: 100% !important;
            box-shadow: none !important;
            border: none !important;
            background: white !important;
            color: black !important;
          }
          .resume-sheet * {
            color: #111827 !important;
            border-color: #e5e7eb !important;
          }
        }
      `}</style>
    </div>
  );
};
