import React from 'react';
import type { Metadata } from 'next';
import Reveal from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'Privacy Policy | ASRAGEN',
  description: 'Privacy Policy for ASRAGEN. Learn how we handle and protect your contact and inquiry information.',
  alternates: {
    canonical: '/privacy',
  },
};

export default function PrivacyPage() {
  return (
    <section className="about" style={{ minHeight: '100vh', paddingTop: '160px' }}>
      <div className="about-inner" style={{ maxWidth: '800px', margin: '0 auto', display: 'block' }}>
        <Reveal>
          <span className="section-tag">Legal Compliance</span>
          <h1 className="section-title" style={{ marginBottom: '40px' }}>
            Privacy <span>Policy</span>
          </h1>
        </Reveal>
        
        <Reveal delay={100}>
          <div style={{ color: 'var(--text-secondary)', lineHeight: '1.8', fontSize: '15px' }}>
            <p style={{ marginBottom: '20px' }}>
              At ASRAGEN, we value your privacy. This Privacy Policy describes how we collect, use, and protect your information when you use our website.
            </p>
            
            <h3 style={{ color: 'var(--gold)', margin: '30px 0 15px', fontSize: '18px', fontWeight: 600 }}>
              1. Information We Collect
            </h3>
            <p style={{ marginBottom: '20px' }}>
              When you submit an inquiry through our project configurator or contact form, we collect the details you provide: your name, email address, and project requirements.
            </p>
            
            <h3 style={{ color: 'var(--gold)', margin: '30px 0 15px', fontSize: '18px', fontWeight: 600 }}>
              2. How We Use Your Information
            </h3>
            <p style={{ marginBottom: '20px' }}>
              We use this information solely to review your requirements, contact you regarding your inquiry, and provide our custom engineering, IoT, and software services. We do not sell, rent, or share your contact details with third parties.
            </p>
            
            <h3 style={{ color: 'var(--gold)', margin: '30px 0 15px', fontSize: '18px', fontWeight: 600 }}>
              3. Cookies and Tracking
            </h3>
            <p style={{ marginBottom: '20px' }}>
              Our website is hosted statically and does not run persistent tracking cookies or analytics scripts that collect your personal browsing habits.
            </p>
            
            <h3 style={{ color: 'var(--gold)', margin: '30px 0 15px', fontSize: '18px', fontWeight: 600 }}>
              4. Data Protection
            </h3>
            <p style={{ marginBottom: '20px' }}>
              We implement industry-standard security measures to protect your submitted details. Form submissions are routed securely directly to our engineering team.
            </p>
            
            <h3 style={{ color: 'var(--gold)', margin: '30px 0 15px', fontSize: '18px', fontWeight: 600 }}>
              5. Contact Us
            </h3>
            <p style={{ marginBottom: '20px' }}>
              If you have any questions about this Privacy Policy, you can reach us at hello@asragen.com.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
