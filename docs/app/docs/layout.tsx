import { Header } from '@/components/Landing/Header'
import { Sidebar } from '@/components/Docs/Sidebar'

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