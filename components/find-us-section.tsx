'use client'

import { MapWithMarkers } from '@/components/cdo-mark-map'

export default function FindUsSection() {
  return (
    <section className="relative bg-primary overflow-hidden min-h-[700px] py-20">

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-6">

        {/* Header */}
        <div className="mb-12 text-center group">
          <h2 className="text-3xl md:text-4xl font-bold text-white relative inline-block transition-colors duration-300 group-hover:text-accent">
            Find Us
            <span className="absolute left-1/2 -bottom-2 w-24 h-1 bg-accent rounded-full -translate-x-1/2 transition-all duration-300 group-hover:w-32"></span>
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-lg text-white/80">
            Visit our restaurant in the heart of downtown — easy to find and worth the trip.
          </p>
        </div>

        {/* Map Card */}
        <div className="overflow-hidden rounded-3xl bg-white shadow-2xl transition-transform duration-500 hover:shadow-3xl hover:scale-[1.02]">
          <div className="h-[400px] w-full">
            <MapWithMarkers />
          </div>
        </div>

      </div>

    </section>
  )
}
