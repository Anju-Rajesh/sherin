import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { content } from '../content'
import FloatingHearts from './FloatingHearts'
import Burst from './Burst'

const BALLOONS = ['🎈', '💗', '✨', '🎀', '💖', '⭐']

function Cake() {
  return (
    <svg viewBox="0 0 120 130" className="mx-auto mb-6 h-auto w-28" aria-hidden="true">
      <ellipse cx="60" cy="119" rx="52" ry="8" fill="#EBA3B5" opacity=".35" />
      <rect x="14" y="80" width="92" height="38" rx="10" fill="#FFD8C2" />
      <rect x="26" y="54" width="68" height="30" rx="9" fill="#F8D4DC" />
      <path d="M14 86 Q22 100 30 86 T46 86 T62 86 T78 86 T94 86 T106 86 V80 H14 Z" fill="#fff" />
      <path d="M26 60 Q33 72 40 60 T54 60 T68 60 T82 60 T94 60 V54 H26 Z" fill="#fff" />
      <circle cx="30" cy="106" r="3" fill="#EBA3B5" />
      <circle cx="52" cy="108" r="3" fill="#B7A3DE" />
      <circle cx="74" cy="106" r="3" fill="#EBA3B5" />
      <circle cx="92" cy="108" r="3" fill="#B7A3DE" />
      <rect x="56" y="32" width="8" height="24" rx="2" fill="#B7A3DE" />
      <path className="flame" d="M60 12 C67 20 66 28 60 31 C54 28 53 20 60 12Z" fill="#FFC46B" />
    </svg>
  )
}

export default function Finale() {
  const F = content.finale
  const [hugs, setHugs] = useState(0)
  const [burst, setBurst] = useState(null)

  const onHug = (e) => {
    const r = e.currentTarget.getBoundingClientRect()
    setHugs((h) => h + 1)
    setBurst({ id: Date.now(), x: r.left + r.width / 2, y: r.top + r.height / 2 })
  }

  return (
    <section
      className="relative z-10 overflow-hidden px-6 pb-32 pt-28 text-center"
      style={{
        background:
          'linear-gradient(to bottom, rgba(255,248,241,0), #F0EAFB 35%, #F8D4DC 100%)',
      }}
    >
      <FloatingHearts count={18} symbols={BALLOONS} className="absolute" />

      <div className="relative z-10 mx-auto max-w-md md:max-w-xl">
        <Cake />
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="font-serif text-4xl font-semibold text-plum md:text-6xl"
        >
          {F.heading}
        </motion.h2>

        <div className="mt-8 space-y-5 font-serif text-[1.25rem] leading-8 text-plum md:text-[1.45rem] md:leading-9">
          {F.paragraphs.map((p, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-5% 0px' }}
              transition={{ duration: 0.9 }}
            >
              {p}
            </motion.p>
          ))}
        </div>

        <p className="mt-9 font-hand text-[2rem] leading-9 text-rose md:text-4xl">{F.closing}</p>

        <motion.button
          type="button"
          onClick={onHug}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.93 }}
          className="glow-btn mt-10 min-h-[56px] rounded-full bg-gradient-to-r from-blush-deep via-peach-deep to-lavender-deep px-8 py-3 font-hand text-2xl font-semibold text-plum"
        >
          {F.button}
        </motion.button>

        <AnimatePresence>
          {hugs > 0 && (
            <motion.div
              key="hug"
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ type: 'spring', stiffness: 160, damping: 14 }}
              className="mt-10"
            >
              <motion.div
                animate={{ scale: [1, 1.18, 1] }}
                transition={{ repeat: Infinity, duration: 1.4, ease: 'easeInOut' }}
                className="text-7xl"
                aria-hidden="true"
              >
                💗
              </motion.div>
              <p className="mt-3 font-hand text-4xl text-rose" role="status">
                {F.hugMessage}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {burst && (
        <Burst
          key={burst.id}
          big
          count={34}
          x={`${burst.x}px`}
          y={`${burst.y}px`}
          onDone={() => setBurst(null)}
        />
      )}
    </section>
  )
}
