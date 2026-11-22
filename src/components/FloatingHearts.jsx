import { useMemo } from 'react'

const DEFAULT = ['💗', '💖', '✨', '🤍', '💕', '⭐']

export default function FloatingHearts({ count = 14, symbols = DEFAULT, className = 'fixed' }) {
  const items = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        sym: symbols[i % symbols.length],
        left: 3 + Math.random() * 92,
        size: 12 + Math.random() * 18,
        dur: 14 + Math.random() * 14,
        delay: Math.random() * 24,
      })),
    [count, symbols]
  )
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none inset-0 z-0 overflow-hidden ${className}`}
    >
      {items.map((i) => (
        <span
          key={i.id}
          className="float-item"
          style={{
            left: `${i.left}%`,
            fontSize: `${i.size}px`,
            animationDuration: `${i.dur}s`,
            animationDelay: `-${i.delay}s`,
          }}
        >
          {i.sym}
        </span>
      ))}
    </div>
  )
}
