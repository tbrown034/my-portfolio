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
          <Link className="p-1 rounded-lg hover:bg-blue-300" href="/">
            {" "}
            <AiFillTwitterCircle className="w-16 h-16" />
          </Link>
          <Link className="p-1 rounded-lg hover:bg-blue-300" href="/">
            {" "}
            <AiFillGithub className="w-16 h-16" />
          </Link>

          <Link className="p-1 rounded-lg hover:bg-blue-300" href="/">
            {" "}
            <AiFillLinkedin className="w-16 h-16" />
          </Link>
          <Link className="p-1 rounded-lg hover:bg-blue-300" href="#contact">
            {" "}
            <AiFillMail className="w-16 h-16" />
          </Link>
        </div>
      </div>
    </section>
  );
}
