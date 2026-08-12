import React from 'react';
import type { Metadata } from 'next';
import HomeClient from './HomeClient';

export const metadata: Metadata = {
  title: 'ASRAGEN | IoT, Automation & Digital Engineering',
  description: 'ASRAGEN engineers IoT products, industrial automation, embedded systems, monitoring platforms and digital solutions for modern businesses.',
  alternates: {
    canonical: '/',
  },
};

export default function HomePage() {
  return <HomeClient />;
}
