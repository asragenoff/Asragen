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
              <div className="footer-tagline">BUILD. CONNECT. AUTOMATE.</div>
            </div>
          </div>
          <p className="footer-desc">
            A technology company engineering intelligent IoT, automation, embedded systems and digital platforms for modern industries.
          </p>
          <div className="footer-socials" style={{ display: 'flex', gap: '16px', marginTop: '20px' }}>
            <a 
              href="https://x.com/Asragen007" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="ASRAGEN on X (Twitter)"
              className="footer-social-link"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: '18px', height: '18px' }}>
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a 
              href="https://www.linkedin.com/company/asragen/" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="ASRAGEN on LinkedIn"
              className="footer-social-link"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '20px', height: '20px' }}>
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a 
              href="https://www.instagram.com/asragen.off?igsh=MWUyb2pnMWtrbWl4Mg==" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="ASRAGEN on Instagram"
              className="footer-social-link"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '20px', height: '20px' }}>
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
          </div>
        </div>

        {/* Links Column */}
        <div>
          <h4 className="footer-col-title">Quick Links</h4>
          <ul className="footer-col-links">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/industries">Industries</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Column */}
        <div>
          <h4 className="footer-col-title">Contact</h4>
          <ul className="footer-col-links">
            <li style={{ color: 'var(--text-secondary)' }}>
              <span style={{ color: 'var(--gold)', fontSize: '11px', display: 'block', textTransform: 'uppercase', letterSpacing: '1px' }}>Start a Project</span>
              {"asragenoff"}{"\u0040"}{"gmail.com"}
            </li>
            <li style={{ color: 'var(--text-secondary)' }}>
              <span style={{ color: 'var(--gold)', fontSize: '11px', display: 'block', textTransform: 'uppercase', letterSpacing: '1px' }}>Typical response:</span>
              &lt;24 hours
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="footer-bottom" style={{ maxWidth: '1200px', margin: '60px auto 0' }}>
        <p className="footer-copy">&copy; {new Date().getFullYear()} ASRAGEN. All rights reserved.</p>
        <div className="footer-legal-links">
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms of Service</Link>
          <Link href="/contact">Support Desk</Link>
        </div>
      </div>
    </footer>
  );
}
