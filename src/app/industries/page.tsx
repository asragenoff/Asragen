'use client';

import React, { useState } from 'react';
import Reveal from '@/components/Reveal';

export default function IndustriesPage() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const deliverables = [
    'Requirement analysis',
    'Hardware selection',
    'Software platform',
    'Cloud dashboard',
    'Mobile app',
    'Analytics',
    'Deployment',
    'Training',
    'Long-term maintenance',
  ];

  const industriesList = [
    {
      name: 'Retail',
      icon: <path d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />,
      whatWeDo: ['POS', 'Inventory', 'Barcode systems', 'Customer analytics', 'Loyalty programs', 'Smart shelves', 'Sales dashboards'],
    },
    {
      name: 'Manufacturing',
      icon: <path d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />,
      whatWeDo: ['Machine monitoring', 'Quality control', 'Predictive maintenance', 'Production analytics'],
    },
    {
      name: 'Agriculture',
      icon: <path d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />,
      whatWeDo: ['Smart irrigation', 'Soil monitoring', 'Weather stations', 'Livestock tracking'],
    },
    {
      name: 'Healthcare',
      icon: <path d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />,
      whatWeDo: ['Asset tracking', 'Patient monitoring integrations', 'Appointment systems', 'Dashboards'],
    },
    {
      name: 'Education',
      icon: <path d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />,
      whatWeDo: ['Attendance', 'Campus automation', 'ERP', 'Library and transport management'],
    },
    {
      name: 'Hospitality',
      icon: <path d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />,
      whatWeDo: ['Hotel management', 'Access control', 'Smart rooms', 'Energy optimization'],
    },
    {
      name: 'Logistics',
      icon: <path d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />,
      whatWeDo: ['Fleet tracking', 'Warehouse monitoring', 'RFID', 'Cold-chain monitoring'],
    },
    {
      name: 'Commercial Buildings',
      icon: <path d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />,
      whatWeDo: ['BMS', 'Lighting automation', 'HVAC optimization', 'Access control', 'CCTV integration'],
    },
    {
      name: 'Energy & Utilities',
      icon: <path d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />,
      whatWeDo: ['Smart metering', 'Solar monitoring', 'Energy analytics', 'Load optimization'],
    },
    {
      name: 'Smart Cities',
      icon: <path d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 9h18M12 3.5L5 7l7 3.5L19 7l-7-3.5z" />,
      whatWeDo: ['Environmental monitoring', 'Traffic analytics', 'Smart parking', 'Waste management'],
    },
  ];

  return (
    <section className="industries" style={{ minHeight: '100vh', paddingTop: '160px' }} aria-labelledby="industries-title">
      <div className="industries-inner">
        <div className="industries-header">
          <Reveal>
            <span className="section-tag">Who We Serve</span>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="section-title" id="industries-title">
              Industries We <span>Empower</span>
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="section-desc">
              Tailored high-performance hardware and software solutions. Click any sector card to view our activities and project deliverables.
            </p>
          </Reveal>
        </div>
        <div className="industries-grid" role="list">
          {industriesList.map((industry, i) => {
            const isExpanded = activeCard === i;
            return (
              <Reveal delay={i * 50} key={i}>
                <div 
                  className={`industry-item ${isExpanded ? 'expanded' : ''}`}
                  role="listitem" 
                  tabIndex={0}
                  onClick={() => setActiveCard(isExpanded ? null : i)}
                  style={{ cursor: 'pointer', transition: 'all 0.4s ease', padding: isExpanded ? '40px 30px' : '32px 20px', gridColumn: isExpanded ? 'span 2' : 'auto' }}
                >
                  <svg className="industry-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    {industry.icon}
                  </svg>
                  <span style={{ fontSize: '15px', fontWeight: 'bold' }}>{industry.name}</span>

                  {isExpanded ? (
                    <div className="reveal-industry-details" style={{ marginTop: '24px', borderTop: '1px solid var(--border)', paddingTop: '20px', textAlign: 'left' }}>
                      <div style={{ marginBottom: '20px' }}>
                        <h4 style={{ color: 'var(--gold)', fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '10px' }}>
                          What We Do:
                        </h4>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                          {industry.whatWeDo.map((item, idx) => (
                            <span key={idx} style={{ background: 'var(--dark-2)', border: '1px solid var(--border)', color: 'var(--text-primary)', padding: '6px 14px', fontSize: '12px', borderRadius: '4px' }}>
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 style={{ color: 'var(--gold)', fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '10px' }}>
                          Included Deliverables:
                        </h4>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                          {deliverables.map((deliverable, idx) => (
                            <span key={idx} style={{ background: 'transparent', border: '1px solid rgba(201,168,76,0.3)', color: 'var(--text-secondary)', padding: '4px 10px', fontSize: '11px', borderRadius: '2px' }}>
                              ✓ {deliverable}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div style={{ marginTop: '12px', fontSize: '10px', color: 'var(--gold)', letterSpacing: '1px', textTransform: 'uppercase' }}>
                      Click to explore
                    </div>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
