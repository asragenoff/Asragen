import React from 'react';
import type { Metadata } from 'next';
import HomeClient from './HomeClient';

export const metadata: Metadata = {
  title: 'ASRAGEN | IoT & Industrial Automation Solutions',
  description: 'ASRAGEN engineers IoT, embedded systems, industrial automation, energy monitoring and digital twin solutions for modern industries.',
  alternates: {
    canonical: '/',
  },
};

export default function HomePage() {
  return <HomeClient />;
}
