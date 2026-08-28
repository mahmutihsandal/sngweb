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
  applicationName: 'SNG Biletim',
  description:
    'Poizi ve PAU konserleri için etkinlik bilgileri, bilet seçenekleri ve WhatsApp rezervasyonu.',
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      {
        url: '/favicon-48.png',
        type: 'image/png',
        sizes: '48x48',
      },
      {
        url: '/favicon.png',
        type: 'image/png',
        sizes: '512x512',
      },
    ],
    apple: [
      {
        url: '/favicon-192.png',
        type: 'image/png',
        sizes: '192x192',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },
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

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'SNG Biletim',
  url: 'https://sngbiletim.com/',
  description:
    "Fethiye'deki Poizi ve PAU konserleri için etkinlik bilgileri, bilet seçenekleri ve WhatsApp rezervasyonu.",
  inLanguage: 'tr-TR',
  publisher: {
    '@type': 'Organization',
    name: 'SNG Ajans',
    logo: {
      '@type': 'ImageObject',
      url: 'https://sngbiletim.com/favicon.png',
      width: 512,
      height: 512,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
