import { motion } from 'framer-motion'
import { content } from '../content'
import FloatingHearts from './FloatingHearts'
import Tape from './Tape'

const parent = { hidden: {}, show: { transition: { staggerChildren: 0.6, delayChildren: 0.3 } } }
const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
}

export default function Opening({ onOpen }) {
  const c = content.opening
  return (
    <motion.section
      exit={{ opacity: 0, scale: 1.06, filter: 'blur(12px)' }}
      transition={{ duration: 0.9, ease: 'easeInOut' }}
      className="opening-bg fixed inset-0 z-40 overflow-y-auto"
    >
      <FloatingHearts count={16} className="absolute" />
      <div className="relative z-10 flex min-h-full items-center justify-center px-5 py-16">
        <motion.div
          variants={parent}
          initial="hidden"
          animate="show"
          className="relative w-full max-w-md -rotate-1 rounded-[12px] bg-white/75 px-6 pb-9 pt-12 text-center shadow-paper backdrop-blur-sm md:max-w-lg md:px-12 md:pb-12"
        >
          <Tape className="-top-3 left-1/2 -translate-x-1/2 rotate-2" color="#DCD0F2" />
          <motion.h1
            variants={item}
            className="font-serif text-[2.6rem] font-semibold leading-[1.05] text-plum md:text-6xl"
          >
            {c.title}
          </motion.h1>
          <motion.p variants={item} className="mt-6 font-serif text-xl italic leading-snug text-plum-soft md:text-2xl">
            {c.line1}
          </motion.p>
          <motion.p variants={item} className="mt-5 font-hand text-[1.7rem] leading-8 text-rose md:text-3xl">
            {c.line2}
          </motion.p>
          <motion.div variants={item} className="mt-9">
            <motion.button
              type="button"
              onClick={onOpen}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.95 }}
              className="glow-btn min-h-[56px] rounded-full bg-gradient-to-r from-blush-deep via-peach-deep to-lavender-deep px-8 py-3 font-hand text-2xl font-semibold text-plum"
            >
              {c.button}
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}
