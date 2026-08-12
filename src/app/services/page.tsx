import React from 'react';
import type { Metadata } from 'next';
import ServicesClient from './ServicesClient';

export const metadata: Metadata = {
  title: 'IoT & Automation Solutions | ASRAGEN',
  description: 'Explore ASRAGEN\'s engineering services: industrial IoT automation, custom PCB design, smart energy metering, and enterprise digital platforms.',
  alternates: {
    canonical: '/services',
  },
};

export default function ServicesPage() {
  return <ServicesClient />;
}
