import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

export const Testimonials = () => {
  const { testimonials } = portfolioData;
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const current = testimonials[currentIndex];

  return (
    <section id="testimonials" className="section" style={{ position: 'relative' }}>
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <span className="section-tagline">// 05. Recommendations & Trust</span>
          <h2 className="section-title">
            Collaborator <span className="gradient-text">Endorsements</span>
          </h2>
          <p className="section-subtitle">
            What founders, engineering leaders, and product peers say about shipping together.
          </p>
        </div>

        {/* Carousel Card */}
        <div
          style={{
            maxWidth: '820px',
            margin: '0 auto',
            position: 'relative',
          }}
        >
          <div
            className="glass-panel"
            style={{
              padding: '44px',
              borderRadius: '24px',
              position: 'relative',
            }}
          >
            {/* Quote watermark icon */}
            <div
              style={{
                position: 'absolute',
                top: '28px',
                right: '32px',
                opacity: 0.15,
                color: 'var(--accent-primary)',
              }}
            >
              <Quote size={56} />
            </div>

            {/* Testimonial Quote */}
            <p
              style={{
                fontSize: '1.2rem',
                lineHeight: 1.8,
                color: 'var(--text-primary)',
                fontStyle: 'italic',
                marginBottom: '32px',
                position: 'relative',
                zIndex: 1,
              }}
            >
              "{current.quote}"
            </p>

            {/* Author Profile */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '16px',
                borderTop: '1px solid var(--border-glass)',
                paddingTop: '24px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <img
                  src={current.avatar}
                  alt={current.author}
                  style={{
                    width: '54px',
                    height: '54px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    border: '2px solid var(--accent-cyan)',
                  }}
                />
                <div>
                  <h4 style={{ fontSize: '1.1rem', marginBottom: '2px' }}>
                    {current.author}
                  </h4>
                  <p style={{ color: 'var(--accent-cyan)', fontSize: '0.88rem' }}>
                    {current.role}
                  </p>
                </div>
              </div>

              {/* Navigation Controls */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <button
                  onClick={prev}
                  className="btn btn-outline btn-sm"
                  aria-label="Previous testimonial"
                  style={{ width: '38px', height: '38px', padding: 0, borderRadius: '50%' }}
                >
                  <ChevronLeft size={18} />
                </button>
                <span style={{ fontSize: '0.82rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                  {currentIndex + 1} / {testimonials.length}
                </span>
                <button
                  onClick={next}
                  className="btn btn-outline btn-sm"
                  aria-label="Next testimonial"
                  style={{ width: '38px', height: '38px', padding: 0, borderRadius: '50%' }}
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
