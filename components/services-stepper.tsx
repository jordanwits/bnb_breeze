"use client"

import React, { useState, useCallback, useRef } from "react"
import { motion, AnimatePresence, useReducedMotion } from "framer-motion"
import { ChevronLeft, ChevronRight, Check } from "lucide-react"

// BNB Breeze – Services Stepper (Styled)
// - Gallery-style slide transitions with direction.
// - Swipe gestures on mobile; arrows on desktop.
// - Styled with BNB Breeze colors and inherits global fonts.

const SERVICES: { key: string; title: string; bullets: string[] }[] = [
  { key: "reservations", title: "Reservations Management", bullets: ["24/7 Guest Communications", "Guest Review Management", "Dreamweaving (One of our favorites — ask us why)", "Custom Guest Guidebooks", "Lead Management"] },
  { key: "revenue", title: "Revenue Management", bullets: ["Dynamic Pricing", "Performance Reporting and Analytics", "Proformas and Revenue Projections", "Market Data and Analysis"] },
  { key: "marketing", title: "Marketing", bullets: ["Listing Creation", "Ongoing Listing Optimization to Latest SEO Trends", "Listing on Multiple OTAs", "Access to BNB Breeze Repeat Customer Base", "Property Photography and Staging", "The Breeze Club Booking Program", "Email Marketing"] },
  { key: "maintenance", title: "Maintenance Management", bullets: ["Subcontractor Management", "Guest Damages Protection (At no cost to you!)", "Preventive Maintenance", "Guest Maintenance Resolutions"] },
  { key: "homeowner", title: "Homeowner Relations", bullets: ["Portfolio Reporting, Advice, Planning", "Owner Portal", "STR Industry Tips/Tricks"] },
  { key: "cleaning", title: "Cleaning Management", bullets: ["Oversees Turnovers and Cleanings", "Restocking Supplies", "Trains cleaners to BNB Breeze cleaning standards.", "Schedules Deep Cleaning"] },
  { key: "accounting", title: "Accounting", bullets: ["Monthly Homeowner Payouts", "Create State Sales Tax Account", "Collect and Remit Sales tax to local government"] },
  { key: "administration", title: "Administration", bullets: ["STR Licensing and Registration"] },
]

function nextIndex(current: number, delta: number, total: number): number {
  return (current + delta + total) % total
}

export default function ServicesStepper() {
  const [index, setIndex] = useState(0)
  const total = SERVICES.length
  const service = SERVICES[index]
  const isSingleBullet = service.bullets.length === 1
  const prefersReduced = useReducedMotion()

  // Direction-aware slide transitions
  const [direction, setDirection] = useState(1) // 1 = next/right, -1 = prev/left
  const goPrev = useCallback(() => {
    setDirection(-1)
    setIndex((i) => nextIndex(i, -1, total))
  }, [total])
  const goNext = useCallback(() => {
    setDirection(1)
    setIndex((i) => nextIndex(i, +1, total))
  }, [total])

  const duration = prefersReduced ? 0 : 0.35
  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 60 : -60, opacity: 0, position: "absolute" as const, width: "100%" }),
    center: { x: 0, opacity: 1, position: "relative" as const },
    exit: (dir: number) => ({ x: dir > 0 ? -60 : 60, opacity: 0, position: "absolute" as const, width: "100%" }),
  }

  // Swipe gesture support
  const touchStartX = useRef<number | null>(null)
  const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.changedTouches[0]?.clientX ?? null
  }
  const onTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) return
    const dx = e.changedTouches[0]?.clientX - touchStartX.current
    if (dx !== undefined && Math.abs(dx) > 40) {
      if (dx < 0) {
        setDirection(1)
        goNext()
      } else {
        setDirection(-1)
        goPrev()
      }
    }
    touchStartX.current = null
  }

  return (
    <div className="relative w-full py-6">
      <div className="max-w-4xl mx-auto p-[2px] rounded-3xl relative bg-gradient-to-br from-bnb-blue/30 via-transparent to-bnb-blue/30">
        <section
          role="region"
          aria-live="polite"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          className="rounded-3xl overflow-hidden relative bg-bnb-navy/80 text-white border border-white/20 backdrop-blur shadow-2xl"
        >
          {/* Liquid glass accents */}
          <div className="pointer-events-none absolute inset-x-0 -top-6 h-16 bg-gradient-to-b from-white/30 via-white/10 to-transparent" aria-hidden></div>
          <div className="pointer-events-none absolute -top-16 -left-16 h-40 w-40 rounded-full bg-bnb-blue/20 blur-3xl" aria-hidden></div>
          <div className="pointer-events-none absolute -bottom-20 -right-20 h-48 w-48 rounded-full bg-bnb-blue/10 blur-3xl" aria-hidden></div>
          <motion.div
            className="pointer-events-none absolute -inset-y-16 -left-1/3 w-1/3 rotate-12 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            initial={{ x: "-40%" }}
            whileInView={{ x: ["-40%", "140%"] }}
            viewport={{ once: false, amount: 0.6 }}
            transition={{ duration: 7, ease: "easeInOut", repeat: Infinity, repeatDelay: 3 }}
            aria-hidden
          />
          {/* Header */}
          <div className="px-8 pt-8 pb-4 flex items-center gap-4 border-b border-white/20">
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">{service.title}</h2>
              <p className="text-xs mt-1 text-white/70">{index + 1} of {total} · Use the arrows to see more features</p>
            </div>
          </div>

          {/* Slide area */}
          <div className="px-16 py-6 md:px-20 lg:px-24 transition-all duration-300">
            <AnimatePresence custom={direction} initial={false} mode="popLayout">
              <motion.div
                key={service.key}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration, ease: "easeOut" }}
                className={`grid gap-3 relative items-start content-start ${isSingleBullet ? "" : "min-h-[220px]"}`}
              >
                {service.bullets.map((b, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25, delay: 0.05 * i }}
                    className={`flex items-start gap-3 rounded-2xl px-4 ${isSingleBullet ? "py-2.5 w-full" : "py-3 w-full"} bg-white/10 border border-white/20`}
                  >
                    <div className="mt-0.5">
                      <div className="w-5 h-5 rounded-full flex items-center justify-center bg-bnb-blue/20 text-bnb-blue border border-white/20">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                    </div>
                    <div className="leading-tight">{b}</div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Side arrows */}
          <button
            onClick={goPrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-white/20 transition p-3 rounded-full text-white"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={goNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-white/20 transition p-3 rounded-full text-white"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots */}
          <div className="flex justify-center items-center gap-2 pb-5">
            {SERVICES.map((s, i) => (
              <button
                key={s.key}
                onClick={() => { setDirection(i > index ? 1 : -1); setIndex(i); }}
                aria-label={`Go to ${s.title}`}
                className={`h-2.5 rounded-full transition-all ${i === index ? "w-8 bg-bnb-blue" : "w-2.5 bg-white/25"}`}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}


