'use client';

import React, { useState } from 'react';
import Reveal from '@/components/Reveal';

export default function ServicesPage() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const servicesList = [
    {
      title: 'IoT Solutions',
      desc: 'We design end-to-end Internet of Things solutions including connected devices, sensor integration, cloud connectivity, dashboards, alerts, automation, predictive maintenance, remote monitoring, firmware, deployment, and support for homes, businesses, industries, and agriculture.',
      icon: <path d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />,
      provides: ['Consultation', 'Design', 'Development', 'Testing', 'Deployment', 'Training', 'AMC & Support'],
    },
    {
      title: 'Smart Home Solutions',
      desc: 'Home automation covering lighting, HVAC, smart plugs, locks, CCTV integration, intrusion detection, voice assistants, energy monitoring, and mobile control.',
      icon: <path d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 7.91a2.25 2.25 0 01-1.07-1.916V5.25" />,
      provides: ['Consultation', 'Design', 'Development', 'Testing', 'Deployment', 'Training', 'AMC & Support'],
    },
    {
      title: 'Industrial IoT',
      desc: 'Machine monitoring, OEE dashboards, predictive maintenance, production tracking, SCADA integration, alarms, asset tracking, and energy optimization.',
      icon: <path d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 2.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />,
      provides: ['Consultation', 'Design', 'Development', 'Testing', 'Deployment', 'Training', 'AMC & Support'],
    },
    {
      title: 'Embedded Systems',
      desc: 'Custom electronics, PCB design, firmware, ESP32, STM32, Arduino, Raspberry Pi, communication protocols, testing, and product development.',
      icon: <path d="M9 3.75H6.912a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859M12 3v8.25m0 0l-3-3m3 3l3-3" />,
      provides: ['Consultation', 'Design', 'Development', 'Testing', 'Deployment', 'Training', 'AMC & Support'],
    },
    {
      title: 'Web Development',
      desc: 'Corporate websites, SaaS platforms, portals, dashboards, APIs, SEO, responsive UI, authentication, analytics, and maintenance.',
      icon: <path d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />,
      provides: ['Consultation', 'Design', 'Development', 'Testing', 'Deployment', 'Training', 'AMC & Support'],
    },
    {
      title: 'Mobile Apps',
      desc: 'Android/iOS/cross-platform apps with cloud sync, offline support, notifications, barcode scanning, payments, GPS, and IoT control.',
      icon: <path d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />,
      provides: ['Consultation', 'Design', 'Development', 'Testing', 'Deployment', 'Training', 'AMC & Support'],
    },
    {
      title: 'Enterprise Software',
      desc: 'ERP, POS, billing, inventory, CRM, HRMS, payroll, accounting, analytics, reporting, and multi-branch management.',
      icon: <path d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />,
      provides: ['Consultation', 'Design', 'Development', 'Testing', 'Deployment', 'Training', 'AMC & Support'],
    },
    {
      title: 'Cloud & AI',
      desc: 'Cloud architecture, APIs, data pipelines, AI assistants, predictive analytics, computer vision, and automation.',
      icon: <path d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />,
      provides: ['Consultation', 'Design', 'Development', 'Testing', 'Deployment', 'Training', 'AMC & Support'],
    },
  ];

  return (
    <section className="services" style={{ minHeight: '100vh', paddingTop: '160px' }} aria-labelledby="services-title">
      <div className="services-inner">
        <div className="services-header">
          <div>
            <Reveal>
              <span className="section-tag">What We Do</span>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="section-title" id="services-title">
                Our Core <span>Services</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={200}>
            <p className="section-desc">
              Comprehensive end-to-end technology solutions. Click any service to view the deliverables and phases we provide.
            </p>
          </Reveal>
        </div>
        <div className="services-grid" role="list">
          {servicesList.map((service, i) => {
            const numStr = (i + 1).toString().padStart(2, '0');
            const isExpanded = activeCard === i;
            return (
              <Reveal delay={i * 50} key={i}>
                <div 
                  className={`service-card ${isExpanded ? 'expanded' : ''}`} 
                  role="listitem" 
                  tabIndex={0}
                  onClick={() => setActiveCard(isExpanded ? null : i)}
                  style={{ cursor: 'pointer', transition: 'all 0.4s ease' }}
                >
                  <span className="service-num">{numStr}</span>
                  <div className="service-icon-wrap" aria-hidden="true">
                    <svg className="service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      {service.icon}
                    </svg>
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                  
                  {isExpanded ? (
                    <div className="reveal-details" style={{ marginTop: '20px', borderTop: '1px solid var(--border)', paddingTop: '20px' }}>
                      <h4 style={{ color: 'var(--gold)', fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>
                        What We Provide:
                      </h4>
                      <ul style={{ listStyle: 'none', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                        {service.provides.map((item, idx) => (
                          <li key={idx} style={{ fontSize: '13px', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <span style={{ color: 'var(--gold)', fontWeight: 'bold' }}>✓</span> {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <div style={{ marginTop: '16px', fontSize: '11px', color: 'var(--gold)', letterSpacing: '1px', textTransform: 'uppercase', fontWeight: 500 }}>
                      Click to expand details
                    </div>
                  )}

                  <div className="service-arrow" aria-hidden="true" style={{ transform: isExpanded ? 'rotate(90deg)' : 'none' }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: 'var(--gold)' }}>
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
