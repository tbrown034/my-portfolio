import {
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiFillGithub,
  AiFillMail,
  AiFillCopy,
} from "react-icons/ai";
import Link from "next/link";

export default function MyLinks() {
  return (
    <section className="text-xl rounded-lg ">
      <div className="inline-block p-2 space-y-2 border-opacity-50 rounded-lg ">
        <div className="flex justify-center gap-8">
          <Link href="/">
            {" "}
            <AiFillTwitterCircle className="w-16 h-16" />
          </Link>
          <Link href="/">
            {" "}
            <AiFillGithub className="w-16 h-16" />
          </Link>

          <Link href="/">
            {" "}
            <AiFillLinkedin className="w-16 h-16" />
          </Link>
          <Link href="#contact">
            {" "}
            <AiFillMail className="w-16 h-16" />
          </Link>
        </div>
      </div>
    </section>
  );
}
