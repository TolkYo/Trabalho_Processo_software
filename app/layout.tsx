// app/layout.tsx
import type { Metadata } from 'next';
import { Bebas_Neue, Syne, Inter } from 'next/font/google';
import './globals.css';

const bebas = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas-neue',
});

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Study Club',
  description: 'Aprenda, dispute e revise com quiz gamificado estilo RPG',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${bebas.variable} ${syne.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}