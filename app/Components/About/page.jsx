import Intro from "./intro";
import Contact from "./contact";
import Links from "./links";
import Resume from "./Resume";
import photo from "../../../public/images/Trevor1.JPG";
import Image from "next/image";

export default function about() {
  return (
    <section className="flex flex-col justify-around gap-8 px-8 py-8 sm:gap-12 lg:gap-16 xl:gap-20 md:px-16 ">
      <Intro />
      <div className="">
        <Image src={photo} alt="photo" />
      </div>
      <div className="flex flex-col">
        <Resume />
        <Links />
      </div>
      <Contact />
    </section>
  );
}
