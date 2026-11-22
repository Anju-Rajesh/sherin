import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { asset } from '../lib/asset'
import Placeholder from './Placeholder'
import { ASPECT } from './Polaroid'

export default function Lightbox({ items, index, onClose, onIndex }) {
  const item = items[index]
  const [failed, setFailed] = useState(false)
  const count = items.length

  const go = (dir) => onIndex((index + dir + count) % count)

  useEffect(() => setFailed(false), [index])

  useEffect(() => {
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') go(1)
      if (e.key === 'ArrowLeft') go(-1)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prevOverflow
      window.removeEventListener('keydown', onKey)
    }
  })

  const stop = (e) => e.stopPropagation()
  const btn =
    'flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-xl text-plum shadow-paper'

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label="Photo viewer"
      className="fixed inset-0 z-[70] flex flex-col items-center justify-center gap-4 bg-plum/85 p-4 backdrop-blur-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <button
        type="button"
        onClick={(e) => { stop(e); onClose() }}
        aria-label="Close photo"
        className={`${btn} absolute right-4 top-4`}
        style={{ top: 'max(1rem, env(safe-area-inset-top))' }}
      >
        ✕
      </button>

      <motion.div
        key={index}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.3}
        onDragEnd={(_, info) => {
          if (info.offset.x < -70) go(1)
          else if (info.offset.x > 70) go(-1)
        }}
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.35 }}
        onClick={stop}
        className="max-w-[92vw] rounded-md bg-white p-3 pb-4 shadow-paper"
      >
        {failed ? (
          <div className={`relative w-[78vw] max-w-sm ${ASPECT[item.aspect || 'portrait']}`}>
            <Placeholder path={item.src} />
          </div>
        ) : (
          <img
            src={asset(item.src)}
            alt={item.caption}
            draggable="false"
            onError={() => setFailed(true)}
            className="mx-auto block max-h-[66vh] max-w-full rounded-[3px] object-contain"
          />
        )}
        <p className="pt-3 text-center font-hand text-2xl leading-7 text-plum-soft">
          {item.caption}
        </p>
      </motion.div>

      {count > 1 && (
        <div className="flex items-center gap-5" onClick={stop}>
          <button type="button" className={btn} onClick={() => go(-1)} aria-label="Previous photo">←</button>
          <span className="font-hand text-xl text-white">{index + 1} / {count}</span>
          <button type="button" className={btn} onClick={() => go(1)} aria-label="Next photo">→</button>
        </div>
      )}
    </motion.div>
  )
}
