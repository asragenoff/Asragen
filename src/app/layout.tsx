import type { Metadata } from 'next';
import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

import type { Viewport } from 'next';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://asragenoff.github.io/Asragen'),
  title: 'ASRAGEN - Design It. Develop It. Deliver It.',
  description: 'A technology-driven company pioneering IoT, AI, software, and automation solutions that help businesses embrace the future of intelligent technology.',
  keywords: 'ASRAGEN, IoT Solutions, Smart Automation, Software Development, Web Development, Cloud Solutions, AI Integration, Embedded Systems',
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    'name': 'ASRAGEN',
    'url': 'https://asragenoff.github.io/Asragen/',
    'logo': 'https://asragenoff.github.io/Asragen/favicon.ico',
    'description': 'A technology-driven company pioneering IoT, AI, software, and automation solutions.',
    'sameAs': [
      'https://x.com/Asragen007',
      'https://www.linkedin.com/company/asragen/',
      'https://www.instagram.com/asragen.off?igsh=MWUyb2pnMWtrbWl4Mg=='
    ],
    'contactPoint': {
      '@type': 'ContactPoint',
      'contactType': 'technical support',
      'availableLanguage': 'English'
    }
  };

  return (
    <html lang="en">
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
