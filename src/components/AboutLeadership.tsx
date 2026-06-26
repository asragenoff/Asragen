'use client';

import React from 'react';
import Reveal from './Reveal';
import arunkumarImg from '../../public/arunkumar.jpg';
import vashanthImg from '../../public/vashanth.jpg';

interface Leader {
  name: string;
  role: string;
  quote: string;
  about: string;
  phone: string;
  email: string;
  avatar: any;
  stats: {
    num1: string;
    label1: string;
    num2: string;
    label2: string;
    num3: string;
    label3: string;
  };
  socials: {
    github?: string;
    linkedin?: string;
  };
}

export default function AboutLeadership() {
  const leaders: Leader[] = [
    {
      name: 'Arunkumar S',
      role: 'Founder & Chief Executive Officer (CEO)',
      quote: 'Visionary behind ASRAGEN, dedicated to transforming industries through intelligent IoT, automation, AI-powered technologies, and innovative digital solutions.',
      about: "As the Founder and CEO of ASRAGEN, Arun Kumar leads the company's vision of developing next-generation smart technologies that solve real-world challenges. With expertise in Internet of Things (IoT), embedded systems, automation, software engineering, and product innovation, he is committed to creating intelligent solutions that improve efficiency, sustainability, and connectivity across industries.",
      phone: '+91 9965241063',
      email: 'arun1063k@gmail.com',
      avatar: arunkumarImg,
      stats: {
        num1: '45+',
        label1: 'PROJECTS',
        num2: '4.9',
        label2: 'RATING',
        num3: "'24",
        label3: 'JOINED',
      },
      socials: {
        github: 'arunkumar-asragen',
        linkedin: 'arunkumar-s',
      },
    },
    {
      name: 'Vashanth K',
      role: 'Co-Founder & Chief Operating Officer (COO)',
      quote: 'Driving operational excellence and transforming innovative ideas into reliable technology solutions.',
      about: "As the Co-Founder of ASRAGEN, Vashanth K oversees business operations, project execution, strategic planning, and customer success. Working closely with the engineering team, he ensures every solution reflects ASRAGEN's commitment to quality, innovation, and reliability.",
      phone: '+91 8220168887',
      email: 'vashanth.tup@gmail.com',
      avatar: vashanthImg,
      stats: {
        num1: '38+',
        label1: 'PROJECTS',
        num2: '4.8',
        label2: 'RATING',
        num3: "'24",
        label3: 'JOINED',
      },
      socials: {
        github: 'vashanth-k',
        linkedin: 'vashanth-k-co-founder',
      },
    },
  ];

  return (
    <div className="leaders-section">
      <Reveal>
        <h2 className="leaders-title">
          Meet Our <span>Leadership</span>
        </h2>
      </Reveal>

      <div className="leaders-grid" style={{ maxWidth: '960px', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '40px' }}>
        {leaders.map((leader, index) => (
          <Reveal delay={index * 150} key={index}>
            <div className="profile-detail-card">
              <div className="profile-header-bg" />
              
              <div className="profile-img-container">
                <img src={leader.avatar.src} alt={leader.name} />
              </div>
              
              <h3 className="profile-name">{leader.name}</h3>
              <div className="profile-title">{leader.role}</div>
              
              <p className="profile-quote">
                "{leader.quote}"
              </p>
              
              <div className="profile-divider" />
              
              <div className="profile-about-title">About</div>
              <p className="profile-about-desc">
                {leader.about}
              </p>
              
              <div className="profile-about-title">Contact</div>
              <div className="profile-contact-container">
                <a href={`mailto:${leader.email}`} className="profile-contact-item">
                  <svg className="profile-contact-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {leader.email}
                </a>
                
                <a href={`tel:${leader.phone.replace(/\s+/g, '')}`} className="profile-contact-item">
                  <svg className="profile-contact-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {leader.phone}
                </a>
              </div>
              
              <div className="profile-socials">
                {leader.socials.github && (
                  <a 
                    href={`https://github.com/${leader.socials.github}`} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="profile-social-btn"
                  >
                    <svg fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                    </svg>
                    GitHub
                  </a>
                )}
                
                {leader.socials.linkedin && (
                  <a 
                    href={`https://linkedin.com/in/${leader.socials.linkedin}`} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="profile-social-btn"
                  >
                    <svg fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                    LinkedIn
                  </a>
                )}
              </div>
              
              <div className="profile-stats">
                <div className="profile-stat-col">
                  <div className="profile-stat-num">{leader.stats.num1}</div>
                  <div className="profile-stat-label">{leader.stats.label1}</div>
                </div>
                <div className="profile-stat-col">
                  <div className="profile-stat-num">{leader.stats.num2}</div>
                  <div className="profile-stat-label">{leader.stats.label2}</div>
                </div>
                <div className="profile-stat-col">
                  <div className="profile-stat-num">{leader.stats.num3}</div>
                  <div className="profile-stat-label">{leader.stats.label3}</div>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
