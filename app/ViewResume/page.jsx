import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      {/* Header */}
      <div className="border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-4xl mx-auto px-6 py-8 sm:px-8">
          <div className="border-b border-gray-200 dark:border-gray-700 pb-2 mb-6">
            <h2 className="text-xs uppercase tracking-wider font-semibold text-gray-500 dark:text-gray-400">
              Resume
            </h2>
          </div>
          
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Trevor Brown
          </h1>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            Investigative journalist + developer with 18+ years of experience in government accountability reporting and modern web development.
          </p>
        </div>
      </div>

      {/* Resume Content */}
      <div className="max-w-4xl mx-auto px-6 py-12 sm:px-8">
        {/* Resume Image */}
        <div className="mb-8">
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow-sm bg-white dark:bg-gray-800">
            <Image 
              src="/images/Resume.jpg" 
              alt="Trevor Brown Resume" 
              width={800}
              height={1000}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 border-2 border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 font-medium rounded-lg transition-colors duration-200"
          >
            ← Back to Portfolio
          </Link>
          
          <a
            href="mailto:trevorbrown.web@gmail.com"
            className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200"
          >
            Get in Touch
          </a>
          
          <a
            href="/trevorBrownResume.pdf"
            download="TrevorBrown-Resume"
            className="inline-flex items-center justify-center px-6 py-3 border-2 border-blue-600 hover:bg-blue-600 text-blue-600 hover:text-white font-medium rounded-lg transition-colors duration-200"
          >
            Download PDF
          </a>
        </div>
      </div>
    </main>
  );
}
