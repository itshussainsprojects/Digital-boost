"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Menu,
  X,
  ArrowRight,
  Play,
  Star,
  Target,
  Users,
  Sparkles,
  Rocket,
  PenTool,
  Search,
  Mail,
  Code,
  ArrowUpRight,
  Zap,
  BarChart3,
  Palette,
  Shield,
  Clock,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { AnimatedCounter } from "@/components/animated-counter"
import { FloatingElements } from "@/components/floating-elements"
import { InteractiveCursor } from "@/components/interactive-cursor"
import { ParticleSystem } from "@/components/particle-system"
import { CareersSection } from "@/components/careers-section"
import { useGSAPAnimations } from "@/components/gsap-animations"

export default function DigitalBoostWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [sparklePositions, setSparklePositions] = useState<Array<{left: number, top: number, delay: number}>>([])
  const { heroRef, aboutRef, servicesRef } = useGSAPAnimations()

  // Generate sparkle positions on client side to avoid hydration mismatch
  useEffect(() => {
    const positions = Array.from({ length: 8 }, () => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 2,
    }))
    setSparklePositions(positions)
  }, [])

  useEffect(() => {
    const handleScroll = () => {

      // Update active section based on scroll position
      const sections = ["home", "about", "services", "work", "careers", "contact"]
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (currentSection) setActiveSection(currentSection)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const services = [
    {
      icon: Search,
      title: "SEO Mastery",
      description: "Dominate search results with data-driven SEO strategies that deliver sustainable organic growth",
      color: "from-violet-500 to-purple-600",
      stats: "300% avg growth",
      features: ["Technical SEO", "Content Strategy", "Link Building"],
    },
    {
      icon: BarChart3,
      title: "PPC Excellence",
      description: "Maximize ROI with precision-targeted campaigns across Google, Meta, and emerging platforms",
      color: "from-blue-500 to-cyan-500",
      stats: "500% ROAS",
      features: ["Google Ads", "Meta Ads", "Performance Max"],
    },
    {
      icon: Users,
      title: "Social Domination",
      description: "Build engaged communities and drive conversions across all major social platforms",
      color: "from-pink-500 to-rose-500",
      stats: "10M+ reach",
      features: ["Content Creation", "Community Management", "Influencer Marketing"],
    },
    {
      icon: PenTool,
      title: "Content Strategy",
      description: "Create compelling narratives that resonate with your audience and drive meaningful engagement",
      color: "from-emerald-500 to-teal-500",
      stats: "95% engagement",
      features: ["Video Production", "Copywriting", "Brand Storytelling"],
    },
    {
      icon: Palette,
      title: "Brand Identity",
      description: "Craft distinctive brand experiences that differentiate you in competitive markets",
      color: "from-orange-500 to-red-500",
      stats: "Brand recognition +400%",
      features: ["Logo Design", "Brand Guidelines", "Visual Identity"],
    },
    {
      icon: Code,
      title: "Web Innovation",
      description: "Build high-converting websites and applications that deliver exceptional user experiences",
      color: "from-indigo-500 to-purple-500",
      stats: "Conversion +250%",
      features: ["UI/UX Design", "Development", "Optimization"],
    },
  ]

  const portfolioItems = [
    {
      title: "TechCorp Revolution",
      category: "Complete Digital Transformation",
      image: "/di2.png",
      results: "1200% ROI",
      description: "Transformed a struggling startup into an industry leader through comprehensive digital strategy",
      metrics: [
        { label: "Revenue Growth", value: "1200%" },
        { label: "Lead Generation", value: "850%" },
        { label: "Brand Awareness", value: "400%" },
      ],
      tags: ["SEO", "PPC", "Brand Strategy"],
    },
    {
      title: "Fashion Forward",
      category: "E-commerce Excellence",
      image: "/d3.png",
      results: "€2.5M Revenue",
      description: "Luxury fashion brand's digital breakthrough with innovative social commerce strategy",
      metrics: [
        { label: "Online Sales", value: "€2.5M" },
        { label: "Social Engagement", value: "500%" },
        { label: "Customer Retention", value: "75%" },
      ],
      tags: ["Social Media", "E-commerce", "Influencer Marketing"],
    },
    {
      title: "FinTech Disruption",
      category: "Brand & Growth Strategy",
      image: "/d4.png",
      results: "50K+ Users",
      description: "Revolutionary fintech app launch with viral marketing campaign and user acquisition strategy",
      metrics: [
        { label: "User Acquisition", value: "50K+" },
        { label: "App Downloads", value: "100K+" },
        { label: "Market Share", value: "15%" },
      ],
      tags: ["App Marketing", "Growth Hacking", "PR"],
    },
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechCorp",
      company: "TechCorp Inc.",
      content: "Digital Boost transformed our entire business. Their strategic approach and execution are unmatched.",
      avatar: "/e1.png",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Founder",
      company: "Fashion Forward",
      content: "The results speak for themselves. 2.5M in revenue in just 8 months. Incredible team!",
      avatar: "/d3.png",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "CMO",
      company: "FinTech Solutions",
      content: "Their innovative approach to digital marketing helped us disrupt an entire industry.",
      avatar: "/d4.png",
      rating: 5,
    },
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Interactive Cursor */}
      <InteractiveCursor />

      {/* Particle System */}
      <ParticleSystem />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-xl border-b border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-8xl">
          <div className="flex justify-between items-center h-16 lg:h-20 xl:h-24">
            {/* Logo */}
            <div className="text-xl lg:text-2xl xl:text-3xl font-bold font-poppins flex-shrink-0">
              <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Digital
              </span>
              <span className="text-white ml-1">Boost</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8 xl:space-x-12 2xl:space-x-16">
              {[
                { name: "Home", id: "home" },
                { name: "About", id: "about" },
                { name: "Services", id: "services" },
                { name: "Work", id: "work" },
                { name: "Careers", id: "careers" },
                { name: "Contact", id: "contact" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm xl:text-base 2xl:text-lg font-medium transition-all duration-300 relative group hover:scale-105 ${
                    activeSection === item.id ? "text-white" : "text-white/60 hover:text-white"
                  }`}
                >
                  {item.name}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 xl:h-1 bg-gradient-to-r from-violet-500 to-purple-500 transition-all duration-300 ${
                      activeSection === item.id ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </button>
              ))}
            </div>

            {/* CTA Button */}
            <Button
              onClick={() => scrollToSection("contact")}
              className="hidden lg:flex bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white border-0 px-6 xl:px-10 2xl:px-12 py-3 xl:py-4 rounded-full transition-all duration-300 hover:scale-105 text-sm xl:text-base 2xl:text-lg font-medium flex-shrink-0 shadow-lg shadow-violet-500/25"
            >
              Start Project
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors flex-shrink-0"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-500 ${
            isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden bg-black/95 backdrop-blur-xl`}
        >
          <div className="container mx-auto px-4 sm:px-6 py-6 space-y-4">
            {[
              { name: "Home", id: "home" },
              { name: "About", id: "about" },
              { name: "Services", id: "services" },
              { name: "Work", id: "work" },
              { name: "Careers", id: "careers" },
              { name: "Contact", id: "contact" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block text-lg font-medium text-white/70 hover:text-white transition-colors duration-300 font-poppins"
              >
                {item.name}
              </button>
            ))}
            <Button className="w-full bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white mt-6 py-3 text-base font-medium rounded-full transition-all duration-300">
              Start Project
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        ref={heroRef}
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-900/30 via-black to-purple-900/30" />

          {/* Floating Orbs */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 lg:w-96 lg:h-96 bg-violet-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 lg:w-96 lg:h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 lg:w-[600px] lg:h-[600px] bg-gradient-to-r from-violet-500/10 to-purple-500/10 rounded-full blur-3xl animate-spin-slow" />

          {/* Floating Elements */}
          <FloatingElements />
        </div>

        <div className="relative z-10 text-center w-full pt-20 lg:pt-24 xl:pt-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            {/* Badge */}
            <div className="mb-6 lg:mb-8">
              <Badge className="hero-badge bg-white/10 text-white border-white/20 px-4 lg:px-6 py-2 lg:py-3 text-sm backdrop-blur-sm font-medium">
                <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
                Award-Winning Digital Agency
              </Badge>
            </div>

            {/* Hero Title */}
            <div className="relative mb-6 lg:mb-8 xl:mb-12">
              <h1 className="relative z-10">
                {/* YOUR */}
                <div className="hero-title-1 block mb-2 lg:mb-4 xl:mb-6">
                  <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl 3xl:text-[12rem] font-black leading-[0.8] font-poppins bg-gradient-to-r from-white via-violet-200 to-purple-200 bg-clip-text text-transparent">
                    YOUR
                  </span>
                </div>

                {/* GROWTH */}
                <div className="hero-title-2 block mb-2 lg:mb-4 xl:mb-6 relative group">
                  <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[10rem] 3xl:text-[14rem] font-black leading-[0.8] font-poppins bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_200%]">
                    GROWTH
                  </span>
                  {/* Sparkle effects */}
                  {sparklePositions.length > 0 && (
                    <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                      {sparklePositions.map((position, i) => (
                        <div
                          key={i}
                          className="absolute w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100 animate-ping"
                          style={{
                            left: `${position.left}%`,
                            top: `${position.top}%`,
                            animationDelay: `${position.delay}s`,
                          }}
                        />
                      ))}
                    </div>
                  )}
                </div>

                {/* OUR MISSION */}
                <div className="hero-title-3 block">
                  <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl 3xl:text-[12rem] font-black leading-[0.8] font-poppins text-white/90">
                    OUR MISSION
                  </span>
                </div>
              </h1>
            </div>

            {/* Description */}
            <div className="hero-description mb-8 lg:mb-12 xl:mb-16">
              <p className="text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-white/70 max-w-5xl xl:max-w-6xl mx-auto leading-relaxed xl:leading-relaxed">
                We don't just create campaigns. We craft{" "}
                <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent font-semibold">
                  digital experiences
                </span>{" "}
                that transform businesses and build{" "}
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-semibold">
                  empires
                </span>{" "}
                in the digital realm.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="hero-buttons flex flex-col sm:flex-row gap-4 lg:gap-6 xl:gap-8 justify-center items-center mb-12 lg:mb-16 xl:mb-20">
              <Button
                onClick={() => scrollToSection("work")}
                className="w-full sm:w-auto bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white px-8 lg:px-12 xl:px-16 py-3 lg:py-4 xl:py-5 text-base lg:text-lg xl:text-xl rounded-full transition-all duration-300 hover:scale-105 group font-medium shadow-2xl shadow-violet-500/25"
              >
                <span className="flex items-center">
                  View Our Work
                  <ArrowRight className="ml-2 w-5 h-5 lg:w-6 lg:h-6 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>

              <Link
                // href="https://www.instagram.com/reel/C_chWv3Nvw1/"
                href="https://www.instagram.com/reel/C_JLeXoNNJZ/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button
                  variant="outline"
                  className="w-full sm:w-auto bg-transparent border-2 border-violet-500 text-white hover:bg-violet-500 px-8 lg:px-12 xl:px-16 py-3 lg:py-4 xl:py-5 text-base lg:text-lg xl:text-xl rounded-full transition-all duration-300 hover:scale-105 group font-medium backdrop-blur-sm"
                >
                  <span className="flex items-center">
                    <Play className="mr-2 w-5 h-5 lg:w-6 lg:h-6 group-hover:scale-110 transition-transform" />
                    Watch Reel
                  </span>
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="hero-stats grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 xl:gap-8 max-w-6xl xl:max-w-7xl mx-auto">
              {[
                { number: 500, suffix: "+", label: "Projects" },
                { number: 98, suffix: "%", label: "Success Rate" },
                { number: 2.5, suffix: "B+", label: "Revenue" },
                { number: 50, suffix: "+", label: "Awards" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl lg:rounded-2xl p-4 lg:p-6 xl:p-8 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-white/20 hover:shadow-2xl hover:shadow-violet-500/10 group">
                    <div className="text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-black bg-gradient-to-r from-white to-violet-200 bg-clip-text text-transparent mb-1 lg:mb-2 font-poppins group-hover:scale-110 transition-transform duration-300">
                      <AnimatedCounter end={stat.number} suffix={stat.suffix} />
                    </div>
                    <div className="text-white/60 text-sm lg:text-base xl:text-lg font-medium">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        ref={aboutRef}
        id="about"
        className="py-16 lg:py-24 relative"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-12 lg:mb-20">
            <Badge className="bg-violet-500/10 text-violet-400 border-violet-500/20 mb-6 text-sm font-medium">
              About Us
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-black mb-6 lg:mb-8 font-poppins">
              <span className="bg-gradient-to-r from-white to-violet-200 bg-clip-text text-transparent">We Are</span>
              <br />
              <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                Digital Innovators
              </span>
            </h2>
            <p className="text-base md:text-lg lg:text-xl xl:text-2xl text-white/70 max-w-4xl mx-auto leading-relaxed">
              We don't follow trends. We create them. Our mission is to transform businesses through cutting-edge
              digital strategies that deliver measurable results.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <div className="space-y-4 sm:space-y-6 lg:space-y-8">
              {[
                {
                  icon: Target,
                  title: "Our Mission",
                  description:
                    "To empower businesses with innovative digital strategies that drive sustainable growth and market dominance.",
                },
                {
                  icon: Zap,
                  title: "Our Approach",
                  description:
                    "Data-driven creativity combined with cutting-edge technology to deliver results that exceed expectations.",
                },
                {
                  icon: Shield,
                  title: "Our Promise",
                  description:
                    "Transparent partnerships, measurable outcomes, and unwavering commitment to your success.",
                },
              ].map((item, index) => (
                <div key={index} className="animate-on-scroll flex items-start space-x-3 sm:space-x-4 lg:space-x-6">
                  <div className="bg-gradient-to-r from-violet-500 to-purple-500 p-2 sm:p-3 lg:p-4 rounded-lg sm:rounded-xl lg:rounded-2xl flex-shrink-0">
                    <item.icon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white mb-1 sm:mb-2 lg:mb-3 font-poppins">
                      {item.title}
                    </h3>
                    <p className="text-white/70 leading-relaxed text-sm sm:text-base lg:text-lg">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="animate-on-scroll relative">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-purple-500/20 rounded-xl sm:rounded-2xl lg:rounded-3xl blur-xl" />
              <Image
                src="/di 1.png?height=600&width=800"
                alt="Digital Boost Team"
                width={800}
                height={600}
                className="relative rounded-xl sm:rounded-2xl lg:rounded-3xl shadow-2xl w-full h-auto"
              />
              <div className="absolute -bottom-2 sm:-bottom-4 lg:-bottom-6 -right-2 sm:-right-4 lg:-right-6 bg-gradient-to-r from-violet-600 to-purple-600 text-white p-3 sm:p-4 lg:p-6 rounded-lg sm:rounded-xl lg:rounded-2xl shadow-lg">
                <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black font-poppins">
                  <AnimatedCounter end={500} suffix="+" />
                </div>
                <div className="text-violet-200 text-xs sm:text-sm lg:text-base font-medium">Successful Projects</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        ref={servicesRef}
        id="services"
        className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 relative px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20">
            <Badge className="animate-on-scroll bg-purple-500/10 text-purple-400 border-purple-500/20 mb-3 sm:mb-4 lg:mb-6 text-xs sm:text-sm font-medium">
              Our Expertise
            </Badge>
            <h2 className="animate-on-scroll text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-black mb-4 sm:mb-6 lg:mb-8 font-poppins">
              <span className="bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                Services That
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Dominate
              </span>
            </h2>
            <p className="animate-on-scroll text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white/70 max-w-4xl mx-auto leading-relaxed">
              Comprehensive digital solutions designed to accelerate your growth and establish market leadership.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="service-card bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105 group cursor-pointer overflow-hidden"
                data-cursor="pointer"
              >
                <CardContent className="p-4 sm:p-6 lg:p-8">
                  <div
                    className={`w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 rounded-lg sm:rounded-xl lg:rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-3 sm:mb-4 lg:mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <service.icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-white" />
                  </div>

                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 sm:mb-3 lg:mb-4 group-hover:text-violet-300 transition-colors font-poppins">
                    {service.title}
                  </h3>

                  <p className="text-white/70 mb-3 sm:mb-4 lg:mb-6 leading-relaxed text-sm sm:text-base">
                    {service.description}
                  </p>

                  <div className="space-y-2 sm:space-y-3 lg:space-y-4 mb-3 sm:mb-4 lg:mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-xs sm:text-sm text-white/60">
                        <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full mr-2 sm:mr-3" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <Badge className="bg-gradient-to-r from-violet-500/20 to-purple-500/20 text-violet-300 border-violet-500/30 text-xs sm:text-sm">
                      {service.stats}
                    </Badge>
                    <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white/50 group-hover:text-white group-hover:scale-110 transition-all duration-300" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section
        id="work"
        className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 bg-gradient-to-b from-transparent to-violet-900/10 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20">
            <Badge className="animate-on-scroll bg-pink-500/10 text-pink-400 border-pink-500/20 mb-3 sm:mb-4 lg:mb-6 text-xs sm:text-sm font-medium">
              Our Work
            </Badge>
            <h2 className="animate-on-scroll text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-black mb-4 sm:mb-6 lg:mb-8 font-poppins">
              <span className="bg-gradient-to-r from-white to-pink-200 bg-clip-text text-transparent">
                Case Studies
              </span>
              <br />
              <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                That Inspire
              </span>
            </h2>
          </div>

          <div className="space-y-12 sm:space-y-16 md:space-y-20 lg:space-y-24 xl:space-y-32">
            {portfolioItems.map((item, index) => (
              <div
                key={index}
                className={`portfolio-item grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-16 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <div className="relative group cursor-pointer" data-cursor="pointer">
                    <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-purple-500/20 rounded-xl sm:rounded-2xl lg:rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                    <div className="relative overflow-hidden rounded-xl sm:rounded-2xl lg:rounded-3xl">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={1200}
                        height={800}
                        className="w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  </div>
                </div>

                <div className={`${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                  <Badge className="bg-white/10 text-white border-white/20 mb-3 sm:mb-4 lg:mb-6 text-xs sm:text-sm font-medium">
                    {item.category}
                  </Badge>

                  <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-white mb-3 sm:mb-4 lg:mb-6 font-poppins">
                    {item.title}
                  </h3>

                  <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/70 mb-4 sm:mb-6 lg:mb-8 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="grid grid-cols-3 gap-3 sm:gap-4 lg:gap-6 mb-4 sm:mb-6 lg:mb-8">
                    {item.metrics.map((metric, idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-black bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent font-poppins">
                          {metric.value}
                        </div>
                        <div className="text-white/50 text-xs sm:text-sm font-medium">{metric.label}</div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 sm:gap-3 mb-4 sm:mb-6 lg:mb-8">
                    {item.tags.map((tag, idx) => (
                      <Badge
                        key={idx}
                        className="bg-violet-500/20 text-violet-300 border-violet-500/30 text-xs sm:text-sm"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <Button
                    className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white px-4 sm:px-6 lg:px-8 py-3 rounded-full group font-medium transition-all duration-300 hover:scale-105"
                    data-cursor="pointer"
                  >
                    View Case Study
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <CareersSection />

      {/* Testimonials Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 relative overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-900/20 to-purple-900/20" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20">
            <Badge className="animate-on-scroll bg-yellow-500/10 text-yellow-400 border-yellow-500/20 mb-3 sm:mb-4 lg:mb-6 text-xs sm:text-sm font-medium">
              Testimonials
            </Badge>
            <h2 className="animate-on-scroll text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-black mb-4 sm:mb-6 lg:mb-8 font-poppins">
              <span className="bg-gradient-to-r from-white to-yellow-200 bg-clip-text text-transparent">Client</span>
              <br />
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Success Stories
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="animate-on-scroll bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105"
                data-cursor="pointer"
              >
                <CardContent className="p-4 sm:p-6 lg:p-8">
                  <div className="flex items-center mb-3 sm:mb-4 lg:mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  <p className="text-white/80 mb-4 sm:mb-6 lg:mb-8 leading-relaxed text-sm sm:text-base italic">
                    "{testimonial.content}"
                  </p>

                  <div className="flex items-center">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      width={80}
                      height={80}
                      className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full mr-2 sm:mr-3 lg:mr-4"
                    />
                    <div>
                      <div className="text-white font-semibold text-sm sm:text-base font-poppins">
                        {testimonial.name}
                      </div>
                      <div className="text-white/60 text-xs sm:text-sm">
                        {testimonial.role}, {testimonial.company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 relative overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-900/30 to-purple-900/30" />
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-32 sm:w-48 md:w-64 lg:w-96 h-32 sm:h-48 md:h-64 lg:h-96 bg-violet-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-32 sm:w-48 md:w-64 lg:w-96 h-32 sm:h-48 md:h-64 lg:h-96 bg-purple-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <h2 className="animate-on-scroll text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-black mb-4 sm:mb-6 lg:mb-8 font-poppins">
            <span className="bg-gradient-to-r from-white to-violet-200 bg-clip-text text-transparent">Ready to</span>
            <br />
            <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
              Dominate?
            </span>
          </h2>

          <p className="animate-on-scroll text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white/70 mb-6 sm:mb-8 lg:mb-12 max-w-3xl mx-auto leading-relaxed">
            Let's create something extraordinary together. Your competition won't see it coming.
          </p>

          <div className="animate-on-scroll flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6 justify-center">
            <Button
              onClick={() => scrollToSection("contact")}
              data-cursor="pointer"
              className="w-full sm:w-auto bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white px-6 sm:px-8 lg:px-12 py-3 sm:py-4 text-sm sm:text-base lg:text-lg rounded-full transition-all duration-300 hover:scale-105 group font-medium"
            >
              Start Your Project
              <Rocket className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              variant="outline"
              data-cursor="pointer"
              className="w-full sm:w-auto bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white border-0 px-6 sm:px-8 lg:px-12 py-3 sm:py-4 text-sm sm:text-base lg:text-lg rounded-full transition-all duration-300 hover:scale-105 font-medium"
            >
              Book a Call
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 bg-gradient-to-b from-transparent to-black px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
            <div className="animate-on-scroll">
              <Badge className="bg-violet-500/10 text-violet-400 border-violet-500/20 mb-3 sm:mb-4 lg:mb-6 text-xs sm:text-sm font-medium">
                Get In Touch
              </Badge>

              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-4 sm:mb-6 lg:mb-8 font-poppins">
                <span className="bg-gradient-to-r from-white to-violet-200 bg-clip-text text-transparent">
                  Let's Create
                </span>
                <br />
                <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                  Magic
                </span>
              </h2>

              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/70 mb-6 sm:mb-8 lg:mb-12 leading-relaxed">
                Ready to transform your digital presence? Let's discuss your project and create something amazing
                together.
              </p>

              <div className="space-y-4 sm:space-y-6 lg:space-y-8 mb-6 sm:mb-8 lg:mb-12">
                <div className="flex items-center gap-3 sm:gap-4 lg:gap-6">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm sm:text-base font-poppins">Email</div>
                    <div className="text-white/70 text-sm sm:text-base">hello@digitalboost.com</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 sm:gap-4 lg:gap-6">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm sm:text-base font-poppins">Response Time</div>
                    <div className="text-white/70 text-sm sm:text-base">Within 24 hours</div>
                  </div>
                </div>
              </div>

              <div className="flex gap-2 sm:gap-3 lg:gap-4">
                {[Mail, ArrowUpRight, Star, Target].map((Icon, index) => (
                  <Link
                    key={index}
                    href="#"
                    data-cursor="pointer"
                    className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-white/5 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-violet-500 hover:to-purple-500 transition-all duration-300 hover:scale-110"
                  >
                    <Icon className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-white" />
                  </Link>
                ))}
              </div>
            </div>

            <Card className="animate-on-scroll bg-white/5 backdrop-blur-sm border-white/10">
              <CardContent className="p-4 sm:p-6 lg:p-8">
                <form className="space-y-3 sm:space-y-4 lg:space-y-6">
                  <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
                    <div>
                      <Input
                        placeholder="Your Name"
                        className="bg-white/5 border-white/20 text-white placeholder:text-white/50 focus:border-violet-500 transition-colors h-10 sm:h-12 text-sm sm:text-base"
                      />
                    </div>
                    <div>
                      <Input
                        placeholder="Your Email"
                        type="email"
                        className="bg-white/5 border-white/20 text-white placeholder:text-white/50 focus:border-violet-500 transition-colors h-10 sm:h-12 text-sm sm:text-base"
                      />
                    </div>
                  </div>

                  <Input
                    placeholder="Project Budget"
                    className="bg-white/5 border-white/20 text-white placeholder:text-white/50 focus:border-violet-500 transition-colors h-10 sm:h-12 text-sm sm:text-base"
                  />

                  <Textarea
                    placeholder="Tell us about your project..."
                    rows={6}
                    className="bg-white/5 border-white/20 text-white placeholder:text-white/50 focus:border-violet-500 transition-colors resize-none text-sm sm:text-base"
                  />

                  <Button
                    className="w-full bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white py-3 sm:py-4 text-sm sm:text-base lg:text-lg rounded-full transition-all duration-300 hover:scale-105 font-medium"
                    data-cursor="pointer"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 sm:py-12 lg:py-16 border-t border-white/10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-0">
            <div className="text-lg sm:text-xl lg:text-2xl font-bold font-poppins">
              <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Digital
              </span>
              <span className="text-white ml-1">Boost</span>
            </div>

            <div className="text-white/50 text-center lg:text-right text-sm sm:text-base">
              <p>&copy; 2024 Digital Boost. All rights reserved.</p>
              <p className="mt-2">Crafted with ❤️ for digital excellence</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
