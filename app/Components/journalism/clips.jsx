import Image from "next/image";
import photo from "../../../public/images/okwatch.png";
import Link from "next/link";
import { clips } from "../../data/journalismClips.js";
import { GlobeAltIcon } from "@heroicons/react/24/outline";
import mug from "../../../public/images/trevorPhoto2.jpeg";
export default function Clips() {
  return (
    <section className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold lg:text-center font-montserrat sm:text-4xl">
        Selected Articles
      </h1>
      <p className="text-xl font-robotoSlab ">
        As data-driven investigative reporter for more than 15 years, I have
        written hundreds, if not thousands, of articles about politics,
        government corruption or inefficenes and stories that matter to the
        community.
      </p>
      <p className="text-xl font-robotoSlab ">
        I pride myself in well-researched, well-sourced articles explain, reveal
        or uncover something that would otherwise remain hidden. Here are some
        of my top work in the past years.
      </p>
      <section className="grid grid-cols-1 gap-4 py-4 space-y-1 md:grid-cols-2 lg:grid-cols-3">
        {clips.map((clip, index) => (
          <div
            key={index}
            className="flex flex-col justify-between gap-4 pb-4 bg-white border-4 border-blue-900 rounded-lg "
          >
            <Image alt="alt" src={clip.image}></Image>
            <div className="px-6">
              <Image alt="Oklahoma Watch logo" src={photo}></Image>
            </div>
            <h1 className="px-2 text-xl font-montserrat">{clip.headline}</h1>

            <div className="flex items-center gap-2 px-2">
              <Image
                className="rounded-full"
                height={75}
                src={mug}
                alt="mug"
              ></Image>
              <div className="flex flex-col justify-start gap-2 text ">
                <h3>
                  By <span className="font-semibold">Trevor Brown</span>{" "}
                </h3>
                <h3 className="text-sm">Published: {clip.date}</h3>
              </div>{" "}
            </div>
            <p className="px-2">{clip.text}</p>

            <div className="flex w-1/2 gap-4 px-2 py-4 border-t-2 border-blue-600">
              <Link
                className="flex items-center gap-2 p-1 font-bold border-2 border-blue-800 rounded-lg hover:bg-blue-300 active:bg-blue-400"
                href={clip.siteLink}
              >
                <p>Full Article</p>
                <GlobeAltIcon className="w-12 h-12" />
              </Link>
            </div>
          </div>
        ))}
      </section>
    </section>
  );
}
