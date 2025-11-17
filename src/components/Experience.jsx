import { motion } from 'framer-motion'

const items = [
  { role: 'Senior Frontend Engineer', company: 'Cyber Labs', period: '2023 — Present', points: ['Led design system', 'Performance optimizations', 'Introduced motion guidelines'] },
  { role: 'Frontend Engineer', company: 'Neon Studio', period: '2021 — 2023', points: ['Built dashboards', 'Moved to Next.js', 'Improved accessibility'] },
  { role: 'UI Engineer', company: 'Freelance', period: '2019 — 2021', points: ['Prototypes', 'Animations', 'Landing pages'] },
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">Experience</h2>
        <div className="relative mt-12">
          <div className="absolute left-4 sm:left-1/2 sm:-translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-white/10 via-white/20 to-transparent" />
          <div className="space-y-12">
            {items.map((item, i) => (
              <motion.div key={item.role} initial={{ opacity: 0, x: i % 2 ? 40 : -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }} className={`relative sm:w-1/2 ${i % 2 ? 'sm:ml-auto pl-12 sm:pl-8' : 'sm:pr-8 pl-12'}`}>
                <div className="absolute left-4 sm:left-auto sm:right-[-7px] top-2 h-3 w-3 rounded-full bg-gradient-to-br from-fuchsia-500 to-sky-500 shadow shadow-fuchsia-500/30" />
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-white">{item.role}</h3>
                    <span className="text-sm text-white/60">{item.period}</span>
                  </div>
                  <p className="mt-1 text-white/80">{item.company}</p>
                  <ul className="mt-4 space-y-2 list-disc list-inside text-white/80">
                    {item.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
