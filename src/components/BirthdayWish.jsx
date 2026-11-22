import { motion } from 'framer-motion'
import { content } from '../content'
import Tape from './Tape'

export default function BirthdayWish() {
  const w = content.wish
  return (
    <section className="relative z-10 px-5 pb-20 pt-16 md:pt-28">
      <motion.article
        initial={{ opacity: 0, y: 30, rotate: -1.5 }}
        whileInView={{ opacity: 1, y: 0, rotate: -0.6 }}
        viewport={{ once: true, margin: '-6% 0px' }}
        transition={{ duration: 0.9 }}
        className="relative mx-auto max-w-xl rounded-[10px] bg-white/90 px-6 pb-10 pt-12 shadow-paper md:max-w-2xl md:px-14 md:pb-14 md:pt-16"
      >
        <Tape className="-top-3 left-8 -rotate-6" color="#F8D4DC" />
        <Tape className="-top-3 right-8 rotate-6" color="#DCD0F2" />
        <h2 className="text-center font-serif text-[1.95rem] font-semibold leading-[1.15] text-plum md:text-5xl">
          {w.heading}
        </h2>
        <div className="mt-8 space-y-5 font-serif text-[1.2rem] leading-8 text-plum md:text-[1.4rem] md:leading-9">
          {w.paragraphs.map((p, i) => (
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
        <p className="mt-9 text-center font-hand text-[1.6rem] leading-8 text-rose md:text-3xl md:leading-10">
          {w.closing}
        </p>
      </motion.article>
    </section>
  )
}
