import Link from "next/link";
import Image from "next/image";
import { demoProjects } from "@content/demos.js";

const FEATURED_IDS = [9, 11, 10, 2, 1, 3];
const featuredProjects = FEATURED_IDS.map((id) =>
  demoProjects.find((p) => p.id === id)
).filter(Boolean);

export default function ProjectsTeaser() {
  return (
    <section id="coding">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        {/* Section header */}
        <div className="mb-8">
          <div className="text-sm font-bold uppercase tracking-[0.15em] text-blue-800 dark:text-blue-400 mb-2">
            From Copy to Code
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-montserrat text-gray-900 dark:text-white mb-2">
            Web Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-neutral-300 max-w-3xl mt-3">
            Production sites and open-source tools — from tracking $2.7B in
            executive branch stock trades to monitoring press releases from
            all 100 U.S. senators.
          </p>
          <div className="space-y-1 mt-4">
            <div className="border-t-2 border-gray-900 dark:border-white"></div>
            <div className="border-t border-gray-900 dark:border-white"></div>
          </div>
        </div>

        {/* Featured project cards with screenshots */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredProjects.map((project) => {
            const screenshot =
              project.screenshots?.desktopLight ||
              project.gallery?.[0]?.image;

            return (
              <Link
                key={project.id}
                href={`/projects#${project.slug}`}
                className="group block bg-white dark:bg-neutral-800 rounded-lg border border-gray-200 dark:border-neutral-700 hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-md transition-all duration-200 overflow-hidden"
              >
                {/* Screenshot */}
                {screenshot && (
                  <div className="aspect-[16/10] overflow-hidden bg-gray-100 dark:bg-neutral-900">
                    <Image
                      src={screenshot}
                      alt={`${project.title} screenshot`}
                      className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-300"
                      width={800}
                      height={500}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      loading="lazy"
                      quality={85}
                    />
                  </div>
                )}

                {/* Text content */}
                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-blue-800 dark:group-hover:text-blue-400 transition-colors mb-1">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-neutral-400 mb-3">
                    {project.subtitle}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-neutral-300 leading-relaxed mb-3 line-clamp-2">
                    {Array.isArray(project.oneLiner)
                      ? project.oneLiner[0]
                      : project.oneLiner}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 5).map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 text-xs text-gray-500 dark:text-neutral-400 rounded bg-gray-100 dark:bg-neutral-900 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-8">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-semibold text-white bg-blue-800 dark:bg-blue-600 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-500 transition-all duration-200"
          >
            View more web projects &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
