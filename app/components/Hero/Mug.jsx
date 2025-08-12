import Image from "next/image";
import photo from "../../../public/images/trevorPhoto2.jpeg";

export default function Mug() {
  return (
    <div className="flex justify-center animate-gentleRevealDelay1">
      <Image
        className="p-2 border-2 border-blue-600 border-opacity-50 rounded-full shadow-lg bg-blue-50 sm:p-0 sm:rounded-3xl transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-default"
        style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
        src={photo}
        alt="Trevor Brown"
        priority={true}
      />
    </div>
  );
}