import type { Metadata } from 'next'
import { type PropsWithChildren } from 'react';
import { Inter } from 'next/font/google';

import './globals.css';

// Sans font
const sans = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: 'Tailwind Tips',
  description: 'Some tips and tricks for using Tailwind CSS',
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={`${sans.variable} font-sans`}>{children}</body>
    </html>
  );
}
