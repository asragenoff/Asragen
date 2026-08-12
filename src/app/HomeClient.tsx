'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Reveal from '@/components/Reveal';

export default function HomeClient() {
  // IoT Simulation State
  const [isOnline, setIsOnline] = useState(true);
  const [temp, setTemp] = useState(26.8);
  const [humidity, setHumidity] = useState(62.5);
  const [power, setPower] = useState(1.24);
  const [status, setStatus] = useState('RUNNING');

  // Fluctuating values loop
  useEffect(() => {
    if (!isOnline || status === 'STOPPED') return;

    const interval = setInterval(() => {
      setTemp((prev) => +(prev + (Math.random() - 0.5) * 0.4).toFixed(1));
      setHumidity((prev) => +(prev + (Math.random() - 0.5) * 0.8).toFixed(1));
      setPower((prev) => +(prev + (Math.random() - 0.5) * 0.06).toFixed(2));
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
    { num: '45+', label: 'Projects Built' },
    { num: '4+', label: 'Tech Domains' },
    { num: '24/7', label: 'Monitoring Systems' },
    { num: '100%', label: 'Delivery Quality' },
  ];

  const buildItems = [
    {
      title: 'Smart Monitoring Systems',
      desc: 'Real-time telemetry logging, alert thresholds, and operational diagnostics for machines, factories, and facilities.',
      icon: (
        <svg className="build-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
        </svg>
      ),
    },
    {
      title: 'Industrial IoT',
      desc: 'Connecting legacy equipment and modern sensors to robust cloud-hosted web portals for maximum visibility.',
      icon: (
        <svg className="build-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
        </svg>
      ),
    },
    {
      title: 'Smart Automation',
      desc: 'Designing low-latency control logic and actuator configurations to automate repetitive workflows securely.',
      icon: (
        <svg className="build-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 7.91a2.25 2.25 0 01-1.07-1.916V5.25" />
        </svg>
      ),
    },
    {
      title: 'Energy Monitoring',
      desc: 'Deploying grid load monitors and smart submeters to log power consumption profiles and pinpoint energy wastage.',
      icon: (
        <svg className="build-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      ),
    },
    {
      title: 'Connected Products',
      desc: 'End-to-end prototyping of custom PCBs, MCUs configurations, specialized sensors, and low-power firmware.',
      icon: (
        <svg className="build-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 3.75H6.912a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H15" />
        </svg>
      ),
    },
    {
      title: 'Digital Twin Platforms',
      desc: 'Engineering interactive, modular user dashboard systems to visualize physical assets and control real-world systems remotely.',
      icon: (
        <svg className="build-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3" />
        </svg>
      ),
    },
  ];

  const processSteps = [
    { step: '01', title: 'Discover', desc: 'Understanding your problem domain, operational limits, hardware variables, and custom integration goals.' },
    { step: '02', title: 'Design', desc: 'Detailing system topologies, low-power MCU selections, custom PCB schematics, and UI/UX structures.' },
    { step: '03', title: 'Prototype', desc: 'Assembling proof-of-concept PCBs, compiling core firmware, and logging initial sensor data feeds.' },
    { step: '04', title: 'Engineer', desc: 'Building secure device firmware, scalable backend communication hubs, web applications, and admin panels.' },
    { step: '05', title: 'Deploy', desc: 'Installing physical hardware enclosures, calibrating sensors, and establishing live cloud network pipelines.' },
    { step: '06', title: 'Scale', desc: 'Providing ongoing OTA firmware upgrades, system telemetry reports, active scaling, and SLA maintenance support.' },
  ];

  const values = [
    { letter: 'I', name: 'Innovation', desc: 'We explore new frontiers to deliver smarter, more effective technology solutions.' },
    { letter: 'Q', name: 'Quality', desc: 'Built with precision and reliability for long-term performance you can count on.' },
    { letter: 'I', name: 'Integrity', desc: 'Transparency and honesty in every client relationship, every single time.' },
    { letter: 'S', name: 'Success', desc: 'Our success is measured purely by the measurable success of our clients.' },
    { letter: 'G', name: 'Growth', desc: 'We continuously improve our products and services to stay ahead of industry trends.' },
  ];

  return (
    <>
      <div className="glow-blob glow-1" aria-hidden="true"></div>
      <div className="glow-blob glow-2" aria-hidden="true"></div>
      <div className="glow-blob glow-3" aria-hidden="true"></div>

      {/* HERO */}
      <section className="hero" aria-label="Hero">
        <div className="hero-grid-bg" aria-hidden="true"></div>
        <div className="hero-radial" aria-hidden="true"></div>
        <div className="hero-content">
          <Reveal delay={0}>
            <div className="hero-badge">
              <span className="hero-badge-dot" aria-hidden="true"></span>
              Transforming Ideas into Intelligent Solutions
            </div>
          </Reveal>
          <Reveal delay={100}>
            <svg className="hero-logo" viewBox="0 0 100 100" aria-label="ASRAGEN logo" role="img">
              <defs>
                <linearGradient id="g2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#E8C96A' }} />
                  <stop offset="50%" style={{ stopColor: '#C9A84C' }} />
                  <stop offset="100%" style={{ stopColor: '#A07830' }} />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              <path d="M 51.5 6 C 30 35, 18 65, 5 88 L 18 88 C 28 72, 38 58, 50 53 L 30.5 47 L 51.5 39 L 53.5 61 L 73.5 53 Z" fill="url(#g2)" filter="url(#glow)" />
              <polygon points="65,62 77,56 93,88 81,88" fill="url(#g2)" filter="url(#glow)" />
            </svg>
          </Reveal>
          <Reveal delay={200}>
            <h1 className="hero-title">ASRAGEN</h1>
          </Reveal>
          <Reveal delay={300}>
            <p className="hero-tagline">BUILD. CONNECT. AUTOMATE.</p>
          </Reveal>
          <Reveal delay={400}>
            <div className="hero-divider" aria-hidden="true"></div>
          </Reveal>
          <Reveal delay={500}>
            <p className="hero-desc">
              Engineering the Future with IoT & Intelligent Automation. From connected devices and industrial automation to intelligent dashboards and digital products — ASRAGEN turns concepts into deployable technology.
            </p>
          </Reveal>
          <Reveal delay={600}>
            <div className="hero-actions">
              <Link href="/services" className="btn-primary">
                Explore Our Solutions
              </Link>
              <Link href="/contact" className="btn-secondary">
                Start a Project
              </Link>
            </div>
          </Reveal>
          <Reveal delay={700}>
            <div className="hero-stats" aria-label="Key statistics">
              {stats.map((stat, i) => (
                <div className="stat-item" key={i}>
                  <span className="stat-num">{stat.num}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHAT WE BUILD */}
      <section className="why" aria-labelledby="build-title">
        <div className="why-inner" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="why-header">
            <Reveal>
              <span className="section-tag">Engineering Showcase</span>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="section-title" id="build-title">
                What We <span>Build</span>
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="section-desc">
                High-performance hardware blueprints coupled with intelligent, scalable cloud architectures. We construct reliable devices that move data securely.
              </p>
            </Reveal>
          </div>
          <div className="build-grid">
            {buildItems.map((item, i) => (
              <Reveal delay={i * 100} key={i}>
                <div className="build-card">
                  {item.icon}
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* DIGITAL TWIN / INTERACTIVE IoT DEMO */}
      <section className="twin-section" aria-labelledby="twin-title">
        <div className="twin-grid">
          <div>
            <Reveal>
              <span className="section-tag">ASRAGEN Core™ Digital Twin</span>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="section-title" id="twin-title" style={{ textAlign: 'left', margin: '12px 0 24px' }}>
                Live Device <span>Simulation</span>
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="section-desc" style={{ textAlign: 'left', maxWidth: '100%', marginBottom: '24px' }}>
                Test our interactive dashboard. Toggle device states, monitor real-time telemetry fluctuations, and verify how ASRAGEN Core™ interfaces hardware sensors with web platforms instantly.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', background: 'rgba(255,255,255,0.01)', border: '1px solid var(--border)', borderRadius: '14px', padding: '20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px' }}>
                  <span style={{ color: 'var(--text-secondary)' }}>Gateway Address:</span>
                  <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--gold)' }}>mqtt.asragen.io:8883</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px' }}>
                  <span style={{ color: 'var(--text-secondary)' }}>Encryption SSL:</span>
                  <span style={{ color: '#4ade80', fontWeight: 500 }}>ACTIVE (TLS v1.3)</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px' }}>
                  <span style={{ color: 'var(--text-secondary)' }}>Device Firmware:</span>
                  <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-primary)' }}>v2.4.1-stable</span>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={200}>
            <div className="twin-control-panel">
              <div className="panel-header">
                <span className="panel-title">ASRAGEN_CORE_#001</span>
                <div className="status-dot-wrap">
                  <span className={`status-dot ${!isOnline ? 'offline' : ''}`} />
                  <span style={{ fontSize: '10px', color: isOnline ? '#4ade80' : '#f87171', fontWeight: 600 }}>
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
                  <div className="metric-val" style={{ color: 'var(--gold)' }}>
                    {isOnline ? `${power} kW` : '0.00 kW'}
                  </div>
                  <div className="metric-lbl">Telemetry Load</div>
                </div>
              </div>

              <div className="panel-visualizer">
                {isOnline && status === 'RUNNING' ? (
                  <svg className="grid-line-wave" viewBox="0 0 400 60">
                    <path d={`M 0 30 C 50 ${10 + Math.sin(temp) * 10}, 100 ${50 - Math.cos(humidity) * 15}, 150 30 C 200 30, 250 ${20 + Math.random() * 15}, 300 45 C 350 15, 400 30`} />
                  </svg>
                ) : (
                  <div style={{ color: 'var(--text-muted)', fontSize: '12px' }}>
                    {isOnline ? '[ SYSTEM STANDBY ]' : '[ CORE IS DISCONNECTED ]'}
                  </div>
                )}
              </div>

              <div className="panel-controls">
                <button 
                  className={`control-btn ${isOnline ? 'active' : ''}`}
                  onClick={() => setIsOnline(!isOnline)}
                >
                  {isOnline ? 'Disconnect' : 'Connect'}
                </button>
                <button 
                  className={`control-btn ${status === 'RUNNING' && isOnline ? 'active' : ''}`}
                  onClick={handlePowerToggle}
                  disabled={!isOnline}
                  style={{ opacity: isOnline ? 1 : 0.5 }}
                >
                  {status === 'RUNNING' ? 'Stop Machine' : 'Run Machine'}
                </button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FROM IDEA TO DEPLOYMENT */}
      <section className="process-section" aria-labelledby="process-title">
        <div style={{ textAlign: 'center' }}>
          <Reveal>
            <span className="section-tag">How We Work</span>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="section-title" id="process-title">
              From Idea to <span>Reality</span>
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="section-desc">
              We guide hardware engineering pipelines and software builds through a structured, transparent process.
            </p>
          </Reveal>
        </div>

        <div className="process-grid">
          {processSteps.map((step, idx) => (
            <Reveal delay={idx * 100} key={idx}>
              <div className="process-card">
                <span className="process-step-num">{step.step}</span>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* VALUE PRINCIPLES */}
      <section className="values" aria-labelledby="values-title">
        <div className="values-inner">
          <div style={{ textAlign: 'center' }}>
            <Reveal>
              <span className="section-tag">Our Foundation</span>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="section-title" id="values-title">
                Values That <span>Drive</span> Us
              </h2>
            </Reveal>
          </div>
          <div className="values-grid" role="list">
            {values.map((value, i) => (
              <Reveal delay={i * 100} key={i}>
                <div className="value-card" role="listitem">
                  <span className="value-letter" aria-hidden="true">
                    {value.letter}
                  </span>
                  <h4>{value.name}</h4>
                  <p>{value.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="tech-stack" aria-labelledby="tech-title">
        <div className="tech-inner">
          <div className="tech-header">
            <div>
              <Reveal>
                <span className="section-tag">Technology</span>
              </Reveal>
              <Reveal delay={100}>
                <h2 className="section-title" id="tech-title">
                  Powered by <span>Modern</span> Tech
                </h2>
              </Reveal>
              <Reveal delay={200}>
                <p className="section-desc">
                  We leverage the best tools, frameworks, and hardware platforms across every layer of the stack to build robust, scalable systems.
                </p>
              </Reveal>
            </div>
            <Reveal delay={300}>
              <div className="tech-items" aria-label="Technology stack">
                <span className="tech-pill">ESP32</span>
                <span className="tech-pill">STM32</span>
                <span className="tech-pill">Arduino</span>
                <span className="tech-pill">Raspberry Pi</span>
                <span className="tech-pill">Flutter</span>
                <span className="tech-pill">React</span>
                <span className="tech-pill">Next.js</span>
                <span className="tech-pill">Node.js</span>
                <span className="tech-pill">Python</span>
                <span className="tech-pill">PostgreSQL</span>
                <span className="tech-pill">Supabase</span>
                <span className="tech-pill">MQTT</span>
                <span className="tech-pill">REST APIs</span>
                <span className="tech-pill">Docker</span>
                <span className="tech-pill">AI Frameworks</span>
                <span className="tech-pill">Cloud Platforms</span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section" aria-labelledby="cta-title">
        <div className="cta-inner">
          <Reveal>
            <span className="section-tag">Have a Problem Worth Automating?</span>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="section-title" id="cta-title">
              Let's Build Something <span>Extraordinary</span>
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="cta-desc">
              From prototype devices to complete cloud twin dashboards, tell us what you're trying to build and we'll engineer the system.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="cta-buttons">
              <Link href="/contact" className="btn-primary">
                Start a Project ➔
              </Link>
              <Link href="/contact" className="btn-secondary">
                Discuss Your Vision
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
