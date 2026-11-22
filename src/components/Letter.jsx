import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { content } from '../content'
import SectionHeading from './SectionHeading'

export default function Letter() {
  const L = content.letter
  const [stage, setStage] = useState('closed') // closed | opening | open
  const timer = useRef(null)
  const paper = useRef(null)
  const open = stage !== 'closed'

  useEffect(() => () => clearTimeout(timer.current), [])

  useEffect(() => {
    if (stage === 'open' && paper.current) {
      paper.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [stage])

  const handleOpen = () => {
    if (stage !== 'closed') return
    setStage('opening')
    timer.current = setTimeout(() => setStage('open'), 1000)
  }
  const handleClose = () => {
    clearTimeout(timer.current)
    setStage('closed')
  }

  return (
    <section className="relative z-10 px-5 pb-24 pt-12">
      <SectionHeading title={L.heading} subtitle={L.subheading} />

      <motion.div
        animate={{ paddingTop: open ? 132 : 8 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        className="mx-auto w-[min(82vw,320px)] md:w-[360px]"
      >
        <div className="relative aspect-[4/3] w-full" style={{ perspective: 900 }}>
          {/* back of envelope */}
          <div className="absolute inset-0 rounded-md bg-peach-deep shadow-paper" />

          {/* little letter peeking out */}
          <motion.div
            className="absolute inset-x-4 bottom-3 top-3 rounded-sm bg-cream"
            style={{ zIndex: 10 }}
            animate={{ y: open ? -46 : 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
          >
            <div className="space-y-3 p-4">
              {[100, 85, 92, 60].map((w, i) => (
                <i key={i} className="block h-[2px] rounded bg-blush-deep/50" style={{ width: `${w}%` }} />
              ))}
            </div>
          </motion.div>

          {/* front pocket */}
          <div
            className="absolute inset-0 z-20 rounded-md"
            style={{
              background: '#FBC9AC',
              clipPath: 'polygon(0 0, 50% 54%, 100% 0, 100% 100%, 0 100%)',
            }}
          />

          {/* flap */}
          <motion.div
            className="absolute inset-x-0 top-0 h-[54%]"
            style={{
              transformOrigin: 'top',
              background: '#F4A987',
              clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
            }}
            initial={false}
            animate={{ rotateX: open ? 180 : 0, zIndex: open ? 5 : 30 }}
            transition={{
              duration: 0.8,
              ease: 'easeInOut',
              zIndex: { duration: 0, delay: open ? 0.35 : 0.5 },
            }}
          />

          {/* heart seal */}
          <div className="pointer-events-none absolute left-1/2 top-[54%] z-40 -translate-x-1/2 -translate-y-1/2">
            <motion.span
              className="block text-3xl"
              animate={{ opacity: open ? 0 : 1, scale: open ? 0.3 : 1 }}
              transition={{ duration: 0.4 }}
            >
              💗
            </motion.span>
          </div>
        </div>
      </motion.div>

      <div className="mt-8 text-center">
        {stage === 'closed' && (
          <motion.button
            type="button"
            onClick={handleOpen}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.95 }}
            className="glow-btn min-h-[52px] rounded-full bg-gradient-to-r from-blush-deep via-peach-deep to-lavender-deep px-8 py-3 font-hand text-2xl font-semibold text-plum"
          >
            {L.button} 💌
          </motion.button>
        )}
      </div>

      <AnimatePresence>
        {stage === 'open' && (
          <motion.article
            ref={paper}
            initial={{ opacity: 0, y: -30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto mt-2 max-w-lg scroll-mt-6 rounded-md bg-[#FFFDF8] px-6 py-10 shadow-paper md:px-12"
            style={{
              backgroundImage:
                'repeating-linear-gradient(to bottom, transparent 0 31px, rgba(235,163,181,.3) 31px 32px)',
              backgroundPositionY: 8,
            }}
          >
            <p className="mb-8 font-hand text-[1.9rem] font-semibold leading-8 text-rose">
              {L.greeting}
            </p>
            {L.paragraphs.map((p, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 + i * 0.35, duration: 0.9 }}
                className="mb-8 font-hand text-[1.4rem] leading-8 text-plum"
              >
                {p}
              </motion.p>
            ))}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 + L.paragraphs.length * 0.35, duration: 0.9 }}
              className="font-hand text-[1.6rem] leading-8 text-rose"
            >
              {L.signoff.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </motion.div>
          </motion.article>
        )}
      </AnimatePresence>

      {stage === 'open' && (
        <div className="mt-8 text-center">
          <button
            type="button"
            onClick={handleClose}
            className="min-h-[44px] rounded-full bg-white/80 px-6 py-2 font-hand text-xl text-plum-soft shadow-paper"
          >
            {L.closeButton}
          </button>
        </div>
      )}
    </section>
  )
}
