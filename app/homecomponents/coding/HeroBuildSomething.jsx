export default function HeroBuildSomething() {
  return (
    <a
      href="#about"
      className="flex items-center gap-3 text-gray-900 dark:text-gray-100 group cursor-pointer"
    >
      <span className="flex items-center gap-3 border-b-2 border-blue-800 dark:border-blue-300 group-hover:border-blue-900 dark:group-hover:border-blue-200 transition-colors duration-200">
        <span className="text-xl font-bold">
          Let's build something together
        </span>
        <svg
          className="w-6 h-6 text-blue-800 dark:text-blue-300 transform group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform duration-200 animate-gentlePulse"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 7v10m0 0H7m10 0L7 7"
          />
        </svg>
      </span>
    </a>
  );
}
