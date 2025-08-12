export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      {/* Header */}
      <div className="border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-4xl mx-auto px-6 py-8 sm:px-8">
          <div className="border-b border-gray-200 dark:border-gray-700 pb-2 mb-6">
            <h2 className="text-xs uppercase tracking-wider font-semibold text-gray-500 dark:text-gray-400">
              Professional Profile
            </h2>
          </div>
          
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Trevor Brown
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">
            Investigative Journalist + Full-Stack Developer
          </p>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl">
            Award-winning investigative journalist transitioning to full-stack web development with 18+ years of experience in government accountability reporting. Combines deep research skills, data analysis expertise, and storytelling abilities with modern web technologies to create impactful digital experiences.
          </p>

          {/* Contact Info */}
          <div className="flex flex-wrap gap-4 mt-6 text-sm">
            <a href="mailto:trevorbrown.web@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">
              trevorbrown.web@gmail.com
            </a>
            <a href="https://linkedin.com/in/trevorabrown" target="_blank" className="text-blue-600 dark:text-blue-400 hover:underline">
              LinkedIn: trevorabrown
            </a>
            <a href="https://github.com/tbrown034" target="_blank" className="text-blue-600 dark:text-blue-400 hover:underline">
              GitHub: tbrown034
            </a>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12 sm:px-8 space-y-12">
        
        {/* Technical Skills */}
        <section>
          <div className="border-b border-gray-200 dark:border-gray-700 pb-2 mb-6">
            <h2 className="text-xs uppercase tracking-wider font-semibold text-gray-500 dark:text-gray-400">
              Technical Skills
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Languages & Frameworks</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">JavaScript (ES6+), React.js, Next.js, Node.js, HTML5, CSS3, Tailwind CSS, Python</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Databases</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">MongoDB, PostgreSQL, Firebase</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Tools & Platforms</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Git/GitHub, Vercel, Netlify, VS Code, Figma, Adobe Creative Suite</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Data & Analytics</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Google Analytics, Tableau, DataWrapper, Excel, Statistical Analysis</p>
              </div>
            </div>
          </div>
        </section>

        {/* Development Projects */}
        <section>
          <div className="border-b border-gray-200 dark:border-gray-700 pb-2 mb-6">
            <h2 className="text-xs uppercase tracking-wider font-semibold text-gray-500 dark:text-gray-400">
              Development Projects
            </h2>
          </div>
          
          <div className="space-y-8">
            <div className="border-l-2 border-blue-500 pl-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-1">
                Expirty - Expiration Date Tracker <span className="text-sm font-normal text-gray-500">(2024)</span>
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                Full-stack Next.js application helping users track product expiration dates with user authentication, CRUD operations, and responsive design.
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-500 mb-2">
                <strong>Technologies:</strong> Next.js, MongoDB, Tailwind CSS, Vercel deployment
              </p>
              <a href="https://github.com/tbrown034/expirty" target="_blank" className="text-blue-600 dark:text-blue-400 hover:underline text-sm">
                View on GitHub →
              </a>
            </div>

            <div className="border-l-2 border-blue-500 pl-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-1">
                ReStub - Restaurant Bill Splitter <span className="text-sm font-normal text-gray-500">(2024)</span>
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                React-based web app for splitting restaurant bills among friends with tip calculations, tax handling, and equal/custom splits.
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-500 mb-2">
                <strong>Technologies:</strong> React, JavaScript, CSS3, responsive design
              </p>
              <a href="https://github.com/tbrown034/restub" target="_blank" className="text-blue-600 dark:text-blue-400 hover:underline text-sm">
                View on GitHub →
              </a>
            </div>

            <div className="border-l-2 border-blue-500 pl-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-1">
                Reflectyr - Personal Reflection Journal <span className="text-sm font-normal text-gray-500">(2024)</span>
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                Digital journaling platform with mood tracking and analytics, featuring secure user data management and progress visualization.
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-500 mb-2">
                <strong>Technologies:</strong> Next.js, Firebase, Chart.js, Tailwind CSS
              </p>
              <a href="https://github.com/tbrown034/reflectyr" target="_blank" className="text-blue-600 dark:text-blue-400 hover:underline text-sm">
                View on GitHub →
              </a>
            </div>

            <div className="border-l-2 border-blue-500 pl-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-1">
                Keith Brown DDS - Dental Practice Website <span className="text-sm font-normal text-gray-500">(2024)</span>
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                Professional dental practice website with appointment booking, optimized for local SEO and mobile responsiveness.
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-500 mb-2">
                <strong>Technologies:</strong> Next.js, Tailwind CSS, contact form integration
              </p>
              <a href="https://github.com/tbrown034/keith-brown-dds" target="_blank" className="text-blue-600 dark:text-blue-400 hover:underline text-sm">
                View on GitHub →
              </a>
            </div>
          </div>
        </section>

        {/* Journalism Experience */}
        <section>
          <div className="border-b border-gray-200 dark:border-gray-700 pb-2 mb-6">
            <h2 className="text-xs uppercase tracking-wider font-semibold text-gray-500 dark:text-gray-400">
              Journalism Experience
            </h2>
          </div>
          
          <div className="space-y-6">
            <div className="border-l-2 border-green-500 pl-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Staff Writer</h3>
              <p className="text-blue-600 dark:text-blue-400 text-sm font-medium">Oklahoma Watch | 2020-2024</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
                Investigated government accountability, healthcare policy, and criminal justice reform. Produced data visualizations and interactive charts for complex stories.
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">
                <strong>Awards:</strong> OK SPJ Reporter of Year (2020), Great Plains Writer of Year (2021), OK SPJ Investigative (2022)
              </p>
            </div>

            <div className="border-l-2 border-green-500 pl-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Staff Writer</h3>
              <p className="text-blue-600 dark:text-blue-400 text-sm font-medium">Wyoming Tribune Eagle | 2018-2020</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
                Covered state legislature, elections, and municipal government. Specialized in budget analysis and policy impact reporting.
              </p>
            </div>

            <div className="border-l-2 border-green-500 pl-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Reporter</h3>
              <p className="text-blue-600 dark:text-blue-400 text-sm font-medium">CNHI Newspapers | 2014-2018</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
                Multi-paper coverage of courts, city councils, and county commissions. Developed expertise in public records and freedom of information.
              </p>
            </div>

            <div className="border-l-2 border-green-500 pl-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Reporter</h3>
              <p className="text-blue-600 dark:text-blue-400 text-sm font-medium">Staunton News Leader | 2012-2014</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
                Courts and crime reporter covering federal and state judicial proceedings. Investigative pieces on local government transparency.
              </p>
            </div>
          </div>
        </section>

        {/* Education */}
        <section>
          <div className="border-b border-gray-200 dark:border-gray-700 pb-2 mb-6">
            <h2 className="text-xs uppercase tracking-wider font-semibold text-gray-500 dark:text-gray-400">
              Education & Certifications
            </h2>
          </div>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100">Full-Stack Web Development Certificate</h3>
              <p className="text-blue-600 dark:text-blue-400 text-sm">University of Oklahoma, 2024</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100">Bachelor of Arts, Political Science & Journalism</h3>
              <p className="text-blue-600 dark:text-blue-400 text-sm">Indiana University, Bloomington, 2006</p>
            </div>
          </div>
        </section>

        {/* Data Visualization */}
        <section>
          <div className="border-b border-gray-200 dark:border-gray-700 pb-2 mb-6">
            <h2 className="text-xs uppercase tracking-wider font-semibold text-gray-500 dark:text-gray-400">
              Data Visualization & Analysis
            </h2>
          </div>
          
          <ul className="space-y-2 text-gray-600 dark:text-gray-400">
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              Created interactive maps and charts using Tableau, DataWrapper, and D3.js
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              Analyzed campaign finance data, demographic trends, and policy impacts
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              Published visualizations in Oklahoma Watch articles reaching 100K+ readers
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              Expertise in translating complex datasets into accessible public information
            </li>
          </ul>
        </section>

        {/* Back Navigation */}
        <div className="pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex gap-4">
            <a
              href="/"
              className="inline-flex items-center px-6 py-3 border-2 border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 font-medium rounded-lg transition-colors duration-200"
            >
              ← Back to Portfolio
            </a>
            <a
              href="/ViewResume"
              className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200"
            >
              View Resume
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}