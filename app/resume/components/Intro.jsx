import Link from "next/link";

export default function Intro({ showDesktopLayout }) {
  // Desktop layout for large screens (2 columns)
  if (showDesktopLayout === "large") {
    return (
      <div className="space-y-6">
        {/* Main content in 2 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {/* Column 1: Overview */}
          <div className="flex flex-col justify-between h-full">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
              From breaking news to breaking into tech – my journey combines storytelling with code.
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mt-4">
              My{" "}
              <Link
                href="/resume#resume"
                className="font-medium text-blue-800 dark:text-blue-300 hover:underline hover:decoration-2 hover:underline-offset-2 transition-colors duration-200"
              >
                professional resume
              </Link>{" "}
              showcases 15-plus years of investigative journalism experience alongside 
              modern web development skills. From Python data analysis to React applications, 
              I bring a unique perspective to technical challenges.
            </p>
          </div>

          {/* Column 2: Details and action */}
          <div className="flex flex-col justify-between h-full">
            <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
              Browse my{" "}
              <Link
                href="/resume#clips"
                className="font-medium text-blue-800 dark:text-blue-300 hover:underline hover:decoration-2 hover:underline-offset-2 transition-colors duration-200"
              >
                selected works
              </Link>{" "}
              to see investigations that changed laws, exposed corruption and informed 
              communities. Each piece demonstrates the same rigor I bring to software 
              development – thorough research, clear documentation and impactful results.
            </p>

            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mt-4">
              Available in multiple formats for your convenience. Export as PDF for 
              traditional applications or share the interactive web version for a 
              modern experience.
            </p>

            {/* Action buttons - desktop only */}
            <div className="mt-8 hidden lg:flex gap-4">
              <Link
                href="/resume#resume"
                className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                View Resume
              </Link>
              <Link
                href="/resume#clips"
                className="px-6 py-3 border border-gray-300 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                Selected Works
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Vertical layout (mobile and default)
  return (
    <section className="space-y-4">
      {/* Resume Overview Section */}
      <div className="space-y-3">
        <h2 className="text-xs font-bold uppercase tracking-[0.15em] text-gray-500 dark:text-gray-500">
          Professional Documents
        </h2>

        {/* Main content */}
        <div className="space-y-4 max-w-4xl">
          {/* Subhead */}
          <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
            From breaking news to breaking into tech – my journey combines storytelling with code.
          </h3>

          {/* Lede */}
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            My{" "}
            <Link
              href="/resume#resume"
              className="font-medium text-blue-800 dark:text-blue-300 hover:underline hover:decoration-2 hover:underline-offset-2 transition-colors duration-200"
            >
              professional resume
            </Link>{" "}
            showcases 15+ years of investigative journalism experience alongside 
            modern web development skills. From Python data analysis to React applications, 
            I bring a unique perspective to technical challenges.
          </p>

          {/* Details */}
          <div className="space-y-3">
            <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
              Browse my{" "}
              <Link
                href="/resume#clips"
                className="font-medium text-blue-800 dark:text-blue-300 hover:underline hover:decoration-2 hover:underline-offset-2 transition-colors duration-200"
              >
                selected works
              </Link>{" "}
              to see investigations that changed laws, exposed corruption and informed 
              communities. Each piece demonstrates the same rigor I bring to software 
              development – thorough research, clear documentation and impactful results.
            </p>

            {/* Export options */}
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              Available in multiple formats for your convenience. Export as PDF for 
              traditional applications or share the interactive web version for a 
              modern experience.
            </p>
          </div>
        </div>
      </div>

      {/* Action buttons - mobile only */}
      <div className="md:hidden flex flex-col sm:flex-row gap-3">
        <Link
          href="/resume#resume"
          className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors text-center"
        >
          View Resume
        </Link>
        <Link
          href="/resume#clips"
          className="px-6 py-3 border border-gray-300 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-center"
        >
          Selected Works
        </Link>
      </div>
    </section>
  );
}