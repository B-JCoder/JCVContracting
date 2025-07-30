"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function VideoHero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover z-0">
        <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/reelone-b8ULzE7RoVIEp66375bCm1Zc51U2yQ.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">Breathing New Life Into Your Home</h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200">
          From kitchen makeovers to full home remodeling, we bring your vision to life.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact">
            <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-lg px-8 py-4">
              Get a Free Quote
            </Button>
          </Link>
          <Link href="/contact">
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-gray-900 text-lg px-8 py-4 bg-transparent"
            >
              Book a Consultation
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
