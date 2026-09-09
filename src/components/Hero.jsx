import React, { useState, useEffect, useRef } from 'react';
import { portfolioData } from '../data/portfolioData';
import { ArrowRight, Terminal, Github, Linkedin, Mail, Sparkles, Download } from 'lucide-react';

export const Hero = ({ onOpenTerminal, onOpenResume }) => {
  const { personal } = portfolioData;
  const canvasRef = useRef(null);

  // Rotating roles
  const roles = [
    "Full Stack Web Developer",
    "Frontend Specialist (React & UI/UX)",
    "Backend Developer (Node.js & Express)",
    "B.Tech Scholar @ LJ University"
  ];
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  // Typewriter effect
  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timer;

    if (isDeleting) {
      timer = setTimeout(() => {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
        setTypingSpeed(40);
      }, typingSpeed);
    } else {
      timer = setTimeout(() => {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
        setTypingSpeed(90);
      }, typingSpeed);
    }

    if (!isDeleting && displayText === currentRole) {
      timer = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
      setTypingSpeed(120);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  // Particle Canvas Background
  useEffect(() => {
    const canvas = canvasRef.null || canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Particle nodes
    const particleCount = Math.min(Math.floor(width / 22), 65);
    const particles = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: Math.random() * 1.8 + 1,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(99, 102, 241, ${0.16 * (1 - dist / 130)})`;
            ctx.lineWidth = 0.8;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw & update particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(6, 182, 212, 0.45)';
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section
      id="home"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: 'calc(var(--nav-height) + 40px)',
        paddingBottom: '80px',
        overflow: 'hidden',
      }}
    >
      {/* Background canvas */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 0.8fr',
            gap: '48px',
            alignItems: 'center',
          }}
          className="hero-layout"
        >
          {/* Left Column: Text & CTAs */}
          <div>
            {/* Status availability badge */}
            <div style={{ marginBottom: '24px' }}>
              <div className="badge">
                <span className="pulse-dot"></span>
                <span>{personal.status.text}</span>
              </div>
            </div>

            {/* Main Greeting */}
            <h1
              style={{
                fontSize: 'clamp(2.5rem, 5.2vw, 4.25rem)',
                letterSpacing: '-0.035em',
                lineHeight: 1.12,
                marginBottom: '20px',
              }}
            >
              Hi, I'm <span className="gradient-text">{personal.name}</span>
            </h1>

            {/* Typewriter role */}
            <div
              style={{
                fontSize: 'clamp(1.25rem, 2.5vw, 1.85rem)',
                fontWeight: 600,
                color: 'var(--accent-cyan)',
                fontFamily: 'var(--font-mono)',
                marginBottom: '24px',
                minHeight: '2.4em',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <span>&gt; {displayText}</span>
              <span
                style={{
                  display: 'inline-block',
                  width: '8px',
                  height: '1.2em',
                  background: 'var(--accent-cyan)',
                  marginLeft: '4px',
                  animation: 'pulse 1s infinite',
                }}
              />
            </div>

            {/* Tagline bio */}
            <p
              style={{
                fontSize: '1.15rem',
                color: 'var(--text-secondary)',
                maxWidth: '620px',
                lineHeight: 1.7,
                marginBottom: '36px',
              }}
            >
              {personal.tagline}
            </p>

            {/* Action Buttons */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '16px',
                alignItems: 'center',
                marginBottom: '44px',
              }}
            >
              <a href="#projects" className="btn btn-primary">
                <span>Explore Featured Work</span>
                <ArrowRight size={18} />
              </a>

              <button onClick={onOpenTerminal} className="btn btn-outline">
                <Terminal size={18} style={{ color: 'var(--accent-cyan)' }} />
                <span>Launch Dev CLI</span>
              </button>

              <button onClick={onOpenResume} className="btn btn-outline">
                <Download size={17} />
                <span>Resume</span>
              </button>
            </div>

            {/* Social Channels & Fast Connect */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <span
                style={{
                  fontSize: '0.88rem',
                  color: 'var(--text-muted)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  fontWeight: 600,
                }}
              >
                Connect:
              </span>
              <div style={{ display: 'flex', gap: '14px' }}>
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noreferrer"
                  className="social-icon-btn"
                  title="GitHub Profile"
                >
                  <Github size={19} />
                </a>
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="social-icon-btn"
                  title="LinkedIn Profile"
                >
                  <Linkedin size={19} />
                </a>
                <a
                  href={`mailto:${personal.email}`}
                  className="social-icon-btn"
                  title="Direct Email"
                >
                  <Mail size={19} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Card */}
          <div
            style={{
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <div
              className="glass-panel"
              style={{
                padding: '16px',
                position: 'relative',
                borderRadius: '28px',
                maxWidth: '420px',
                width: '100%',
                overflow: 'hidden',
                boxShadow: '0 25px 60px -15px rgba(0,0,0,0.6), 0 0 40px rgba(99, 102, 241, 0.25)',
              }}
            >
              {/* Profile Image with Cyber Rim Light */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '1 / 1',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  background: 'linear-gradient(180deg, rgba(99,102,241,0.2) 0%, rgba(15,20,32,0.8) 100%)',
                }}
              >
                <img
                  src={personal.avatar}
                  alt={personal.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                    transition: 'transform 0.5s ease',
                  }}
                  className="avatar-hover"
                />

                {/* Floating Metric Pill: Speed */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '16px',
                    left: '16px',
                    background: 'rgba(15, 20, 32, 0.85)',
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                    border: '1px solid rgba(255,255,255,0.12)',
                    padding: '8px 14px',
                    borderRadius: 'var(--radius-md)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                  }}
                >
                  <Sparkles size={16} style={{ color: '#06b6d4' }} />
                  <div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>SPECIALIZATION</div>
                    <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#f8fafc' }}>
                      AIML • LJ University
                    </div>
                  </div>
                </div>
              </div>

              {/* Mini Terminal bar at bottom */}
              <div
                style={{
                  marginTop: '16px',
                  padding: '12px 16px',
                  background: 'rgba(8, 11, 17, 0.75)',
                  borderRadius: '14px',
                  border: '1px solid var(--border-glass)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.78rem',
                }}
              >
                <span style={{ color: 'var(--accent-emerald)' }}>● aiml_kernel: active</span>
                <span style={{ color: 'var(--text-muted)' }}>accuracy: 99.8%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .social-icon-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 10px;
          background: var(--bg-card);
          border: 1px solid var(--border-glass);
          color: var(--text-secondary);
          text-decoration: none;
          transition: all 0.2s ease;
        }
        .social-icon-btn:hover {
          color: var(--accent-primary);
          border-color: var(--accent-primary);
          transform: translateY(-3px);
          box-shadow: 0 6px 20px rgba(99, 102, 241, 0.3);
        }
        .avatar-hover:hover {
          transform: scale(1.03);
        }
        @media (max-width: 960px) {
          .hero-layout {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          .hero-layout > div:first-child {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>
    </section>
  );
};
