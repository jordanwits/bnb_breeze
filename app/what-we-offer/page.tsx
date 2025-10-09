"use client"

import React, { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
// Removed unused Carousel and Autoplay imports
import Reveal from "@/components/reveal"
import { motion } from "framer-motion"
import {
  Home,
  Sparkles,
  MessageSquare,
  BarChart,
  CalendarDays,
  Eye,
  Wrench,
  Bell,
  ListChecks,
  Camera,
  Users,
  DollarSign,
  Settings,
  Heart,
  ChevronDown,
  Rocket,
  Megaphone,
  ClipboardList,
  CheckCircle2,
  XCircle,
  TrendingUp,
  Award,
  Search,
  Menu,
  X,
  Facebook,
  Twitter,
  Instagram,
  MapPin,
} from "lucide-react"
import { cn } from "@/lib/utils"
import InvestorClubSection from "@/components/investor-club-section"
import IncludedChart from "@/components/included-chart"

interface ServiceFeature {
  icon: React.ElementType
  title: string
  description: string
}

const SectionHeader: React.FC<{ title: string; subtitle?: string; className?: string; titleClassName?: string; subtitleClassName?: string; }> = ({ title, subtitle, className = "", titleClassName = "", subtitleClassName = "" }) => (
  <Reveal staggerChildren className={`mb-8 sm:mb-10 md:mb-12 text-center ${className}`}>
    <h2 className={cn("text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-bnb-navy mb-3", titleClassName)}>{title}</h2>
    {subtitle && (
      <p className={cn("text-base sm:text-lg md:text-xl text-bnb-gray-dark max-w-2xl mx-auto px-4", subtitleClassName)}>{subtitle}</p>
    )}
  </Reveal>
)

const ServiceDetailCard: React.FC<{
  icon?: React.ElementType
  title: React.ReactNode
  titleString?: string
  description: string
  imageUrl?: string
  imageAlt?: string
  imagePosition?: "left" | "right"
  children?: React.ReactNode
  logoUrl?: string
  logoAlt?: string
  id: string
  className?: string
  titleClassName?: string
  descriptionClassName?: string
  imageHasCard?: boolean
  imageContainerClassName?: string
  iconClassName?: string
}> = ({
  icon: Icon,
  title,
  titleString,
  description,
  imageUrl,
  imageAlt,
  imagePosition = "left",
  children,
  logoUrl,
  logoAlt,
  id,
  className = "",
  titleClassName = "text-2xl md:text-3xl font-semibold text-bnb-navy mb-4",
  descriptionClassName = "text-bnb-gray-dark text-md md:text-lg mb-6",
  imageHasCard = true,
  imageContainerClassName,
  iconClassName = "w-8 h-8 text-bnb-blue mr-3",
}) => (
  <section id={id} className={`py-10 md:py-12 ${className}`}>
    <div className="container mx-auto px-4 md:px-6">
      <Reveal staggerChildren className={`flex flex-col gap-8 ${imageUrl ? "lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center" : ""}`}>
        {/* Image - Always first on mobile, positioned based on imagePosition on desktop */}
        {imageUrl && (
          <div className={`w-full ${imagePosition === "right" ? "lg:order-2" : "lg:order-1"}`}>
            <div
              className={cn(
                imageHasCard
                  ? "relative w-full h-64 sm:h-80 md:h-96 lg:h-80 xl:h-96 rounded-lg overflow-hidden shadow-lg"
                  : "relative w-full h-auto aspect-[4/3]",
                imageContainerClassName
              )}
            >
              <Image
                src={imageUrl || "/placeholder.svg?width=600&height=400&query=modern+interior"}
                alt={imageAlt || titleString || "BNB Breeze Service Image"}
                fill
                className="object-cover"
              />
            </div>
          </div>
        )}

        {/* Content - Always second on mobile, positioned based on imagePosition on desktop */}
        <Reveal
          staggerChildren
          className={`w-full ${imageUrl ? (imagePosition === "right" ? "lg:order-1" : "lg:order-2") : "max-w-3xl mx-auto text-center"}`}
        >
          {logoUrl && (
            <Image
              src={logoUrl || "/placeholder.svg"}
              alt={logoAlt || `${title} logo`}
              width={150}
              height={50}
              className="mb-4"
            />
          )}
          <div className="flex items-center mb-3">
            {Icon && <Icon className={iconClassName} />}
            <h3 className={titleClassName}>{title}</h3>
          </div>
          <p className={descriptionClassName}>{description}</p>
          {children}
        </Reveal>
      </Reveal>
    </div>
  </section>
)

const FeatureGrid: React.FC<{ features: ServiceFeature[]; columns?: 2 | 3 }> = ({ features, columns = 2 }) => (
  <Reveal staggerChildren className={`grid gap-6 sm:gap-8 ${columns === 3 ? "sm:grid-cols-2 lg:grid-cols-3" : "md:grid-cols-2"} mt-8`}>
    {features.map((feature, index) => (
      <div key={index} className="bg-white/90 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-lg border border-white/20">
        <div>
          {/* Enhanced icon with background */}
          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-bnb-blue to-bnb-blue/80 rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
            <feature.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
          </div>

          <h4 className="font-bold text-lg sm:text-xl text-bnb-navy mb-3">{feature.title}</h4>
          <p className="text-bnb-gray-medium leading-relaxed text-sm sm:text-base">{feature.description}</p>
        </div>
      </div>
    ))}
  </Reveal>
)

// Simple, consistent-width stat card used by the marquee
// Removed unused StatCard and statsData

export default function WhatWeOfferPage() {
  const [selectedProperty, setSelectedProperty] = useState("Property Select")
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false) // New state for mobile menu
  // Removed unused autoplay ref
  // JS-driven marquee state/refs (variable-width, seamless)
  const marqueeTrackRef = useRef<HTMLDivElement | null>(null)
  const rafRef = useRef<number | null>(null)
  const lastTsRef = useRef<number | null>(null)
  const translateXRef = useRef<number>(0)
  const gapPxRef = useRef<number>(24)
  const [isMarqueePaused, setIsMarqueePaused] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const isMountedRef = useRef(true)

  const properties = [
    "Luxury Mountain Cabin",
    "Downtown Loft",
    "Beachfront Villa",
    "City Center Apartment",
    "Countryside Retreat",
  ]

  useEffect(() => {
    isMountedRef.current = true
    // Attempt to play the video programmatically and catch any errors
    const videoElement = videoRef.current
    if (videoElement) {
      // Ensure mobile autoplay compatibility
      videoElement.muted = true
      ;(videoElement as any).playsInline = true
      videoElement.setAttribute("playsinline", "")
      videoElement.setAttribute("webkit-playsinline", "")

      const promise = videoElement.play()
      if (promise !== undefined) {
        promise.catch((error) => {
          // Only log the error if the component is still mounted.
          // This prevents logging errors from aborted play requests during hot-reload.
          if (isMountedRef.current) {
            // eslint-disable-next-line no-console
            console.error("Video autoplay was prevented:", error)
          }
        })
      }
    }

    // Cleanup function to pause the video on component unmount (or hot-reload)
    return () => {
      isMountedRef.current = false
      if (videoElement) {
        videoElement.pause()
      }
    }
  }, [])

  // Retry playback when video can play or when tab becomes visible
  useEffect(() => {
    const videoElement = videoRef.current
    if (!videoElement) return

    const tryPlay = () => {
      const p = videoElement.play()
      if (p && typeof p.then === "function") p.catch(() => {})
    }

    const onCanPlay = () => tryPlay()
    const onVisibilityChange = () => {
      if (document.visibilityState === "visible") tryPlay()
    }

    videoElement.addEventListener("canplay", onCanPlay)
    document.addEventListener("visibilitychange", onVisibilityChange)

    return () => {
      videoElement.removeEventListener("canplay", onCanPlay)
      document.removeEventListener("visibilitychange", onVisibilityChange)
    }
  }, [])

  // Fallback: attempt play on first user interaction (mobile tap/click)
  useEffect(() => {
    const videoElement = videoRef.current
    if (!videoElement) return

    let attempted = false
    const onFirstInteract = () => {
      if (attempted) return
      attempted = true
      const p = videoElement.play()
      if (p && typeof p.then === "function") p.catch(() => {})
      window.removeEventListener("touchstart", onFirstInteract, { capture: true } as any)
      window.removeEventListener("click", onFirstInteract, { capture: true } as any)
    }

    window.addEventListener("touchstart", onFirstInteract, { passive: true, capture: true })
    window.addEventListener("click", onFirstInteract, { capture: true })

    return () => {
      window.removeEventListener("touchstart", onFirstInteract, { capture: true } as any)
      window.removeEventListener("click", onFirstInteract, { capture: true } as any)
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50) // Change background after scrolling 50px
    }
    
    // Check scroll position immediately on mount
    handleScroll()
    
    // Add scroll event listener
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  

  // Effect to manage body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = "" // Clean up on unmount
    }
  }, [isMobileMenuOpen])

  useEffect(() => {
    // Measure gap between items for accurate recycling
    const track = marqueeTrackRef.current
    if (!track) return
    const measureGap = () => {
      const styles = getComputedStyle(track)
      const gap = parseFloat((styles as any).columnGap || styles.gap || "0")
      gapPxRef.current = isNaN(gap) ? 0 : gap
    }
    measureGap()
    window.addEventListener("resize", measureGap)

    const speedPxPerSec = 40 // tune movement speed
    const tick = (ts: number) => {
      if (lastTsRef.current == null) lastTsRef.current = ts
      const dt = (ts - lastTsRef.current) / 1000
      lastTsRef.current = ts

      if (!isMarqueePaused) {
        // Move right-to-left reversed (track moves to the right)
        translateXRef.current += speedPxPerSec * dt

        // Recycle items from the end to the front when the track shifts right
        let safety = 0
        while (track.lastElementChild && translateXRef.current > 0 && safety < 100) {
          const lastEl = track.lastElementChild as HTMLElement
          const shift = lastEl.offsetWidth + gapPxRef.current
          track.insertBefore(lastEl, track.firstElementChild)
          translateXRef.current -= shift
          safety += 1
        }

        track.style.transform = `translateX(${translateXRef.current}px)`
      }

      rafRef.current = requestAnimationFrame(tick)
    }

    rafRef.current = requestAnimationFrame(tick)
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      rafRef.current = null
      lastTsRef.current = null
      window.removeEventListener("resize", measureGap)
    }
  }, [])

  // Removed unused ownerXFeatures

  // Removed unused breezewayFeatures

  const coreServices: ServiceFeature[] = [
    {
      icon: DollarSign,
      title: "Maximize Your Revenue",
      description: "Strategic pricing and marketing to boost your rental income.",
    },
    {
      icon: Settings,
      title: "Full-Service Management",
      description: "From listing to cleaning, we handle every detail of your short-term rental.",
    },
    {
      icon: Users,
      title: "5-Star Guest Experiences",
      description: "Seamless communication and support for happy guests and great reviews.",
    },
    {
      icon: Home,
      title: "Impeccable Property Care",
      description: "Regular maintenance and inspections to keep your property in top condition.",
    },
  ]

  return (
    <div className="bg-gray-50 text-bnb-gray-dark font-sans">
      {/* Navigation */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out 
      ${isScrolled ? "bg-bnb-blue shadow-lg" : "bg-transparent"}`}
      >
        <div className="container mx-auto px-4 md:px-6 py-3 md:py-4 flex justify-between items-center">
          <Link href="/">
            <Image
              key={isScrolled ? "logo-scrolled" : "logo-top"} // Add key to force re-render on change
              src={isScrolled ? "/bnb-breeze-all-white-logo.png" : "/bnb-breeze-white-logo.png"}
              alt="BNB Breeze Logo"
              width={160} // Set to intrinsic width for optimization
              height={64} // Set to intrinsic height for optimization
              className="transition-opacity duration-300 w-[120px] h-auto md:w-[160px] object-contain" // Responsive display width, auto height
              priority // Ensure logos are prioritized
            />
          </Link>
          <nav className="hidden lg:flex items-center space-x-6">
            <Link
              href="/browse-rentals"
              className={`font-medium transition-colors ${
                isScrolled ? "text-white hover:text-white/80" : "text-white hover:text-bnb-blue/80"
              }`}
            >
              Browse Rentals
            </Link>
            <Link
              href="/about"
              className={`font-medium transition-colors ${
                isScrolled ? "text-white hover:text-white/80" : "text-white hover:text-bnb-blue/80"
              }`}
            >
              About Us
            </Link>
            <Link
              href="/management-services"
              className={`font-medium transition-colors ${
                isScrolled ? "text-white hover:text-white/80" : "text-white hover:text-bnb-blue/80"
              }`}
            >
              Management Services
            </Link>

            {/* Property Select Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="bg-white text-bnb-gray-dark border-white hover:bg-bnb-gray-light/10 px-4 py-2 rounded-full flex items-center space-x-2 relative w-[200px] justify-between"
                >
                  <span className="hidden xl:inline truncate">{selectedProperty}</span>
                  <span className="xl:hidden">Property</span>
                  <ChevronDown className="w-4 h-4 text-bnb-blue flex-shrink-0" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="bg-white w-[200px]"
                align="start"
                alignOffset={0}
                sideOffset={8}
                avoidCollisions={true}
                collisionPadding={20}
              >
                {properties.map((property) => (
                  <DropdownMenuItem
                    key={property}
                    onClick={() => setSelectedProperty(property)}
                    className="cursor-pointer hover:bg-bnb-gray-light/10"
                  >
                    {property}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Recently Viewed Icon */}
            <Button
              variant="ghost"
              size="icon"
              className="bg-white hover:bg-bnb-gray-light/10 text-bnb-gray-dark rounded-full w-10 h-10"
              title="Recently Viewed"
            >
              <Eye className="w-5 h-5" />
            </Button>

            {/* Favorites Icon */}
            <Button
              variant="ghost"
              size="icon"
              className="bg-white hover:bg-bnb-gray-light/10 text-red-500 rounded-full w-10 h-10"
              title="Favorites"
            >
              <Heart className="w-5 h-5 fill-current" />
            </Button>
          </nav>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="bg-white hover:bg-bnb-gray-light/10 text-bnb-gray-dark rounded-full w-10 h-10"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-bnb-navy z-[60] flex flex-col items-center justify-center transition-transform duration-300 ease-in-out lg:hidden
        ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 text-white hover:bg-white/10 rounded-full w-10 h-10"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-label="Close mobile menu"
        >
          <X className="w-6 h-6" />
        </Button>
        <nav className="flex flex-col items-center space-y-6 text-xl text-white">
          <Link href="/browse-rentals" className="hover:text-white/80" onClick={() => setIsMobileMenuOpen(false)}>
            Browse Rentals
          </Link>
          <Link href="/about" className="hover:text-white/80" onClick={() => setIsMobileMenuOpen(false)}>
            About Us
          </Link>
          <Link href="/management-services" className="hover:text-white/80" onClick={() => setIsMobileMenuOpen(false)}>
            Management Services
          </Link>

          {/* Property Select Dropdown in Mobile Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="bg-white text-bnb-gray-dark border-white hover:bg-bnb-gray-light/10 px-4 py-2 rounded-full flex items-center space-x-2 text-base"
              >
                <span>{selectedProperty}</span>
                <ChevronDown className="w-4 h-4 text-bnb-blue" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 bg-white">
              {properties.map((property) => (
                <DropdownMenuItem
                  key={property}
                  onClick={() => {
                    setSelectedProperty(property)
                    setIsMobileMenuOpen(false)
                  }}
                  className="cursor-pointer hover:bg-bnb-gray-light/10"
                >
                  {property}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/10 rounded-full w-10 h-10"
            title="Recently Viewed"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <Eye className="w-6 h-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-red-500 hover:bg-white/10 rounded-full w-10 h-10"
            title="Favorites"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <Heart className="w-6 h-6 fill-current" />
          </Button>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="relative flex items-center overflow-hidden bg-bnb-gray-dark py-12 wide:py-0 min-h-[calc(55vh+10px)] md:min-h-[calc(70vh-50px)]">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          onError={(e) => {
            // eslint-disable-next-line no-console
            console.error("Hero video error", (e as any).currentTarget?.error)
          }}
        >
          <source src="/BNB Hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Black overlay for contrast */}
        <div className="absolute inset-0 bg-black/60 z-5"></div>
        {/* Content based on provided design */}
        <div className="relative z-10 w-full">
          <div className="container mx-auto flex max-w-7xl flex-col items-center gap-10 px-4 pt-24 pb-12 md:px-6 wide:flex-row wide:py-14">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="w-full text-center wide:text-left wide:flex-1 wide:min-w-[500px]"
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs text-white/80 ring-1 ring-white/15 backdrop-blur">
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-400" />
                New: 3-step onboarding in under a week
              </div>

              <h1 className="mt-4 text-3xl font-extrabold leading-[1.05] tracking-tight sm:text-4xl lg:text-5xl text-white">
                We Built The System We Wished Existed
              </h1>

              <p className="mx-auto mt-5 max-w-2xl text-base text-white/80 wide:mx-0 md:text-lg">
                We provide comprehensive short-term rental management services, ensuring your peace of mind and maximizing your returns.
              </p>

              <div className="mt-7 flex flex-wrap items-center justify-center gap-3 wide:justify-start">
                <Link
                  href="#contact-us"
                  className="rounded-2xl bg-bnb-blue px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-opacity-90"
                >
                  Partner With Us
                </Link>
                <Link
                  href="#process-startup"
                  className="rounded-2xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white/90 backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/10"
                >
                  See Our Process
                </Link>
                
              </div>

              <div className="mt-6 flex items-center justify-center gap-4 wide:justify-start">
                <div className="flex flex-shrink-0 -space-x-3">
                  {["https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=100&auto=format&fit=crop","https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=100&auto=format&fit=crop","https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=100&auto=format&fit=crop","https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop"].map((src,i)=> (
                    <img key={src} src={src} alt={`Owner avatar ${i+1}`} className="h-9 w-9 flex-shrink-0 rounded-full border-2 border-white/80 object-cover" />
                  ))}
                </div>
                <p className="text-sm text-white/70">
                  Over <strong className="text-white">11,000 reviews</strong> and
                  <strong className="text-white"> 67,000+ guest nights</strong>—built on unforgettable stays and relentless focus on ROI
                </p>
              </div>
            </motion.div>

            <motion.aside
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="w-full wide:w-auto"
            >
              <div className="mx-auto w-full max-w-3xl rounded-3xl border border-white/15 bg-white/10 p-6 shadow-2xl backdrop-blur wide:min-w-[560px] md:p-8 text-white">
                <p className="text-xs uppercase tracking-wider text-white/70">Performance Snapshot</p>

                {/* Clean, consistent grid */}
                <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
                  {[{ label: "Total Reservations", value: "+14K" },{ label: "Guest Nights", value: "+67K" },{ label: "5-Star Reviews", value: "+10K" },{ label: "Portfolio Worth", value: "+$100M" }].map((s) => (
                    <div
                      key={s.label}
                      className="rounded-xl bg-white/10 ring-1 ring-white/15 px-4 md:px-5 py-4 md:py-5 text-center flex flex-col items-center justify-center min-h-[100px] md:min-h-[120px]"
                    >
                      <div
                        className={cn(
                          "text-2xl font-extrabold leading-tight tabular-nums whitespace-nowrap",
                          s.value.length > 5 ? "md:text-2xl" : "md:text-3xl"
                        )}
                      >
                        {s.value}
                      </div>
                      <div className="mt-1 text-[10px] md:text-[11px] text-white/70">{s.label}</div>
                    </div>
                  ))}
                </div>

                {/* Small badges */}
                <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-white/75">
                  {["Start Up","List","Manage","$$$"] .map((step, i) => (
                    <span key={i} className="rounded-full bg-white/10 px-2 py-1 ring-1 ring-white/15">{step}</span>
                  ))}
                </div>
              </div>
            </motion.aside>
          </div>

          {/* Bottom badges moved to section-level positioning */}
        </div>

        

      </section>

      <section className="py-16 md:py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          {/* Header */}
          <Reveal staggerChildren className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-bnb-blue mb-4 leading-tight">What We Offer</h2>
            <div className="inline-block px-4 py-2 bg-bnb-blue/10 rounded-full mb-6">
              <span className="text-bnb-blue font-semibold text-sm uppercase tracking-wide">
                Investor-Driven STR Management
              </span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-bnb-navy mb-6 leading-tight">
              We Built The System We Wished Existed
            </h3>
            <p className="text-lg text-bnb-gray-dark max-w-4xl mx-auto leading-relaxed">
              A short-term rental management platform designed by investors, for investors. At BNB Breeze, every home is
              treated like our own—because we're owners too. We've spent years perfecting the art and science of
              hospitality, building a system that not only maximizes ROI today but grows it year after year. From
              first-time hosts to seasoned portfolio owners, we deliver a seamless, end-to-end solution that turns
              properties into high-performing, guest-loved destinations.
            </p>
          </Reveal>

          {/* Video and Story Section */}
          <Reveal staggerChildren className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center mb-20">
            {/* Video Thumbnail */}
            <div className="relative">
              <a
                href="https://www.youtube.com/watch?v=qB78JRjKyxI"
                target="_blank"
                rel="noopener noreferrer"
                className="block relative aspect-video rounded-2xl overflow-hidden shadow-xl bg-bnb-gray-dark group cursor-pointer"
              >
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BNB%20video%20cover%20image-Eedo1AyNtyTMNzFKEgybOwwnPzD7hc.png"
                  alt="Landon Schlabach, CEO/Founder of BNB Breeze in modern office setting"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                  <div className="flex items-center justify-center w-20 h-20 bg-white/70 hover:bg-white/80 rounded-full transition-all duration-300 group-hover:scale-110">
                    <svg className="w-10 h-10 text-bnb-blue ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                {/* Click to Watch Text */}
                <div className="absolute bottom-4 left-4">
                  <span className="bg-bnb-blue text-white px-3 py-1 rounded-full text-sm font-medium">
                    CLICK HERE TO WATCH
                  </span>
                </div>
              </a>
            </div>

            {/* Story Content */}
            <div>
              <h4 className="text-2xl md:text-3xl font-bold text-bnb-navy mb-6">
                Every Company Has A Story.
                <br />
                This Is Ours.
              </h4>
              <p className="text-bnb-gray-dark text-lg leading-relaxed mb-6">
                What started as a simple side hustle soon became a journey that reshaped our lives. In this candid
                conversation, founder Landon Schlabach — joined by his sister and co-owner — shares the story of BNB
                Breeze, from the first home we managed to hosting over 67,000 guest nights. It's a story of hard work,
                family values, and a commitment to caring for every home and guest like they're our own.
              </p>
              <a
                href="https://www.youtube.com/watch?v=qB78JRjKyxI"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-bnb-blue hover:text-bnb-blue/80 font-semibold transition-colors"
              >
                🎬 CLICK HERE TO WATCH
              </a>
            </div>
          </Reveal>

          {/* Revenue Projection CTA */}
          <Reveal staggerChildren className="text-center bg-gradient-to-br from-bnb-blue/5 to-bnb-blue/10 rounded-3xl p-8 md:p-12 border border-bnb-blue/20">
            <div className="flex justify-center mb-4">
              <svg className="w-8 h-8 text-bnb-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h4 className="text-2xl md:text-3xl font-bold text-bnb-navy mb-4">See What Your Home Could Earn</h4>
            <p className="text-bnb-blue text-lg md:text-xl font-semibold mb-4 max-w-3xl mx-auto">
              Get A Free Revenue Projection And See How Our System Maximizes Performance For Homes Like Yours.
            </p>
            <p className="text-bnb-gray-dark mb-8 max-w-2xl mx-auto">
              From new purchases to established rentals, we'll show you the numbers before you commit.
            </p>
            <Button asChild size="lg" className="bg-bnb-blue hover:bg-opacity-90 text-white px-8 py-3 rounded-full">
              <Link href="#contact-us">Get Free Revenue Projection</Link>
            </Button>
          </Reveal>
        </div>
      </section>

      {/* STR Needs Section (moved up) */}
      <section className="py-16 md:py-20 bg-white relative overflow-hidden">
        <Image
          src="/8_440-s-pelican-dr-web (32 of 33).jpg"
          alt="South Pelican Drive house background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        {/* Decorative background elements */}
        <div className="absolute top-20 right-10 w-24 h-24 bg-bnb-blue/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-10 w-32 h-32 bg-bnb-blue/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <Reveal staggerChildren className="text-center mb-12">
            <div className="inline-block relative mb-4 rounded-full px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 ring-1 ring-white/10 shadow-lg overflow-hidden">
              <span className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-b from-white/25 via-white/10 to-transparent" aria-hidden="true"></span>
              <span className="pointer-events-none absolute -top-2 -left-1 w-24 h-10 bg-white/40 rounded-full blur-2xl opacity-50" aria-hidden="true"></span>
              <span className="relative z-10 text-white font-semibold text-sm uppercase tracking-wide">Complete Management</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              The System Your STR Needs
            </h2>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 leading-tight">
              A 360° Management System—Designed By Investors, For Investors—Built To Delight Guests And Maximize Your
              Returns.
            </h3>
            <p className="text-lg md:text-xl text-white/80 max-w-4xl mx-auto leading-relaxed mb-12">
              From marketing and revenue management to cleaning, maintenance, and guest experience, we handle every
              detail so your property thrives year after year.
            </p>

            {/* Management System Graphic */}
            <Reveal staggerChildren className="flex justify-center mb-12">
              <Image
                src="/str-management-graphic.png"
                alt="Comprehensive STR management system"
                width={1200}
                height={600}
                className="w-full h-auto max-w-6xl"
                priority
              />
            </Reveal>

            {/* Bottom CTA */}
            <Reveal staggerChildren className="text-center bg-bnb-navy/80 rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl backdrop-blur">
              <h4 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready To Experience The Difference?</h4>
              <p className="text-white/85 mb-8 max-w-2xl mx-auto text-lg">
                Let us show you how our comprehensive system can transform your property into a high-performing rental
                that guests love and you profit from.
              </p>
              <Button asChild size="lg" className="bg-bnb-blue hover:bg-opacity-90 text-white px-8 py-3 rounded-full">
                <Link href="#contact-us">See Your Property's Potential</Link>
              </Button>
            </Reveal>
          </Reveal>
        </div>
      </section>

      {/* Reviews & Testimonials Section */}
      <section className="py-16 md:py-20 bg-white relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-20 right-10 w-24 h-24 bg-bnb-blue/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-10 w-32 h-32 bg-bnb-blue/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <Reveal staggerChildren className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-bnb-blue/10 rounded-full mb-4">
              <span className="text-bnb-blue font-semibold text-sm uppercase tracking-wide">Guest Reviews</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-bnb-navy mb-4 leading-tight">
              Proof Of Excellence In
              <span className="text-bnb-blue"> Every Stay</span>
            </h2>
            <p className="text-lg md:text-xl text-bnb-gray-dark max-w-4xl mx-auto leading-relaxed">
              Over 11,000 glowing reviews. One unwavering standard.
              Every star is earned through unforgettable stays, seamless operations, and a relentless focus on ROI. Guests trust us. Homeowners profit from it. Together, we turn every booking into a story worth telling—and repeating.
            </p>
          </Reveal>

          <Reveal staggerChildren className="grid gap-6 lg:grid-cols-3 items-start lg:items-center">
            {/* Overall Rating Card */}
            <div className="lg:col-span-1 order-2 lg:order-1">
              <div className="bg-gradient-to-br from-bnb-blue/5 to-bnb-blue/10 p-6 sm:p-8 rounded-3xl text-center border border-bnb-blue/20">
                <div className="text-5xl sm:text-6xl md:text-7xl font-bold text-bnb-navy mb-2">4.9</div>
                <div className="text-bnb-gray-medium text-base sm:text-lg mb-4">out of 5</div>

                {/* Star Rating */}
                <div className="flex justify-center mb-4 space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-6 h-6 sm:w-8 sm:h-8 text-bnb-blue fill-current" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>

                <div className="text-xl sm:text-2xl font-bold text-bnb-blue">10,148</div>
                <div className="text-bnb-gray-medium text-sm sm:text-base">total reviews</div>
              </div>
            </div>

            {/* Platform Reviews Grid */}
            <div className="lg:col-span-2 order-1 lg:order-2">
              <div className="max-w-3xl mx-auto">
                <div className="grid gap-4 sm:gap-6 sm:grid-cols-2">
                  {/* Airbnb */}
                  <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-lg border border-bnb-gray-light/20 hover:shadow-xl transition-shadow duration-300 flex items-center min-h-[100px] sm:min-h-[112px]">
                    <div className="flex items-center justify-between w-full">
                      <Image
                        src="/airbnb-wordmark.png"
                        alt="Airbnb Wordmark"
                        width={120}
                        height={40}
                        className="object-contain sm:w-[140px] sm:h-[48px]"
                      />
                      <div className="text-right">
                        <div className="text-2xl sm:text-3xl font-bold text-bnb-navy">4.9</div>
                        <div className="text-xs sm:text-sm text-bnb-gray-medium">(8,112)</div>
                      </div>
                    </div>
                  </div>

                  {/* Reva */}
                  <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-lg border border-bnb-gray-light/20 hover:shadow-xl transition-shadow duration-300 flex items-center min-h-[100px] sm:min-h-[112px]">
                    <div className="flex items-center justify-between w-full">
                      <Image
                        src="/reva-wordmark.svg"
                        alt="Reva Wordmark"
                        width={120}
                        height={40}
                        className="object-contain sm:w-[140px] sm:h-[48px]"
                      />
                      <div className="text-right">
                        <div className="text-2xl sm:text-3xl font-bold text-bnb-navy">4.8</div>
                        <div className="text-xs sm:text-sm text-bnb-gray-medium">(442)</div>
                      </div>
                    </div>
                  </div>

                  {/* Google */}
                  <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-lg border border-bnb-gray-light/20 hover:shadow-xl transition-shadow duration-300 flex items-center min-h-[100px] sm:min-h-[112px]">
                    <div className="flex items-center justify-between w-full">
                      <Image
                        src="/google-wordmark.png"
                        alt="Google Wordmark"
                        width={120}
                        height={40}
                        className="object-contain sm:w-[140px] sm:h-[48px]"
                      />
                      <div className="text-right">
                        <div className="text-2xl sm:text-3xl font-bold text-bnb-navy">5.0</div>
                        <div className="text-xs sm:text-sm text-bnb-gray-medium">(105)</div>
                      </div>
                    </div>
                  </div>

                  {/* VRBO */}
                  <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-lg border border-bnb-gray-light/20 hover:shadow-xl transition-shadow duration-300 flex items-center min-h-[100px] sm:min-h-[112px]">
                    <div className="flex items-center justify-between w-full">
                      <Image
                        src="/vrbo-wordmark.png"
                        alt="VRBO Wordmark"
                        width={120}
                        height={40}
                        className="object-contain sm:w-[140px] sm:h-[48px]"
                      />
                      <div className="text-right">
                        <div className="text-2xl sm:text-3xl font-bold text-bnb-navy">4.8</div>
                        <div className="text-xs sm:text-sm text-bnb-gray-medium">(1,489)</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

        
          </div>
      </section>

      <section className="py-16 md:py-20 bg-bnb-blue/5 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-bnb-blue/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-bnb-blue/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <Reveal staggerChildren className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-bnb-navy mb-4 leading-tight">Our Journey In Numbers</h2>
            <p className="text-lg md:text-xl text-bnb-gray-dark max-w-3xl mx-auto leading-relaxed">
              Years of dedication, thousands of happy guests, and millions in managed portfolio value
            </p>
          </Reveal>

          {/* Stats Carousel - JS-driven, variable-width, seamless */}
          <div
            className="relative w-full overflow-hidden py-4 [mask-image:linear-gradient(to_right,transparent_0%,_black_18%,_black_82%,_transparent_100%)]"
            onMouseEnter={() => setIsMarqueePaused(true)}
            onMouseLeave={() => setIsMarqueePaused(false)}
          >
            <div
              ref={marqueeTrackRef}
              className="flex w-max items-center gap-6 will-change-transform"
              style={{ transform: "translateX(0px)" }}
            >
              {/* First set - flat children (no wrappers) */}
              {/* Total Reservations */}
              <div className="w-[160px] h-full">
                <div className="bg-bnb-navy border border-bnb-blue rounded-xl p-4 text-center relative shadow-lg flex flex-col justify-center h-[120px]">
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-[#FBCA41] rounded-full flex items-center justify-center border-2 border-bnb-blue">
                    <CheckCircle2 className="w-5 h-5 text-bnb-navy" />
                  </div>
                  <div className="text-xs sm:text-sm text-white uppercase tracking-wide mb-2 px-4">Total Reservations</div>
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-bnb-blue">+14K</div>
                </div>
              </div>
              {/* Guest Nights */}
              <div className="w-[160px] h-full">
                <div className="bg-bnb-navy border border-bnb-blue rounded-xl p-4 text-center relative shadow-lg flex flex-col justify-center h-[120px]">
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-[#FBCA41] rounded-full flex items-center justify-center border-2 border-bnb-blue">
                    <Sparkles className="w-5 h-5 text-bnb-navy" />
                  </div>
                  <div className="text-xs sm:text-sm text-white uppercase tracking-wide mb-2 px-4">Guest Nights</div>
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-bnb-blue">+67K</div>
                </div>
              </div>
              {/* Guest Nights Into Years */}
              <div className="w-[200px] h-full">
                <div className="bg-bnb-navy border border-bnb-blue rounded-xl p-4 relative shadow-lg flex flex-col justify-center h-[120px]">
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-[#FBCA41] rounded-full flex items-center justify-center border-2 border-bnb-blue">
                    <CalendarDays className="w-5 h-5 text-bnb-navy" />
                  </div>
                  <div className="flex items-center justify-between w-full">
                    <div className="text-sm text-white uppercase tracking-wide text-left leading-tight pr-2">
                      Guest Nights
                      <br />
                      Into Years
                    </div>
                    <div className="text-5xl font-bold text-bnb-blue shrink-0">173</div>
                  </div>
                </div>
              </div>
              {/* 5 Star Reviews */}
              <div className="w-[160px] h-full">
                <div className="bg-bnb-navy border border-bnb-blue rounded-xl p-4 text-center relative shadow-lg flex flex-col justify-center h-[120px]">
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-[#FBCA41] rounded-full flex items-center justify-center border-2 border-bnb-blue">
                    <Award className="w-5 h-5 text-bnb-navy" />
                  </div>
                  <div className="text-xs sm:text-sm text-white uppercase tracking-wide mb-2 px-4">5 Star Reviews</div>
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-bnb-blue">+10K</div>
                </div>
              </div>
              {/* Portfolio Worth */}
              <div className="w-[160px] h-full">
                <div className="bg-bnb-navy border border-bnb-blue rounded-xl p-4 text-center relative shadow-lg flex flex-col justify-center h-[120px]">
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-[#FBCA41] rounded-full flex items-center justify-center border-2 border-bnb-blue">
                    <DollarSign className="w-5 h-5 text-bnb-navy" />
                  </div>
                  <div className="text-xs sm:text-sm text-white uppercase tracking-wide mb-2 px-4">Portfolio Worth</div>
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-bnb-blue">+100M</div>
                </div>
              </div>
              {/* States We Manage */}
              <div className="w-[200px] h-full">
                <div className="bg-bnb-navy border border-bnb-blue rounded-xl p-4 relative shadow-lg flex flex-col justify-center h-[120px]">
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-[#FBCA41] rounded-full flex items-center justify-center border-2 border-bnb-blue">
                    <MapPin className="w-5 h-5 text-bnb-navy" />
                  </div>
                  <div className="flex items-center justify-between w-full">
                    <div className="text-sm text-white uppercase tracking-wide text-left leading-tight pr-2">
                      States We Manage
                      <br />
                      Properties
                    </div>
                    <div className="text-5xl font-bold text-bnb-blue shrink-0">14</div>
                  </div>
                </div>
              </div>

              {/* Duplicated set - flat children again */}
              {/* Total Reservations */}
              <div className="w-[160px] h-full" aria-hidden="true">
                <div className="bg-bnb-navy border border-bnb-blue rounded-xl p-4 text-center relative shadow-lg flex flex-col justify-center h-[120px]">
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-[#FBCA41] rounded-full flex items-center justify-center border-2 border-bnb-blue">
                    <CheckCircle2 className="w-5 h-5 text-bnb-navy" />
                  </div>
                  <div className="text-xs sm:text-sm text-white uppercase tracking-wide mb-2 px-4">Total Reservations</div>
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-bnb-blue">+14K</div>
                </div>
              </div>
              {/* Guest Nights */}
              <div className="w-[160px] h-full" aria-hidden="true">
                <div className="bg-bnb-navy border border-bnb-blue rounded-xl p-4 text-center relative shadow-lg flex flex-col justify-center h-[120px]">
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-[#FBCA41] rounded-full flex items-center justify-center border-2 border-bnb-blue">
                    <Sparkles className="w-5 h-5 text-bnb-navy" />
                  </div>
                  <div className="text-xs sm:text-sm text-white uppercase tracking-wide mb-2 px-4">Guest Nights</div>
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-bnb-blue">+67K</div>
                </div>
              </div>
              {/* Guest Nights Into Years */}
              <div className="w-[200px] h-full" aria-hidden="true">
                <div className="bg-bnb-navy border border-bnb-blue rounded-xl p-4 relative shadow-lg flex flex-col justify-center h-[120px]">
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-[#FBCA41] rounded-full flex items-center justify-center border-2 border-bnb-blue">
                    <CalendarDays className="w-5 h-5 text-bnb-navy" />
                  </div>
                  <div className="flex items-center justify-between w-full">
                    <div className="text-sm text-white uppercase tracking-wide text-left leading-tight pr-2">
                      Guest Nights
                      <br />
                      Into Years
                    </div>
                    <div className="text-5xl font-bold text-bnb-blue shrink-0">173</div>
                  </div>
                </div>
              </div>
              {/* 5 Star Reviews */}
              <div className="w-[160px] h-full" aria-hidden="true">
                <div className="bg-bnb-navy border border-bnb-blue rounded-xl p-4 text-center relative shadow-lg flex flex-col justify-center h-[120px]">
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-[#FBCA41] rounded-full flex items-center justify-center border-2 border-bnb-blue">
                    <Award className="w-5 h-5 text-bnb-navy" />
                  </div>
                  <div className="text-xs sm:text-sm text-white uppercase tracking-wide mb-2 px-4">5 Star Reviews</div>
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-bnb-blue">+10K</div>
                </div>
              </div>
              {/* Portfolio Worth */}
              <div className="w-[160px] h-full" aria-hidden="true">
                <div className="bg-bnb-navy border border-bnb-blue rounded-xl p-4 text-center relative shadow-lg flex flex-col justify-center h-[120px]">
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-[#FBCA41] rounded-full flex items-center justify-center border-2 border-bnb-blue">
                    <DollarSign className="w-5 h-5 text-bnb-navy" />
                  </div>
                  <div className="text-xs sm:text-sm text-white uppercase tracking-wide mb-2 px-4">Portfolio Worth</div>
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-bnb-blue">+100M</div>
                </div>
              </div>
              {/* States We Manage */}
              <div className="w-[200px] h-full" aria-hidden="true">
                <div className="bg-bnb-navy border border-bnb-blue rounded-xl p-4 relative shadow-lg flex flex-col justify-center h-[120px]">
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-[#FBCA41] rounded-full flex items-center justify-center border-2 border-bnb-blue">
                    <MapPin className="w-5 h-5 text-bnb-navy" />
                  </div>
                  <div className="flex items-center justify-between w-full">
                    <div className="text-sm text-white uppercase tracking-wide text-left leading-tight pr-2">
                      States We Manage
                      <br />
                      Properties
                    </div>
                    <div className="text-5xl font-bold text-bnb-blue shrink-0">14</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-bnb-blue/5 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-bnb-blue/5 to-transparent" />
          </div>

          {/* Platform Management Section */}
          <Reveal staggerChildren className="text-center mt-16 md:mt-20">
            <div className="inline-block px-4 py-2 bg-bnb-blue/10 rounded-full mb-6">
              <span className="text-bnb-blue font-semibold text-sm uppercase tracking-wide">
                Multi-Platform Management
              </span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-bnb-navy mb-8">
              We Manage Your Vacation Rental From Start To Finish — Across:
            </h3>
            <div className="flex justify-center mb-8 px-4">
              <img src="/platform-logos.png" alt="" className="max-w-full h-auto max-w-[900px]" />
            </div>
            <p className="text-lg text-bnb-gray-dark max-w-2xl mx-auto">
              and more — so you can earn more without the headache.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Core Services Overview (moved down) */}
      <section className="relative overflow-hidden bg-bnb-blue/5 py-16 md:py-20">
        <Image
          src="/23_440-s-pelican-dr-web (17 of 33).jpg"
          alt="South Pelican Drive house interior"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        {/* Background with subtle pattern */}

        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-bnb-blue/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-bnb-blue/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <Reveal staggerChildren className="text-center mb-12">
            <div className="inline-block relative mb-4 rounded-full px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 ring-1 ring-white/10 shadow-lg overflow-hidden">
              <span className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-b from-white/25 via-white/10 to-transparent" aria-hidden="true"></span>
              <span className="pointer-events-none absolute -top-2 -left-1 w-24 h-10 bg-white/40 rounded-full blur-2xl opacity-50" aria-hidden="true"></span>
              <span className="relative z-10 text-white font-semibold text-sm uppercase tracking-wide">Our Services</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Comprehensive Solutions for
              <span className="text-white"> Your Success</span>
            </h2>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              At BNB Breeze, we handle every aspect of your short-term rental, so you don't have to. Discover how we
              elevate your property and guest experiences.
            </p>
          </Reveal>
          <FeatureGrid features={coreServices} columns={2} />
        </div>
      </section>

      <section className="py-16 md:py-20 bg-bnb-blue/5 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-20 right-10 w-24 h-24 bg-bnb-blue/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-10 w-32 h-32 bg-bnb-blue/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Video Thumbnail */}
            <div className="relative">
              <a
                href="https://www.youtube.com/watch?v=fd5Y72ReV10"
                target="_blank"
                rel="noopener noreferrer"
                className="block relative aspect-video rounded-2xl overflow-hidden shadow-xl bg-bnb-gray-dark group cursor-pointer"
              >
                <Image
                  src="/YT THUMBNAILS (10).png"
                  alt="Homeowner testimonials featuring Floyd & Kim Zook and Willie & Kathy Zook sharing their BNB Breeze experience"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                  <div className="flex items-center justify-center w-20 h-20 bg-white/70 hover:bg-white/80 rounded-full transition-all duration-300 group-hover:scale-110">
                    <svg className="w-10 h-10 text-bnb-blue ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                {/* Click to Watch Text */}
                <div className="absolute bottom-4 left-4">
                  <span className="bg-bnb-blue text-white px-3 py-1 rounded-full text-sm font-medium">
                    CLICK HERE TO WATCH
                  </span>
                </div>
              </a>
            </div>

            {/* Content */}
            <div>
              <div className="inline-block px-4 py-2 bg-bnb-blue/10 rounded-full mb-4">
                <span className="text-bnb-blue font-semibold text-sm uppercase tracking-wide">Homeowner Stories</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-bnb-navy mb-6 leading-tight">
                Why Owners Choose BNB Breeze
              </h2>
              <p className="text-bnb-gray-dark text-lg leading-relaxed mb-6">
                There's no better way to understand the BNB Breeze difference than hearing it directly from our
                homeowners. In this video, Floyd & Kim Zook and Willie & Kathy Zook share why they trusted us with their
                short-term rentals—and how our hands-on expertise turned their properties into reliable, worry-free
                investments that continue to thrive.
              </p>
              <a
                href="https://www.youtube.com/watch?v=fd5Y72ReV10"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-bnb-blue hover:text-bnb-blue/80 font-semibold transition-colors"
              >
                🎬 CLICK HERE TO WATCH
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process Section - Horizontal Numbered Layout */}
      <section id="process-startup" className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader
            title="Our Proven 3-Step Process"
            subtitle="From initial setup to ongoing management, we've perfected a seamless process to make your hosting journey effortless and profitable."
          />

          {/* Numbered connector row to match reference */}
          <div className="relative mx-auto max-w-7xl">
            <div className="hidden md:flex items-center justify-center mt-2">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.22 } } }}
                className="flex items-center w-full max-w-5xl gap-4 md:gap-6"
              >
                <motion.div
                  variants={{ hidden: { opacity: 0, scale: 0.7, y: 8 }, visible: { opacity: 1, scale: 1, y: 0 } }}
                  className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-bnb-blue text-white font-bold shadow-md ring-2 ring-white"
                >
                  1
                </motion.div>
                <motion.div
                  variants={{ hidden: { opacity: 0, scaleX: 0 }, visible: { opacity: 1, scaleX: 1 } }}
                  transition={{ duration: 0.5 }}
                  className="h-[2px] bg-bnb-blue/30 flex-1 rounded-full origin-left"
                />
                <motion.div
                  variants={{ hidden: { opacity: 0, scale: 0.7, y: 8 }, visible: { opacity: 1, scale: 1, y: 0 } }}
                  className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-bnb-blue text-white font-bold shadow-md ring-2 ring-white"
                >
                  2
                </motion.div>
                <motion.div
                  variants={{ hidden: { opacity: 0, scaleX: 0 }, visible: { opacity: 1, scaleX: 1 } }}
                  transition={{ duration: 0.5 }}
                  className="h-[2px] bg-bnb-blue/30 flex-1 rounded-full origin-left"
                />
                <motion.div
                  variants={{ hidden: { opacity: 0, scale: 0.7, y: 8 }, visible: { opacity: 1, scale: 1, y: 0 } }}
                  className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-bnb-blue text-white font-bold shadow-md ring-2 ring-white"
                >
                  3
                </motion.div>
              </motion.div>
            </div>
            <div className="grid gap-12 md:grid-cols-3 md:gap-10 mt-8 md:mt-10">
              {/* Step 1 */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0 }}
                className="relative text-center"
              >
                {/* Mobile number */}
                <motion.div
                  variants={{ hidden: { opacity: 0, scale: 0.7, y: 8 }, visible: { opacity: 1, scale: 1, y: 0 } }}
                  className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-bnb-blue text-white text-base font-bold shadow-md md:hidden"
                >
                  1
                </motion.div>
                {/* Image card */}
                <div className="mt-6 relative w-full h-48 sm:h-56 md:h-64 rounded-2xl overflow-hidden shadow-xl border border-white/20 bg-white">
                  <Image src="/step1-house-exterior.png" alt="Step 1 property setup" fill className="object-cover" />
                </div>
                {/* Text block */}
                <div className="mt-4 text-left px-1 max-w-prose mx-auto">
                  <h4 className="text-base md:text-lg font-semibold text-bnb-navy">Step 1: Property Setup & Staging</h4>
                  <p className="mt-2 text-sm md:text-base text-bnb-gray-dark">We tailor setup to your situation, whether designing, staging, or repurposing your property (even new land use) to get it rental ready. We handle the staging details for a smooth start.</p>
                </div>
              </motion.div>

              {/* Step 2 */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.44 }}
                className="relative text-center"
              >
                {/* Mobile number */}
                <motion.div
                  variants={{ hidden: { opacity: 0, scale: 0.7, y: 8 }, visible: { opacity: 1, scale: 1, y: 0 } }}
                  className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-bnb-blue text-white text-base font-bold shadow-md md:hidden"
                >
                  2
                </motion.div>
                {/* Image only (transparent PNG) */}
                <div className="mt-6 relative w-full h-48 sm:h-56 md:h-64 flex items-center justify-center">
                  <Image src="/listing-graphic.png" alt="Step 2 listing and marketing" fill className="object-contain" />
                </div>
                {/* Text block */}
                <div className="mt-4 text-left px-1 max-w-prose mx-auto">
                  <h4 className="text-base md:text-lg font-semibold text-bnb-navy">Step 2: Listing & Marketing</h4>
                  <p className="mt-2 text-sm md:text-base text-bnb-gray-dark">We build listings across platforms and run professional tools for pricing, taxes, and operations. Listing takes time; we progress this during staging or after if your home is already staged.</p>
                </div>
              </motion.div>

              {/* Step 3 */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.88 }}
                className="relative text-center"
              >
                {/* Mobile number */}
                <motion.div
                  variants={{ hidden: { opacity: 0, scale: 0.7, y: 8 }, visible: { opacity: 1, scale: 1, y: 0 } }}
                  className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-bnb-blue text-white text-base font-bold shadow-md md:hidden"
                >
                  3
                </motion.div>
                {/* Image card */}
                <div className="mt-6 relative w-full h-48 sm:h-56 md:h-64 rounded-2xl overflow-hidden shadow-xl border border-white/20 bg-white">
                  <Image src="/step3-office-space.png" alt="Step 3 hands-free management" fill className="object-cover" />
                </div>
                {/* Text block */}
                <div className="mt-4 text-left px-1 max-w-prose mx-auto">
                  <h4 className="text-base md:text-lg font-semibold text-bnb-navy">Step 3: Hands-Free Management</h4>
                  <p className="mt-2 text-sm md:text-base text-bnb-gray-dark">Once live, we manage day-to-day operations so you mainly handle basic property upkeep. Our team runs everything to keep it efficient and worry free.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Scope of Service Section */}
      <section className="relative bg-bnb-blue/5 py-16 md:py-20">
        <Image
          src="/32_440-s-pelican-dr-web (28 of 33).jpg"
          alt="Pelican Drive modern home exterior"
          fill
          className="object-cover object-[center_35%]"
        />
        <div className="absolute inset-0 bg-black/35" />
        <div className="relative container mx-auto px-4 md:px-6">
          <SectionHeader
            title="Clear Expectations: What's Included & What's Not"
            subtitle="Transparency is key to a successful partnership. Here's exactly what you can expect from us and what remains your responsibility."
            titleClassName="text-white"
            subtitleClassName="text-white/80"
          />
          <div className="max-w-6xl mx-auto mt-12">
            <IncludedChart />
          </div>
        </div>
      </section>

      {/* Revenue Section */}
      <ServiceDetailCard
        id="revenue"
        icon={TrendingUp}
        title={
          <>
            Making you <span className="text-bnb-blue">$$$</span>
          </>
        }
        titleString="Making you $$$"
        description="We work on a commission-only model—meaning we succeed when you do. Your earnings are deposited directly each month, making your investment truly passive and stress-free."
        imageUrl="/revenue-dashboard.png"
        imageAlt="KeyData performance dashboard showing revenue analytics and occupancy rates"
        imagePosition="right"
        className="bg-white"
        titleClassName="text-3xl sm:text-4xl md:text-5xl font-semibold text-bnb-navy mb-4"
        iconClassName="w-12 h-12 text-bnb-blue mr-4"
      />

      {/* All-Star Investor Club CTA */}
      <section id="investor-club" className="py-16 md:py-20 bg-bnb-blue/5 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-10 right-10 w-24 h-24 bg-bnb-blue/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-bnb-blue/5 rounded-full blur-3xl"></div>

        <div className="relative z-10">
          <InvestorClubSection />
        </div>
      </section>

      <section id="contact-us" className="relative overflow-hidden bg-white py-16 md:py-24">
        <Image
          src="/30_saybrook-hall-twilight-web (6 of 13).jpg"
          alt="Florida beach house background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
        {/* Decorative background elements */}
        <div className="absolute top-20 right-10 w-24 h-24 bg-bnb-blue/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-10 w-32 h-32 bg-bnb-blue/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
          <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-6">
                <div className="w-8 h-8 bg-bnb-blue rounded-full flex items-center justify-center mr-3">
                  <CheckCircle2 className="w-5 h-5 text-white" />
            </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                  Your Next Step To Higher Returns
            </h2>
          </div>
              <h3 className="text-xl md:text-2xl font-semibold text-white/90 mb-4 leading-tight">
                Get In Touch With Our Team And Book A Free Strategy Call To See How Much Your Home Could Earn
              </h3>
              <p className="text-lg text-white/80">Let us prove it to you.</p>
            </div>

            {/* Contact Form */}
            <div className="rounded-3xl border border-white/20 bg-white/10 p-8 shadow-xl backdrop-blur-lg md:p-12">
              <form className="space-y-6">
                {/* Name and Phone Row */}
              <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-white mb-2">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-bnb-gray-light/30 bg-white focus:outline-none focus:ring-2 focus:ring-bnb-blue focus:border-transparent transition-all duration-200"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-white mb-2">
                      Phone <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-bnb-gray-light/30 bg-white focus:outline-none focus:ring-2 focus:ring-bnb-blue focus:border-transparent transition-all duration-200"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                {/* Email and Property Address Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-bnb-gray-light/30 bg-white focus:outline-none focus:ring-2 focus:ring-bnb-blue focus:border-transparent transition-all duration-200"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="property-address" className="block text-sm font-semibold text-white mb-2">
                      Property Address
                    </label>
                    <input
                      type="text"
                      id="property-address"
                      name="property-address"
                      className="w-full px-4 py-3 rounded-xl border border-bnb-gray-light/30 bg-white focus:outline-none focus:ring-2 focus:ring-bnb-blue focus:border-transparent transition-all duration-200"
                      placeholder="123 Main St, City, State 12345"
                    />
            </div>
          </div>

                {/* Comments */}
            <div>
                  <label htmlFor="comments" className="block text-sm font-semibold text-white mb-2">
                    Comments
                  </label>
                  <textarea
                    id="comments"
                    name="comments"
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-bnb-gray-light/30 bg-white focus:outline-none focus:ring-2 focus:ring-bnb-blue focus:border-transparent transition-all duration-200 resize-vertical"
                    placeholder="Tell us about your property, goals, or any questions you have..."
                  ></textarea>
            </div>

                {/* Newsletter Signup Checkbox */}
                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="newsletter"
                    name="newsletter"
                    className="mt-1 w-4 h-4 text-bnb-blue bg-white border-bnb-gray-light rounded focus:ring-bnb-blue focus:ring-2"
                  />
                  <label htmlFor="newsletter" className="text-sm text-white/80 leading-relaxed">
                    Sign me up for insider deals and offers
                  </label>
          </div>

                {/* Submit Button */}
                <div className="text-center pt-4">
                  <Button
                    type="submit"
                    size="lg"
                    className="bg-bnb-blue hover:bg-bnb-blue/90 text-white px-12 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Submit
                  </Button>
              </div>
              </form>

              {/* Phone Number */}
              <div className="text-center mt-8 pt-8 border-t border-bnb-blue/20">
                <div className="flex items-center justify-center space-x-2">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <a
                    href="tel:+18659273393"
                    className="text-xl md:text-2xl font-bold text-white hover:text-white/80 transition-colors"
                  >
                    +1 (865) 927-3393
                  </a>
            </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 md:py-16 bg-bnb-navy text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-8 md:gap-12 lg:grid-cols-4">
            {/* Logo and Search Section */}
            <div className="lg:col-span-1">
              <Link href="/">
                <Image
                  src="/bnb-breeze-white-logo.png"
                  alt="BNB Breeze Logo"
                  width={180}
                  height={72}
                  className="mb-6"
                />
              </Link>

              {/* Search Bar */}
              <div className="relative mb-6">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full px-4 py-3 pr-12 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-bnb-blue focus:border-transparent"
                />
                <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white">
                  <Search className="w-5 h-5" />
                </button>
              </div>

              {/* New VRMA Logo */}
              <div className="mt-8">
                <Image src="/vrma-new-logo.png" alt="VRMA Logo" width={120} height={40} className="opacity-80" />
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-1">
              <h3 className="text-xl font-bold mb-6 text-white">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/properties" className="text-white/80 hover:text-bnb-blue transition-colors">
                    Properties by Name
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-white/80 hover:text-bnb-blue transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-white/80 hover:text-bnb-blue transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/owner-portal" className="text-white/80 hover:text-bnb-blue transition-colors">
                    Owner Portal
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy" className="text-white/80 hover:text-bnb-blue transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/str-summit" className="text-white/80 hover:text-bnb-blue transition-colors">
                    The STR Summit
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Us */}
            <div className="lg:col-span-1">
              <h3 className="text-xl font-bold mb-6 text-white">Contact Us</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-white font-semibold">BNB Breeze</p>
                  <p className="text-white/80">865-927-1393</p>
                  <Link
                    href="mailto:info@bnbbreeze.com"
                    className="text-white/80 hover:text-bnb-blue transition-colors"
                  >
                    Email Us
                  </Link>
                </div>

                {/* Social Media Icons */}
                <div className="flex space-x-4 pt-4">
                  <Link href="#" className="text-white/80 hover:text-bnb-blue transition-colors">
                    <Facebook className="w-6 h-6" />
                  </Link>
                  <Link href="#" className="text-white/80 hover:text-bnb-blue transition-colors">
                    <Twitter className="w-6 h-6" />
                  </Link>
                  <Link href="#" className="text-white/80 hover:text-bnb-blue transition-colors">
                    <Instagram className="w-6 h-6" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="lg:col-span-1">
              <h3 className="text-xl font-bold mb-6 text-white">Join The Breeze Club & Get 10% Off</h3>
              <p className="text-white/80 mb-6">
                To receive insider discounts, promos, and get 10% off your next booking!
              </p>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full px-4 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-bnb-blue focus:border-transparent"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full px-4 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-bnb-blue focus:border-transparent"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-bnb-blue focus:border-transparent"
                />
                <Button
                  type="submit"
                  className="w-full bg-white text-bnb-blue hover:bg-white/90 font-bold py-3 px-6 rounded-full transition-colors"
                >
                  Subscribe
                </Button>
              </form>
            </div>

            {/* Copyright Section */}
            <div className="lg:col-span-4 mt-12 pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center text-sm text-white/60">
              <p className="mb-4 md:mb-0">&copy; {new Date().getFullYear()} BNB Breeze. All rights reserved.</p>
              <p>Web Design by West Wave Creative</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
