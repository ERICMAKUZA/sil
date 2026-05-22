"use client"

export function SiteBackground() {
  return (
    <>
      {/* Layer 1 - Dot Grid Texture */}
      <div
        className="fixed inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 0, overflow: 'hidden' }}
        aria-hidden="true"
      >
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='16' cy='16' r='1.5' fill='%23b0b5be'/%3E%3C/svg%3E")`,
            backgroundSize: '32px',
            backgroundRepeat: 'repeat',
            backgroundPosition: '50% 0%',
            mixBlendMode: 'color',
            opacity: 0.9,
          }}
        />
      </div>

      {/* Layer 2 - Radial Gradient Fade */}
      <div
        className="fixed inset-0 w-full h-full pointer-events-none"
        style={{
          zIndex: 0,
          background: 'radial-gradient(57% 60% at 50% 0%, rgba(255, 255, 255, 0) 0%, #f3f4f6 97.9%)',
        }}
        aria-hidden="true"
      />
    </>
  )
}
