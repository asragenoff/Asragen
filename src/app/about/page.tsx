import React from 'react';
import Reveal from '@/components/Reveal';
import AboutLeadership from '@/components/AboutLeadership';

export const metadata = {
  title: 'About ASRAGEN - Built for the Future of Technology',
  description: 'Learn about ASRAGEN\'s vision, mission, goal, and customer-first approach to building connected hardware and software ecosystems.',
};

export default function AboutPage() {
  const cards = [
    {
      title: 'Our Vision',
      desc: 'A globally recognized technology pioneer empowering through intelligent automation and sustainable innovation.',
      icon: (
        <svg className="mission-icon" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="1.5" aria-hidden="true" style={{ color: 'var(--gold)' }}>
          <path d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
          <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      title: 'Our Mission',
      desc: 'Design and deliver reliable, innovative technology that solves real-world problems and accelerates digital transformation.',
      icon: (
        <svg className="mission-icon" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="1.5" aria-hidden="true" style={{ color: 'var(--gold)' }}>
          <path d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      ),
    },
    {
      title: 'Our Goal',
      desc: 'Bridge the gap between hardware and software, creating connected ecosystems where devices, data, and people work together.',
      icon: (
        <svg className="mission-icon" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="1.5" aria-hidden="true" style={{ color: 'var(--gold)' }}>
          <path d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
        </svg>
      ),
    },
    {
      title: 'Customer First',
      desc: 'Our success is fundamentally measured by the success and satisfaction of our clients worldwide.',
      icon: (
        <svg className="mission-icon" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="1.5" aria-hidden="true" style={{ color: 'var(--gold)' }}>
          <path d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="about" style={{ minHeight: '100vh', paddingTop: '160px' }} aria-labelledby="about-title">
      <div className="about-inner">
        <div className="about-visual">
          <Reveal>
            <div className="about-logo-container" aria-hidden="true">
              <div className="about-logo-ring"></div>
              <div className="about-logo-ring-2"></div>
              <svg className="about-logo-img" viewBox="0 0 100 100" aria-hidden="true">
                <defs>
                  <linearGradient id="g3" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#E8C96A' }} />
                    <stop offset="50%" style={{ stopColor: '#C9A84C' }} />
                    <stop offset="100%" style={{ stopColor: '#8B6914' }} />
                  </linearGradient>
                </defs>
                <path d="M 51.5 6 C 30 35, 18 65, 5 88 L 18 88 C 28 72, 38 58, 50 53 L 30.5 47 L 51.5 39 L 53.5 61 L 73.5 53 Z" fill="url(#g3)" />
                <polygon points="65,62 77,56 93,88 81,88" fill="url(#g3)" />
              </svg>
            </div>
          </Reveal>
        </div>
        <div className="about-content">
          <Reveal>
            <span className="section-tag">Who We Are</span>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="section-title" id="about-title">
              Built for the <span>Future</span> of Technology
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="section-desc">
              ASRAGEN was founded with a clear vision: to make advanced technology accessible, practical, and transformative. We combine hardware intelligence, smart software, and cloud connectivity into seamless ecosystems.
            </p>
          </Reveal>
          <div className="mission-grid">
            {cards.map((card, i) => (
              <Reveal delay={(i + 3) * 100} key={i}>
                <div className="mission-card">
                  {card.icon}
                  <h4>{card.title}</h4>
                  <p>{card.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
      <AboutLeadership />
    </section>
  );
}
