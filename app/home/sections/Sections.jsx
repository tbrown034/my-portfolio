import ProjectsTeaser from "./ProjectsTeaser";
import JournalismTeaser from "./JournalismTeaser";

export default function Sections() {
  return (
    <>
      <div className="bg-slate-200 dark:bg-black py-12">
        <ProjectsTeaser />
      </div>
      <div className="bg-slate-100 dark:bg-neutral-900 py-12">
        <JournalismTeaser />
      </div>
    </>
  );
}
