"use client"
import './globals.css'
import type { Metadata } from 'next'
import { ColorProvider } from '../contexts/ColorContext.';
import { ClickProvider } from '../contexts/ClickContext';
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MatrixFolio',
  description: 'MatrixFolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <ColorProvider>
      <ClickProvider>
      <body className={inter.className}>{children}</body>
      </ClickProvider>
    </ColorProvider>
    </html>
  )
}
