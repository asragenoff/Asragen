import React from 'react';
import type { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
  title: 'Contact ASRAGEN | Start Your IoT or Billing Software Project',
  description: 'Connect with ASRAGEN\'s technical specialists. Schedule a consultation or request a custom quote for industrial IoT systems, smart home automation, and billing software.',
  alternates: {
    canonical: '/contact',
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
