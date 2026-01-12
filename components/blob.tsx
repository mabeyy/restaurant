'use client'

import { motion } from 'framer-motion'

interface BlobProps {
  className?: string
  rotate?: number
  scale?: number[]
  duration?: number
  delay?: number
}

export function Blob({
  className,
  rotate = 360,
  scale = [1, 1.2, 1],
  duration = 40,
  delay = 0,
}: BlobProps) {
  return (
    <motion.div
      className={`${className} rounded-full`}
      animate={{ rotate, scale }}
      transition={{ repeat: Infinity, duration, ease: 'linear', delay }}
    />
  )
}
