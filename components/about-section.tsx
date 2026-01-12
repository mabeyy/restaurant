'use client'

import { useState } from 'react'
import { Blob } from './blob'
import aboutImg from '@/assets/about.jpg'
import { Button } from './ui/button'

export default function AboutSection() {
  const [open, setOpen] = useState(false)

  return (
    <section className="relative py-20 sm:py-28 lg:py-36 overflow-hidden text-white bg-primary">

      {/* Layered aesthetic blobs */}
      <Blob
        className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-accent/30 blur-3xl"
        duration={50}
        delay={0}
      />
      <Blob
        className="absolute -bottom-32 -right-24 w-[500px] h-[500px] bg-accent/20 blur-3xl"
        duration={60}
        delay={5}
      />
      <Blob
        className="absolute top-1/2 -right-40 w-[300px] h-[300px] bg-accent/25 blur-2xl"
        duration={45}
        delay={2}
      />
      <Blob
        className="absolute bottom-1/3 -left-20 w-[250px] h-[250px] bg-accent/15 blur-2xl"
        duration={55}
        delay={3}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 space-y-12">

        {/* Header */}
      <div className="max-w-3xl mx-auto text-center group">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold relative inline-block transition-colors duration-300 group-hover:text-accent">
          About Us
          <span className="absolute left-1/2 -bottom-2 w-24 h-1 bg-accent rounded-full -translate-x-1/2 transition-all duration-300 group-hover:w-32"></span>
        </h2>
        <p className="mt-4 text-gray-200 text-lg sm:text-xl">
          Where culinary craftsmanship meets refined dining.
        </p>
      </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">

          {/* Background Image Panel */}
          <div
            className="hidden md:block relative rounded-3xl overflow-hidden shadow-2xl h-96"
            style={{
              backgroundImage: `url(${aboutImg.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />

          {/* Text */}
          <div className="flex flex-col justify-center gap-6">
            <p className="text-lg sm:text-xl leading-relaxed max-w-xl">
              <span className="font-semibold text-accent">DIBS Restaurant</span> is where culinary craftsmanship meets refined dining. Each dish is carefully curated using high-quality ingredients, inspired by classic techniques, and elevated with contemporary flavors.
            </p>

            <p className="text-lg sm:text-xl leading-relaxed max-w-xl text-gray-200">
              From the first bite to the last, we are dedicated to delivering an exceptional dining experience—one that celebrates flavor, elegance, and attention to detail.
            </p>

            <Button
              size="lg"
              variant="default"
              onClick={() => setOpen(true)}
              className="shadow-[2px_2px_10px_rgba(0,0,0,0.4)] shadow-black/60 -translate-y-1 -translate-x-1 transition-transform duration-300"
            >
              Learn More
            </Button>
          </div>

        </div>
      </div>
    </section>
  )
}
