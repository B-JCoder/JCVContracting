"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { X, Play } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function GalleryPage() {
  const [selectedMedia, setSelectedMedia] = useState<any>(null)
  const [filter, setFilter] = useState("all")

  const projects = [
    {
      id: 1,
      title: "Custom Deck Construction",
      category: "outdoor",
      type: "image",
      src: "/images/deck-project.jpg",
      description: "Beautiful custom deck with quality cedar construction and professional finishing.",
    },
    {
      id: 2,
      title: "Built-in Storage Solutions",
      category: "carpentry",
      type: "image",
      src: "/images/built-in-storage.jpg",
      description: "Custom built-in storage maximizing space with modern design and functionality.",
    },
    {
      id: 3,
      title: "Modern Laundry Room",
      category: "renovation",
      type: "image",
      src: "/images/laundry-room.jpg",
      description: "Complete laundry room renovation with modern fixtures and efficient layout.",
    },
    {
      id: 4,
      title: "Kitchen Consultation",
      category: "kitchen",
      type: "image",
      src: "/images/kitchen-consultation.jpg",
      description: "Professional kitchen design consultation and planning process.",
    },
    {
      id: 5,
      title: "Construction Process",
      category: "renovation",
      type: "video",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/reelone-b8ULzE7RoVIEp66375bCm1Zc51U2yQ.mp4",
      poster: "/images/deck-project.jpg",
      description: "Time-lapse of our construction and renovation process.",
    },
    {
      id: 6,
      title: "Carpentry Work",
      category: "carpentry",
      type: "video",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/reeltwo-utG7AbJjqnE1Xon3ay5XJXvYw77EEE.mp4",
      poster: "/images/built-in-storage.jpg",
      description: "Detailed carpentry work and custom woodworking projects.",
    },
    {
      id: 7,
      title: "Home Transformation",
      category: "renovation",
      type: "video",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgc5-founjCksS5uvp2aeQahd0l6CXGwyy2.mp4",
      poster: "/images/laundry-room.jpg",
      description: "Complete home transformation from start to finish.",
    },
  ]

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "renovation", label: "Renovations" },
    { id: "kitchen", label: "Kitchens" },
    { id: "carpentry", label: "Carpentry" },
    { id: "outdoor", label: "Outdoor" },
  ]

  const filteredProjects = filter === "all" ? projects : projects.filter((project) => project.category === filter)

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-teal-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Gallery</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Explore our portfolio of completed projects and see the quality craftsmanship that sets JCV Contracting
            apart.
          </p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={filter === category.id ? "default" : "outline"}
                onClick={() => setFilter(category.id)}
                className={filter === category.id ? "bg-teal-600 hover:bg-teal-700" : ""}
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card
                key={project.id}
                className="overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                onClick={() => setSelectedMedia(project)}
              >
                <div className="relative aspect-video">
                  {project.type === "image" ? (
                    <Image
                      src={project.src || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                  ) : (
                    <div className="relative">
                      <Image
                        src={project.poster || "/images/deck-project.jpg"}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                        <Play className="h-16 w-16 text-white" />
                      </div>
                    </div>
                  )}
                  <Badge className="absolute top-4 left-4 bg-teal-600">
                    {categories.find((cat) => cat.id === project.category)?.label}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedMedia && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            <Button
              variant="ghost"
              size="sm"
              className="absolute -top-12 right-0 text-white hover:text-gray-300"
              onClick={() => setSelectedMedia(null)}
            >
              <X className="h-6 w-6" />
            </Button>
            {selectedMedia.type === "image" ? (
              <Image
                src={selectedMedia.src || "/placeholder.svg"}
                alt={selectedMedia.title}
                width={1200}
                height={800}
                className="w-full h-auto rounded-lg"
              />
            ) : (
              <video controls autoPlay className="w-full h-auto rounded-lg">
                <source src={selectedMedia.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
            <div className="mt-4 text-white text-center">
              <h3 className="text-2xl font-bold mb-2">{selectedMedia.title}</h3>
              <p className="text-gray-300">{selectedMedia.description}</p>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-4">Inspired by Our Work?</h2>
          <p className="text-xl mb-8">
            Let's create something amazing for your home. Contact us for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-teal-600 hover:bg-teal-700">
                Start Your Project
              </Button>
            </Link>
            <Link href="/services">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-gray-900 bg-transparent"
              >
                View Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
