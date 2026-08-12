'use client';

import React, { useState } from 'react';
import Reveal from '@/components/Reveal';

interface OptionItem {
  id: string;
  name: string;
  category: 'hardware' | 'software';
}

export default function ContactClient() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: 'under_5k',
    timeline: '1_3_months',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Selector States
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [complexity, setComplexity] = useState<'prototype' | 'production' | 'enterprise'>('prototype');

  const featureOptions: OptionItem[] = [
    { id: 'iot_core', name: 'IoT Core Integration', category: 'hardware' },
    { id: 'sensors', name: 'Sensor Array Calibration', category: 'hardware' },
    { id: 'pcb', name: 'Custom PCB Layout & Design', category: 'hardware' },
    { id: 'firmware', name: 'Firmware Programming', category: 'hardware' },
    { id: 'mobile', name: 'Mobile App (iOS/Android)', category: 'software' },
    { id: 'cloud', name: 'Cloud Serverless Backend', category: 'software' },
    { id: 'web', name: 'Web Admin Dashboard', category: 'software' },
    { id: 'ai', name: 'AI Models & Analytics', category: 'software' },
  ];

  // Pre-fill message based on selections
  const handleOptionToggle = (featureId: string) => {
    setSelectedFeatures(prev => {
      const updated = prev.includes(featureId)
        ? prev.filter(id => id !== featureId)
        : [...prev, featureId];

      const selectedNames = featureOptions
        .filter(opt => updated.includes(opt.id))
        .map(opt => opt.name);

      if (selectedNames.length > 0) {
        const text = `Project Scope Profile:
- Selected Modules: ${selectedNames.join(', ')}
- Target Build Tier: ${complexity.toUpperCase()}

Describe additional custom integrations or hardware specifics:
`;
        setFormData(f => ({ ...f, message: text }));
      } else {
        setFormData(f => ({ ...f, message: '' }));
      }

      return updated;
    });
  };

  const handleComplexityChange = (tier: 'prototype' | 'production' | 'enterprise') => {
    setComplexity(tier);
    
    const selectedNames = featureOptions
      .filter(opt => selectedFeatures.includes(opt.id))
      .map(opt => opt.name);

    if (selectedNames.length > 0) {
      const text = `Project Scope Profile:
- Selected Modules: ${selectedNames.join(', ')}
- Target Build Tier: ${tier.toUpperCase()}

Describe additional custom integrations or hardware specifics:
`;
      setFormData(f => ({ ...f, message: text }));
    }
  };

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
          access_key: "aca23316-98f7-456d-a267-6ea420275e2a",
          name: formData.name,
          email: formData.email,
          company: formData.company,
          budget: formData.budget,
          timeline: formData.timeline,
          message: formData.message,
          subject: "ASRAGEN Website Lead - Configured Scope",
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          company: '',
          budget: 'under_5k',
          timeline: '1_3_months',
          message: ''
        });
        setSelectedFeatures([]);
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
    <section className="contact" style={{ minHeight: '100vh', paddingTop: '160px' }} aria-labelledby="contact-title">
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <Reveal>
            <span className="section-tag">Start a Project</span>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="section-title" id="contact-title">
              Configure Your <span>Solution</span>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="section-desc" style={{ margin: '0 auto 30px' }}>
              Select target features and requirements below to plan your requirements, and submit your request straight to our engineers.
            </p>
          </Reveal>
        </div>

        {/* INTERACTIVE CALCULATOR */}
        <Reveal delay={300}>
          <div className="calculator-card">
            <div className="calc-section-title">1. Select Target Modules</div>
            <div className="calc-grid">
              {featureOptions.map(opt => (
                <div
                  key={opt.id}
                  className={`calc-option ${selectedFeatures.includes(opt.id) ? 'selected' : ''}`}
                  onClick={() => handleOptionToggle(opt.id)}
                >
                  <div style={{ fontWeight: '600' }}>{opt.name}</div>
                </div>
              ))}
            </div>

            <div className="calc-section-title">2. Select Project Build Tier</div>
            <div className="calc-grid-three">
              <div
                className={`calc-option ${complexity === 'prototype' ? 'selected' : ''}`}
                onClick={() => handleComplexityChange('prototype')}
              >
                <div style={{ fontWeight: '600' }}>MVP / Prototype</div>
                <p style={{ fontSize: '11px', opacity: 0.7, marginTop: '4px' }}>Validation & basic proof of concept</p>
              </div>
              <div
                className={`calc-option ${complexity === 'production' ? 'selected' : ''}`}
                onClick={() => handleComplexityChange('production')}
              >
                <div style={{ fontWeight: '600' }}>Production-Ready</div>
                <p style={{ fontSize: '11px', opacity: 0.7, marginTop: '4px' }}>Industrial casings & cloud compliance</p>
              </div>
              <div
                className={`calc-option ${complexity === 'enterprise' ? 'selected' : ''}`}
                onClick={() => handleComplexityChange('enterprise')}
              >
                <div style={{ fontWeight: '600' }}>Enterprise Scale</div>
                <p style={{ fontSize: '11px', opacity: 0.7, marginTop: '4px' }}>Redundancies, high load APIs & 24/7 SLAs</p>
              </div>
            </div>

            {selectedFeatures.length > 0 ? (
              <div className="calc-result-pane">
                <span style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--text-muted)' }}>Configured Project Scope</span>
                <h3 style={{ fontSize: '24px', color: 'var(--gold-light)', margin: '8px 0', letterSpacing: '1px' }}>
                  {selectedFeatures.length} Module(s) Selected &nbsp;·&nbsp; {complexity.toUpperCase()} Tier
                </h3>
                <p style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
                  These requirements will be attached to your project intake inquiry.
                </p>
              </div>
            ) : (
              <div className="calc-result-pane">
                <span style={{ color: 'var(--text-muted)', fontSize: '13px' }}>Select features above to configure your requirements.</span>
              </div>
            )}
          </div>
        </Reveal>

        {/* LEAD SUBMISSION FORM */}
        <Reveal delay={400}>
          <div className="contact-form-container">
            <div style={{ textAlign: 'center', marginBottom: '32px' }}>
              <h3 style={{ fontSize: '20px', color: 'var(--gold-light)', fontWeight: 500 }}>Submit Your Project Brief</h3>
              <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginTop: '4px' }}>Our technical specialists will contact you in under 24 hours.</p>
            </div>
            
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label" htmlFor="name">Full Name</label>
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
                <label className="form-label" htmlFor="email">Email Address</label>
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
                <label className="form-label" htmlFor="company">Company / Organization</label>
                <input
                  type="text"
                  id="company"
                  className="form-control"
                  placeholder="ACME Industries"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div className="form-group">
                  <label className="form-label" htmlFor="budget">Budget Range</label>
                  <select
                    id="budget"
                    className="form-control"
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    style={{ background: 'var(--black)', color: 'var(--text-primary)' }}
                  >
                    <option value="under_5k">Under $5k</option>
                    <option value="5k_10k">$5k - $10k</option>
                    <option value="10k_25k">$10k - $25k</option>
                    <option value="25k_plus">$25k+</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="timeline">Timeline</label>
                  <select
                    id="timeline"
                    className="form-control"
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    style={{ background: 'var(--black)', color: 'var(--text-primary)' }}
                  >
                    <option value="under_1_month">Under 1 Month</option>
                    <option value="1_3_months">1 - 3 Months</option>
                    <option value="3_6_months">3 - 6 Months</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="message">Project Requirements Details</label>
                <textarea
                  id="message"
                  required
                  className="form-control"
                  placeholder="Describe your target devices, environments, and desired milestones..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting} 
                className="btn-primary" 
                style={{ width: '100%', border: 'none', cursor: 'pointer', display: 'block', padding: '18px' }}
              >
                {isSubmitting ? 'Submitting Brief...' : 'Send Project Brief ➔'}
              </button>

              {submitStatus === 'success' && (
                <p style={{ color: 'var(--gold)', marginTop: '20px', fontSize: '14px', letterSpacing: '1px', textAlign: 'center' }}>
                  ✓ Request successfully dispatched! We will review your selections and email you shortly.
                </p>
              )}

              {submitStatus === 'error' && (
                <p style={{ color: '#ff4a4a', marginTop: '20px', fontSize: '14px', letterSpacing: '1px', textAlign: 'center' }}>
                  ✕ Transmission error. Please check your network connection or email asragenoff@gmail.com.
                </p>
              )}
            </form>
          </div>
        </Reveal>

        {/* DIRECT CHANNELS */}
        <Reveal delay={500}>
          <div className="cta-contact">
            <div className="contact-item">
              <span className="contact-label">Project Intake</span>
              <span className="contact-value">asragenoff@gmail.com</span>
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
