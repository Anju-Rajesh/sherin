// Shown automatically when a photo file is missing.
export default function Placeholder({ path }) {
  return (
    <div
      className="absolute inset-0 flex flex-col items-center justify-center gap-1 p-3 text-center"
      style={{
        background: 'linear-gradient(145deg,#FDEBEF,#F0EAFB 55%,#FFEFE4)',
      }}
    >
      <span className="pointer-events-none absolute inset-1.5 rounded-[3px] border-2 border-dashed border-blush-deep/70" />
      <span className="text-2xl" aria-hidden="true">📷</span>
      <span className="font-hand text-lg leading-5 text-plum-soft">
        Your photo goes here
      </span>
      <code className="max-w-full break-all px-2 text-[9px] leading-3 text-plum-soft">
        public/{path}
      </code>
    </div>
  )
}
