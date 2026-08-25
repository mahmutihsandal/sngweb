import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://sngbiletim.com'),
  title: 'SNG Biletim | Fethiye Konser Biletleri',
  description:
    'Poizi ve PAU konserleri için etkinlik bilgileri, bilet seçenekleri ve WhatsApp rezervasyonu.',
  openGraph: {
    title: 'SNG Biletim | Fethiye’de İki Büyük Gece',
    description:
      '01—02 Eylül 2026 · Poizi ve PAU · Küçük Samanlı Beach Club',
    url: 'https://sngbiletim.com',
    siteName: 'SNG Biletim',
    locale: 'tr_TR',
    type: 'website',
    images: [
      {
        url: '/og.png',
        width: 1731,
        height: 909,
        alt: 'SNG Biletim — Fethiye, 01—02 Eylül 2026',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SNG Biletim | Fethiye’de İki Büyük Gece',
    description:
      '01—02 Eylül 2026 · Poizi ve PAU · Küçük Samanlı Beach Club',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
