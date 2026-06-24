'use client';

import React, { useState } from 'react';
import Reveal from '@/components/Reveal';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: "aca23316-98f7-456d-a267-6ea420275e2a", // Live Web3Forms access key
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: "New Website Lead - ASRAGEN",
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="cta-section" style={{ minHeight: '100vh', paddingTop: '160px' }} aria-labelledby="cta-title">
      <div className="cta-inner">
        <Reveal>
          <span className="section-tag">Ready to Begin?</span>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="section-title" id="cta-title">
            Let's Build Something <span>Extraordinary</span>
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <p className="cta-desc">
            From smart home systems to enterprise software, we are your end-to-end technology partner. Tell us your vision and we'll engineer the solution.
          </p>
        </Reveal>

        <Reveal delay={300}>
          <div className="contact-form-container">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label" htmlFor="name">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="form-control"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="email">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="form-control"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="message">
                  Project Details
                </label>
                <textarea
                  id="message"
                  required
                  className="form-control"
                  placeholder="Describe your project requirements, goals, and timeline..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
              </div>

              <button type="submit" disabled={isSubmitting} className="btn-primary" style={{ width: '100%', border: 'none', cursor: 'pointer' }}>
                {isSubmitting ? 'Sending Request...' : 'Send Message'}
              </button>

               {submitStatus === 'success' && (
                <p style={{ color: 'var(--gold)', marginTop: '20px', fontSize: '14px', letterSpacing: '1px' }}>
                  Thank you! Your message has been sent successfully. We will get back to you within 24 hours.
                </p>
              )}

              {submitStatus === 'error' && (
                <p style={{ color: '#ff4a4a', marginTop: '20px', fontSize: '14px', letterSpacing: '1.5px' }}>
                  Oops! Something went wrong. Please check your network or try again later.
                </p>
              )}
            </form>
          </div>
        </Reveal>

        <Reveal delay={400}>
          <div className="cta-contact">
            <div className="contact-item">
              <span className="contact-label">Email</span>
              <span className="contact-value">hello@asragen.com</span>
            </div>
            <div className="contact-item">
              <span className="contact-label">Website</span>
              <span className="contact-value">www.asragen.com</span>
            </div>
            <div className="contact-item">
              <span className="contact-label">Response Time</span>
              <span className="contact-value">Within 24 Hours</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
