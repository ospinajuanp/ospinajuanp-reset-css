'use client'

import { useState } from 'react'
import { Copy, Check, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

const INSTALL_COMMAND = 'npm install ospinajuanp-reset-css'

export function Hero() {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(INSTALL_COMMAND)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center rounded-full border px-3 py-1 text-sm">
            <span className="mr-2 inline-block h-2 w-2 rounded-full bg-green-500"></span>
            <span>v3.0.0 now available</span>
          </div>

          <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl">
            Modern CSS Reset for
            <span className="text-primary"> Professional Projects</span>
          </h1>

          <p className="mb-8 text-lg text-muted-foreground md:text-xl">
            A lightweight, type-safe CSS reset tool with 6 built-in themes.
            Eliminates browser inconsistencies so you can focus on building.
          </p>

          <div className="mb-8 flex flex-col items-center justify-center gap-4">
            <div className="flex items-center gap-2 rounded-lg border bg-card px-4 py-3 shadow-sm">
              <code className="font-mono text-sm text-foreground">{INSTALL_COMMAND}</code>
              <button
                onClick={copyToClipboard}
                className={cn(
                  'rounded-md p-2 transition-colors hover:bg-secondary',
                  copied && 'text-green-500'
                )}
                aria-label="Copy to clipboard"
              >
                {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              </button>
            </div>

            <div className="flex gap-3">
              <Link
                href="/docs"
                className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-sm hover:bg-primary/90 transition-colors"
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="/playground"
                className="inline-flex items-center justify-center rounded-md border bg-background px-6 py-3 text-sm font-medium shadow-sm hover:bg-secondary transition-colors"
              >
                Try Playground
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}