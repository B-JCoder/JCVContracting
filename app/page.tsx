import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Hammer,
  ChefHat,
  Home,
  Wrench,
  PaintBucket,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import VideoHero from "@/components/video-hero"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Video Background */}
      <VideoHero />

      {/* About Us Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">About JCV Contracting</h2>
              <p className="text-lg text-gray-600 mb-6">
                JCV Contracting has been transforming homes for over 15 years, combining quality craftsmanship with
                creative designs. Our goal is to create beautiful, functional spaces that you and your family can enjoy
                for years to come.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                From kitchen renovations to custom carpentry, our team handles it all. We're committed to quality,
                client satisfaction, and the transformational impact of our services. Our certified professionals bring
                expertise in construction, design, and project management to every job.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <Badge variant="secondary" className="text-sm px-3 py-1">
                  15+ Years Experience
                </Badge>
                <Badge variant="secondary" className="text-sm px-3 py-1">
                  Licensed & Insured
                </Badge>
                <Badge variant="secondary" className="text-sm px-3 py-1">
                  500+ Projects Completed
                </Badge>
              </div>
              <Link href="/about">
                <Button className="bg-teal-600 hover:bg-teal-700">Learn More About Us</Button>
              </Link>
            </div>
            <div className="relative">
              <Image
                src="/images/kitchen-consultation.jpg"
                alt="JCV Contracting consultation"
                width={800}
                height={600}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer comprehensive home improvement services to transform your space into the home of your dreams.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Home,
                title: "Home Renovation & Remodeling",
                description: "Complete home transformations from concept to completion",
              },
              {
                icon: Sparkles,
                title: "Interior Design & Makeovers",
                description: "Creative design solutions that reflect your personal style",
              },
              {
                icon: ChefHat,
                title: "Kitchen & Bathroom Upgrades",
                description: "Modern, functional spaces that add value to your home",
              },
              {
                icon: Wrench,
                title: "Basement Finishing",
                description: "Transform unused space into functional living areas",
              },
              {
                icon: Hammer,
                title: "Custom Carpentry & Woodwork",
                description: "Handcrafted solutions tailored to your specific needs",
              },
              {
                icon: PaintBucket,
                title: "Painting & Wall Treatments",
                description: "Professional painting services for interior and exterior",
              },
            ].map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <service.icon className="h-12 w-12 text-teal-600 mb-4" />
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/services">
              <Button
                size="lg"
                variant="outline"
                className="border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white bg-transparent"
              >
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-600">See some of our recent transformations</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/images/deck-project.jpg"
                alt="Custom Deck Construction"
                width={600}
                height={400}
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="text-xl font-bold mb-2">Custom Deck Construction</h3>
                  <p className="text-sm">Professional deck building with quality materials</p>
                </div>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/images/built-in-storage.jpg"
                alt="Built-in Storage Solutions"
                width={600}
                height={400}
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="text-xl font-bold mb-2">Built-in Storage Solutions</h3>
                  <p className="text-sm">Custom carpentry for maximum space utilization</p>
                </div>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/images/laundry-room.jpg"
                alt="Laundry Room Renovation"
                width={600}
                height={400}
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="text-xl font-bold mb-2">Laundry Room Renovation</h3>
                  <p className="text-sm">Modern utility spaces with style and function</p>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link href="/gallery">
              <Button size="lg" className="bg-teal-600 hover:bg-teal-700">
                View Full Gallery
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Video Reels Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">See Our Work in Action</h2>
            <p className="text-xl text-gray-600">Watch our craftsmen transform spaces with quality workmanship</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg group">
              <video
                controls
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                poster="/images/deck-project.jpg"
              >
                <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/reelone-b8ULzE7RoVIEp66375bCm1Zc51U2yQ.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded text-sm">
                Construction Process
              </div>
            </div>
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg group">
              <video
                controls
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                poster="/images/built-in-storage.jpg"
              >
                <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/reeltwo-utG7AbJjqnE1Xon3ay5XJXvYw77EEE.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded text-sm">
                Custom Carpentry
              </div>
            </div>
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg group">
              <video
                controls
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                poster="/images/laundry-room.jpg"
              >
                <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgc5-founjCksS5uvp2aeQahd0l6CXGwyy2.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded text-sm">
                Home Renovation
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link href="/gallery">
              <Button size="lg" className="bg-teal-600 hover:bg-teal-700">
                View Full Portfolio
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-6">Get Your Free Quote Today</h2>
              <p className="text-xl text-gray-300 mb-8">
                Ready to transform your home? Fill out our quick form and we'll get back to you within 24 hours with a
                detailed estimate.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-teal-400 mr-3" />
                  <div>
                    <span className="text-lg font-semibold">Call Us: (555) 123-4567</span>
                    <p className="text-gray-400 text-sm">Available 7 days a week</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-teal-400 mr-3" />
                  <div>
                    <span className="text-lg font-semibold">info@jcvcontracting.com</span>
                    <p className="text-gray-400 text-sm">We respond within 24 hours</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 text-teal-400 mr-3" />
                  <div>
                    <span className="text-lg font-semibold">Greater Metro Area</span>
                    <p className="text-gray-400 text-sm">Free estimates within 50 miles</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-teal-600 rounded-lg">
                <h3 className="text-xl font-bold mb-2">Why Choose JCV Contracting?</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                    15+ years of experience
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                    Licensed & fully insured
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                    100% satisfaction guarantee
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                    Free consultations & estimates
                  </li>
                </ul>
              </div>
            </div>

            <Card className="bg-white text-gray-900">
              <CardHeader>
                <CardTitle className="text-2xl">Request Your Free Quote</CardTitle>
                <CardDescription>Fill out the form below and we'll contact you within 24 hours.</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="home-name" className="block text-sm font-medium mb-2">
                        Full Name *
                      </label>
                      <Input id="home-name" placeholder="Your full name" required />
                    </div>
                    <div>
                      <label htmlFor="home-phone" className="block text-sm font-medium mb-2">
                        Phone Number *
                      </label>
                      <Input id="home-phone" placeholder="(555) 123-4567" required />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="home-email" className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <Input id="home-email" type="email" placeholder="your.email@example.com" required />
                  </div>
                  <div>
                    <label htmlFor="home-service" className="block text-sm font-medium mb-2">
                      Service Needed
                    </label>
                    <select
                      id="home-service"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                    >
                      <option value="">Select a service</option>
                      <option value="kitchen">Kitchen Renovation</option>
                      <option value="bathroom">Bathroom Renovation</option>
                      <option value="basement">Basement Finishing</option>
                      <option value="deck">Deck Construction</option>
                      <option value="carpentry">Custom Carpentry</option>
                      <option value="painting">Painting Services</option>
                      <option value="full-renovation">Full Home Renovation</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="home-project" className="block text-sm font-medium mb-2">
                      Project Details *
                    </label>
                    <Textarea id="home-project" placeholder="Tell us about your project..." rows={4} required />
                  </div>
                  <div>
                    <label htmlFor="home-timeline" className="block text-sm font-medium mb-2">
                      When would you like to start?
                    </label>
                    <select
                      id="home-timeline"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                    >
                      <option value="">Select timeline</option>
                      <option value="asap">As soon as possible</option>
                      <option value="1-month">Within 1 month</option>
                      <option value="3-months">Within 3 months</option>
                      <option value="6-months">Within 6 months</option>
                      <option value="planning">Just planning ahead</option>
                    </select>
                  </div>
                  <Button type="submit" className="w-full bg-teal-600 hover:bg-teal-700 text-lg py-3">
                    Get My Free Quote
                  </Button>
                  <p className="text-xs text-gray-500 text-center">
                    By submitting this form, you agree to be contacted regarding your project. No spam, guaranteed.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Image src="/images/logo.jpg" alt="JCV Contracting Logo" width={32} height={32} className="rounded" />
                <span className="ml-2 text-xl font-bold">JCV Contracting</span>
              </div>
              <p className="text-gray-400 mb-4">
                Transforming homes with quality craftsmanship and creative design solutions.
              </p>
              <div className="flex space-x-4">
                <Facebook className="h-6 w-6 text-gray-400 hover:text-teal-400 cursor-pointer" />
                <Instagram className="h-6 w-6 text-gray-400 hover:text-teal-400 cursor-pointer" />
                <Linkedin className="h-6 w-6 text-gray-400 hover:text-teal-400 cursor-pointer" />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-400 hover:text-teal-400">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-teal-400">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-gray-400 hover:text-teal-400">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/gallery" className="text-gray-400 hover:text-teal-400">
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-400 hover:text-teal-400">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <span className="text-gray-400">Home Renovation</span>
                </li>
                <li>
                  <span className="text-gray-400">Kitchen Upgrades</span>
                </li>
                <li>
                  <span className="text-gray-400">Bathroom Remodeling</span>
                </li>
                <li>
                  <span className="text-gray-400">Custom Carpentry</span>
                </li>
                <li>
                  <span className="text-gray-400">Interior Design</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Phone className="h-4 w-4 text-teal-400 mr-2" />
                  <span className="text-gray-400">+1 437-982-0419</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-4 w-4 text-teal-400 mr-2" />
                  <span className="text-gray-400">jezreelcapsuyen@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 text-teal-400 mr-2" />
                  <span className="text-gray-400">Toronto, ON, Canada, Ontario</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© {new Date().getFullYear()} JCV Contracting. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-teal-400 text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-teal-400 text-sm">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
