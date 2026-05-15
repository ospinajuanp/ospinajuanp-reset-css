import Link from 'next/link'
import { Github } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2">
            <span className="font-semibold">ospinajuanp-reset-css</span>
            <span className="text-muted-foreground">v3.0.0</span>
          </div>

          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link href="/docs" className="hover:text-foreground transition-colors">
              Documentation
            </Link>
            <Link href="/playground" className="hover:text-foreground transition-colors">
              Playground
            </Link>
            <a
              href="https://github.com/ospinajuanp/ospinajuanp-reset-css"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
          </div>

          <p className="text-sm text-muted-foreground">
            MIT License
          </p>
        </div>
      </div>
    </footer>
  )
}