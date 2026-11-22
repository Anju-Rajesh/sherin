import { useState } from 'react'
import { motion } from 'framer-motion'
import { content } from '../content'
import SectionHeading from './SectionHeading'

const COLORS = ['bg-blush-soft', 'bg-lavender-soft', 'bg-peach-soft']
const EMOJI = ['🌸', '🌠', '🫶', '🎁', '👑', '🎂']

function WishCard({ text, i }) {
  const [pops, setPops] = useState([])
  const pop = () =>
    setPops((p) => [...p, { id: Date.now() + Math.random(), x: (Math.random() - 0.5) * 80 }])

  return (
    <motion.button
      type="button"
      onClick={pop}
      initial={{ opacity: 0, y: 26, rotate: i % 2 ? 2 : -2 }}
      whileInView={{ opacity: 1, y: 0, rotate: i % 2 ? 1.2 : -1.2 }}
      viewport={{ once: true, margin: '-6% 0px' }}
      transition={{ duration: 0.7, delay: (i % 2) * 0.12 }}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.95 }}
      className={`relative flex min-h-[150px] flex-col items-center justify-center gap-2 rounded-2xl px-4 py-5 text-center shadow-paper ${COLORS[i % 3]}`}
    >
      <span className="text-3xl" aria-hidden="true">{EMOJI[i % EMOJI.length]}</span>
      <span className="font-serif text-[1.15rem] font-medium italic leading-snug text-plum md:text-xl">
        {text}
      </span>
      {pops.map((p) => (
        <motion.span
          key={p.id}
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 text-xl"
          initial={{ opacity: 1, x: 0, y: 0, scale: 0.6 }}
          animate={{ opacity: 0, x: p.x, y: -90, scale: 1.3 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          onAnimationComplete={() => setPops((cur) => cur.filter((c) => c.id !== p.id))}
        >
          💗
        </motion.span>
      ))}
    </motion.button>
  )
}

export default function Wishes() {
  const { heading, subheading, items } = content.wishes
  return (
    <section className="relative z-10 px-4 pb-24 pt-12 md:px-8">
      <SectionHeading title={heading} subtitle={subheading} />
      <div className="mx-auto grid max-w-md grid-cols-2 gap-4 md:max-w-3xl md:grid-cols-3 md:gap-6">
        {items.map((t, i) => (
          <WishCard key={t} text={t} i={i} />
        ))}
      </div>
    </section>
  )
}
