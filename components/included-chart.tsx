import React from "react"
import { CheckCircle2, XCircle } from "lucide-react"

// Responsive "What's Included vs. What's Not" chart
// - Table on desktop
// - Stacked cards on mobile

export default function IncludedChart() {
  const services = [
    { service: "Market your property across all major channels", do: true },
    { service: "Implement dynamic pricing and listing optimization", do: true },
    { service: "Manage all guest communications and scheduling", do: true },
    { service: "Handle professional cleanings and property inspections", do: true },
    { service: "Collect and remit taxes, and manage permits", do: true },
    { service: "Coordinate small maintenance and reorder supplies", do: true },
    { service: "Process damage claims and provide monthly reports", do: true },
    { service: "Manage long-term rentals or property utilities", do: false },
    { service: "Handle general yard maintenance or home upkeep", do: false },
    { service: "Perform large-scale repairs (e.g., broken A/C units)", do: false },
  ]

  return (
    <div className="w-full">
      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto bg-white/95 backdrop-blur-sm shadow-lg rounded-2xl border border-bnb-gray-light/20">
        <table className="w-full text-left border-collapse">
          <thead className="bg-bnb-gray-light/5 border-b border-bnb-gray-light/30">
            <tr>
              <th className="py-4 px-6 text-bnb-navy font-semibold text-lg">Service</th>
              <th className="py-4 px-6 text-green-700 font-semibold text-lg text-center">We Do</th>
              <th className="py-4 px-6 text-red-700 font-semibold text-lg text-center">We Don’t</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-bnb-gray-light/30 text-bnb-gray-dark">
            {services.map((item, i) => (
              <tr key={i} className="bg-white">
                <td className="py-4 px-6 align-top">{item.service}</td>
                <td className="py-4 px-6 text-center">
                  {item.do ? (
                    <div className="inline-flex items-center gap-2 text-green-600 font-semibold">
                      <CheckCircle2 className="w-5 h-5" />
                      <span className="hidden lg:inline">Included</span>
                    </div>
                  ) : (
                    <span className="text-bnb-gray-medium">—</span>
                  )}
                </td>
                <td className="py-4 px-6 text-center">
                  {!item.do ? (
                    <div className="inline-flex items-center gap-2 text-red-600 font-semibold">
                      <XCircle className="w-5 h-5" />
                      <span className="hidden lg:inline">Not Included</span>
                    </div>
                  ) : (
                    <span className="text-bnb-gray-medium">—</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden space-y-4">
        {services.map((item, i) => (
          <div key={i} className="bg-white/95 backdrop-blur-sm shadow-md rounded-2xl border border-bnb-gray-light/20 p-4">
            <p className="text-bnb-navy font-medium mb-2">{item.service}</p>
            {item.do ? (
              <div className="inline-flex items-center gap-2 text-green-600 font-semibold text-sm">
                <CheckCircle2 className="w-4 h-4" /> Included
              </div>
            ) : (
              <div className="inline-flex items-center gap-2 text-red-600 font-semibold text-sm">
                <XCircle className="w-4 h-4" /> Not Included
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}


