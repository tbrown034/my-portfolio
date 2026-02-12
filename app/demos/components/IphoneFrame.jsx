// Minimal iPhone frame - Tailwind-based
// Clean bezel with Dynamic Island notch

export default function IphoneFrame({ src, className = "" }) {
  return (
    <div
      className={`relative rounded-[2rem] bg-[#1a1a1a] p-[6px] shadow-[0_12px_40px_rgba(0,0,0,0.15),0_4px_12px_rgba(0,0,0,0.1)] dark:shadow-[0_12px_40px_rgba(0,0,0,0.4),0_4px_12px_rgba(0,0,0,0.3)] ring-1 ring-black/10 dark:ring-white/10 ${className}`}
    >
      {/* Screen */}
      <div className="relative rounded-[1.6rem] overflow-hidden bg-white dark:bg-neutral-900">
        {/* Dynamic Island */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 z-10 w-[72px] h-[22px] bg-black rounded-full" />

        {src ? (
          <img
            src={src}
            alt=""
            className="block w-full object-cover object-top"
            style={{ aspectRatio: "9/19.5" }}
          />
        ) : (
          <div style={{ aspectRatio: "9/19.5" }} className="bg-gray-100 dark:bg-neutral-900" />
        )}
      </div>
    </div>
  );
}
