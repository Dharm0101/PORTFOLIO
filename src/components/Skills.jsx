import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Layout, Server, Cloud, Cpu, CheckCircle2 } from 'lucide-react';

export const Skills = () => {
  const { categories } = portfolioData.skills;
  const [activeCategory, setActiveCategory] = useState('all');

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Layout': return <Layout size={20} />;
      case 'Server': return <Server size={20} />;
      case 'Cloud': return <Cloud size={20} />;
      case 'Cpu': return <Cpu size={20} />;
      default: return <Cpu size={20} />;
    }
  };

  const filteredCategories = activeCategory === 'all'
    ? categories
    : categories.filter(c => c.id === activeCategory);

  return (
    <section id="skills" className="section" style={{ position: 'relative' }}>
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <span className="section-tagline">// 02. Technical Arsenal</span>
          <h2 className="section-title">
            Skills & <span className="gradient-text">Core Competencies</span>
          </h2>
          <p className="section-subtitle">
            A comprehensive matrix of technologies, frameworks, and architecture patterns battle-tested in production.
          </p>
        </div>

        {/* Filter Tabs */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '12px',
            marginBottom: '44px',
          }}
        >
          <button
            onClick={() => setActiveCategory('all')}
            className={`btn btn-sm ${activeCategory === 'all' ? 'btn-primary' : 'btn-outline'}`}
            style={{ borderRadius: 'var(--radius-full)' }}
          >
            All Disciplines
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`btn btn-sm ${activeCategory === cat.id ? 'btn-primary' : 'btn-outline'}`}
              style={{
                borderRadius: 'var(--radius-full)',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              {getIcon(cat.icon)}
              <span>{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: activeCategory === 'all' ? 'repeat(2, 1fr)' : '1fr',
            gap: '30px',
          }}
          className="skills-grid"
        >
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              className="glass-panel"
              style={{
                padding: '32px',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* Category Header */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  marginBottom: '10px',
                }}
              >
                <div
                  style={{
                    padding: '10px',
                    borderRadius: '10px',
                    background: 'var(--badge-bg)',
                    color: 'var(--accent-cyan)',
                    border: '1px solid var(--badge-border)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {getIcon(category.icon)}
                </div>
                <div>
                  <h3 style={{ fontSize: '1.25rem' }}>{category.name}</h3>
                </div>
              </div>

              <p
                style={{
                  color: 'var(--text-secondary)',
                  fontSize: '0.88rem',
                  marginBottom: '26px',
                }}
              >
                {category.description}
              </p>

              {/* Skill Bars */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                {category.items.map((skill, sIdx) => (
                  <div key={sIdx}>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: '6px',
                        fontSize: '0.9rem',
                      }}
                    >
                      <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>
                        {skill.name}
                      </span>
                      <span
                        style={{
                          fontSize: '0.75rem',
                          fontFamily: 'var(--font-mono)',
                          padding: '2px 8px',
                          borderRadius: '6px',
                          background: 'rgba(255,255,255,0.06)',
                          color: 'var(--accent-cyan)',
                        }}
                      >
                        {skill.highlight}
                      </span>
                    </div>

                    {/* Progress Bar container */}
                    <div
                      style={{
                        width: '100%',
                        height: '7px',
                        background: 'rgba(255, 255, 255, 0.06)',
                        borderRadius: '10px',
                        overflow: 'hidden',
                        position: 'relative',
                      }}
                    >
                      <div
                        style={{
                          width: `${skill.level}%`,
                          height: '100%',
                          background: 'var(--accent-gradient)',
                          borderRadius: '10px',
                          transition: 'width 1s cubic-bezier(0.16, 1, 0.3, 1)',
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .skills-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
