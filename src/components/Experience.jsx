import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export const Experience = () => {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="section" style={{ position: 'relative' }}>
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <span className="section-tagline">// 04. Developer Journey</span>
          <h2 className="section-title">
            Education & <span className="gradient-text">Milestones</span>
          </h2>
          <p className="section-subtitle">
            A chronicle of academic foundations at LJ University and real-world full-stack web engineering milestones.
          </p>
        </div>

        {/* Timeline Container */}
        <div
          style={{
            position: 'relative',
            maxWidth: '900px',
            margin: '0 auto',
            paddingLeft: '32px',
          }}
          className="timeline-container"
        >
          {/* Vertical Timeline Bar */}
          <div
            className="timeline-line"
            style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: '11px',
              width: '2px',
              background: 'linear-gradient(180deg, var(--accent-primary) 0%, rgba(6, 182, 212, 0.4) 100%)',
            }}
          />

          {experience.map((item, index) => (
            <div
              key={index}
              style={{
                position: 'relative',
                marginBottom: '48px',
              }}
            >
              {/* Timeline Node Point */}
              <div
                className="timeline-node"
                style={{
                  position: 'absolute',
                  top: '24px',
                  left: '-32px',
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  background: 'var(--bg-primary)',
                  border: '2px solid var(--accent-cyan)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 0 14px rgba(6, 182, 212, 0.6)',
                  zIndex: 2,
                }}
              >
                <div
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: 'var(--accent-cyan)',
                  }}
                />
              </div>

              {/* Timeline Content Card */}
              <div
                className="glass-panel timeline-card"
                style={{
                  padding: '32px',
                  borderRadius: '20px',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    gap: '12px',
                    marginBottom: '14px',
                  }}
                >
                  <div>
                    <h3 style={{ fontSize: '1.35rem', marginBottom: '4px' }}>
                      {item.role}
                    </h3>
                    <div
                      style={{
                        fontSize: '1.05rem',
                        fontWeight: 600,
                        color: 'var(--accent-cyan)',
                      }}
                    >
                      {item.company}
                    </div>
                  </div>

                  <div
                    className="timeline-meta"
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-end',
                      gap: '4px',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.84rem',
                      color: 'var(--text-muted)',
                    }}
                  >
                    <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <Calendar size={14} />
                      {item.period}
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <MapPin size={14} />
                      {item.location}
                    </span>
                  </div>
                </div>

                <p
                  style={{
                    color: 'var(--text-secondary)',
                    fontSize: '0.96rem',
                    lineHeight: 1.65,
                    marginBottom: '20px',
                  }}
                >
                  {item.description}
                </p>

                {/* Key Achievements */}
                <div style={{ marginBottom: '22px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {item.achievements.map((ach, aIdx) => (
                      <div key={aIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                        <CheckCircle2
                          size={16}
                          style={{ color: 'var(--accent-emerald)', flexShrink: 0, marginTop: '4px' }}
                        />
                        <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.5 }}>
                          {ach}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Chips */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {item.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      style={{
                        fontSize: '0.78rem',
                        fontFamily: 'var(--font-mono)',
                        padding: '3px 10px',
                        borderRadius: '6px',
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid var(--border-glass)',
                        color: 'var(--text-muted)',
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .timeline-container {
            padding-left: 20px !important;
          }
          .timeline-line {
            left: 7px !important;
          }
          .timeline-node {
            left: -20px !important;
            width: 16px !important;
            height: 16px !important;
            top: 26px !important;
          }
          .timeline-card {
            padding: 20px 16px !important;
            border-radius: 16px !important;
          }
          .timeline-meta {
            align-items: flex-start !important;
          }
        }
      `}</style>
    </section>
  );
};
