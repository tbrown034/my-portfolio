import { DiGithubBadge } from "react-icons/di";
import { AiFillLinkedin } from "react-icons/ai";
import Link from "next/link";

export default function MyLinks() {
  return (
    <section className="text-xl">
      <div className="inline-block">
        <div className="flex gap-4">
          <Link
            href="#about"
            className="p-2 bg-blue-800 rounded-lg text-blue-50 hover:bg-blue-300 active:bg-blue-400"
          >
            About
          </Link>

          <Link
            href="/resume"
            className="p-2 bg-blue-800 rounded-lg text-blue-50 hover:bg-blue-300 active:bg-blue-400"
          >
            Resume
          </Link>

          <Link
            href="#contact"
            className="p-2 bg-blue-800 rounded-lg text-blue-50 hover:bg-blue-300 active:bg-blue-400"
          >
            Contact
          </Link>
        </div>
        <div className="flex justify-center gap-4">
          <DiGithubBadge className="w-16 h-16" />
          <AiFillLinkedin className="w-16 h-16" />
        </div>
      </div>
    </section>
  );
}
