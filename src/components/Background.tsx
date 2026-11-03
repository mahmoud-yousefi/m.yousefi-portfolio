/**
 * Fixed decorative backdrop: three drifting aurora blobs, a faint grid and a
 * top spotlight. Purely visual, so it is hidden from assistive tech.
 */
export default function Background() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-bg" />

      <div
        className="absolute -top-40 start-[-10%] h-[38rem] w-[38rem] rounded-full opacity-[0.28] blur-[110px] animate-aurora dark:opacity-40"
        style={{ background: 'radial-gradient(circle, #6366f1 0%, transparent 65%)' }}
      />
      <div
        className="absolute top-[35%] end-[-12%] h-[34rem] w-[34rem] rounded-full opacity-[0.22] blur-[120px] animate-aurora dark:opacity-30"
        style={{ background: 'radial-gradient(circle, #22d3ee 0%, transparent 65%)', animationDelay: '-9s' }}
      />
      <div
        className="absolute bottom-[-14%] start-[22%] h-[30rem] w-[30rem] rounded-full opacity-[0.18] blur-[130px] animate-aurora dark:opacity-25"
        style={{ background: 'radial-gradient(circle, #a855f7 0%, transparent 65%)', animationDelay: '-17s' }}
      />

      <div
        className="absolute inset-0 opacity-[0.05] dark:opacity-[0.07]"
        style={{
          backgroundImage:
            'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)',
          backgroundSize: '72px 72px',
          maskImage: 'radial-gradient(ellipse 90% 60% at 50% 0%, #000 20%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse 90% 60% at 50% 0%, #000 20%, transparent 80%)',
        }}
      />

      <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-bg/0 via-bg/0 to-transparent" />
    </div>
  );
}
