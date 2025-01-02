import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Features from "@/components/Features"
import Process from "@/components/Process"
import CTA from "@/components/CTA"
import CorporateSection from "@/components/CorporateSection"
import Footer from "@/components/Footer"
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Features />
        <Process />
        <CTA />
        <CorporateSection />
      </main>
      <Footer />
    </div>
  )
}

