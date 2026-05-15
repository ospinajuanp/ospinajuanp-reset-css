import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://ospinajuanp-reset-css.vercel.app'),
  title: {
    default: 'ospinajuanp-reset-css | Modern CSS Reset',
    template: '%s | ospinajuanp-reset-css'
  },
  description: 'A lightweight, modern CSS reset tool with multiple themes for your web projects. Supports React, Vue, Next.js and vanilla JS.',
  keywords: ['css reset', 'modern css', 'css normalize', 'browser reset', 'frontend styling', 'css framework', 'web development'],
  authors: [{ name: 'Juan Pablo Ospina', url: 'https://github.com/ospinajuanp' }],
  creator: 'Juan Pablo Ospina',
  publisher: 'Vercel',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ospinajuanp-reset-css.vercel.app',
    siteName: 'ospinajuanp-reset-css',
    title: 'ospinajuanp-reset-css | Modern CSS Reset',
    description: 'A lightweight, modern CSS reset tool with multiple themes for your web projects.',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'ospinajuanp-reset-css - Modern CSS Reset'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ospinajuanp-reset-css',
    description: 'A lightweight, modern CSS reset tool with multiple themes for your web projects.',
    creator: '@ospinajuanp',
    images: ['/og-image.svg']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  alternates: {
    canonical: 'https://ospinajuanp-reset-css.vercel.app',
    languages: {
      'en': 'https://ospinajuanp-reset-css.vercel.app'
    }
  },
  category: 'technology',
  classification: 'CSS Reset Library'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${mono.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}