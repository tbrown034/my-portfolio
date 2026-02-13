export default function ArcadeEmbed({ arcadeId, title }) {
  if (!arcadeId) {
    return (
      <div className="relative rounded-lg border-2 border-dashed border-gray-300 dark:border-neutral-600 bg-gray-50 dark:bg-neutral-900 overflow-hidden">
        <div className="flex flex-col items-center justify-center py-16 px-6 text-center">
          <svg
            className="w-12 h-12 text-gray-400 dark:text-neutral-500 mb-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
            />
          </svg>
          <p className="text-sm font-medium text-gray-500 dark:text-neutral-400">
            Interactive demo coming soon
          </p>
          <p className="text-xs text-gray-400 dark:text-neutral-500 mt-1">
            Walkthrough for {title}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="relative rounded-lg overflow-hidden border border-gray-200 dark:border-slate-700"
      style={{ paddingBottom: "calc(62.8195% + 41px)", height: 0, width: "100%" }}
    >
      <iframe
        src={`https://demo.arcade.software/${arcadeId}?embed&embed_mobile=inline&embed_desktop=inline&show_copy_link=true`}
        title={`Interactive demo of ${title}`}
        frameBorder="0"
        loading="lazy"
        webkitallowfullscreen=""
        mozallowfullscreen=""
        allowFullScreen
        allow="clipboard-write"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          colorScheme: "light",
        }}
      />
    </div>
  );
}
