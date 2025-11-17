import { motion, useScroll, useTransform } from 'framer-motion'

export default function Contact() {
  const { scrollY } = useScroll()
  const parallax = useTransform(scrollY, [0, 800], [0, -60])

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <motion.div style={{ y: parallax }} className="pointer-events-none absolute inset-x-0 -top-24 h-72 [mask-image:radial-gradient(50%_60%_at_50%_40%,_black,_transparent)]">
        <div className="mx-auto max-w-5xl h-full rounded-[40px] bg-gradient-to-r from-fuchsia-500/20 via-sky-500/20 to-violet-500/20 blur-2xl" />
      </motion.div>

      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">Let’s build something</h2>
          <p className="mt-3 text-neutral-300">Drop a line and I’ll get back within 24h.</p>
        </div>

        <motion.form initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} onSubmit={(e) => e.preventDefault()} className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur space-y-6">
          <FloatingInput label="Name" type="text" name="name" />
          <FloatingInput label="Email" type="email" name="email" />
          <FloatingTextarea label="Message" name="message" />
          <div className="flex justify-end">
            <button className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 font-medium text-neutral-900 shadow hover:shadow-lg transition">
              Send Message
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  )
}

function FloatingInput({ label, ...props }) {
  return (
    <label className="relative block">
      <input {...props} placeholder=" " className="peer w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white/90 outline-none placeholder-transparent focus:border-white/30" />
      <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 bg-transparent px-1 text-white/60 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-xs peer-focus:text-white/80">{label}</span>
    </label>
  )
}

function FloatingTextarea({ label, ...props }) {
  return (
    <label className="relative block">
      <textarea {...props} placeholder=" " rows={5} className="peer w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white/90 outline-none placeholder-transparent focus:border-white/30" />
      <span className="pointer-events-none absolute left-3 top-4 bg-transparent px-1 text-white/60 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-xs peer-focus:text-white/80">{label}</span>
    </label>
  )
}
