import Image from "next/image";
import photo from "@/public/images/trevorPhoto2.jpeg";

export default function Mug() {
  return (
    <div className="flex justify-center animate-gentleRevealDelay1">
      <Image
        className="rounded-full sm:rounded-2xl lg:rounded-3xl shadow-md ring-2 ring-gray-100 dark:ring-gray-800 transition-all duration-300 hover:shadow-lg"
        style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
        src={photo}
        alt="Trevor Brown"
        priority={true}
      />
    </div>
  );
}