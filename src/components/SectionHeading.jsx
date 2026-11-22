import { motion } from 'framer-motion'

export default function SectionHeading({ title, subtitle }) {
  return (
    <motion.header
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-8% 0px' }}
      transition={{ duration: 0.8 }}
      className="mx-auto mb-10 max-w-xl text-center md:mb-14"
    >
      <h2 className="font-serif text-[2rem] font-semibold leading-[1.12] text-plum md:text-5xl">
        {title}
      </h2>
      <svg viewBox="0 0 120 12" className="mx-auto mt-3 h-3 w-28 text-blush-deep" fill="none" aria-hidden="true">
        <path d="M2 6 Q12 -2 22 6 T42 6 T62 6 T82 6 T102 6 T118 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
      {subtitle && (
        <p className="mt-4 font-serif text-lg italic text-plum-soft md:text-xl">{subtitle}</p>
      )}
    </motion.header>
  )
}
