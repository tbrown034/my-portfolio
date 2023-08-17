import {
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiFillGithub,
  AiFillMail,
} from "react-icons/ai";
import Link from "next/link";

export default function MyLinks() {
  return (
    <section className="text-lg rounded-lg ">
      <div className="inline-block p-2 space-y-2 border-opacity-50 rounded-lg ">
        <div className="flex flex-wrap justify-center gap-8">
          <Link
            className="p-1 transition-all duration-300 ease-in-out transform rounded-lg hover:bg-blue-300 dark:hover:bg-blue-600 "
            href="https://twitter.com/tbrownOKC"
            target="_blank"
          >
            {" "}
            <AiFillTwitterCircle className="w-16 h-16" />
          </Link>
          <Link
            className="p-1 rounded-lg hover:bg-blue-300 dark:hover:bg-blue-600 "
            href="https://github.com/tbrown034"
            target="_blank"
          >
            {" "}
            <AiFillGithub className="w-16 h-16" />
          </Link>

          <Link
            className="p-1 rounded-lg hover:bg-blue-300 dark:hover:bg-blue-600 "
            target="_blank"
            href="https://www.linkedin.com/in/trevorabrown/"
          >
            {" "}
            <AiFillLinkedin className="w-16 h-16" />
          </Link>
          <a
            className="p-1 rounded-lg hover:bg-blue-300 dark:hover:bg-blue-600 "
            href="mailto:trevorbrown.web@gmail.com"
          >
            {" "}
            <AiFillMail className="w-16 h-16" />
          </a>
        </div>
      </div>
    </section>
  );
}
