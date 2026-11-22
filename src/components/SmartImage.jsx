import { useState } from 'react'
import { asset } from '../lib/asset'
import Placeholder from './Placeholder'

// Fills its (relative) parent. Falls back to a labelled placeholder
// if the file does not exist yet.
export default function SmartImage({ src, alt = '' }) {
  const [failed, setFailed] = useState(false)
  if (failed) return <Placeholder path={src} />
  return (
    <img
      src={asset(src)}
      alt={alt}
      loading="lazy"
      decoding="async"
      draggable="false"
      onError={() => setFailed(true)}
      className="absolute inset-0 h-full w-full object-cover"
    />
  )
}
