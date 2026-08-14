'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const links = [
    { label: 'Solutions', path: '/services' },
    { label: 'Products', path: '/' },
    { label: 'Industries', path: '/industries' },
    { label: 'Technology', path: '/' },
    { label: 'About', path: '/about' },
  ];

  return (
    <>
      <div className="main-nav-wrapper">
        <nav className="main-nav" aria-label="Main navigation">
          <Link href="/" className="nav-logo" aria-label="ASRAGEN Home">
            <svg className="nav-logo-icon" viewBox="0 0 100 100" aria-hidden="true">
              <defs>
                <linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#b8ff3d' }} />
                  <stop offset="50%" style={{ stopColor: '#a6e834' }} />
                  <stop offset="100%" style={{ stopColor: '#88cd2d' }} />
                </linearGradient>
              </defs>
              <path d="M 51.5 6 C 30 35, 18 65, 5 88 L 18 88 C 28 72, 38 58, 50 53 L 30.5 47 L 51.5 39 L 53.5 61 L 73.5 53 Z" fill="url(#g1)" />
              <polygon points="65,62 77,56 93,88 81,88" fill="url(#g1)" />
            </svg>
            <span className="nav-logo-text">ASRAGEN</span>
          </Link>

          <ul className="nav-links" role="list">
            {links.map((link, idx) => (
              <li key={idx}>
                <Link href={link.path} className={pathname === link.path ? 'active' : ''}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link href="/contact" className="nav-cta">
            Start a project
          </Link>

          <button 
            className="mobile-menu-btn" 
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" />
              )}
            </svg>
          </button>
        </nav>
      </div>

      <div className={`mobile-overlay-bg ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(false)}></div>
      <div className={`mobile-drawer ${isOpen ? 'open' : ''}`}>
        <ul className="mobile-drawer-links" role="list">
          {links.map((link, idx) => (
            <li key={idx}>
              <Link 
                href={link.path} 
                onClick={() => setIsOpen(false)}
                className={pathname === link.path ? 'active' : ''}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="mobile-cta-item">
            <Link 
              href="/contact" 
              onClick={() => setIsOpen(false)} 
              className="nav-cta"
            >
              Start a project
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
