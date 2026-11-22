import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { content } from '../content'
import SectionHeading from './SectionHeading'
import Polaroid from './Polaroid'
import Lightbox from './Lightbox'

export default function SoloGallery() {
  const { heading, subheading, photos } = content.solo
  const [open, setOpen] = useState(null)
  const n = photos.length

  return (
    <section className="relative z-10 px-4 pb-24 pt-12 md:px-8">
      <SectionHeading title={heading} subtitle={subheading} />
      <div className="mx-auto grid max-w-md grid-cols-2 gap-x-4 gap-y-10 md:max-w-5xl md:grid-cols-3 md:gap-x-10 md:gap-y-16">
        {photos.map((p, i) => {
          const wide = i === 0 || (i === n - 1 && n % 2 === 0)
          const mobileOffset = !wide && i % 2 === 1 ? 'translate-y-4' : ''
          const deskOffset = i % 3 === 1 ? 'md:translate-y-10' : 'md:translate-y-0'
          const span = wide ? 'col-span-2 mx-auto w-[80%] md:col-span-1 md:w-full' : ''
          return (
            <div key={p.src + i} className={`${span} ${mobileOffset} ${deskOffset}`}>
              <Polaroid item={p} index={i} onOpen={() => setOpen(i)} />
            </div>
          )
        })}
      </div>
      <AnimatePresence>
        {open !== null && (
          <Lightbox items={photos} index={open} onClose={() => setOpen(null)} onIndex={setOpen} />
        )}
      </AnimatePresence>
    </section>
  )
}
