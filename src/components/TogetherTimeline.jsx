import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { content } from '../content'
import SectionHeading from './SectionHeading'
import Polaroid from './Polaroid'
import Lightbox from './Lightbox'

export default function TogetherTimeline() {
  const { heading, subheading, photos, ending } = content.together
  const [open, setOpen] = useState(null)

  return (
    <section className="relative z-10 px-4 pb-24 pt-12 md:px-8">
      <SectionHeading title={heading} subtitle={subheading} />

      <ul className="relative mx-auto max-w-md md:max-w-4xl">
        <span
          aria-hidden="true"
          className="absolute bottom-6 left-4 top-2 w-px -translate-x-1/2 md:left-1/2"
          style={{
            background:
              'repeating-linear-gradient(to bottom, #EBA3B5 0 6px, transparent 6px 12px)',
          }}
        />
        {photos.map((p, i) => {
          const left = i % 2 === 0
          return (
            <li
              key={p.src + i}
              className={`relative pb-14 pl-11 md:pb-20 md:pl-0 ${
                left ? 'md:w-1/2 md:pr-14' : 'md:ml-auto md:w-1/2 md:pl-14'
              }`}
            >
              <span
                aria-hidden="true"
                className={`absolute left-4 top-7 h-4 w-4 -translate-x-1/2 rounded-full border-[3px] border-white bg-blush-deep shadow ${
                  left
                    ? 'md:left-auto md:right-0 md:translate-x-1/2'
                    : 'md:left-0 md:-translate-x-1/2'
                }`}
              />
              <div className={`max-w-[320px] ${left ? 'md:ml-auto' : ''}`}>
                {p.when && (
                  <p className="mb-2 font-hand text-xl text-rose">{p.when}</p>
                )}
                <Polaroid item={p} index={i} onOpen={() => setOpen(i)} />
              </div>
            </li>
          )
        })}
      </ul>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="mx-auto max-w-md text-center font-hand text-3xl text-rose md:text-4xl"
      >
        {ending}
      </motion.p>

      <AnimatePresence>
        {open !== null && (
          <Lightbox items={photos} index={open} onClose={() => setOpen(null)} onIndex={setOpen} />
        )}
      </AnimatePresence>
    </section>
  )
}
