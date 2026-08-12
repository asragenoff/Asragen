import React from 'react';
import type { Metadata } from 'next';
import HomeClient from './HomeClient';

export const metadata: Metadata = {
  title: 'ASRAGEN | IoT, Billing & Custom Tech Solutions',
  description: 'ASRAGEN specializes in end-to-end IoT systems design, industrial automation, AI-driven cloud backends, and custom retail/enterprise billing software.',
  alternates: {
    canonical: '/',
  },
};

export default function HomePage() {
  return <HomeClient />;
}
