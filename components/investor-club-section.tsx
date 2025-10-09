import React, { useMemo } from "react"
import { motion } from "framer-motion"
import { Award, DollarSign, Users, BarChart, ShieldCheck, Sparkles, ArrowRight, Crown } from "lucide-react"

// InvestorClubSection – contents only; styled for BNB Breeze
export default function InvestorClubSection() {
  const perks = useMemo(
    () => [
      { title: "Reduced Commission", icon: DollarSign, desc: "Tiered pricing that scales as your portfolio grows." },
      { title: "Dedicated Support", icon: Users, desc: "Priority channel to a senior account manager." },
      { title: "Market Insights", icon: BarChart, desc: "Quarterly reports and strategic revenue guidance." },
      { title: "VIP Treatment", icon: Award, desc: "Owner perks, faster turnarounds, and white-glove ops." },
    ],
    []
  )

  return (
    <div className="container mx-auto px-4 md:px-6">
      {/* Heading cluster */}
      <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mx-auto max-w-4xl text-center">
        <div className="inline-block px-4 py-2 bg-bnb-blue/10 rounded-full mb-4">
          <span className="text-bnb-blue font-semibold text-sm uppercase tracking-wide">All-Star Investor Club</span>
        </div>

        <h2 className="mt-6 text-3xl font-bold tracking-tight text-bnb-navy md:text-4xl">3+ Properties? Join Our Exclusive Club</h2>
        <p className="mx-auto mt-3 max-w-2xl text-bnb-gray-dark">Premium support, discounted rates, and hands-off management for serious investors.</p>
      </motion.div>

      {/* Value highlight card */}
      <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, delay: 0.08 }} className="mx-auto mt-10 max-w-5xl">
        <div className="relative overflow-hidden rounded-2xl border border-white/25 ring-1 ring-white/10 bg-white/15 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] md:p-8 p-6">
          {/* Liquid glass accents */}
          <div className="pointer-events-none absolute -top-10 -left-10 w-40 h-40 bg-bnb-blue/20 rounded-full blur-3xl" />
          <div className="pointer-events-none absolute -bottom-12 -right-12 w-52 h-52 bg-bnb-blue/10 rounded-full blur-3xl" />
          <div className="pointer-events-none absolute inset-x-0 -top-6 h-24 bg-gradient-to-b from-white/40 via-white/10 to-transparent" />
          <div className="grid items-center gap-6 md:grid-cols-2 md:gap-10">
            <div>
              <div className="flex items-center gap-2 text-bnb-blue">
                <ShieldCheck className="h-5 w-5" />
                <span className="text-sm font-semibold uppercase tracking-wide">Built for portfolio owners</span>
              </div>
              <h3 className="mt-2 text-2xl font-semibold text-bnb-navy">Concierge operations, smarter pricing, better returns</h3>
              <p className="mt-2 text-bnb-gray-dark">We streamline turnovers, optimize nightly rates, and keep your calendar humming—so you don’t have to.</p>

              <div className="mt-4 flex flex-wrap items-center gap-3 text-sm">
                <span className="inline-flex items-center rounded-md bg-bnb-blue/10 px-3 py-1 text-bnb-blue ring-1 ring-inset ring-bnb-blue/20">
                  <Sparkles className="mr-1.5 h-4 w-4" /> Priority onboarding
                </span>
                <span className="inline-flex items-center rounded-md bg-bnb-blue/10 px-3 py-1 text-bnb-blue ring-1 ring-inset ring-bnb-blue/20">
                  <BarChart className="mr-1.5 h-4 w-4" /> Revenue strategy reviews
                </span>
              </div>

              <div className="mt-6">
                <a href="#contact-us" className="inline-flex items-center justify-center rounded-lg bg-bnb-blue px-5 py-3 text-white shadow-sm transition hover:bg-bnb-blue/90 focus:outline-none focus:ring-2 focus:ring-bnb-blue/60">
                  Join Now <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Perks grid */}
            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {perks.map(({ title, icon: Icon, desc }) => (
                <li key={title} className="group relative overflow-hidden rounded-xl border border-bnb-blue/20 bg-white p-4 shadow-sm">
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-lg bg-bnb-blue/10 text-bnb-blue">
                      <Icon className="h-5 w-5 md:h-6 md:w-6" />
                    </span>
                    <div>
                      <h4 className="text-base font-semibold text-bnb-navy">{title}</h4>
                      <p className="mt-1 text-sm leading-relaxed text-bnb-gray-dark">{desc}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>

      {/* Quick row of benefits (compact) */}
      <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.12 }} className="mx-auto mt-10 flex max-w-5xl flex-wrap justify-center gap-4 text-sm">
        {[
          { Icon: DollarSign, label: "Discounted rates" },
          { Icon: Users, label: "Senior support" },
          { Icon: BarChart, label: "Portfolio analytics" },
          { Icon: Award, label: "Owner perks" },
        ].map(({ Icon, label }) => (
          <div key={label} className="inline-flex items-center rounded-full bg-white/70 px-3 py-1.5 text-bnb-gray-dark ring-1 ring-black/5 backdrop-blur">
            <Icon className="mr-2 h-4 w-4 text-bnb-blue" /> {label}
          </div>
        ))}
      </motion.div>

      {/* Eligibility strip */}
      <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.16 }} className="mx-auto mt-8 max-w-3xl">
        <div className="rounded-xl border border-bnb-blue/20 bg-white/70 p-4 text-center text-sm text-bnb-gray-dark shadow-sm backdrop-blur">
          <span className="font-medium text-bnb-navy">Eligibility:</span> Owners with <span className="font-semibold text-bnb-blue">3 or more properties</span> qualify for exclusive pricing and concierge services.
        </div>
      </motion.div>
    </div>
  )
}


