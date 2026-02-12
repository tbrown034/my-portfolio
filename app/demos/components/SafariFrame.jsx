// Minimal Safari browser chrome - Tailwind-based
// Premium aesthetic: traffic lights + URL bar + soft shadow

export default function SafariFrame({ imageSrc, url, className = "" }) {
  return (
    <div
      className={`rounded-xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.08),0_2px_8px_rgba(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.3),0_2px_8px_rgba(0,0,0,0.2)] ring-1 ring-black/[0.06] dark:ring-white/[0.06] ${className}`}
    >
      {/* Toolbar */}
      <div className="flex items-center gap-3 px-4 py-2.5 bg-[#f6f6f6] dark:bg-[#2a2a2a] border-b border-black/[0.06] dark:border-white/[0.06]">
        {/* Traffic lights */}
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        </div>

        {/* URL bar */}
        <div className="flex-1 flex justify-center">
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/80 dark:bg-white/[0.08] text-[11px] text-gray-400 dark:text-neutral-500 font-medium">
            <svg
              className="w-2.5 h-2.5 text-gray-300 dark:text-neutral-600"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
            </svg>
            {url}
          </div>
        </div>

        {/* Spacer to balance traffic lights */}
        <div className="w-[52px]" />
      </div>

      {/* Screenshot */}
      {imageSrc ? (
        <img
          src={imageSrc}
          alt=""
          className="block w-full"
        />
      ) : (
        <div className="aspect-[16/10] bg-gray-100 dark:bg-neutral-900" />
      )}
    </div>
  );
}
