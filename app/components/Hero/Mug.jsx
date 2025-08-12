import Image from "next/image";
import photo from "../../../public/images/trevorPhoto2.jpeg";

export default function Mug() {
  return (
    <div className="flex justify-center animate-gentleRevealDelay1">
      <Image
        className="rounded-3xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-default"
        style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
        src={photo}
        alt="Trevor Brown"
        priority={true}
      />
    </div>
  );
}