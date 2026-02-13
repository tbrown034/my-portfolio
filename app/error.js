"use client";

export default function Error({ error, reset }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-neutral-950 px-6">
      <div className="max-w-md text-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
          Something went wrong
        </h2>
        <p className="text-gray-600 dark:text-neutral-400 mb-6">
          An unexpected error occurred. Please try again.
        </p>
        <button
          onClick={reset}
          className="px-6 py-2.5 font-semibold text-white bg-blue-800 dark:bg-blue-600 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-500 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
