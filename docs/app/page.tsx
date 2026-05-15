import { Header } from '@/components/Landing/Header'
import { Hero } from '@/components/Landing/Hero'
import { Features } from '@/components/Landing/Features'
import { Quickstart } from '@/components/Landing/Quickstart'
import { Footer } from '@/components/Landing/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Modern CSS Reset for Web Developers',
  description: 'Get started with ospinajuanp-reset-css. A lightweight CSS reset with 6 themes, React/Next.js support, and dynamic theming. Install via npm and start building.',
  openGraph: {
    title: 'Modern CSS Reset for Web Developers',
    description: 'A lightweight CSS reset with 6 themes, React/Next.js support, and dynamic theming.',
    images: ['/og-image.svg']
  }
}

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Features />
        <Quickstart />
      </main>
      <Footer />
    </div>
  )
}