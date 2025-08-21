import Image from "next/image";
import photo from "@/public/images/trevorPhoto2.jpeg";

export default function Mug() {
  return (
    <div className="flex justify-center lg:justify-start animate-gentleRevealDelay1 w-fit">
      {/* Mobile / Tablet circular version - bigger and bolder */}
      <div className="lg:hidden relative">
        {/* Animated shadow ring for depth */}
        <div className="absolute -inset-2 w-52 h-52 sm:w-60 sm:h-60 md:w-72 md:h-72 rounded-full bg-gradient-to-br from-blue-500/20 to-gray-500/20 dark:from-blue-400/15 dark:to-gray-400/15 blur-2xl animate-pulse-slow" />
        
        {/* Photo container with prominent framing */}
        <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 p-1 rounded-full bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 dark:from-gray-600 dark:via-gray-700 dark:to-gray-800 shadow-2xl">
          <div className="relative w-full h-full rounded-full overflow-hidden ring-4 ring-white dark:ring-gray-900">
            <Image
              className="h-full w-full object-cover"
              src={photo}
              alt="Trevor Brown"
              fill
              sizes="(max-width: 640px) 192px, (max-width: 768px) 224px, (max-width: 1024px) 256px, 320px"
              priority
            />
          </div>
        </div>
      </div>

      {/* Desktop professional version - larger and more prominent */}
      <div className="hidden lg:block relative group">
        {/* Animated background glow */}
        <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-blue-500/10 to-gray-500/10 dark:from-blue-950/20 dark:to-gray-800/20 blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-700 animate-pulse-slow" />
        
        {/* Photo container with strong architectural framing */}
        <div className="relative w-72 h-72 xl:w-80 xl:h-80 rounded-3xl overflow-hidden ring-2 ring-gray-300 dark:ring-gray-700 shadow-2xl dark:shadow-black/30 group-hover:ring-4 group-hover:ring-blue-500/20 dark:group-hover:ring-blue-400/20 transition-all duration-500">
          <Image
            className="h-full w-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
            src={photo}
            alt="Trevor Brown"
            fill
            sizes="(max-width: 1280px) 288px, 320px"
            priority
          />
        </div>
      </div>
    </div>
  );
}
