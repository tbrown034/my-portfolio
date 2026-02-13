import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export const metadata = {
  title: "Blog - Trevor Brown",
  description:
    "Writing about web development, journalism, and the space where they intersect.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="min-h-screen bg-white dark:bg-neutral-950">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 pt-8 pb-6">
        <div className="flex items-start justify-between gap-6">
          <div>
            <div className="text-xs font-bold uppercase tracking-[0.15em] text-blue-800 dark:text-blue-400 mb-2">
              Writing
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-montserrat text-gray-900 dark:text-white mb-2">
              Blog
            </h1>
            <p className="text-lg text-gray-700 dark:text-neutral-200 max-w-3xl">
              Notes on web development, journalism and building things.
            </p>
          </div>
          <Link
            href="/"
            className="text-sm font-medium text-gray-500 dark:text-slate-400 hover:text-gray-900 dark:hover:text-white transition-colors shrink-0 mt-1"
          >
            &larr; Back to Portfolio
          </Link>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        {posts.length === 0 ? (
          <p className="text-gray-500 dark:text-neutral-400 py-12">
            No posts yet.
          </p>
        ) : (
          posts.map((post, index) => (
            <article
              key={post.slug}
              className={`py-8 ${
                index < posts.length - 1
                  ? "border-b border-gray-200 dark:border-slate-800"
                  : ""
              }`}
            >
              <Link href={`/blog/${post.slug}`} className="group block">
                <time className="text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-neutral-500">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
                <h2 className="text-xl sm:text-2xl font-bold font-montserrat text-gray-900 dark:text-white mt-1 mb-2 group-hover:text-blue-800 dark:group-hover:text-blue-400 transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-600 dark:text-neutral-300 leading-relaxed">
                  {post.excerpt}
                </p>
                {post.tags && post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-3">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium text-gray-500 dark:text-neutral-400 bg-gray-100 dark:bg-neutral-800 px-2 py-0.5 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </Link>
            </article>
          ))
        )}
      </div>

      <div className="border-t border-gray-100 dark:border-slate-800/50 py-6 mt-8">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex justify-center gap-3">
            <a
              href="#"
              className="px-4 py-2 text-xs font-medium text-gray-500 dark:text-neutral-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              &uarr; Top
            </a>
            <Link
              href="/"
              className="px-4 py-2 text-xs font-medium text-gray-500 dark:text-neutral-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              &larr; Homepage
            </Link>
            <Link
              href="/#contact"
              className="px-4 py-2 text-xs font-medium text-blue-700 dark:text-blue-400 hover:text-blue-900 dark:hover:text-blue-300 transition-colors"
            >
              Get in touch &rarr;
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
