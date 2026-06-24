import React from 'react';
import Link from 'next/link';
import Reveal from '@/components/Reveal';

export default function HomePage() {
  const stats = [
    { num: '13+', label: 'Core Services' },
    { num: '12+', label: 'Industries Served' },
    { num: '360°', label: 'End-to-End Solutions' },
    { num: 'IoT', label: '& AI Integrated' },
  ];

  const benefits = [
    {
      num: '01',
      title: 'End-to-End Solutions',
      desc: 'From concept to deployment and support, we own the full journey of your technology product.',
      icon: (
        <svg className="why-icon" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      ),
    },
    {
      num: '02',
      title: 'Innovative Approach',
      desc: 'We constantly explore emerging technologies to deliver smarter, more effective solutions for your business.',
      icon: (
        <svg className="why-icon" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
        </svg>
      ),
    },
    {
      num: '03',
      title: 'Secure Architecture',
      desc: 'Every solution is built with enterprise-grade security, scalability, and long-term reliability baked in.',
      icon: (
        <svg className="why-icon" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
      ),
    },
    {
      num: '04',
      title: 'Customer-Centric',
      desc: 'Transparent, honest, and professional client relationships where your success defines our success.',
      icon: (
        <svg className="why-icon" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
        </svg>
      ),
    },
    {
      num: '05',
      title: 'Affordable Pricing',
      desc: 'Cost-effective solutions without compromise. High quality engineering at competitive market rates.',
      icon: (
        <svg className="why-icon" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      num: '06',
      title: 'Continuous Innovation',
      desc: 'Technology evolves and so do we — continuously improving products and services to stay ahead of trends.',
      icon: (
        <svg className="why-icon" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
        </svg>
      ),
    },
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
            <p className="hero-tagline">Design It &nbsp;·&nbsp; Develop It &nbsp;·&nbsp; Deliver It</p>
          </Reveal>
          <Reveal delay={400}>
            <div className="hero-divider" aria-hidden="true"></div>
          </Reveal>
          <Reveal delay={500}>
            <p className="hero-desc">
              A technology-driven company pioneering IoT, AI, software, and automation solutions that help businesses embrace the future of intelligent technology.
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

      {/* WHY CHOOSE ASRAGEN */}
      <section className="why" aria-labelledby="why-title">
        <div className="why-inner">
          <div className="why-header">
            <Reveal>
              <span className="section-tag">Why ASRAGEN</span>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="section-title" id="why-title">
                The <span>Advantage</span> You Deserve
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="section-desc">
                Every decision we make is guided by a commitment to quality, innovation, and your long-term success.
              </p>
            </Reveal>
          </div>
          <div className="why-grid">
            {benefits.map((benefit, i) => (
              <Reveal delay={i * 100} key={i}>
                <div className="why-card">
                  <span className="why-card-num" aria-hidden="true">
                    {benefit.num}
                  </span>
                  {benefit.icon}
                  <h3>{benefit.title}</h3>
                  <p>{benefit.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
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
            <div className="cta-buttons">
              <Link href="/contact" className="btn-primary">
                Start a Project
              </Link>
              <Link href="/contact" className="btn-secondary">
                Schedule a Consultation
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
