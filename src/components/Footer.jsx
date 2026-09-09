import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { ArrowUp, Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';

export const Footer = () => {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        borderTop: '1px solid var(--border-glass)',
        background: 'var(--bg-secondary)',
        padding: '60px 0 36px 0',
        position: 'relative',
        zIndex: 10,
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '24px',
            marginBottom: '40px',
          }}
        >
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '8px',
                  background: 'var(--accent-gradient)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  fontWeight: 800,
                  fontSize: '0.95rem',
                }}
              >
                D
              </div>
              <span style={{ fontSize: '1.2rem', fontWeight: 800 }}>
                {personal.name}
              </span>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem' }}>
              {personal.role} • Based in {personal.location}
            </p>
          </div>

          {/* Social Links */}
          <div style={{ display: 'flex', gap: '12px' }}>
            <a
              href={personal.github}
              target="_blank"
              rel="noreferrer"
              className="social-icon-btn"
              title="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noreferrer"
              className="social-icon-btn"
              title="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={personal.twitter}
              target="_blank"
              rel="noreferrer"
              className="social-icon-btn"
              title="Twitter / X"
            >
              <Twitter size={18} />
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="social-icon-btn"
              title="Email"
            >
              <Mail size={18} />
            </a>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="btn btn-outline btn-sm"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            <span>Back to top</span>
            <ArrowUp size={15} />
          </button>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: '1px solid var(--border-glass)',
            paddingTop: '24px',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '12px',
            fontSize: '0.84rem',
            color: 'var(--text-muted)',
          }}
        >
          <div>
            © {new Date().getFullYear()} {personal.name}. All rights reserved.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            Designed & Engineered with React, Vite & Modern CSS
          </div>
        </div>
      </div>
    </footer>
  );
};
