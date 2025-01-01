import type { Metadata } from 'next';
import './globals.css';
import { JSX } from 'react';

export const metadata: Metadata = {
  title: 'Yumekawa Holdings',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
