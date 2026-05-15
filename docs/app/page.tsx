import { Header } from '@/components/Landing/Header'
import { Hero } from '@/components/Landing/Hero'
import { Features } from '@/components/Landing/Features'
import { Quickstart } from '@/components/Landing/Quickstart'
import { Footer } from '@/components/Landing/Footer'

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