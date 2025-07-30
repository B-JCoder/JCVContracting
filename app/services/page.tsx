import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Hammer, ChefHat, Home, Wrench, PaintBucket, Sparkles, StepBackIcon as Stairs, TreePine } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ServicesPage() {
  const services = [
    {
      icon: Home,
      title: "Complete Home Renovation",
      description: "Full-scale home transformations from concept to completion",
      features: ["Structural modifications", "Room additions", "Open floor plans", "Modern updates"],
      image: "/images/kitchen-consultation.jpg",
    },
    {
      icon: ChefHat,
      title: "Kitchen Remodeling",
      description: "Transform your kitchen into a modern, functional space",
      features: ["Custom cabinetry", "Countertop installation", "Appliance integration", "Lighting design"],
      image: "/images/laundry-room.jpg",
    },
    {
      icon: Sparkles,
      title: "Bathroom Renovation",
      description: "Create luxurious, spa-like bathroom experiences",
      features: ["Tile work", "Fixture installation", "Vanity design", "Shower/tub renovation"],
      image: "/images/built-in-storage.jpg",
    },
    {
      icon: Wrench,
      title: "Basement Finishing",
      description: "Convert unused basement space into functional living areas",
      features: ["Waterproofing", "Insulation", "Flooring", "Entertainment rooms"],
      image: "/images/deck-project.jpg",
    },
    {
      icon: Hammer,
      title: "Custom Carpentry",
      description: "Handcrafted woodwork tailored to your specific needs",
      features: ["Built-in storage", "Custom shelving", "Trim work", "Furniture pieces"],
      image: "/images/built-in-storage.jpg",
    },
    {
      icon: PaintBucket,
      title: "Interior & Exterior Painting",
      description: "Professional painting services for complete home refresh",
      features: ["Color consultation", "Surface preparation", "Quality materials", "Clean finish"],
      image: "/images/laundry-room.jpg",
    },
    {
      icon: Stairs,
      title: "Deck & Patio Construction",
      description: "Outdoor living spaces for relaxation and entertainment",
      features: ["Custom deck design", "Quality materials", "Railings & stairs", "Weather protection"],
      image: "/images/deck-project.jpg",
    },
    {
      icon: TreePine,
      title: "Landscaping & Hardscaping",
      description: "Complete outdoor transformations and curb appeal enhancement",
      features: ["Garden design", "Walkways", "Retaining walls", "Outdoor lighting"],
      image: "/images/kitchen-consultation.jpg",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-teal-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl max-w-3xl mx-auto">
            From complete home renovations to custom carpentry, we offer comprehensive construction and remodeling
            services to transform your space.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="relative h-64 md:h-auto">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <CardHeader className="p-0 mb-4">
                      <service.icon className="h-12 w-12 text-teal-600 mb-3" />
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                      <CardDescription className="text-gray-600">{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="p-0">
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                            <div className="w-2 h-2 bg-teal-600 rounded-full mr-3"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Service Process</h2>
            <p className="text-xl text-gray-600">How we deliver exceptional results for every project</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Initial Consultation",
                description: "We meet to discuss your vision, needs, and budget for the project.",
              },
              {
                step: "2",
                title: "Design & Planning",
                description: "Our team creates detailed plans and provides accurate cost estimates.",
              },
              {
                step: "3",
                title: "Project Execution",
                description: "Skilled craftsmen bring your project to life with quality materials.",
              },
              {
                step: "4",
                title: "Final Walkthrough",
                description: "We ensure everything meets our high standards and your expectations.",
              },
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-teal-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Showcase */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">See Our Work in Action</h2>
            <p className="text-xl text-gray-600">Watch our craftsmen transform spaces</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
              <video controls className="w-full h-full object-cover" poster="/images/deck-project.jpg">
                <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/reelone-b8ULzE7RoVIEp66375bCm1Zc51U2yQ.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
              <video controls className="w-full h-full object-cover" poster="/images/built-in-storage.jpg">
                <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/reeltwo-utG7AbJjqnE1Xon3ay5XJXvYw77EEE.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
              <video controls className="w-full h-full object-cover" poster="/images/laundry-room.jpg">
                <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgc5-founjCksS5uvp2aeQahd0l6CXGwyy2.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-teal-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8">
            Contact us today for a free consultation and detailed estimate for your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="text-teal-600">
                Get Free Quote
              </Button>
            </Link>
            <Link href="/gallery">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-teal-600 bg-transparent"
              >
                View Portfolio
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
