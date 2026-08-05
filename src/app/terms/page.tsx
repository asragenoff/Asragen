import React from 'react';
import type { Metadata } from 'next';
import Reveal from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'Terms of Service | ASRAGEN',
  description: 'Terms of Service for ASRAGEN. Read our terms and conditions for design, development, and project consultancies.',
  alternates: {
    canonical: '/terms',
  },
};

export default function TermsPage() {
  return (
    <section className="about" style={{ minHeight: '100vh', paddingTop: '160px' }}>
      <div className="about-inner" style={{ maxWidth: '800px', margin: '0 auto', display: 'block' }}>
        <Reveal>
          <span className="section-tag">Terms & Conditions</span>
          <h1 className="section-title" style={{ marginBottom: '40px' }}>
            Terms of <span>Service</span>
          </h1>
        </Reveal>
        
        <Reveal delay={100}>
          <div style={{ color: 'var(--text-secondary)', lineHeight: '1.8', fontSize: '15px' }}>
            <p style={{ marginBottom: '20px' }}>
              Welcome to ASRAGEN. By using our website and services, you agree to comply with and be bound by the following terms and conditions.
            </p>
            
            <h3 style={{ color: 'var(--gold)', margin: '30px 0 15px', fontSize: '18px', fontWeight: 600 }}>
              1. Services and Consultations
            </h3>
            <p style={{ marginBottom: '20px' }}>
              ASRAGEN offers custom technology design, IoT architectures, embedded systems prototyping, and software engineering consultancies. Project specifications and deliverables are governed by separate signed Service Level Agreements (SLAs) or contracts between ASRAGEN and its clients.
            </p>
            
            <h3 style={{ color: 'var(--gold)', margin: '30px 0 15px', fontSize: '18px', fontWeight: 600 }}>
              2. Intellectual Property
            </h3>
            <p style={{ marginBottom: '20px' }}>
              All original content, designs, assets, and source code displayed on this website are the intellectual property of ASRAGEN unless stated otherwise. Unauthorized duplication or reproduction is prohibited.
            </p>
            
            <h3 style={{ color: 'var(--gold)', margin: '30px 0 15px', fontSize: '18px', fontWeight: 600 }}>
              3. User Inquiries
            </h3>
            <p style={{ marginBottom: '20px' }}>
              When submitting inquiry information or project scopes via our contact forms, you agree to provide accurate and truthful details. You must not use our forms to submit spam, malicious payloads, or advertisements.
            </p>
            
            <h3 style={{ color: 'var(--gold)', margin: '30px 0 15px', fontSize: '18px', fontWeight: 600 }}>
              4. Limitations of Liability
            </h3>
            <p style={{ marginBottom: '20px' }}>
              While we strive to ensure that all information on this website is accurate and up to date, we make no representations or warranties regarding its completeness. Under no circumstances will ASRAGEN be liable for damages resulting from your use of this website.
            </p>
            
            <h3 style={{ color: 'var(--gold)', margin: '30px 0 15px', fontSize: '18px', fontWeight: 600 }}>
              5. Governing Law
            </h3>
            <p style={{ marginBottom: '20px' }}>
              These terms are governed by and construed in accordance with the laws of the jurisdiction of our company headquarters.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
