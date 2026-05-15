'use client'

import { Copy, Check } from 'lucide-react'
import { useState } from 'react'
import { cn } from '@/lib/utils'

interface CodeBlockProps {
  code: string
  language?: string
  filename?: string
}

export function CodeBlock({ code, language = 'typescript', filename }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="group relative rounded-lg border overflow-hidden">
      {filename && (
        <div className="flex items-center justify-between border-b px-4 py-2 text-xs text-muted-foreground bg-muted/50">
          <span>{filename}</span>
          <span>{language}</span>
        </div>
      )}
      <div className="relative bg-[#1e1e1e] dark:bg-[#1e1e1e]">
        <pre className="overflow-x-auto p-4 text-sm">
          <code className="font-mono text-gray-100">
            {code}
          </code>
        </pre>
        <button
          onClick={copyToClipboard}
          className={cn(
            'absolute right-3 top-3 rounded-md p-2 text-xs opacity-0 transition-opacity group-hover:opacity-100',
            copied ? 'text-green-400' : 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white'
          )}
          aria-label="Copy code"
        >
          {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
        </button>
      </div>
    </div>
  )
}