import Link from 'next/link'
import { Home, ArrowLeft } from 'lucide-react'
import { Header } from '@/components/Landing/Header'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-4 text-9xl font-bold text-primary">404</h1>
          <h2 className="mb-6 text-2xl font-semibold">Page Not Found</h2>
          <p className="mb-8 text-muted-foreground max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-sm hover:bg-primary/90 transition-colors"
            >
              <Home className="h-4 w-4" />
              Go Home
            </Link>
            <Link
              href="/docs"
              className="inline-flex items-center gap-2 rounded-md border bg-background px-6 py-3 text-sm font-medium shadow-sm hover:bg-secondary transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Documentation
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}