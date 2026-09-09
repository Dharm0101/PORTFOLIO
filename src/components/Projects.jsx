import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { ArrowUpRight, ExternalLink, Github, Eye, Sparkles } from 'lucide-react';

export const Projects = ({ onSelectProject }) => {
  const { projects } = portfolioData;
  const [filter, setFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'fullstack', label: 'E-Commerce' },
    { id: 'rental', label: 'Vehicle Rental' },
    { id: 'enterprise', label: 'Enterprise ERP' },
  ];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="section" style={{ position: 'relative' }}>
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <span className="section-tagline">// 03. Selected Works</span>
          <h2 className="section-title">
            Featured <span className="gradient-text">Engineering Projects</span>
          </h2>
          <p className="section-subtitle">
            A curated showcase of scalable e-commerce platforms, smart vehicle rental marketplaces, and enterprise ERP systems.
          </p>
        </div>

        {/* Filter Buttons */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '10px',
            marginBottom: '48px',
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`btn btn-sm ${filter === cat.id ? 'btn-primary' : 'btn-outline'}`}
              style={{ borderRadius: 'var(--radius-full)' }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '36px',
          }}
          className="projects-grid"
        >
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-panel project-card"
              style={{
                borderRadius: '22px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                cursor: 'pointer',
              }}
              onClick={() => onSelectProject(project)}
            >
              {/* Card Image Banner */}
              <div
                className="project-banner"
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '270px',
                  overflow: 'hidden',
                  background: 'var(--bg-secondary)',
                }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.4s ease',
                  }}
                  className="project-img"
                />

                {/* Category Badge overlay */}
                <div
                  style={{
                    position: 'absolute',
                    top: '16px',
                    left: '16px',
                  }}
                >
                  <span
                    className="badge"
                    style={{
                      background: 'rgba(15, 20, 32, 0.85)',
                      backdropFilter: 'blur(8px)',
                      textTransform: 'uppercase',
                      fontSize: '0.75rem',
                    }}
                  >
                    {project.category}
                  </span>
                </div>

                {/* Quick inspect overlay button */}
                <div
                  className="quick-view-overlay"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'rgba(8, 11, 17, 0.65)',
                    backdropFilter: 'blur(4px)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    opacity: 0,
                    transition: 'opacity 0.25s ease',
                  }}
                >
                  <button className="btn btn-primary btn-sm" style={{ pointerEvents: 'none' }}>
                    <Eye size={16} />
                    <span>View Architecture</span>
                  </button>
                </div>
              </div>

              {/* Card Content Body */}
              <div
                className="project-body"
                style={{
                  padding: '28px',
                  display: 'flex',
                  flexDirection: 'column',
                  flexGrow: 1,
                }}
              >
                <h3
                  style={{
                    fontSize: '1.35rem',
                    marginBottom: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <span>{project.title}</span>
                  <ArrowUpRight size={20} style={{ color: 'var(--accent-cyan)' }} />
                </h3>

                <p
                  style={{
                    color: 'var(--text-secondary)',
                    fontSize: '0.94rem',
                    lineHeight: 1.65,
                    marginBottom: '20px',
                    flexGrow: 1,
                  }}
                >
                  {project.tagline}
                </p>

                {/* Tech Chips */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '6px',
                    marginBottom: '20px',
                  }}
                >
                  {project.technologies.slice(0, 4).map((tech, idx) => (
                    <span
                      key={idx}
                      style={{
                        fontSize: '0.78rem',
                        fontFamily: 'var(--font-mono)',
                        padding: '4px 10px',
                        borderRadius: '6px',
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid var(--border-glass)',
                        color: 'var(--text-muted)',
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span
                      style={{
                        fontSize: '0.78rem',
                        padding: '4px 8px',
                        color: 'var(--accent-cyan)',
                      }}
                    >
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>

                {/* Card Footer Actions */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingTop: '16px',
                    borderTop: '1px solid var(--border-glass)',
                    fontSize: '0.88rem',
                  }}
                >
                  <span
                    style={{
                      color: 'var(--accent-cyan)',
                      fontWeight: 600,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                    }}
                  >
                    Deep Dive
                  </span>

                  <div
                    style={{ display: 'flex', gap: '10px' }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      style={{ color: 'var(--text-secondary)' }}
                      className="card-action-icon"
                      title="GitHub"
                    >
                      <Github size={17} />
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      style={{ color: 'var(--text-secondary)' }}
                      className="card-action-icon"
                      title="Live Demo"
                    >
                      <ExternalLink size={17} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .project-card:hover .project-img {
          transform: scale(1.05);
        }
        .project-card:hover .quick-view-overlay {
          opacity: 1 !important;
        }
        .card-action-icon:hover {
          color: var(--accent-primary) !important;
        }
        @media (max-width: 900px) {
          .projects-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 640px) {
          .project-banner {
            height: 200px !important;
          }
          .project-body {
            padding: 20px 16px !important;
          }
          .projects-grid {
            gap: 20px !important;
          }
        }
      `}</style>
    </section>
  );
};
