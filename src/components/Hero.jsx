import { motion, useScroll, useTransform } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 500], [0, 100])
  const y2 = useTransform(scrollY, [0, 500], [0, -80])
  const opacity = useTransform(scrollY, [0, 400], [1, 0.6])

  return (
    <section id="home" className="relative min-h-[100svh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <motion.div style={{ y: y1, opacity }} className="max-w-2xl">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-4xl sm:text-6xl font-bold tracking-tight text-white">
            Building immersive web experiences
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }} className="mt-4 text-neutral-200 text-lg">
            I craft modern, performant interfaces with React, Next.js, and delightful motion.
          </motion.p>
          <motion.div style={{ y: y2 }} className="mt-8 flex gap-3">
            <a href="#projects" className="pointer-events-auto inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 font-medium text-neutral-900 shadow hover:shadow-lg transition">
              View Projects
            </a>
            <a href="#contact" className="pointer-events-auto inline-flex items-center justify-center rounded-xl border border-white/40 bg-transparent px-5 py-3 font-medium text-white/90 backdrop-blur hover:bg-white/10 transition">
              Contact Me
            </a>
          </motion.div>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute -bottom-24 left-1/2 -translate-x-1/2 w-[140%] h-72 rounded-[100%] blur-3xl opacity-40" style={{ background: 'radial-gradient(60% 60% at 50% 50%, rgba(168,85,247,0.6), rgba(59,130,246,0.4), transparent 70%)' }} />
    </section>
  )
}
