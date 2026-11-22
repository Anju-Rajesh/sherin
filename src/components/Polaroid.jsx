import { motion } from 'framer-motion'
import SmartImage from './SmartImage'
import Tape from './Tape'

export const ASPECT = {
  portrait: 'aspect-[4/5]',
  square: 'aspect-square',
  landscape: 'aspect-[4/3]',
}

const TAPES = ['#F8D4DC', '#DCD0F2', '#FFD8C2']

export default function Polaroid({ item, index = 0, onOpen, className = '' }) {
  const tilt = item.tilt ?? (index % 2 ? 2.5 : -2.5)
  return (
    <motion.figure
      initial={{ opacity: 0, y: 28, rotate: tilt * 2 }}
      whileInView={{ opacity: 1, y: 0, rotate: tilt }}
      viewport={{ once: true, margin: '-6% 0px' }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ rotate: 0, scale: 1.03, y: -4 }}
      className={`relative rounded-[6px] bg-white p-2.5 pb-3 shadow-paper ${className}`}
    >
      <Tape
        color={TAPES[index % TAPES.length]}
        className="-top-3 left-1/2 -translate-x-1/2 -rotate-3"
      />
      <button
        type="button"
        onClick={onOpen}
        aria-label={`Open photo: ${item.caption}`}
        className="block w-full overflow-hidden rounded-[3px]"
      >
        <div className={`relative w-full bg-blush-soft ${ASPECT[item.aspect || 'portrait']}`}>
          <SmartImage src={item.src} alt={item.caption} />
        </div>
      </button>
      <figcaption className="px-1 pt-2 text-center font-hand text-xl leading-6 text-plum-soft md:text-2xl md:leading-7">
        {item.caption}
      </figcaption>
    </motion.figure>
  )
}
