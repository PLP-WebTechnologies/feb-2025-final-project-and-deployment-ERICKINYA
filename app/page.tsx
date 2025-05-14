import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import ImageSlider from "@/components/image-slider"
import FeatureCard from "@/components/feature-card"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-gray-50 to-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900">
                Create beautiful experiences that last
              </h1>
              <p className="text-xl text-gray-600">
                We help businesses build modern, responsive websites that engage users and drive conversions.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <Link href="/contact">
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/about">Learn More</Link>
                </Button>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
                alt="Modern website design"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Image Slider Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Our Recent Projects</h2>
          <ImageSlider />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              title="Responsive Design"
              description="Websites that look great on any device, from desktop to mobile."
              icon="Smartphone"
            />
            <FeatureCard
              title="Modern UI/UX"
              description="Beautiful, intuitive interfaces that enhance user experience."
              icon="Palette"
            />
            <FeatureCard
              title="Performance Optimization"
              description="Fast-loading pages that keep users engaged."
              icon="Zap"
            />
            <FeatureCard
              title="SEO Friendly"
              description="Built with search engines in mind to improve visibility."
              icon="Search"
            />
            <FeatureCard title="Accessibility" description="Inclusive design that works for everyone." icon="Users" />
            <FeatureCard
              title="Ongoing Support"
              description="We're here to help long after your site launches."
              icon="HeadphonesIcon"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to get started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's work together to create a website that helps your business grow.
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">Contact Us Today</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
