import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        {/* Brand Column */}
        <div>
          <div className="footer-logo">
            <svg className="footer-logo-img" viewBox="0 0 100 100" aria-hidden="true">
              <defs>
                <linearGradient id="gf" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#E8C96A' }} />
                  <stop offset="100%" style={{ stopColor: '#8B6914' }} />
                </linearGradient>
              </defs>
              <path d="M 51.5 6 C 30 35, 18 65, 5 88 L 18 88 C 28 72, 38 58, 50 53 L 30.5 47 L 51.5 39 L 53.5 61 L 73.5 53 Z" fill="url(#gf)" />
              <polygon points="65,62 77,56 93,88 81,88" fill="url(#gf)" />
            </svg>
            <div>
              <div className="footer-logo-text">ASRAGEN</div>
              <div className="footer-tagline">Design It &nbsp;·&nbsp; Develop It &nbsp;·&nbsp; Deliver It</div>
            </div>
          </div>
          <p className="footer-desc">
            A technology-driven company pioneering intelligent IoT, automation, AI software, and custom embedded systems configurations for modern industries.
          </p>
        </div>

        {/* Links Column */}
        <div>
          <h4 className="footer-col-title">Quick Links</h4>
          <ul className="footer-col-links">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/services">Services Console</Link></li>
            <li><Link href="/industries">Industries Spec</Link></li>
            <li><Link href="/contact">Configure Project</Link></li>
          </ul>
        </div>

        {/* Contact Column */}
        <div>
          <h4 className="footer-col-title">Direct Channels</h4>
          <ul className="footer-col-links">
            <li style={{ color: 'var(--text-secondary)' }}>
              <span style={{ color: 'var(--gold)', fontSize: '11px', display: 'block', textTransform: 'uppercase', letterSpacing: '1px' }}>Engineering Intake</span>
              asragenoff@gmail.com
            </li>
            <li style={{ color: 'var(--text-secondary)' }}>
              <span style={{ color: 'var(--gold)', fontSize: '11px', display: 'block', textTransform: 'uppercase', letterSpacing: '1px' }}>General Inquiries</span>
              hello@asragen.com
            </li>
            <li style={{ color: 'var(--text-secondary)' }}>
              <span style={{ color: 'var(--gold)', fontSize: '11px', display: 'block', textTransform: 'uppercase', letterSpacing: '1px' }}>Response Timeline</span>
              Under 24 Hours
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="footer-bottom" style={{ maxWidth: '1200px', margin: '60px auto 0' }}>
        <p className="footer-copy">&copy; {new Date().getFullYear()} ASRAGEN. All rights reserved.</p>
        <div className="footer-legal-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="/contact">Support Desk</a>
        </div>
      </div>
    </footer>
  );
}
