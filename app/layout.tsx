import type { Metadata } from 'next';
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
      <body className={`${sans.variable} font-sans`}>
        <div className="m-auto flex max-w-4xl flex-col gap-y-16 px-10 py-32">
          <h1>Tailwind Tips & Tricks</h1>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
