import { useEffect, useRef, useState } from 'react'
import { content } from '../content'
import { asset } from '../lib/asset'

export default function MusicPlayer() {
  const m = content.music
  const audio = useRef(null)
  const [playing, setPlaying] = useState(false)
  const [missing, setMissing] = useState(false)

  useEffect(() => {
    if (!missing) return
    const t = setTimeout(() => setMissing(false), 4000)
    return () => clearTimeout(t)
  }, [missing])

  // Music only starts when the visitor taps this button.
  const toggle = async () => {
    const a = audio.current
    if (!a) return
    if (a.paused) {
      try {
        a.volume = 0.5
        await a.play()
        setPlaying(true)
      } catch {
        setMissing(true)
        setPlaying(false)
      }
    } else {
      a.pause()
      setPlaying(false)
    }
  }

  return (
    <div
      className="fixed left-3 z-[90] flex flex-col items-start gap-2"
      style={{ top: 'max(0.75rem, env(safe-area-inset-top))' }}
    >
      <audio ref={audio} src={asset(m.src)} loop preload="none" />
      <button
        type="button"
        onClick={toggle}
        aria-pressed={playing}
        aria-label={playing ? m.pause : m.play}
        className="flex min-h-[44px] items-center gap-2 rounded-full bg-white/90 px-4 py-2 font-hand text-xl text-plum shadow-paper backdrop-blur"
      >
        {playing ? (
          <span className="eq" aria-hidden="true"><span /><span /><span /></span>
        ) : (
          <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
            <path d="M3 1.5v11l9-5.5z" fill="currentColor" />
          </svg>
        )}
        <span>{playing ? m.pause : m.play}</span>
      </button>
      {missing && (
        <span className="rounded-full bg-white/90 px-3 py-1 font-hand text-lg text-rose shadow-paper">
          {m.missing}
        </span>
      )}
    </div>
  )
}
