import Image from "next/image";
import photo from "@/public/images/trevorPhoto2.jpeg";

export default function Mug() {
  return (
    <div className="flex justify-center animate-gentleRevealDelay1">
      <div className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72">
        <Image
          className="rounded-full sm:rounded-2xl lg:rounded-3xl shadow-md ring-2 ring-gray-100 dark:ring-gray-800 transition-all duration-300 hover:shadow-lg object-cover"
          style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
          src={photo}
          alt="Trevor Brown"
          fill
          sizes="(max-width: 640px) 192px, (max-width: 1024px) 256px, 288px"
          priority={true}
        />
      </div>
    </div>
  );
}