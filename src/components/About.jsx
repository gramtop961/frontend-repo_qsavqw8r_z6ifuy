import { motion } from 'framer-motion'

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } },
}

const item = {
  hidden: { y: 24, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32 bg-gradient-to-b from-transparent to-neutral-950/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-100px' }} className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div variants={item}>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">About Me</h2>
            <p className="mt-4 text-neutral-300 leading-relaxed">
              I’m a front-end engineer specializing in React and motion design. I love building polished products that feel fast and alive.
            </p>
            <p className="mt-4 text-neutral-300 leading-relaxed">
              My focus is on accessibility, performance, and micro-interactions that elevate the UX.
            </p>
          </motion.div>
          <motion.div variants={item} className="relative">
            <div className="absolute -inset-6 -z-10 rounded-3xl bg-gradient-to-br from-fuchsia-500/20 to-sky-500/20 blur-2xl" />
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <ul className="grid grid-cols-2 gap-4">
                {['Next.js', 'React', 'TypeScript', 'Framer Motion', 'Tailwind', 'Node.js'].map((s) => (
                  <li key={s} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/90">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
