export default function HeroHeader() {
  return (
    <header className=" animate-gentleReveal">
      <h1 className="text-[34px] sm:text-5xl lg:text-7xl font-black font-montserrat text-gray-900 dark:text-white leading-tight sm:leading-tight mb-1">
        Trevor Brown
      </h1>

      <p className="text-xl sm:text-2xl font-light text-blue-800 dark:text-blue-400 leading-relaxed">
        Investigative journalist + developer + data visualizer
      </p>

      <p className="text-xs font-mono text-gray-500 dark:text-gray-300 tracking-wide mt-1">
        Building and delivering whether it's from the newsroom or terminal
      </p>
    </header>
  );
}
