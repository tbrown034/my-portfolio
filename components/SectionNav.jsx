"use client";

export default function SectionNav({
  tabs,
  groups,
  activeSection,
  variant = "tabs",
}) {
  const handleClick = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  if (variant === "grouped" && groups) {
    return (
      <nav className="space-y-4">
        {groups.map((group) => (
          <div key={group.label}>
            <span className="text-xs font-semibold uppercase tracking-wider text-gray-900 dark:text-white mr-3">
              {group.label}
            </span>
            <div className="inline-flex flex-wrap gap-x-4 gap-y-1 mt-2 border-b-2 border-gray-900 dark:border-white pb-2">
              {group.items.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleClick(e, item.id)}
                  className="text-sm text-gray-500 dark:text-neutral-400 hover:text-gray-900 dark:hover:text-white border-b-2 border-transparent hover:border-gray-900 dark:hover:border-white -mb-0.5 pb-1 transition-colors duration-200"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        ))}
      </nav>
    );
  }

  return (
    <nav className="flex gap-8 border-b-2 border-gray-900 dark:border-white pt-4">
      {(tabs || []).map((tab) => (
        <a
          key={tab.id}
          href={`#${tab.id}`}
          onClick={(e) => handleClick(e, tab.id)}
          className={`pb-2 text-sm font-medium -mb-0.5 transition-colors duration-200 ${
            activeSection === tab.id
              ? "text-gray-900 dark:text-white border-b-2 border-gray-900 dark:border-white"
              : "text-gray-500 dark:text-neutral-400 border-b-2 border-transparent hover:text-gray-900 dark:hover:text-white hover:border-gray-900 dark:hover:border-white"
          }`}
        >
          {tab.label}
        </a>
      ))}
    </nav>
  );
}
