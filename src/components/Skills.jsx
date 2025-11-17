import { motion } from 'framer-motion'

const skills = [
  { name: 'Next.js', level: 90 },
  { name: 'React', level: 92 },
  { name: 'TypeScript', level: 85 },
  { name: 'Tailwind', level: 88 },
  { name: 'Framer Motion', level: 86 },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">Skills</h2>
          <p className="mt-3 text-neutral-300">A snapshot of my toolkit and proficiency.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((s, i) => (
            <motion.div key={s.name} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06, duration: 0.6, ease: [0.22, 1, 0.36, 1] }} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="flex items-center justify-between">
                <span className="text-white/90 font-medium">{s.name}</span>
                <span className="text-white/70 text-sm">{s.level}%</span>
              </div>
              <div className="mt-3 h-2 rounded-full bg-white/10 overflow-hidden">
                <motion.div className="h-full rounded-full bg-gradient-to-r from-fuchsia-500 to-sky-500" initial={{ width: 0 }} whileInView={{ width: s.level + '%' }} viewport={{ once: true }} transition={{ duration: 1.2, delay: 0.2 }} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
