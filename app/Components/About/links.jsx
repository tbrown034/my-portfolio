import {
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiFillGithub,
  AiFillMail,
} from "react-icons/ai";
import Link from "next/link";

export default function Links() {
  return (
    <section className="text-lg rounded-lg ">
      <div className="inline-block p-2 space-y-2 border-opacity-50 rounded-lg ">
        <div className="flex flex-wrap justify-center gap-8">
          <button className="p-1 rounded-lg hover:bg-blue-300" href="/">
            {" "}
            <AiFillTwitterCircle className="w-16 h-16" />
          </button>
          <a
            className="p-1 rounded-lg hover:bg-blue-300"
            href="https://github.com/tbrown034/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <AiFillGithub className="w-16 h-16" />
          </a>

          <a
            className="p-1 rounded-lg hover:bg-blue-300"
            href="https://www.linkedin.com/in/trevorabrown/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <AiFillLinkedin className="w-16 h-16" />
          </a>
          <Link className="p-1 rounded-lg hover:bg-blue-300" href="#contact">
            <AiFillMail className="w-16 h-16" />
          </Link>
        </div>
      </div>
    </section>
  );
}
