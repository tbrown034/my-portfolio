export default function Footer() {
  return (
    <footer className="mt-24">
      <div className="px-6 py-12 sm:px-8 lg:px-12 xl:px-16 max-w-7xl mx-auto">
        {/* Main footer content */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          {/* Left side - Branding */}
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-gray-100">
              Trevor Brown
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Investigative journalist + developer + data visualizer
            </p>
          </div>

          {/* Right side - Navigation */}
          <nav className="flex flex-wrap gap-6 text-sm">
            <a 
              href="/#coding"
              className="font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-200"
            >
              Development
            </a>
            <a 
              href="/#journalism"
              className="font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-200"
            >
              Journalism
            </a>
            <a 
              href="/#dataviz"
              className="font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-200"
            >
              Data Stories
            </a>
            <a 
              href="/#about"
              className="font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-200"
            >
              Contact
            </a>
            <a 
              href="/resume"
              className="font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-200"
            >
              Resume
            </a>
          </nav>
        </div>

        {/* Bottom copyright */}
        <div className="mt-8 pt-8 border-t border-gray-100 dark:border-gray-800/50">
          <p className="text-xs text-gray-500 dark:text-gray-500 text-center md:text-left">
            © {new Date().getFullYear()} Trevor Brown. Built with Next.js and Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}