import Intro from "./intro";
import Contact from "./contact";
import Links from "./links";
import Image from "next/image";
import photo from "../../../public/images/trevorall.jpeg";
export default function about() {
  return (
    <section className="flex flex-col justify-around gap-8 px-8 py-8 sm:gap-12 lg:gap-16 xl:gap-20 md:px-16 ">
      <Intro />
      <div>
        <Image
          className="rounded-lg"
          src={photo}
          alt="Photo of Trevor, Lauren and Indy"
        ></Image>
      </div>

      <Contact />
      <Links />
    </section>
  );
}
