import React from "react"
import Image from "next/image"
import Link from "next/link"
import Reveal from "@/components/reveal"

export default function StagingPortfolio() {
  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <Reveal staggerChildren className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-bnb-blue/10 rounded-full mb-4">
            <span className="text-bnb-blue font-semibold text-sm uppercase tracking-wide">Our Work</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-bnb-navy mb-4 leading-tight">Staging Portfolio</h2>
          <p className="text-lg md:text-xl text-bnb-gray-dark max-w-3xl mx-auto leading-relaxed">
            Explore our collection of beautifully staged properties that maximize appeal and rental potential
          </p>
        </Reveal>

        {/* Pinterest-style Masonry Gallery */}
        <Reveal staggerChildren className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          <div className="break-inside-avoid">
            <Link href="https://bnbbreeze.co/rentals/the-smoky-mountain-barndominium" target="_blank" rel="noopener noreferrer">
              <Image
                src="/gallery/dji_0793.jpeg"
                alt="Dark modern cabin with a pool and fire pit area, surrounded by mountains at sunset"
                width={400}
                height={600}
                className="w-full h-auto object-cover rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
                style={{ aspectRatio: "400/600" }}
              />
            </Link>
          </div>

          <div className="break-inside-avoid">
            <Link href="https://bnbbreeze.co/rentals/sapphire-shores" target="_blank" rel="noopener noreferrer">
              <Image
                src="/gallery/107-00000551.jpeg"
                alt="Large multi-story house with a spacious pool deck, lounge chairs, and a spiral staircase"
                width={400}
                height={700}
                className="w-full h-auto object-cover rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
                style={{ aspectRatio: "400/700" }}
              />
            </Link>
          </div>

          <div className="break-inside-avoid">
            <Link href="https://bnbbreeze.co/rentals/the-green-creek-shipyard-20" target="_blank" rel="noopener noreferrer">
              <Image
                src="/gallery/5d8a4917-hdr.jpeg"
                alt="Modern cabin with string lights, a fire pit, and outdoor seating, surrounded by trees at dusk"
                width={400}
                height={400}
                className="w-full h-auto object-cover rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
                style={{ aspectRatio: "400/400" }}
              />
            </Link>
          </div>

          <div className="break-inside-avoid">
            <Link href="https://bnbbreeze.co/rentals/the-airy-bungalow" target="_blank" rel="noopener noreferrer">
              <Image
                src="/gallery/26-twilight-6.jpeg"
                alt="Backyard with a large swimming pool, hot tub, and outdoor kitchen area, illuminated by string lights at twilight"
                width={400}
                height={550}
                className="w-full h-auto object-cover rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
                style={{ aspectRatio: "400/550" }}
              />
            </Link>
          </div>

          <div className="break-inside-avoid">
            <Link href="https://bnbbreeze.co/rentals/maplewood-haven" target="_blank" rel="noopener noreferrer">
              <Image
                src="/gallery/dji_0162hdr.jpeg"
                alt="Cozy cabin with a large deck, hot tub, and stone fire pit area, surrounded by trees"
                width={400}
                height={320}
                className="w-full h-auto object-cover rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
                style={{ aspectRatio: "400/320" }}
              />
            </Link>
          </div>

          <div className="break-inside-avoid">
            <Link href="https://bnbbreeze.co/rentals/teton-valley-retreat" target="_blank" rel="noopener noreferrer">
              <Image
                src="/gallery/54-img_0071.jpeg"
                alt="Spacious living room with high ceilings, wooden walls, a stone fireplace, and large windows overlooking a snowy landscape"
                width={400}
                height={480}
                className="w-full h-auto object-cover rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
                style={{ aspectRatio: "400/480" }}
              />
            </Link>
          </div>

          <div className="break-inside-avoid">
            <Link href="https://bnbbreeze.co/rentals/bethany-beach-breakaway" target="_blank" rel="noopener noreferrer">
              <Image
                src="/gallery/p1016816cl.jpeg"
                alt="Modern living room with a large sectional sofa, fireplace, and a shuffleboard table"
                width={400}
                height={280}
                className="w-full h-auto object-cover rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
                style={{ aspectRatio: "400/280" }}
              />
            </Link>
          </div>

          <div className="break-inside-avoid">
            <Link href="https://bnbbreeze.co/rentals/paradise-palms" target="_blank" rel="noopener noreferrer">
              <Image
                src="/gallery/18-00000053.jpeg"
                alt="House with a backyard pool featuring green lighting and lounge chairs, surrounded by grass and trees at dusk"
                width={400}
                height={260}
                className="w-full h-auto object-cover rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
                style={{ aspectRatio: "400/260" }}
              />
            </Link>
          </div>

          <div className="break-inside-avoid">
            <Link href="https://bnbbreeze.co/rentals/harbor-view-haven" target="_blank" rel="noopener noreferrer">
              <Image
                src="/gallery/mr200095.jpeg"
                alt="Outdoor hot tub with a view of a lake and string lights, surrounded by trees at sunset"
                width={400}
                height={520}
                className="w-full h-auto object-cover rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
                style={{ aspectRatio: "400/520" }}
              />
            </Link>
          </div>

          <div className="break-inside-avoid">
            <Link href="https://bnbbreeze.co/rentals/bahama-breeze" target="_blank" rel="noopener noreferrer">
              <Image
                src="/gallery/28-dining-room-4.jpeg"
                alt="Dining room with a large wooden table, modern chairs, and a view into a living room with a stone fireplace"
                width={400}
                height={450}
                className="w-full h-auto object-cover rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
                style={{ aspectRatio: "400/450" }}
              />
            </Link>
          </div>

          <div className="break-inside-avoid">
            <Link href="https://bnbbreeze.co/rentals/bay-bliss-bungalow" target="_blank" rel="noopener noreferrer">
              <Image
                src="/gallery/08-00000119.jpeg"
                alt="Spacious bedroom with a large bed, blue accent wall, and modern decor"
                width={400}
                height={350}
                className="w-full h-auto object-cover rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
                style={{ aspectRatio: "400/350" }}
              />
            </Link>
          </div>

          <div className="break-inside-avoid">
            <Link href="https://bnbbreeze.co/rentals/costa-del-ray" target="_blank" rel="noopener noreferrer">
              <Image
                src="/gallery/28-living-room-4.jpeg"
                alt="Cozy living room with a brown leather sofa, wooden coffee table, and a large TV mounted on a slatted wall"
                width={400}
                height={400}
                className="w-full h-auto object-cover rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
                style={{ aspectRatio: "400/400" }}
              />
            </Link>
          </div>

          <div className="break-inside-avoid">
            <Link href="https://bnbbreeze.co/rentals/living-the-dream" target="_blank" rel="noopener noreferrer">
              <Image
                src="/gallery/61-twilight-6.jpeg"
                alt="House with a backyard pool and a putting green, surrounded by trees at twilight"
                width={400}
                height={600}
                className="w-full h-auto object-cover rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
                style={{ aspectRatio: "400/600" }}
              />
            </Link>
          </div>

          <div className="break-inside-avoid">
            <Link href="https://bnbbreeze.co/rentals/blue-ridge-mini-lux-retreat-1" target="_blank" rel="noopener noreferrer">
              <Image
                src="/gallery/rnb-200108.jpeg"
                alt="Modern cabin with large glass windows, a hot tub on the deck, and mountain views at sunset"
                width={400}
                height={240}
                className="w-full h-auto object-cover rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
                style={{ aspectRatio: "400/240" }}
              />
            </Link>
          </div>

          <div className="break-inside-avoid">
            <Link href="https://bnbbreeze.co/rentals/just-beachy" target="_blank" rel="noopener noreferrer">
              <Image
                src="/gallery/48-twilight-3.jpeg"
                alt="Pool area with brick paving, an inflatable swan, and an outdoor lounge area, illuminated at twilight"
                width={400}
                height={550}
                className="w-full h-auto object-cover rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
                style={{ aspectRatio: "400/550" }}
              />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
