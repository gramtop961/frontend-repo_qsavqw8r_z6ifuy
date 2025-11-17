import { motion } from 'framer-motion'

const projects = [
  { title: 'Neon Dashboard', tag: 'UI/UX', image: 'https://images.unsplash.com/photo-1552650456-99a628538cf8?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxOZW9uJTIwRGFzaGJvYXJkfGVufDB8MHx8fDE3NjMzNDkyODB8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80', link: '#' },
  { title: 'E-commerce Kit', tag: 'Frontend', image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop', link: '#' },
  { title: 'Motion Library', tag: 'Open Source', image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1600&auto=format&fit=crop', link: '#' },
  { title: 'AI Playground', tag: 'R&D', image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1600&auto=format&fit=crop', link: '#' },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-32 bg-gradient-to-b from-neutral-950/30 to-transparent">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">Selected Projects</h2>
          <p className="mt-3 text-neutral-300">Hover to preview and click to learn more.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.a key={p.title} href={p.link} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06, duration: 0.6, ease: [0.22, 1, 0.36, 1] }} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <div className="aspect-video overflow-hidden">
                <img src={p.image} alt={p.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-110" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition" />
              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition">
                <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs text-white/90 backdrop-blur">{p.tag}</span>
                <h3 className="mt-3 text-lg font-semibold text-white">{p.title}</h3>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
