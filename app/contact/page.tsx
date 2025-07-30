"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, Mail, MapPin, Clock, CheckCircle } from "lucide-react"

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically handle the form submission
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-teal-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Ready to transform your home? Get in touch with us today for a free consultation and detailed estimate for
            your project.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>
              <p className="text-lg text-gray-600 mb-8">
                We're here to help bring your vision to life. Contact us using any of the methods below, and we'll get
                back to you within 24 hours.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-teal-600 mr-4 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Phone</h3>
                    <p className="text-gray-600">(555) 123-4567</p>
                    <p className="text-sm text-gray-500">Call or text anytime</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-teal-600 mr-4 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">info@jcvcontracting.com</p>
                    <p className="text-sm text-gray-500">We respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-teal-600 mr-4 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Service Area</h3>
                    <p className="text-gray-600">Greater Metropolitan Area</p>
                    <p className="text-sm text-gray-500">Free estimates within 50 miles</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-teal-600 mr-4 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Business Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 7:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Saturday: 8:00 AM - 4:00 PM</p>
                    <p className="text-gray-600">Sunday: Emergency calls only</p>
                  </div>
                </div>
              </div>

              {/* Emergency Contact */}
              <Card className="mt-8 border-red-200 bg-red-50">
                <CardHeader>
                  <CardTitle className="text-red-800">Emergency Services</CardTitle>
                  <CardDescription className="text-red-600">
                    For urgent repairs and emergencies, call us 24/7 at (555) 123-4567
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>

            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle>Request a Free Quote</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you with a detailed estimate.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
                    <p className="text-gray-600">We've received your request and will contact you within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                          First Name *
                        </label>
                        <Input id="firstName" required placeholder="John" />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                          Last Name *
                        </label>
                        <Input id="lastName" required placeholder="Doe" />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <Input id="email" type="email" required placeholder="john@example.com" />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <Input id="phone" type="tel" required placeholder="(555) 123-4567" />
                    </div>

                    <div>
                      <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">
                        Project Type
                      </label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select project type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="kitchen">Kitchen Renovation</SelectItem>
                          <SelectItem value="bathroom">Bathroom Renovation</SelectItem>
                          <SelectItem value="basement">Basement Finishing</SelectItem>
                          <SelectItem value="deck">Deck Construction</SelectItem>
                          <SelectItem value="carpentry">Custom Carpentry</SelectItem>
                          <SelectItem value="painting">Painting Services</SelectItem>
                          <SelectItem value="full-renovation">Full Home Renovation</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                        Estimated Budget
                      </label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-10k">Under $10,000</SelectItem>
                          <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                          <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                          <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                          <SelectItem value="over-100k">Over $100,000</SelectItem>
                          <SelectItem value="not-sure">Not sure yet</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
                        Desired Timeline
                      </label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="When would you like to start?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="asap">As soon as possible</SelectItem>
                          <SelectItem value="1-month">Within 1 month</SelectItem>
                          <SelectItem value="3-months">Within 3 months</SelectItem>
                          <SelectItem value="6-months">Within 6 months</SelectItem>
                          <SelectItem value="planning">Just planning ahead</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Project Details *
                      </label>
                      <Textarea
                        id="message"
                        required
                        placeholder="Please describe your project in detail. Include any specific requirements, preferences, or questions you have..."
                        rows={5}
                      />
                    </div>

                    <div>
                      <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                        Property Address
                      </label>
                      <Input id="address" placeholder="123 Main St, City, State 12345" />
                    </div>

                    <Button type="submit" className="w-full bg-teal-600 hover:bg-teal-700 text-lg py-3">
                      Request Free Quote
                    </Button>

                    <p className="text-sm text-gray-500 text-center">
                      By submitting this form, you agree to be contacted by JCV Contracting regarding your project.
                    </p>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Common questions about our services and process</p>
          </div>

          <div className="space-y-8">
            {[
              {
                question: "How long does a typical renovation project take?",
                answer:
                  "Project timelines vary depending on scope and complexity. Kitchen renovations typically take 3-6 weeks, bathroom renovations 2-4 weeks, and full home renovations can take 2-6 months. We provide detailed timelines during the planning phase.",
              },
              {
                question: "Do you provide free estimates?",
                answer:
                  "Yes! We offer free, no-obligation consultations and estimates for all projects. We'll visit your property, discuss your vision, and provide a detailed written estimate within 48 hours.",
              },
              {
                question: "Are you licensed and insured?",
                answer:
                  "Absolutely. JCV Contracting is fully licensed, bonded, and insured. We carry comprehensive liability insurance and workers' compensation coverage for your peace of mind.",
              },
              {
                question: "Do you handle permits and inspections?",
                answer:
                  "Yes, we handle all necessary permits and coordinate inspections as required by local building codes. This is included in our project management services.",
              },
              {
                question: "What is your payment schedule?",
                answer:
                  "We typically work with a payment schedule tied to project milestones. No money is required upfront - we only ask for payment as work progresses and milestones are completed.",
              },
              {
                question: "Do you offer warranties on your work?",
                answer:
                  "Yes, we stand behind our work with comprehensive warranties. We offer a 2-year warranty on workmanship and pass through manufacturer warranties on all materials and fixtures.",
              },
            ].map((faq, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Service Area</h2>
            <p className="text-xl text-gray-600">We proudly serve the greater metropolitan area</p>
          </div>

          <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-16 w-16 text-teal-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Service Area Map</h3>
              <p className="text-gray-600">Interactive map coming soon</p>
              <p className="text-sm text-gray-500 mt-2">Currently serving within 50 miles of the metro area</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
