import React from "react"

export default function ClearExpectationsSplitGlass() {
  const weDo = [
    { text: "Guest communication, scheduling, and review management", tag: "24/7" },
    { text: "Dynamic pricing and listing optimization across all channels", tag: "Revenue Focused" },
    { text: "Turnovers, restock, and cleaning standards enforcement", tag: "On-the-ground" },
    { text: "Tax collection, permits, and reporting", tag: "Compliance" },
    { text: "Damage claims + monthly performance reporting", tag: "Accountability" },
  ]

  const youDo = [
    { text: "Ongoing utilities / long-term services for the property", tag: "Owner" },
    { text: "Large-scale repairs (HVAC, plumbing, roof, etc.)", tag: "Licensed Tech" },
    { text: "General yard / exterior upkeep between guests", tag: "Local" },
    { text: "Long-term rental or tenant-style property management", tag: "Not Included" },
  ]

  return (
    <section className="relative w-full px-4 md:px-6 py-12 md:py-16 text-white overflow-hidden">
      {/* Subtle image and overlay are handled by parent section; this focuses on content + glass */}
      <div className="relative z-10 w-full max-w-6xl mx-auto">

        {/* two-column glass layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* LEFT / WE DO */}
          <div className="relative rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20 ring-1 ring-white/10 p-6 md:p-8 overflow-hidden">
            {/* liquid glass accents */}
            <div className="pointer-events-none absolute inset-x-0 -top-6 h-16 bg-gradient-to-b from-white/35 via-white/10 to-transparent" aria-hidden></div>
            <div className="pointer-events-none absolute -top-12 -left-12 h-40 w-40 rounded-full bg-bnb-blue/20 blur-3xl" aria-hidden></div>
            <div className="pointer-events-none absolute -bottom-16 -right-16 h-48 w-48 rounded-full bg-bnb-blue/10 blur-3xl" aria-hidden></div>

            <h3 className="text-white text-2xl md:text-3xl font-semibold tracking-tight flex items-baseline gap-2 relative">
              <span className="text-bnb-blue">What We Handle</span>
              <span className="text-[11px] font-medium text-white/60 uppercase">Full Service</span>
            </h3>

            <ul className="mt-6 space-y-4 text-white text-base relative">
              {weDo.map((item, idx) => (
                <li
                  key={idx}
                  className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 border-b border-white/15 pb-4 last:border-none last:pb-0"
                >
                  <span className="leading-snug font-medium text-white">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT / YOU HANDLE */}
          <div className="relative rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20 ring-1 ring-white/10 p-6 md:p-8 overflow-hidden">
            {/* liquid glass accents */}
            <div className="pointer-events-none absolute inset-x-0 -top-6 h-16 bg-gradient-to-b from-white/35 via-white/10 to-transparent" aria-hidden></div>
            <div className="pointer-events-none absolute -top-12 -left-12 h-40 w-40 rounded-full bg-rose-400/15 blur-3xl" aria-hidden></div>
            <div className="pointer-events-none absolute -bottom-16 -right-16 h-48 w-48 rounded-full bg-rose-400/10 blur-3xl" aria-hidden></div>

            <h3 className="text-white text-2xl md:text-3xl font-semibold tracking-tight flex items-baseline gap-2 relative">
              <span className="text-bnb-blue">What Stays With You</span>
              <span className="text-[11px] font-medium text-white/60 uppercase">Owner Scope</span>
            </h3>

            <ul className="mt-6 space-y-4 text-white text-base relative">
              {youDo.map((item, idx) => (
                <li
                  key={idx}
                  className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 border-b border-white/15 pb-4 last:border-none last:pb-0"
                >
                  <span className="leading-snug font-medium text-white">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="text-base sm:text-lg md:text-xl text-white/75 text-center mt-10 max-w-2xl mx-auto leading-relaxed font-medium">
          For anything not included (major repairs, utilities, etc.) we’ll still coordinate vendors and help you get it solved fast — we just don’t bill it as part of our management fee.
        </p>
      </div>
    </section>
  )
}


