import React from 'react';
import type { Metadata } from 'next';
import IndustriesClient from './IndustriesClient';

export const metadata: Metadata = {
  title: 'Industry Solutions | IoT & Custom Software | ASRAGEN',
  description: 'Learn how ASRAGEN empowers industries: retail (POS & billing databases), smart manufacturing, IoT agriculture, automated healthcare systems, and smart utilities.',
  alternates: {
    canonical: '/industries',
  },
};

export default function IndustriesPage() {
  return <IndustriesClient />;
}
