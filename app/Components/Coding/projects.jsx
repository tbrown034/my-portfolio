import Image from "next/image";
import Link from "next/link";
import { webProjects } from "../../resources/webProjects.js";
import { GlobeAltIcon } from "@heroicons/react/24/outline";
import { DiGithubBadge } from "react-icons/di";

export default function Projects() {
  return (
    <section className="flex flex-col gap-4">
      <h1 className="text-2xl font-semibold underline font-montserrat underline-offset-6 ">
        Projects and Freelance Work
      </h1>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {webProjects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col justify-between gap-4 pb-4 border-4 border-blue-900 rounded-lg "
          >
            <Image alt="alt" src={project.image}></Image>
            <h1 className="px-2 font-montserrat">{project.title}</h1>

            <div className="flex flex-wrap gap-1 px-2">
              {project.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="p-1 text-sm bg-blue-800 rounded-lg text-blue-50 font-firaCode"
                >
                  {tech}
                </span>
              ))}
            </div>

            <h3 className="px-2">{project.description}</h3>

            <div className="flex w-1/2 gap-4 px-2 py-4 border-t-2 border-blue-600">
              <Link
                className="flex items-center gap-2 p-1 text-sm font-bold border-2 border-blue-800 rounded-lg hover:bg-blue-300 active:bg-blue-400"
                href={project.githubLink}
              >
                <p>Github</p>

                <div>
                  <DiGithubBadge className="w-12 h-12" />
                </div>
              </Link>

              <Link
                className="flex items-center gap-2 p-1 font-bold border-2 border-blue-800 rounded-lg hover:bg-blue-300 active:bg-blue-400"
                href={project.siteLink}
              >
                <p>View Site</p>
                <GlobeAltIcon className="w-12 h-12" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
