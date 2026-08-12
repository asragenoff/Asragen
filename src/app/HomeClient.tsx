'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Reveal from '@/components/Reveal';

export default function HomeClient() {
  // IoT Simulation State
  const [isOnline, setIsOnline] = useState(true);
  const [temp, setTemp] = useState(27.4);
  const [humidity, setHumidity] = useState(63.8);
  const [power, setPower] = useState(1.24);
  const [status, setStatus] = useState('RUNNING');

  // Process timeline state
  const [activeStep, setActiveStep] = useState(0);

  // Fluctuating values loop
  useEffect(() => {
    if (!isOnline || status === 'STOPPED') return;

    const interval = setInterval(() => {
      setTemp((prev) => +(prev + (Math.random() - 0.5) * 0.4).toFixed(1));
      setHumidity((prev) => +(prev + (Math.random() - 0.5) * 0.8).toFixed(1));
      setPower((prev) => +(prev + (Math.random() - 0.5) * 0.05).toFixed(2));
    }, 2000);

    return () => clearInterval(interval);
  }, [isOnline, status]);

  const handlePowerToggle = () => {
    if (status === 'RUNNING') {
      setStatus('STOPPED');
      setPower(0);
    } else {
      setStatus('RUNNING');
      setPower(1.24);
    }
  };

  const stats = [
    { num: '45+', label: 'Projects / Prototypes' },
    { num: '4+', label: 'Technology Domains' },
    { num: 'IoT', label: 'End-to-End' },
    { num: '24/7', label: 'Monitoring Ready' },
  ];

  const buildItems = [
    {
      num: '01',
      tag: 'LIVE MONITORING',
      title: 'Smart Monitoring Systems',
      route: 'Sensors ➔ Edge MCU ➔ Cloud ➔ Live Dashboard',
      desc: 'Real-time monitoring, alerts and diagnostics for connected systems.',
    },
    {
      num: '02',
      tag: 'CONNECTED HARDWARE',
      title: 'Industrial IoT',
      route: 'Legacy Machinery ➔ Gateway ➔ Cloud Hub ➔ API',
      desc: 'Connect legacy machinery and modern sensors to secure cloud-hosted dashboards.',
    },
    {
      num: '03',
      tag: 'PROCESS AUTOMATION',
      title: 'Smart Automation',
      route: 'Input Sensors ➔ Control Unit ➔ Actuators ➔ Logic',
      desc: 'Automate repetitive operations with connected controllers, sensors and intelligent control systems.',
    },
    {
      num: '04',
      tag: 'POWER METRICS',
      title: 'Energy Monitoring',
      route: 'Grid Submeters ➔ Modbus Logger ➔ Analytics Panel',
      desc: 'Track electrical consumption, isolate usage spikes and optimize facility operating costs.',
    },
    {
      num: '05',
      tag: 'PCB & FIRMWARE',
      title: 'Connected Products',
      route: 'Schematic ➔ Prototype PCB ➔ Custom Firmware ➔ Case',
      desc: 'Custom electronics, sensors, PCBs and embedded firmware.',
    },
    {
      num: '06',
      tag: 'DIGITAL REPRESENTATION',
      title: 'Digital Twin Platforms',
      route: 'Physical Device ➔ MQTT Stream ➔ 2D/3D Dashboard',
      desc: 'Visualize physical factory assets on digital screens to monitor and manage operations remotely.',
    },
  ];

  const processSteps = [
    { step: '01', title: 'DISCOVER', short: 'Understand the problem.', desc: 'We consult on your operational requirements, physical variables, and custom business objectives.' },
    { step: '02', title: 'DESIGN', short: 'Architect the system.', desc: 'We design the hardware, software, and user experience around your real operational requirements.' },
    { step: '03', title: 'PROTOTYPE', short: 'Build the first version.', desc: 'We build working hardware prototypes, flash the initial code, and test them under simulated conditions.' },
    { step: '04', title: 'ENGINEER', short: 'Turn it into a reliable product.', desc: 'We write robust device firmware, secure server pathways, web dashboard systems, and backend controls.' },
    { step: '05', title: 'DEPLOY', short: 'Install and integrate.', desc: 'We deploy the completed physical enclosures, calibrate the sensors, and launch the live cloud streams.' },
    { step: '06', title: 'SCALE', short: 'Monitor, improve and expand.', desc: 'We provide ongoing software upgrades, network management, telemetry logs, and long-term technical SLAs.' },
  ];

  return (
    <>
      <div className="glow-blob glow-1" aria-hidden="true"></div>
      <div className="glow-blob glow-2" aria-hidden="true"></div>
      <div className="glow-blob glow-3" aria-hidden="true"></div>

      {/* 01 HERO */}
      <section className="hero" aria-label="Hero" style={{ paddingTop: '180px', paddingBottom: '80px' }}>
        <div className="hero-grid-bg" aria-hidden="true"></div>
        <div className="hero-radial" aria-hidden="true"></div>
        <div className="hero-content" style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '60px', alignItems: 'center', textAlign: 'left' }}>
          
          <div style={{ zIndex: 10 }}>
            <Reveal delay={0}>
              <div className="hero-badge" style={{ margin: '0 0 20px 0', border: '1px solid var(--border)' }}>
                <span className="hero-badge-dot" style={{ backgroundColor: 'var(--tech-green)', boxShadow: '0 0 8px var(--tech-green)' }} aria-hidden="true"></span>
                TRANSFORMING IDEAS INTO INTELLIGENT SYSTEMS
              </div>
            </Reveal>
            <Reveal delay={150}>
              <h1 className="hero-title" style={{ fontSize: '56px', lineHeight: '1.1', letterSpacing: '-1px', margin: '0 0 16px 0', color: 'var(--text-primary)' }}>
                BUILD.<br />CONNECT.<br /><span style={{ color: 'var(--gold)' }}>AUTOMATE.</span>
              </h1>
            </Reveal>
            <Reveal delay={300}>
              <p className="hero-tagline" style={{ fontSize: '18px', color: 'var(--text-secondary)', margin: '0 0 36px 0', textTransform: 'none', fontWeight: 300, lineHeight: '1.6' }}>
                Engineering intelligent IoT and automation systems for the real world.
              </p>
            </Reveal>
            <Reveal delay={450}>
              <div className="hero-actions" style={{ display: 'flex', gap: '16px', margin: '0 0 48px 0' }}>
                <Link href="/services" className="btn-primary">
                  Explore Solutions
                </Link>
                <Link href="/contact" className="btn-secondary">
                  Start a Project
                </Link>
              </div>
            </Reveal>
            <Reveal delay={600}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', borderTop: '1px solid var(--border)', paddingTop: '28px' }}>
                {stats.map((stat, i) => (
                  <div key={i} style={{ display: 'flex', flexDirection: 'column' }}>
                    <span style={{ fontSize: '18px', fontWeight: 700, color: 'var(--gold-light)', fontFamily: 'var(--font-serif)' }}>{stat.num}</span>
                    <span style={{ fontSize: '10px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', marginTop: '4px' }}>{stat.label}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* SVG Animated Network Visualization (Hero Right) */}
          <div style={{ zIndex: 10, display: 'flex', justifyContent: 'center' }}>
            <Reveal delay={400}>
              <div style={{ background: 'rgba(15, 15, 15, 0.45)', border: '1px solid var(--border-bright)', borderRadius: '24px', padding: '32px', width: '100%', maxWidth: '420px', backdropFilter: 'blur(20px)', boxShadow: 'var(--glow)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border)', paddingBottom: '14px', marginBottom: '20px', fontSize: '11px', fontFamily: 'var(--font-mono)' }}>
                  <span style={{ color: 'var(--text-muted)' }}>ASRAGEN CORE™</span>
                  <span style={{ color: 'var(--tech-green)', fontWeight: 600 }}>● SYSTEM ONLINE</span>
                </div>
                
                {/* SVG diagram */}
                <svg viewBox="0 0 200 130" style={{ width: '100%', height: 'auto', marginBottom: '20px' }}>
                  <rect x="70" y="5" width="60" height="20" rx="4" fill="rgba(255,255,255,0.02)" stroke="var(--border)" strokeWidth="1" />
                  <text x="100" y="18" fill="var(--text-primary)" fontSize="7" textAnchor="middle" fontFamily="var(--font-mono)">ASRAGEN CLOUD</text>

                  <rect x="70" y="50" width="60" height="20" rx="4" fill="rgba(212,175,55,0.03)" stroke="var(--gold)" strokeWidth="1" />
                  <text x="100" y="63" fill="var(--gold-light)" fontSize="7" textAnchor="middle" fontFamily="var(--font-mono)">DIGITAL TWIN</text>

                  <rect x="5" y="100" width="45" height="18" rx="3" fill="rgba(255,255,255,0.02)" stroke="var(--border)" strokeWidth="1" />
                  <text x="27.5" y="111" fill="var(--text-secondary)" fontSize="6" textAnchor="middle" fontFamily="var(--font-mono)">SENSORS</text>

                  <rect x="77.5" y="100" width="45" height="18" rx="3" fill="rgba(255,255,255,0.02)" stroke="var(--border)" strokeWidth="1" />
                  <text x="100" y="111" fill="var(--text-secondary)" fontSize="6" textAnchor="middle" fontFamily="var(--font-mono)">MACHINE</text>

                  <rect x="150" y="100" width="45" height="18" rx="3" fill="rgba(255,255,255,0.02)" stroke="var(--border)" strokeWidth="1" />
                  <text x="172.5" y="111" fill="var(--text-secondary)" fontSize="6" textAnchor="middle" fontFamily="var(--font-mono)">ENERGY</text>

                  {/* Lines */}
                  <line x1="100" y1="25" x2="100" y2="50" stroke="var(--border-bright)" strokeWidth="1.5" strokeDasharray="3 3" />
                  <line x1="27.5" y1="100" x2="100" y2="70" stroke="var(--border)" strokeWidth="1" />
                  <line x1="100" y1="100" x2="100" y2="70" stroke="var(--border)" strokeWidth="1" />
                  <line x1="172.5" y1="100" x2="100" y2="70" stroke="var(--border)" strokeWidth="1" />
                </svg>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '11px', fontFamily: 'var(--font-mono)', borderTop: '1px solid var(--border)', paddingTop: '16px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: 'var(--text-muted)' }}>TEMP</span>
                    <span style={{ color: 'var(--text-primary)' }}>28.4°C</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: 'var(--text-muted)' }}>HUMIDITY</span>
                    <span style={{ color: 'var(--text-primary)' }}>64%</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: 'var(--text-muted)' }}>POWER</span>
                    <span style={{ color: 'var(--gold-light)' }}>1.24 kW</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

        </div>
      </section>

      {/* 02 WHAT WE BUILD (COMPACT 2x3 INTERACTIVE GRID) */}
      <section className="build-section" aria-labelledby="build-title" style={{ padding: '80px 0', borderTop: '1px solid var(--border)' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <Reveal>
            <span className="section-tag">Solutions & Deliverables</span>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="section-title" id="build-title" style={{ margin: '12px 0' }}>
              WHAT WE <span>BUILD</span>
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="section-desc" style={{ margin: '0 auto', maxWidth: '640px' }}>
              Technology engineered for the physical world.
            </p>
          </Reveal>
        </div>

        <div className="build-grid">
          {buildItems.map((item, i) => (
            <Reveal delay={i * 100} key={i}>
              <div className="build-card">
                <div className="build-card-header">
                  <span className="build-card-num">{item.num}</span>
                  <span className="build-card-tag">● {item.tag}</span>
                </div>
                <h3 className="build-card-title">{item.title}</h3>
                <span className="build-card-route">{item.route}</span>
                
                {/* Expands on Hover */}
                <div className="build-card-extra">
                  <p className="build-card-desc">{item.desc}</p>
                  <Link href="/services" className="build-card-link">
                    Explore solution <span>➔</span>
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 03 ASRAGEN CORE™ DIGITAL TWIN (Visually Dominant Centerpiece) */}
      <section className="twin-section" aria-labelledby="twin-title" style={{ padding: '100px 0', borderTop: '1px solid var(--border)' }}>
        <div className="twin-grid">
          <div>
            <Reveal>
              <span className="section-tag">Platform Hub</span>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="section-title" id="twin-title" style={{ textAlign: 'left', margin: '12px 0 16px' }}>
                ASRAGEN <span>Core™</span>
              </h2>
            </Reveal>
            <Reveal delay={150}>
              <h3 style={{ fontSize: '20px', fontWeight: 500, color: 'var(--gold-light)', marginBottom: '16px', fontFamily: 'var(--font-sans)' }}>
                See Your Physical World Digitally.
              </h3>
            </Reveal>
            <Reveal delay={200}>
              <p className="section-desc" style={{ textAlign: 'left', maxWidth: '100%', marginBottom: '24px' }}>
                Monitor devices, visualize telemetry and control connected systems through one intelligent platform. Toggle simulation inputs below to test the active telemetry updates.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', background: 'rgba(255,255,255,0.01)', border: '1px solid var(--border)', borderRadius: '14px', padding: '20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px' }}>
                  <span style={{ color: 'var(--text-secondary)' }}>CONNECTION MODE:</span>
                  <span style={{ color: 'var(--gold)', fontWeight: 600 }}>SIMULATION</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px' }}>
                  <span style={{ color: 'var(--text-secondary)' }}>PROTOCOL:</span>
                  <span style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-mono)' }}>MQTT</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px' }}>
                  <span style={{ color: 'var(--text-secondary)' }}>SECURITY:</span>
                  <span style={{ color: 'var(--tech-green)', fontWeight: 600 }}>TLS READY</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px' }}>
                  <span style={{ color: 'var(--text-secondary)' }}>FIRMWARE:</span>
                  <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-primary)' }}>DEMO v2.4.1</span>
                </div>
                <div style={{ borderTop: '1px solid var(--border)', paddingTop: '10px', fontSize: '11px', color: 'var(--text-muted)', textAlign: 'center', fontStyle: 'italic' }}>
                  Interactive Simulation · No physical device connected
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={200}>
            <div className="twin-control-panel" style={{ border: '1px solid var(--border-bright)' }}>
              <div className="panel-header">
                <span className="panel-title">DEVICE OVERVIEW</span>
                <div className="status-dot-wrap">
                  <span className={`status-dot ${!isOnline ? 'offline' : ''}`} />
                  <span style={{ fontSize: '10px', color: isOnline ? 'var(--tech-green)' : '#f87171', fontWeight: 600 }}>
                    {isOnline ? 'ONLINE' : 'OFFLINE'}
                  </span>
                </div>
              </div>

              <div className="metrics-grid">
                <div className="metric-card">
                  <div className="metric-val">{isOnline && status === 'RUNNING' ? `${temp}°C` : '--'}</div>
                  <div className="metric-lbl">Temperature</div>
                </div>
                <div className="metric-card">
                  <div className="metric-val">{isOnline && status === 'RUNNING' ? `${humidity}%` : '--'}</div>
                  <div className="metric-lbl">Humidity</div>
                </div>
                <div className="metric-card" style={{ gridColumn: 'span 2' }}>
                  <div className="metric-val" style={{ color: 'var(--gold-light)' }}>
                    {isOnline ? `${power} kW` : '0.00 kW'}
                  </div>
                  <div className="metric-lbl">Telemetry Load</div>
                </div>
              </div>

              <div className="panel-visualizer">
                {isOnline && status === 'RUNNING' ? (
                  <svg className="grid-line-wave" viewBox="0 0 400 60">
                    <path d={`M 0 30 C 50 ${10 + Math.sin(temp) * 10}, 100 ${50 - Math.cos(humidity) * 15}, 150 30 C 200 30, 250 ${20 + Math.random() * 15}, 300 45 C 350 15, 400 30`} stroke="var(--gold)" />
                  </svg>
                ) : (
                  <div style={{ color: 'var(--text-muted)', fontSize: '11px', fontFamily: 'var(--font-mono)' }}>
                    {isOnline ? '[ SYSTEM STANDBY ]' : '[ CORE IS DISCONNECTED ]'}
                  </div>
                )}
              </div>

              <div className="panel-controls">
                <button 
                  className={`control-btn ${isOnline ? 'active' : ''}`}
                  onClick={() => setIsOnline(!isOnline)}
                  style={{ backgroundColor: isOnline ? 'var(--gold)' : '', color: isOnline ? 'var(--black)' : '' }}
                >
                  {isOnline ? 'Disconnect' : 'Connect'}
                </button>
                <button 
                  className={`control-btn ${status === 'RUNNING' && isOnline ? 'active' : ''}`}
                  onClick={handlePowerToggle}
                  disabled={!isOnline}
                  style={{ opacity: isOnline ? 1 : 0.5, backgroundColor: status === 'RUNNING' && isOnline ? 'var(--gold)' : '', color: status === 'RUNNING' && isOnline ? 'var(--black)' : '' }}
                >
                  {status === 'RUNNING' ? 'Stop Machine' : 'Run Machine'}
                </button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 04 HOW IT CONNECTS (Workflow & Animation) */}
      <section className="why" aria-labelledby="arch-title" style={{ background: 'rgba(5, 5, 5, 0.4)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '80px 0' }}>
        <div className="why-inner" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="why-header" style={{ marginBottom: '60px' }}>
            <Reveal>
              <span className="section-tag">System Topology</span>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="section-title" id="arch-title">
                How It <span>Connects</span>
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="section-desc">
                An integrated data pipe engineered to move physical sensor metrics directly into cloud analytics pipelines.
              </p>
            </Reveal>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '20px', position: 'relative' }}>
            {[
              { label: '01. SENSORS', detail: 'NPK, Moisture, Vibration' },
              { label: '02. EDGE MCU', detail: 'ESP32 / STM32 Edge Core' },
              { label: '03. CONDUIT', detail: 'Secure MQTT / API v1.3' },
              { label: '04. CLOUD HUB', detail: 'Docker / Supabase Host' },
              { label: '05. DIGITAL TWIN', detail: 'Interactive Visual Twin' },
              { label: '06. ACTIONS', detail: 'Automated Operations' },
            ].map((step, i) => (
              <Reveal delay={i * 100} key={i}>
                <div style={{ background: 'rgba(10, 10, 10, 0.45)', border: '1px solid var(--border)', borderRadius: '16px', padding: '24px 20px', textAlign: 'center', position: 'relative', height: '100%' }}>
                  <div style={{ fontSize: '11px', color: 'var(--gold)', letterSpacing: '0.5px', fontWeight: 600, fontFamily: 'var(--font-mono)', marginBottom: '8px' }}>{step.label}</div>
                  <div style={{ fontSize: '13px', color: 'var(--text-secondary)', fontWeight: 300 }}>{step.detail}</div>
                  {i < 5 && (
                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '16px', color: 'var(--border-bright)', fontSize: '12px' }} className="hide-on-mobile">
                      ➔
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 05 REAL PROJECT / CASE STUDY */}
      <section className="why" aria-labelledby="project-title" style={{ padding: '80px 0' }}>
        <div className="why-inner" style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <Reveal>
              <span className="section-tag">Case Studies</span>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="section-title" id="project-title" style={{ margin: '12px 0' }}>
                Engineered in the <span>Real World</span>
              </h2>
            </Reveal>
          </div>

          <Reveal>
            <div style={{ background: 'var(--glass-bg)', border: '1px solid var(--border)', borderRadius: '24px', padding: '40px', display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '40px', alignItems: 'center' }} className="responsive-grid-project">
              <div>
                <span style={{ fontSize: '11px', color: 'var(--gold)', fontFamily: 'var(--font-mono)', letterSpacing: '1px', fontWeight: 600 }}>FEATURED PROJECT</span>
                <h3 style={{ fontSize: '24px', fontWeight: 600, color: 'var(--text-primary)', margin: '12px 0 16px' }}>Smart Machine Monitoring</h3>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div>
                    <span style={{ fontSize: '11px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px', display: 'block', fontWeight: 600 }}>Problem</span>
                    <p style={{ fontSize: '14px', color: 'var(--text-secondary)', fontWeight: 300 }}>Machine operators lack real-time visibility into operating conditions and downtime cycles.</p>
                  </div>
                  <div>
                    <span style={{ fontSize: '11px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px', display: 'block', fontWeight: 600 }}>ASRAGEN Solution</span>
                    <p style={{ fontSize: '14px', color: 'var(--text-secondary)', fontWeight: 300 }}>Deployed ESP32 edge modules, connected vibration sensors, and piped telemetry via MQTT to a live cloud twin dashboard.</p>
                  </div>
                  <div>
                    <span style={{ fontSize: '11px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px', display: 'block', fontWeight: 600 }}>Result</span>
                    <p style={{ fontSize: '14px', color: 'var(--tech-green)', fontWeight: 500 }}>● Active remote diagnostics, automated alerts, and 98% tracking visibility.</p>
                  </div>
                </div>
              </div>

              <div style={{ background: 'rgba(0, 0, 0, 0.4)', border: '1px solid var(--border)', borderRadius: '16px', padding: '24px', textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <span style={{ color: 'var(--tech-green)', fontWeight: 600, fontSize: '11px', fontFamily: 'var(--font-mono)', display: 'block', marginBottom: '12px' }}>● SYSTEM RUNNING</span>
                <div style={{ fontSize: '32px', fontWeight: 700, color: 'var(--text-primary)', fontFamily: 'var(--font-serif)' }}>99.8%</div>
                <div style={{ fontSize: '10px', color: 'var(--text-muted)', letterSpacing: '1px', textTransform: 'uppercase', marginTop: '4px' }}>OPERATIONAL UPTIME</div>
                <div style={{ borderTop: '1px solid var(--border)', marginTop: '20px', paddingTop: '16px', fontSize: '12px', color: 'var(--text-secondary)', fontStyle: 'italic' }}>
                  "Integrated system live logs."
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 06 INDUSTRIES */}
      <section className="why" aria-labelledby="ind-title" style={{ padding: '80px 0', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="why-inner" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <Reveal>
              <span className="section-tag">Target Verticals</span>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="section-title" id="ind-title" style={{ margin: '12px 0' }}>
                Built for Real-World <span>Industries</span>
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="section-desc" style={{ fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
                MANUFACTURING · TEXTILES · ENERGY · SMART BUILDINGS · AGRICULTURE · LOGISTICS
              </p>
            </Reveal>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
            <Reveal>
              <div className="build-card" style={{ border: '1px solid var(--border-bright)', background: 'rgba(212, 175, 55, 0.03)', maxWidth: '500px', width: '100%' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                  <h3 style={{ fontSize: '20px', fontWeight: 600, color: 'var(--text-primary)', margin: 0 }}>
                    🧵 Textile Intelligence
                  </h3>
                  <span style={{ fontSize: '9px', color: 'var(--gold-light)', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 600 }}>
                    ★ Highlighted Specialization
                  </span>
                </div>
                <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)', lineHeight: '1.6', fontWeight: 300 }}>
                  Monitor loom machinery operations, log energy spikes, and track real-time climate conditions through connected edge sensors.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 07 HOW WE BUILD (Horizontal timeline with interactive details) */}
      <section className="process-section" aria-labelledby="process-title" style={{ padding: '80px 0' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <Reveal>
            <span className="section-tag">Operational Model</span>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="section-title" id="process-title" style={{ margin: '12px 0' }}>
              How We <span>Build</span>
            </h2>
          </Reveal>
        </div>

        {/* Horizontal Navigation */}
        <Reveal>
          <div style={{ display: 'flex', overflowX: 'auto', gap: '8px', paddingBottom: '16px', borderBottom: '1px solid var(--border)', justifyContent: 'center' }}>
            {processSteps.map((step, idx) => (
              <button
                key={idx}
                onClick={() => setActiveStep(idx)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: activeStep === idx ? 'var(--gold-light)' : 'var(--text-muted)',
                  fontSize: '11px',
                  fontFamily: 'var(--font-mono)',
                  letterSpacing: '1.5px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  padding: '12px 18px',
                  borderBottom: activeStep === idx ? '2px solid var(--gold)' : '2px solid transparent',
                  transition: 'all 0.2s',
                  whiteSpace: 'nowrap'
                }}
              >
                {step.step} {step.title}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Selected Step Detail Panel */}
        <div style={{ marginTop: '32px', textAlign: 'center', minHeight: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Reveal delay={100}>
            <div style={{ maxWidth: '600px', margin: '0 auto', background: 'var(--glass-bg)', padding: '32px', borderRadius: '16px', border: '1px solid var(--border)' }}>
              <span style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'rgba(212, 175, 55, 0.15)', fontWeight: 700, display: 'block', marginBottom: '8px' }}>
                {processSteps[activeStep].step}
              </span>
              <h4 style={{ fontSize: '18px', color: 'var(--gold-light)', fontWeight: 600, marginBottom: '8px' }}>
                {processSteps[activeStep].title}
              </h4>
              <h5 style={{ fontSize: '14px', color: 'var(--gold)', fontWeight: 400, marginBottom: '12px', fontFamily: 'var(--font-sans)' }}>
                {processSteps[activeStep].short}
              </h5>
              <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)', lineHeight: '1.6', fontWeight: 300 }}>
                {processSteps[activeStep].desc}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 08 TECHNOLOGY STACK CATEGORIZED */}
      <section className="tech-stack" aria-labelledby="tech-title" style={{ padding: '80px 0', borderTop: '1px solid var(--border)' }}>
        <div className="tech-inner" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <Reveal>
              <span className="section-tag">Architecture Layers</span>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="section-title" id="tech-title">
                Our Technology <span>Stack</span>
              </h2>
            </Reveal>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '32px' }}>
            {[
              { category: 'HARDWARE', techs: ['ESP32', 'STM32', 'Arduino', 'Raspberry Pi'] },
              { category: 'CONNECTIVITY', techs: ['MQTT', 'REST APIs', 'Wi-Fi Protocols', 'Bluetooth / BLE'] },
              { category: 'SOFTWARE', techs: ['React', 'Next.js UI', 'Flutter Mobile', 'Python', 'Node.js'] },
              { category: 'DATA & CLOUD', techs: ['PostgreSQL', 'SupaBase DB', 'Docker Configs', 'Cloud Hosting'] },
            ].map((stack, i) => (
              <Reveal delay={i * 100} key={i}>
                <div style={{ background: 'var(--glass-bg)', border: '1px solid var(--border)', borderRadius: '16px', padding: '24px' }}>
                  <div style={{ color: 'var(--gold)', fontSize: '11px', letterSpacing: '1px', fontWeight: 600, fontFamily: 'var(--font-mono)', marginBottom: '16px', borderBottom: '1px solid var(--border)', paddingBottom: '8px' }}>
                    {stack.category}
                  </div>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {stack.techs.map((tech, idx) => (
                      <li key={idx} style={{ fontSize: '13px', color: 'var(--text-secondary)', fontWeight: 300 }}>
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 09 FINAL CTA */}
      <section className="cta-section" aria-labelledby="cta-title" style={{ padding: '100px 0', borderTop: '1px solid var(--border)' }}>
        <div className="cta-inner">
          <Reveal>
            <span className="section-tag">Have a Problem Worth Automating?</span>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="section-title" id="cta-title">
              LET'S <span>AUTOMATE IT.</span>
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="cta-desc">
              Tell us what you're trying to build, monitor or automate.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="cta-buttons" style={{ display: 'flex', justifyContent: 'center' }}>
              <Link href="/contact" className="btn-primary">
                Start a Project ➔
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
