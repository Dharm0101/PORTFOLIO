import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Code2, Cpu, ShieldCheck, Zap, FileText, ArrowRight } from 'lucide-react';

export const About = ({ onOpenResume }) => {
  const { personal } = portfolioData;

  const pillars = [
    {
      icon: <Cpu size={24} style={{ color: 'var(--accent-cyan)' }} />,
      title: "Resilient Distributed Systems",
      description: "Designing decoupled, fault-tolerant microservices with automated failover and sub-50ms API latency."
    },
    {
      icon: <Zap size={24} style={{ color: '#a855f7' }} />,
      title: "High-Performance Interfaces",
      description: "Obsessive focus on Core Web Vitals, 60fps interaction rendering, and accessible fluid design systems."
    },
    {
      icon: <ShieldCheck size={24} style={{ color: 'var(--accent-emerald)' }} />,
      title: "Production-Grade Security",
      description: "Zero-trust auth, encrypted communication tunnels, RBAC safeguards, and automated compliance pipelines."
    }
  ];

  return (
    <section id="about" className="section" style={{ position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tagline">// 01. Background & Philosophy</span>
          <h2 className="section-title">
            Engineering with <span className="gradient-text">Precision & Vision</span>
          </h2>
          <p className="section-subtitle">
            Bridging complex distributed cloud infrastructure with intuitive, ultra-polished digital experiences.
          </p>
        </div>

        {/* Stats Grid */}
        <div
          className="grid-4"
          style={{ marginBottom: '48px' }}
        >
          {personal.stats.map((stat, idx) => (
            <div
              key={idx}
              className="glass-panel"
              style={{
                padding: '24px 20px',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  fontSize: '2.5rem',
                  fontWeight: 800,
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--accent-cyan)',
                  marginBottom: '6px',
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontSize: '0.9rem',
                  color: 'var(--text-secondary)',
                  fontWeight: 500,
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Two-column layout: Bio & Pillars */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.1fr 1fr',
            gap: '40px',
            alignItems: 'start',
          }}
          className="about-split"
        >
          {/* Left Bio Card */}
          <div
            className="glass-panel"
            style={{
              padding: '36px',
            }}
          >
            <h3
              style={{
                fontSize: '1.5rem',
                marginBottom: '20px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
              }}
            >
              <Code2 size={24} style={{ color: 'var(--accent-primary)' }} />
              <span>Who I Am</span>
            </h3>

            {personal.bio.map((paragraph, i) => (
              <p
                key={i}
                style={{
                  color: 'var(--text-secondary)',
                  fontSize: '1.02rem',
                  lineHeight: 1.8,
                  marginBottom: '20px',
                }}
              >
                {paragraph}
              </p>
            ))}

            <div
              style={{
                paddingTop: '16px',
                borderTop: '1px solid var(--border-glass)',
                display: 'flex',
                flexWrap: 'wrap',
                gap: '16px',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                📍 Based in <strong style={{ color: 'var(--text-primary)' }}>{personal.location}</strong>
              </div>

              <button onClick={onOpenResume} className="btn btn-outline btn-sm">
                <FileText size={16} style={{ color: 'var(--accent-cyan)' }} />
                <span>Open Full Resume</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>

          {/* Right Core Pillars */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {pillars.map((pillar, index) => (
              <div
                key={index}
                className="glass-panel"
                style={{
                  padding: '28px',
                  display: 'flex',
                  gap: '20px',
                  alignItems: 'flex-start',
                }}
              >
                <div
                  style={{
                    padding: '12px',
                    borderRadius: '12px',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid var(--border-glass)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {pillar.icon}
                </div>
                <div>
                  <h4 style={{ fontSize: '1.15rem', marginBottom: '8px' }}>
                    {pillar.title}
                  </h4>
                  <p
                    style={{
                      color: 'var(--text-secondary)',
                      fontSize: '0.92rem',
                      lineHeight: 1.6,
                    }}
                  >
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-split {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
