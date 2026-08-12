import React from 'react';
import type { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
  title: 'Start an IoT or Automation Project | ASRAGEN',
  description: 'Connect with ASRAGEN\'s technical specialists. Schedule a consultation or request a custom quote for industrial IoT systems, custom electronics design, and edge automation.',
  alternates: {
    canonical: '/contact',
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
