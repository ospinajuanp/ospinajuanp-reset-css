import { Header } from '@/components/Landing/Header'
import { Sidebar } from '@/components/Docs/Sidebar'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Documentation',
  description: 'Complete documentation for ospinajuanp-reset-css. Learn how to install, configure, and use the CSS reset library with React, Vue, Next.js or vanilla JavaScript.',
  robots: {
    index: true,
    follow: true
  }
}

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 container mx-auto flex">
        <Sidebar />
        <main className="flex-1 py-8 pl-6 pr-4 md:pr-8 max-w-4xl">
          {children}
        </main>
      </div>
    </div>
  )
}