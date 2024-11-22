'use client'

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Base background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F9F7F4] via-[#e8f5ef] to-[#F9F7F4]" />
      
      {/* Noise texture overlay */}
      <div className="absolute inset-0 opacity-[0.15] bg-noise" />
    </div>
  )
}
