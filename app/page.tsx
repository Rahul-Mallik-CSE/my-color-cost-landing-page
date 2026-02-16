/** @format */

"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Instagram, Facebook, Download, Play } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-border">
        <nav className="max-w-625 mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="MyColourCost"
              width={140}
              height={40}
              className="h-10 w-auto"
            />
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#features"
              className="text-sm font-medium text-foreground hover:text-primary transition"
            >
              Features
            </a>
            <a
              href="#download"
              className="text-sm font-medium text-foreground hover:text-primary transition"
            >
              Download
            </a>
            <a
              href="#contact"
              className="text-sm font-medium text-foreground hover:text-primary transition"
            >
              Contact
            </a>
          </div>
          <Button>Get Started</Button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#ff6c95] to-[#e993fd] ">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-10 w-72 h-72 bg-accent rounded-full blur-3xl"></div>
          <div className="absolute -bottom-8 left-10 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance">
            Your Complete Hair Industry Platform
          </h1>
          <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto text-balance">
            We welcome all retailers, brands, brand reps, and wholesalers to
            sell their products on our one hub platform built for the
            hairdressing industry.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white rounded-full px-8 font-semibold"
            >
              Download App
            </Button>
            <Button
              size="lg"
              className="border-white text-white hover:bg-white/20 rounded-full px-8 font-semibold border border-white"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Retailer Dashboard Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 text-balance">
                Powerful Retailer Dashboard
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Manage your entire business from one centralized dashboard.
                Track orders, monitor sales, analyze performance metrics, and
                manage inventory all in real-time.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex gap-3 items-start">
                  <span className="text-primary text-xl mt-1">✓</span>
                  <span className="text-foreground">
                    Real-time sales analytics and reporting
                  </span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-primary text-xl mt-1">✓</span>
                  <span className="text-foreground">
                    Complete order management system
                  </span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-primary text-xl mt-1">✓</span>
                  <span className="text-foreground">
                    Inventory tracking and optimization
                  </span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-primary text-xl mt-1">✓</span>
                  <span className="text-foreground">
                    Payment management and reconciliation
                  </span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="rounded-xl overflow-hidden shadow-2xl border border-border">
                <Image
                  src="/retailer-dashboard.png"
                  alt="Retailer Dashboard"
                  width={500}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile App Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
              Manage On The Go
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Access your entire business from your phone. Our mobile app
              provides all the power of the dashboard in a beautiful,
              touch-optimized interface.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="p-6 border-2 border-border hover:border-primary transition">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="font-bold text-lg text-foreground mb-2">
                Shop Interface
              </h3>
              <p className="text-muted-foreground">
                Browse and manage products with an intuitive shop interface
                designed for quick navigation.
              </p>
            </Card>
            <Card className="p-6 border-2 border-border hover:border-primary transition">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="font-bold text-lg text-foreground mb-2">
                Live Analytics
              </h3>
              <p className="text-muted-foreground">
                Track your performance metrics and key insights in real-time
                directly from your mobile device.
              </p>
            </Card>
            <Card className="p-6 border-2 border-border hover:border-primary transition">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="font-bold text-lg text-foreground mb-2">
                Fast Sync
              </h3>
              <p className="text-muted-foreground">
                Instant synchronization between web and mobile platforms keeps
                your data always up-to-date.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
              Why Choose MyColourCost?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Built specifically for the hair industry with features that matter
              to retailers and wholesalers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 text-center border-2 border-border hover:shadow-lg transition">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="font-bold text-lg text-foreground mb-2">
                Cost Tracking
              </h3>
              <p className="text-sm text-muted-foreground">
                Track product costs and calculate profit margins instantly
              </p>
            </Card>
            <Card className="p-6 text-center border-2 border-border hover:shadow-lg transition">
              <div className="text-4xl mb-4">🏪</div>
              <h3 className="font-bold text-lg text-foreground mb-2">
                Multi-Channel
              </h3>
              <p className="text-sm text-muted-foreground">
                Manage multiple stores and locations from one platform
              </p>
            </Card>
            <Card className="p-6 text-center border-2 border-border hover:shadow-lg transition">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="font-bold text-lg text-foreground mb-2">
                Growth Tools
              </h3>
              <p className="text-sm text-muted-foreground">
                Insights and analytics to help grow your business
              </p>
            </Card>
            <Card className="p-6 text-center border-2 border-border hover:shadow-lg transition">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="font-bold text-lg text-foreground mb-2">
                Secure & Reliable
              </h3>
              <p className="text-sm text-muted-foreground">
                Enterprise-grade security for your business data
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section
        id="download"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/10 to-secondary/10"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 text-balance">
            Download MyColourCost Today
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Join thousands of retailers and wholesalers already using
            MyColourCost to streamline their business.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 font-semibold gap-2"
            >
              <Download className="w-5 h-5" />
              Download App
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <div className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="MyColourCost Logo"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </div>
            <span className="text-muted-foreground">or</span>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🔵</span>
              <span className="font-semibold text-foreground">Google Play</span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials/Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">5000+</div>
              <p className="text-lg text-muted-foreground">Active Retailers</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">₹100M+</div>
              <p className="text-lg text-muted-foreground">
                Transaction Volume
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <p className="text-lg text-muted-foreground">Platform Uptime</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#ff6c95] to-[#e993fd] text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-balance">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-xl mx-auto text-balance">
            Join the modern platform designed for the hair industry. Get started
            today and take control of your business.
          </p>
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-white rounded-full px-8 font-semibold"
          >
            Get Started Free
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-foreground text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="mb-4">
                <div className="text-2xl font-bold">MyColourCost</div>
              </div>
              <p className="text-white/70">
                Your complete platform for the hair industry
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-white/70">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Security
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Roadmap
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-white/70">
                <li>
                  <a href="#" className="hover:text-white transition">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/mycolourcost"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition"
                  aria-label="Instagram"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61583371237063"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition"
                  aria-label="Facebook"
                >
                  <Facebook className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8 flex flex-col sm:flex-row justify-between items-center text-white/60 text-sm">
            <p>&copy; 2024 MyColourCost. All rights reserved.</p>
            <div className="flex gap-6 mt-4 sm:mt-0">
              <a href="#" className="hover:text-white transition">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white transition">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
