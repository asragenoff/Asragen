'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Reveal from '@/components/Reveal';

export default function IndustriesPage() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  const deliverables = [
    'System Requirement Specifications (SRS)',
    'Sensor Selection & Calibration Profiles',
    'Hardware Prototyping & PCB Design Layouts',
    'Custom Firmware & Device Integration Logic',
    'Secure Cloud Networking & MQTT/REST Protocols',
    'Web Dashboard Panel & Admin Settings Interface',
    'Mobile Application (iOS/Android)',
    'Field Deployment, Calibrations & QA Testing',
    'Operational Training & Handover Manuals',
    'Long-term AMC Technical Support SLA',
  ];

  const industriesList = [
    {
      name: 'Retail',
      icon: (
        <path d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />
      ),
      tagline: 'Modernizing retail checkout systems, stocking operations, and shopping experiences.',
      whatWeDo: ['POS & Multi-branch Billing Databases', 'Inventory Control & Real-time Alerts', 'Barcode & QR Scanning Infrastructure', 'Customer Foot-traffic Analytics Panels', 'Loyalty Program Dashboards & Integrations', 'Smart RFID Shelves & Automated Reordering', 'Cloud Sales Operations Reporting'],
    },
    {
      name: 'Manufacturing',
      icon: (
        <path d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
      ),
      tagline: 'Empowering plant operators with continuous equipment monitoring and data logs.',
      whatWeDo: ['Machine Vibrations & Temperature Logging', 'Real-time Production Quality Checks', 'Predictive Downtime Algorithms & Alerts', 'Factory OEE Dashboard Consoles', 'Assembly Line Sensor Interlocking', 'Hazardous Area Monitoring Tools'],
    },
    {
      name: 'Agriculture',
      icon: (
        <path d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      ),
      tagline: 'Optimizing resource usage and crop yields through granular soil and climate data.',
      whatWeDo: ['Automated Valve Smart Irrigation Networks', 'NPK & Moisture Soil Sensor Arrays', 'Localized Solar Weather Station Nodes', 'Livestock BLE Ear-tag Ranging', 'Greenhouse Climate Automation Panels'],
    },
    {
      name: 'Healthcare',
      icon: (
        <path d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      ),
      tagline: 'Connecting health hardware platforms with web dashboards and alert panels.',
      whatWeDo: ['Critical Equipment Real-time Asset Tracking', 'Patient Physiological Data Gateways', 'Secure Clinic Appointment Schedulers', 'Doctor Performance Optimization Metrics'],
    },
    {
      name: 'Education',
      icon: (
        <path d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      ),
      tagline: 'Automating administrative workloads and institutional student resources.',
      whatWeDo: ['Biometric Smart Attendance Registers', 'Unified School & Campus ERP Portals', 'Library Resource Tracking Databases', 'Transport Fleet Route Loggers & GPS'],
    },
    {
      name: 'Hospitality',
      icon: (
        <path d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
      ),
      tagline: 'Delivering smart room integrations and automated billing setups for high-end hotels.',
      whatWeDo: ['Multi-property Reservation Engines', 'Smart Door Locks & RFID Keycards', 'In-room Climate & Light Automations', 'Facility Operational Cost Monitors'],
    },
    {
      name: 'Logistics',
      icon: (
        <path d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      ),
      tagline: 'Ensuring absolute logistics visibility, routing efficiency, and inventory assurance.',
      whatWeDo: ['Real-time Vehicle GPS Tracker Networks', 'Cold-chain Temperature Logs & Alarms', 'RFID Warehouse Cargo Checkpoints', 'Route Dispatch Planning Dashboards'],
    },
    {
      name: 'Commercial Buildings',
      icon: (
        <path d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
      ),
      tagline: 'Scaling smart building management structures for optimized corporate spaces.',
      whatWeDo: ['HVAC Smart Variable Controls', 'Energy Metering & Grid Interfaces', 'Intruder Access & Alarm Systems', 'Commercial Elevators Integration Links'],
    },
    {
      name: 'Energy & Utilities',
      icon: (
        <path d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      ),
      tagline: 'Pioneering granular utility tracking platforms and energy analytics interfaces.',
      whatWeDo: ['Modbus Smart Grid Meters Integration', 'Solar Panel Array Inverter Logs', 'Industrial Load Optimization Modules', 'Leak & Flow Meter Pulse Alert Monitors'],
    },
    {
      name: 'Smart Cities',
      icon: (
        <path d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 9h18M12 3.5L5 7l7 3.5L19 7l-7-3.5z" />
      ),
      tagline: 'Pioneering automated city management modules and ecological tracking nodes.',
      whatWeDo: ['Air Quality PM2.5 Eco Sensors', 'Traffic Node Peak Velocity Cameras', 'Smart Parking Space Magnetic Pucks', 'Smart Waste Dumpster Level Alerts'],
    },
  ];

  return (
    <section className="industries" style={{ minHeight: '100vh', paddingTop: '160px' }} aria-labelledby="industries-title">
      <div className="industries-inner" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="industries-header" style={{ marginBottom: '60px' }}>
          <Reveal>
            <span className="section-tag">Who We Serve</span>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="section-title" id="industries-title">
              Sectors We <span>Empower</span>
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="section-desc">
              Tailored high-performance hardware and software systems. Select any industry sector below to see detail specifications, custom deliverables, and tech implementations.
            </p>
          </Reveal>
        </div>

        <div className="why-grid" role="list">
          {industriesList.map((industry, i) => (
            <Reveal delay={i * 50} key={i}>
              <div 
                className="why-card"
                role="listitem" 
                tabIndex={0}
                onClick={() => setActiveIdx(i)}
                style={{ cursor: 'pointer' }}
              >
                <div className="why-card-num">{(i + 1).toString().padStart(2, '0')}</div>
                <svg className="why-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  {industry.icon}
                </svg>
                <h3>{industry.name}</h3>
                <p style={{ marginTop: '8px', opacity: 0.85 }}>{industry.tagline}</p>
                <div style={{ marginTop: '24px', fontSize: '11px', color: 'var(--gold)', letterSpacing: '1.5px', textTransform: 'uppercase', fontWeight: 600 }}>
                  View Specifications ➔
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
                <span className="section-tag" style={{ margin: 0 }}>Industry Spec</span>
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '32px', color: 'var(--gold-light)', margin: '12px 0 16px', letterSpacing: '1px' }}>
                  {industriesList[activeIdx].name}
                </h2>
                <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: '1.8', fontWeight: 300, marginBottom: '32px' }}>
                  {industriesList[activeIdx].tagline}
                </p>
              </div>

              <div style={{ marginBottom: '32px' }}>
                <h3 style={{ color: 'var(--gold)', fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px', fontWeight: 600 }}>
                  Services & Modules Developed:
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '8px' }}>
                  {industriesList[activeIdx].whatWeDo.map((item, idx) => (
                    <div 
                      key={idx} 
                      style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border)', color: 'var(--text-primary)', padding: '10px 14px', fontSize: '13px', borderRadius: '6px', display: 'flex', alignItems: 'center', gap: '10px' }}
                    >
                      <span style={{ color: 'var(--gold)', fontSize: '6px' }}>■</span> {item}
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ borderTop: '1px solid var(--border)', paddingTop: '28px', marginTop: '28px' }}>
                <h3 style={{ color: 'var(--gold)', fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px', fontWeight: 600 }}>
                  Standard Engineering Deliverables:
                </h3>
                <ul style={{ listStyle: 'none', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '10px' }}>
                  {deliverables.map((deliverable, idx) => (
                    <li key={idx} style={{ fontSize: '12px', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <span style={{ color: 'var(--gold)', fontWeight: 'bold' }}>✓</span> {deliverable}
                    </li>
                  ))}
                </ul>

                <Link href="/contact" onClick={() => setActiveIdx(null)} className="btn-primary" style={{ width: '100%', textDecoration: 'none', display: 'block', marginTop: '24px' }}>
                  Request Consultation for {industriesList[activeIdx].name}
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
