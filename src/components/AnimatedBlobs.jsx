/**
 * Soft, blurred, slowly-morphing gradient blobs — the kind of ambient
 * background treatment used by Linear/Framer/Vercel-style marketing
 * sites. Pure CSS animation (tailwind's `blob` keyframes), no JS cost.
 */
export default function AnimatedBlobs({ className = '' }) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <div className="absolute -top-24 -left-16 w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-primary/25 blur-3xl animate-blob" />
      <div className="absolute top-1/3 -right-20 w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-secondary/20 blur-3xl animate-blob-slow" />
      <div className="absolute -bottom-20 left-1/4 w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-accent/15 blur-3xl animate-blob" />
    </div>
  )
}
