import React, { useEffect } from 'react';
import { X, ExternalLink, Github, CheckCircle2, Layers, Cpu, Activity } from 'lucide-react';

export const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
        background: 'rgba(4, 7, 12, 0.82)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
      }}
      onClick={onClose}
    >
      <div
        className="glass-panel"
        style={{
          maxWidth: '850px',
          width: '100%',
          maxHeight: '90vh',
          overflowY: 'auto',
          position: 'relative',
          padding: '32px',
          borderRadius: '24px',
          boxShadow: '0 30px 80px rgba(0,0,0,0.7), 0 0 50px rgba(99,102,241,0.25)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'rgba(255,255,255,0.06)',
            border: '1px solid var(--border-glass)',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--text-primary)',
            cursor: 'pointer',
            zIndex: 10,
            transition: 'all 0.2s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.15)')}
          onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.06)')}
        >
          <X size={20} />
        </button>

        {/* Project Header Image */}
        <div
          style={{
            width: '100%',
            height: '340px',
            borderRadius: '16px',
            overflow: 'hidden',
            marginBottom: '28px',
            position: 'relative',
            border: '1px solid var(--border-glass)',
          }}
        >
          <img
            src={project.image}
            alt={project.title}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </div>

        {/* Title & Tagline */}
        <div style={{ marginBottom: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
            <span className="badge" style={{ textTransform: 'uppercase' }}>
              {project.category}
            </span>
          </div>
          <h2 style={{ fontSize: '1.85rem', marginBottom: '10px' }}>
            {project.title}
          </h2>
          <p style={{ color: 'var(--accent-cyan)', fontSize: '1.05rem', fontWeight: 500 }}>
            {project.tagline}
          </p>
        </div>

        {/* Stat Highlights */}
        {project.stats && (
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '16px',
              padding: '16px 20px',
              background: 'rgba(255,255,255,0.03)',
              borderRadius: '14px',
              border: '1px solid var(--border-glass)',
              marginBottom: '24px',
            }}
          >
            {Object.entries(project.stats).map(([key, value]) => (
              <div key={key} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Activity size={16} style={{ color: 'var(--accent-emerald)' }} />
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'capitalize' }}>
                  {key}:
                </span>
                <strong style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-mono)' }}>
                  {value}
                </strong>
              </div>
            ))}
          </div>
        )}

        {/* Summary */}
        <div style={{ marginBottom: '24px' }}>
          <h3 style={{ fontSize: '1.15rem', marginBottom: '10px', color: 'var(--text-primary)' }}>
            Overview
          </h3>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.75, fontSize: '0.96rem' }}>
            {project.summary}
          </p>
        </div>

        {/* Key Features List */}
        <div style={{ marginBottom: '28px' }}>
          <h3 style={{ fontSize: '1.15rem', marginBottom: '12px', color: 'var(--text-primary)' }}>
            Key Architectural Achievements
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {project.features.map((feature, fIdx) => (
              <div key={fIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <CheckCircle2 size={18} style={{ color: 'var(--accent-emerald)', flexShrink: 0, marginTop: '3px' }} />
                <span style={{ color: 'var(--text-secondary)', fontSize: '0.94rem', lineHeight: 1.5 }}>
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies Badges */}
        <div style={{ marginBottom: '32px' }}>
          <h3 style={{ fontSize: '1.15rem', marginBottom: '12px', color: 'var(--text-primary)' }}>
            Technologies & Tools
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {project.technologies.map((tech, tIdx) => (
              <span
                key={tIdx}
                style={{
                  fontSize: '0.82rem',
                  fontFamily: 'var(--font-mono)',
                  padding: '5px 12px',
                  borderRadius: '6px',
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid var(--border-glass)',
                  color: 'var(--text-primary)',
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '16px',
            paddingTop: '20px',
            borderTop: '1px solid var(--border-glass)',
          }}
        >
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
            style={{ flex: 1, minWidth: '180px' }}
          >
            <span>Live Interactive Demo</span>
            <ExternalLink size={17} />
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline"
            style={{ flex: 1, minWidth: '180px' }}
          >
            <Github size={18} />
            <span>View Source Code</span>
          </a>
        </div>
      </div>
    </div>
  );
};
