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
  title: 'ASRAGEN - Design It. Develop It. Deliver It.',
  description: 'A technology-driven company pioneering IoT, AI, software, and automation solutions that help businesses embrace the future of intelligent technology.',
  keywords: 'ASRAGEN, IoT Solutions, Smart Automation, Software Development, Web Development, Cloud Solutions, AI Integration, Embedded Systems',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
