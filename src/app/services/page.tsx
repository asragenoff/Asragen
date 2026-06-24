'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Reveal from '@/components/Reveal';

export default function ServicesPage() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  const servicesList = [
    {
      title: 'IoT Solutions',
      desc: 'We design end-to-end Internet of Things solutions including connected devices, sensor integration, cloud connectivity, dashboards, alerts, automation, predictive maintenance, remote monitoring, firmware, deployment, and support for homes, businesses, industries, and agriculture.',
      icon: (
        <path d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
      ),
      provides: ['Consultation & Architecture', 'Sensor & Hardware Selection', 'Custom Firmware Development', 'Cloud Dashboard Integration', 'Real-time Alerts & Triggers', 'Predictive Maintenance Analytics', 'Ongoing Technical Support'],
    },
    {
      title: 'Smart Home Solutions',
      desc: 'Home automation systems covering smart lighting, custom HVAC control, smart plug scheduling, biometric locks, CCTV camera integration, intrusion detection sensors, voice assistants configuration, home energy monitoring, and comprehensive mobile controls.',
      icon: (
        <path d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 7.91a2.25 2.25 0 01-1.07-1.916V5.25" />
      ),
      provides: ['Smart Lighting Systems', 'HVAC & Climate Controls', 'Security & Access Integration', 'Unified Mobile Dashboard', 'Voice Command Configuration', 'Energy Optimization Audits', 'On-site Hardware Setup'],
    },
    {
      title: 'Industrial IoT',
      desc: 'Machine monitoring, Overall Equipment Effectiveness (OEE) tracking dashboards, predictive maintenance triggers, factory floor production tracking, SCADA system integrations, customized alarms and escalations, asset tracking, and factory-wide energy optimization.',
      icon: (
        <path d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 2.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
      ),
      provides: ['OEE Calculation & Auditing', 'Machine Vibration & Temp Tracking', 'Legacy SCADA Bridging', 'Predictive Downtime Alerts', 'Asset Utilization Visuals', 'Safe Data Encryption', 'Hardware Installation Support'],
    },
    {
      title: 'Embedded Systems',
      desc: 'Custom electronics development and PCB design. Firmware engineering on ESP32, STM32, Arduino, and Raspberry Pi platforms. Integration of standard communication protocols (I2C, SPI, UART, Modbus), system validation, and end-product development.',
      icon: (
        <path d="M9 3.75H6.912a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859M12 3v8.25m0 0l-3-3m3 3l3-3" />
      ),
      provides: ['Custom PCB Layout & Design', 'Firmware Codebase Audits', 'Wireless Radio Integration', 'Protocol Conversion Logic', 'Low-power Optimizations', 'Component Sourcing Services', 'Prototyping & Testing Labs'],
    },
    {
      title: 'Web Development',
      desc: 'Modern corporate websites, scalable SaaS applications, web portals, user administration dashboards, GraphQL/REST APIs, search engine optimizations (SEO), responsive mobile-first UI structures, secure authentications, user analytics, and platform maintenance.',
      icon: (
        <path d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      ),
      provides: ['Corporate Landing Pages', 'Tailored SaaS Architectures', 'Interactive Data Visuals', 'REST / GraphQL APIs', 'Full SEO Implementations', 'Multi-tenant Permissions', 'Speed Optimization Audits'],
    },
    {
      title: 'Mobile Apps',
      desc: 'Native and cross-platform mobile apps for Android and iOS systems. Feature integrations include secure cloud synchronization, offline caching support, push notifications, barcode/QR scanning, mobile payments, GPS navigation, and IoT device remote control.',
      icon: (
        <path d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      ),
      provides: ['Cross-Platform Flutter/React Native', 'App Store Submission Setup', 'Local Bluetooth/BLE Syncing', 'Push Notification Pipelines', 'Secure Payment Gateways', 'Offline Database Storing', 'User Profiling & Roles'],
    },
    {
      title: 'Enterprise Software',
      desc: 'Robust enterprise planning software including ERP systems, point of sale (POS), real-time inventory management, CRM databases, HRMS portals, payroll automated modules, secure company accounting, detailed metrics reporting, and multi-branch synchronization.',
      icon: (
        <path d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
      ),
      provides: ['Custom ERP Architectures', 'CRM & Lead Pipelines', 'Multi-Warehouse Inventory Sync', 'Billing & POS Terminals', 'Automated Payroll Systems', 'Robust Report Generation', 'Multi-tenant Admin Controls'],
    },
    {
      title: 'Cloud & AI',
      desc: 'Cloud architecture design, serverless API setups, real-time data ingestion pipelines, generative AI assistant integrations, predictive analytics models, computer vision systems, and workflow automations.',
      icon: (
        <path d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      ),
      provides: ['AWS & GCP Cloud Scaling', 'Serverless APIs & Functions', 'Generative AI Integrations', 'Machine Learning Models', 'Large-scale Database Sharding', 'Automated CI/CD Workflows', 'Advanced Security Audits'],
    },
  ];

  return (
    <section className="services" style={{ minHeight: '100vh', paddingTop: '160px' }} aria-labelledby="services-title">
      <div className="services-inner" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="services-header" style={{ marginBottom: '60px' }}>
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
              Explore our core competencies in hardware and software design. Click any service card below to view custom deliverables, engineering scopes, and details.
            </p>
          </Reveal>
        </div>

        <div className="why-grid" role="list">
          {servicesList.map((service, idx) => (
            <Reveal delay={idx * 50} key={idx}>
              <div 
                className="why-card" 
                role="listitem" 
                tabIndex={0}
                onClick={() => setActiveIdx(idx)}
                style={{ cursor: 'pointer' }}
              >
                <div className="why-card-num">{(idx + 1).toString().padStart(2, '0')}</div>
                <div className="console-icon-wrap" aria-hidden="true" style={{ marginBottom: '24px' }}>
                  <svg className="console-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    {service.icon}
                  </svg>
                </div>
                <h3>{service.title}</h3>
                <p style={{ marginTop: '8px', opacity: 0.85 }}>{service.desc.substring(0, 110)}...</p>
                <div style={{ marginTop: '24px', fontSize: '11px', color: 'var(--gold)', letterSpacing: '1.5px', textTransform: 'uppercase', fontWeight: 600 }}>
                  View Details ➔
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* DETAILS MODAL */}
      <div 
        className={`details-modal-overlay ${activeIdx !== null ? 'open' : ''}`}
        onClick={() => setActiveIdx(null)}
      >
        <div className="details-modal-card" onClick={(e) => e.stopPropagation()}>
          {activeIdx !== null && (
            <>
              <button className="details-modal-close" aria-label="Close" onClick={() => setActiveIdx(null)}>✕</button>
              <div>
                <span className="section-tag" style={{ margin: 0 }}>Service Details</span>
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '32px', color: 'var(--gold-light)', margin: '12px 0 16px', letterSpacing: '1px' }}>
                  {servicesList[activeIdx].title}
                </h2>
                <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: '1.8', fontWeight: 300, marginBottom: '32px' }}>
                  {servicesList[activeIdx].desc}
                </p>
              </div>

              <div style={{ borderTop: '1px solid var(--border)', paddingTop: '28px' }}>
                <h4 style={{ color: 'var(--gold)', fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px', fontWeight: 600 }}>
                  Included Deliverables & Phases:
                </h4>
                <ul style={{ listStyle: 'none', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '12px', marginBottom: '32px' }}>
                  {servicesList[activeIdx].provides.map((provision, idx) => (
                    <li key={idx} style={{ fontSize: '13px', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <span style={{ color: 'var(--gold)', fontWeight: 'bold' }}>✓</span> {provision}
                    </li>
                  ))}
                </ul>

                <Link href="/contact" onClick={() => setActiveIdx(null)} className="btn-primary" style={{ width: '100%', textDecoration: 'none', display: 'block' }}>
                  Request Quote for this Service
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
