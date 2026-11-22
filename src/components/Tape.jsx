export default function Tape({ className = '', color = '#F8D4DC' }) {
  return (
    <span
      aria-hidden="true"
      className={`absolute z-10 block h-5 w-16 opacity-90 ${className}`}
      style={{
        backgroundColor: color,
        backgroundImage:
          'repeating-linear-gradient(135deg, rgba(255,255,255,.5) 0 5px, transparent 5px 10px)',
        boxShadow: '0 1px 2px rgba(0,0,0,.08)',
      }}
    />
  )
}
