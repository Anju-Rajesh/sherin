import { useEffect, useMemo, useRef } from 'react'
import { motion } from 'framer-motion'

const SYMBOLS = ['💗', '💖', '💕', '✨', '🎀', '🌸', '💛', '💜']

// One-shot confetti / hearts explosion from a point on screen.
export default function Burst({ count = 30, x = '50%', y = '55%', big = false, onDone }) {
  const doneRef = useRef(onDone)
  doneRef.current = onDone

  const parts = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => {
        const a = Math.random() * Math.PI * 2
        const d = 90 + Math.random() * (big ? 300 : 220)
        return {
          id: i,
          dx: Math.cos(a) * d,
          dy: Math.sin(a) * d - 80,
          r: (Math.random() - 0.5) * 360,
          s: (big ? 1.1 : 0.8) + Math.random() * 0.9,
          sym: SYMBOLS[i % SYMBOLS.length],
          dur: 1.5 + Math.random() * 1.1,
        }
      }),
    [count, big]
  )

  useEffect(() => {
    const t = setTimeout(() => doneRef.current && doneRef.current(), 2800)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 z-[80] overflow-hidden" aria-hidden="true">
      {parts.map((p) => (
        <motion.span
          key={p.id}
          className="absolute text-2xl"
          style={{ left: x, top: y }}
          initial={{ x: 0, y: 0, opacity: 1, scale: 0.3, rotate: 0 }}
          animate={{
            x: p.dx,
            y: [0, p.dy, p.dy + 160],
            opacity: [1, 1, 0],
            scale: p.s,
            rotate: p.r,
          }}
          transition={{ duration: p.dur, ease: 'easeOut' }}
        >
          {p.sym}
        </motion.span>
      ))}
    </div>
  )
}
