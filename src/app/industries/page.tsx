import React from 'react';
import type { Metadata } from 'next';
import IndustriesClient from './IndustriesClient';

export const metadata: Metadata = {
  title: 'Industrial IoT Solutions | ASRAGEN',
  description: 'Learn how ASRAGEN empowers industries: smart manufacturing, textile IoT, energy grid telemetry, agriculture automation, and smart building networks.',
  alternates: {
    canonical: '/industries',
  },
};

export default function IndustriesPage() {
  return <IndustriesClient />;
}
