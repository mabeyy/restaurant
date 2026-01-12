'use client'

import { useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import foodIMG from '@/assets/food.jpg'
import { Button } from './ui/button'

export default function MenuSection() {
  const [open, setOpen] = useState(false)
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], ['0%', '20%'])

  return (
    <section className="relative h-[500px] overflow-hidden text-white">
      {/* Moving background */}
      <motion.div
        style={{
          y,
          // backgroundImage: `url(${foodIMG.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className="absolute inset-0"
      />


      {/* Content */}
      <div className="relative z-10 py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Our Menu</h2>
        <p className="max-w-xl mx-auto mb-8">
          Discover our carefully curated dishes.
        </p>

        <Button
            size="lg"
            variant="default"
            onClick={() => setOpen(true)}
          >
            View Menu
          </Button>

      </div>
    </section>
  )
}
