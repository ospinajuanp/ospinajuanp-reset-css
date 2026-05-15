'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { docsConfig } from '@/lib/docs'
import { cn } from '@/lib/utils'

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-64 shrink-0 border-r bg-card/50 py-8 pr-6 hidden md:block">
      <nav className="space-y-8">
        {docsConfig.map((section) => (
          <div key={section.title}>
            <h4 className="mb-3 text-sm font-semibold">{section.title}</h4>
            <ul className="space-y-2">
              {section.items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      'block text-sm transition-colors hover:text-foreground',
                      pathname === item.href
                        ? 'text-foreground font-medium'
                        : 'text-muted-foreground'
                    )}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  )
}