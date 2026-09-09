import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Mail, MapPin, Send, CheckCircle2, AlertCircle, MessageSquare } from 'lucide-react';

export const Contact = ({ onShowToast }) => {
  const { personal } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name.';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.subject.trim()) errs.subject = 'Subject line is required.';
    if (!formData.message.trim() || formData.message.length < 10) {
      errs.message = 'Message must be at least 10 characters.';
    }
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setSubmitting(true);
    // Simulate API dispatch
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      onShowToast('Message transmitted successfully! Dharm will get back to you shortly.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1200);
  };

  return (
    <section id="contact" className="section" style={{ position: 'relative' }}>
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <span className="section-tagline">// 06. Get In Touch</span>
          <h2 className="section-title">
            Let's Build Something <span className="gradient-text">Exceptional</span>
          </h2>
          <p className="section-subtitle">
            Whether you have an ambitious platform to architect, a consulting opportunity, or just want to discuss tech.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.3fr',
            gap: '48px',
            alignItems: 'start',
          }}
          className="contact-layout"
        >
          {/* Left: Contact Info Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div
              className="glass-panel"
              style={{
                padding: '32px',
                display: 'flex',
                alignItems: 'center',
                gap: '18px',
              }}
            >
              <div
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '14px',
                  background: 'var(--badge-bg)',
                  color: 'var(--accent-cyan)',
                  border: '1px solid var(--badge-border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Mail size={24} />
              </div>
              <div>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  Direct Email
                </div>
                <a
                  href={`mailto:${personal.email}`}
                  style={{
                    color: 'var(--text-primary)',
                    fontSize: '1.05rem',
                    fontWeight: 600,
                    textDecoration: 'none',
                  }}
                  onMouseEnter={(e) => (e.target.style.color = 'var(--accent-cyan)')}
                  onMouseLeave={(e) => (e.target.style.color = 'var(--text-primary)')}
                >
                  {personal.email}
                </a>
              </div>
            </div>

            <div
              className="glass-panel"
              style={{
                padding: '32px',
                display: 'flex',
                alignItems: 'center',
                gap: '18px',
              }}
            >
              <div
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '14px',
                  background: 'var(--badge-bg)',
                  color: 'var(--accent-primary)',
                  border: '1px solid var(--badge-border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <MapPin size={24} />
              </div>
              <div>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  Primary Location
                </div>
                <div style={{ color: 'var(--text-primary)', fontSize: '1.05rem', fontWeight: 600 }}>
                  {personal.location}
                </div>
              </div>
            </div>

            <div
              className="glass-panel"
              style={{
                padding: '32px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <span className="pulse-dot"></span>
                <span style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--accent-emerald)' }}>
                  CURRENT STATUS
                </span>
              </div>
              <h4 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>Open for Collaborations</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.6 }}>
                Accepting select engineering leadership positions, advisory roles, and high-impact distributed systems consulting.
              </p>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div
            className="glass-panel"
            style={{
              padding: '36px',
            }}
          >
            <h3 style={{ fontSize: '1.4rem', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <MessageSquare size={22} style={{ color: 'var(--accent-primary)' }} />
              <span>Send a Direct Message</span>
            </h3>

            {submitted && (
              <div
                style={{
                  padding: '16px',
                  borderRadius: '12px',
                  background: 'rgba(16, 185, 129, 0.12)',
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                  color: 'var(--accent-emerald)',
                  marginBottom: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  fontSize: '0.92rem',
                }}
              >
                <CheckCircle2 size={20} />
                <span>Thank you! Your message was delivered successfully.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {/* Name & Email */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '16px',
                }}
                className="form-row"
              >
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '8px', color: 'var(--text-secondary)' }}>
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Jordan Vance"
                    className="form-input"
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '10px',
                      background: 'rgba(255,255,255,0.03)',
                      border: errors.name ? '1px solid #f43f5e' : '1px solid var(--border-glass)',
                      color: 'var(--text-primary)',
                      outline: 'none',
                      fontFamily: 'inherit',
                      fontSize: '0.92rem',
                    }}
                  />
                  {errors.name && (
                    <span style={{ fontSize: '0.78rem', color: '#f43f5e', marginTop: '4px', display: 'block' }}>
                      {errors.name}
                    </span>
                  )}
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '8px', color: 'var(--text-secondary)' }}>
                    Your Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="jordan@company.com"
                    className="form-input"
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '10px',
                      background: 'rgba(255,255,255,0.03)',
                      border: errors.email ? '1px solid #f43f5e' : '1px solid var(--border-glass)',
                      color: 'var(--text-primary)',
                      outline: 'none',
                      fontFamily: 'inherit',
                      fontSize: '0.92rem',
                    }}
                  />
                  {errors.email && (
                    <span style={{ fontSize: '0.78rem', color: '#f43f5e', marginTop: '4px', display: 'block' }}>
                      {errors.email}
                    </span>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '8px', color: 'var(--text-secondary)' }}>
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g. New Project Architecture / Technical Role"
                  className="form-input"
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '10px',
                    background: 'rgba(255,255,255,0.03)',
                    border: errors.subject ? '1px solid #f43f5e' : '1px solid var(--border-glass)',
                    color: 'var(--text-primary)',
                    outline: 'none',
                    fontFamily: 'inherit',
                    fontSize: '0.92rem',
                  }}
                />
                {errors.subject && (
                  <span style={{ fontSize: '0.78rem', color: '#f43f5e', marginTop: '4px', display: 'block' }}>
                    {errors.subject}
                  </span>
                )}
              </div>

              {/* Message */}
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '8px', color: 'var(--text-secondary)' }}>
                  Message *
                </label>
                <textarea
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Share details about your timeline, technical goals, or opportunity..."
                  className="form-input"
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '10px',
                    background: 'rgba(255,255,255,0.03)',
                    border: errors.message ? '1px solid #f43f5e' : '1px solid var(--border-glass)',
                    color: 'var(--text-primary)',
                    outline: 'none',
                    fontFamily: 'inherit',
                    fontSize: '0.92rem',
                    resize: 'vertical',
                  }}
                />
                {errors.message && (
                  <span style={{ fontSize: '0.78rem', color: '#f43f5e', marginTop: '4px', display: 'block' }}>
                    {errors.message}
                  </span>
                )}
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                disabled={submitting}
                style={{
                  alignSelf: 'flex-start',
                  minWidth: '180px',
                }}
              >
                {submitting ? (
                  <span>Sending Dispatch...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={16} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        .form-input:focus {
          border-color: var(--accent-primary) !important;
          background: rgba(255,255,255,0.06) !important;
          box-shadow: 0 0 15px rgba(99, 102, 241, 0.25);
        }
        @media (max-width: 860px) {
          .contact-layout {
            grid-template-columns: 1fr !important;
          }
          .form-row {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
