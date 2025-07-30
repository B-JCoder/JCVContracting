import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Clock, Users, Sparkles, CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-teal-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">About JCV Contracting</h1>
          <p className="text-xl max-w-3xl mx-auto">
            With over 15 years of experience, we've been transforming homes and exceeding expectations with quality
            craftsmanship and innovative design solutions.
          </p>
        </div>
      </section>

      {/* Main About Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                JCV Contracting was founded with a simple mission: to transform houses into dream homes. What started as
                a small family business has grown into a trusted name in home renovation and construction, serving
                hundreds of satisfied clients across the region.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our team combines traditional craftsmanship with modern techniques and materials to deliver results that
                not only meet but exceed our clients' expectations. Every project is approached with attention to
                detail, creativity, and a commitment to quality that has become our signature.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                From kitchen renovations to complete home makeovers, we handle projects of all sizes with the same level
                of professionalism and dedication. Our goal is to make the renovation process as smooth and stress-free
                as possible while delivering exceptional results.
              </p>
              <div className="flex flex-wrap gap-4">
                <Badge variant="secondary" className="text-sm px-3 py-1">
                  Licensed & Insured
                </Badge>
                <Badge variant="secondary" className="text-sm px-3 py-1">
                  15+ Years Experience
                </Badge>
                <Badge variant="secondary" className="text-sm px-3 py-1">
                  500+ Projects Completed
                </Badge>
                <Badge variant="secondary" className="text-sm px-3 py-1">
                  100% Satisfaction Guarantee
                </Badge>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/kitchen-consultation.jpg"
                alt="JCV Contracting team consultation"
                width={800}
                height={600}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: "Quality Craftsmanship",
                description: "We take pride in delivering exceptional workmanship that stands the test of time.",
              },
              {
                icon: Clock,
                title: "Timely Delivery",
                description:
                  "We respect your time and complete projects within agreed timelines without compromising quality.",
              },
              {
                icon: Users,
                title: "Client-Focused",
                description: "Your vision and satisfaction are our top priorities throughout the entire process.",
              },
              {
                icon: Sparkles,
                title: "Innovation",
                description:
                  "We stay current with the latest trends and techniques to bring fresh ideas to your project.",
              },
            ].map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="bg-teal-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-teal-600" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">{value.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-xl text-gray-600">How we bring your vision to life</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Consultation & Planning",
                description:
                  "We start with a detailed consultation to understand your vision, needs, and budget. Our team will assess your space and provide expert recommendations.",
              },
              {
                step: "02",
                title: "Design & Approval",
                description:
                  "We create detailed plans and designs for your project, working closely with you to refine every detail until you're completely satisfied.",
              },
              {
                step: "03",
                title: "Construction & Completion",
                description:
                  "Our skilled craftsmen bring the design to life with precision and care, keeping you informed throughout the process until final completion.",
              },
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="bg-teal-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                  {process.step}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose JCV Contracting?</h2>
              <div className="space-y-4">
                {[
                  "Licensed and fully insured for your peace of mind",
                  "Over 15 years of experience in home renovation",
                  "Transparent pricing with no hidden costs",
                  "Quality materials and skilled craftsmanship",
                  "Excellent customer service and communication",
                  "100% satisfaction guarantee on all work",
                  "Local business with strong community ties",
                  "Free consultations and detailed estimates",
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-teal-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <Image
                  src="/images/built-in-storage.jpg"
                  alt="Custom built-in storage"
                  width={300}
                  height={200}
                  className="rounded-lg shadow-md"
                />
                <Image
                  src="/images/laundry-room.jpg"
                  alt="Modern laundry room"
                  width={300}
                  height={200}
                  className="rounded-lg shadow-md"
                />
              </div>
              <div className="space-y-4 mt-8">
                <Image
                  src="/images/deck-project.jpg"
                  alt="Custom deck construction"
                  width={300}
                  height={200}
                  className="rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8">Let's discuss your vision and create something amazing together.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-teal-600 hover:bg-teal-700">
                Get Free Consultation
              </Button>
            </Link>
            <Link href="/gallery">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-gray-900 bg-transparent"
              >
                View Our Work
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
