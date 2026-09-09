import React, { useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import { X, Printer, Download, Mail, Globe, MapPin, CheckCircle2 } from 'lucide-react';

export const ResumeModal = ({ isOpen, onClose }) => {
  const { personal, skills, experience } = portfolioData;

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
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
              {personal.role}
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
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Globe size={14} /> dharm.dev
              </span>
            </div>
          </div>

          {/* Executive Summary */}
          <div style={{ marginBottom: '28px' }}>
            <h3 style={{ fontSize: '1.1rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--accent-primary)', marginBottom: '10px' }}>
              Executive Summary
            </h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '0.94rem' }}>
              {personal.bio[0]}
            </p>
          </div>

          {/* Experience Section */}
          <div style={{ marginBottom: '32px' }}>
            <h3 style={{ fontSize: '1.1rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--accent-primary)', marginBottom: '16px' }}>
              Experience & Achievements
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
              {experience.map((exp, idx) => (
                <div key={idx}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '4px' }}>
                    <strong style={{ fontSize: '1.05rem', color: 'var(--text-primary)' }}>{exp.role}</strong>
                    <span style={{ fontSize: '0.82rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-cyan)' }}>
                      {exp.period}
                    </span>
                  </div>
                  <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '8px' }}>
                    {exp.company} • {exp.location}
                  </div>
                  <ul style={{ paddingLeft: '20px', color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                    {exp.achievements.map((ach, aIdx) => (
                      <li key={aIdx} style={{ marginBottom: '4px' }}>
                        {ach}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Breakdown */}
          <div>
            <h3 style={{ fontSize: '1.1rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--accent-primary)', marginBottom: '14px' }}>
              Technical Proficiencies
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
              {skills.categories.map((cat) => (
                <div key={cat.id} style={{ background: 'rgba(255,255,255,0.03)', padding: '14px', borderRadius: '10px', border: '1px solid var(--border-glass)' }}>
                  <strong style={{ fontSize: '0.88rem', color: 'var(--accent-cyan)', display: 'block', marginBottom: '6px' }}>
                    {cat.name}
                  </strong>
                  <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                    {cat.items.map(i => i.name).join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
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
