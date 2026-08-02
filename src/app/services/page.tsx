import React from 'react';
import type { Metadata } from 'next';
import ServicesClient from './ServicesClient';

export const metadata: Metadata = {
  title: 'Custom IoT Systems & Retail Billing Software Services | ASRAGEN',
  description: 'Explore ASRAGEN\'s technology engineering services: industrial IoT automation, smart energy metering, mobile apps, and custom retail/enterprise billing software.',
  alternates: {
    canonical: '/services',
  },
};

export default function ServicesPage() {
  return <ServicesClient />;
}
