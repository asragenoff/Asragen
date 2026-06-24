import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
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
            <div className="footer-tagline">Design It. Develop It. Deliver It.</div>
          </div>
        </div>
        <p className="footer-copy">&copy; {new Date().getFullYear()} ASRAGEN. All rights reserved.</p>
        <nav className="footer-links" aria-label="Footer navigation">
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/industries">Industries</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </footer>
  );
}
