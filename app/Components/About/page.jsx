import Intro from "./intro";
import Contact from "./contact";
import Links from "./links";
import Image from "next/image";
import photo from "../../../public/images/trevorall.jpeg";
export default function about() {
  return (
    <section className="flex flex-col justify-between gap-4 p-8 bg-indigo-50">
      <Intro />
      <Image
        className="rounded-lg"
        src={photo}
        alt="Photo of Trevor, Lauren and Indy"
      ></Image>
      <Contact />
      <Links />
    </section>
  );
}
