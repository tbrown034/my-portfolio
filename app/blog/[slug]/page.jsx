import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getPostBySlug, getAllPostSlugs } from "@/lib/posts";

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: `${post.frontmatter.title} - Trevor Brown`,
    description: post.frontmatter.excerpt,
  };
}

const mdxComponents = {
  h1: (props) => (
    <h1
      className="text-3xl sm:text-4xl font-black font-montserrat text-gray-900 dark:text-white mt-10 mb-4"
      {...props}
    />
  ),
  h2: (props) => (
    <h2
      className="text-2xl sm:text-3xl font-bold font-montserrat text-gray-900 dark:text-white mt-8 mb-3"
      {...props}
    />
  ),
  h3: (props) => (
    <h3
      className="text-xl font-semibold font-montserrat text-gray-900 dark:text-white mt-6 mb-2"
      {...props}
    />
  ),
  p: (props) => (
    <p
      className="text-gray-700 dark:text-neutral-200 leading-relaxed mb-4"
      {...props}
    />
  ),
  a: (props) => (
    <a
      className="text-blue-800 dark:text-blue-400 underline underline-offset-2 hover:text-blue-600 dark:hover:text-blue-300 transition-colors"
      {...props}
    />
  ),
  ul: (props) => (
    <ul
      className="list-disc list-outside ml-6 mb-4 space-y-1 text-gray-700 dark:text-neutral-200"
      {...props}
    />
  ),
  ol: (props) => (
    <ol
      className="list-decimal list-outside ml-6 mb-4 space-y-1 text-gray-700 dark:text-neutral-200"
      {...props}
    />
  ),
  li: (props) => <li className="leading-relaxed" {...props} />,
  blockquote: (props) => (
    <blockquote
      className="border-l-2 border-blue-800 dark:border-blue-400 pl-4 my-6 text-gray-600 dark:text-neutral-300 italic"
      {...props}
    />
  ),
  code: (props) => (
    <code
      className="bg-gray-100 dark:bg-neutral-800 text-gray-800 dark:text-neutral-200 px-1.5 py-0.5 rounded text-sm font-mono"
      {...props}
    />
  ),
  pre: (props) => (
    <pre
      className="bg-gray-100 dark:bg-neutral-800 rounded-lg p-4 mb-4 overflow-x-auto text-sm"
      {...props}
    />
  ),
  hr: () => <hr className="border-gray-200 dark:border-slate-800 my-8" />,
  img: (props) => <img className="rounded-lg my-6 max-w-full" {...props} />,
};

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post || post.frontmatter.published === false) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white dark:bg-neutral-950">
      <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12 pt-8 pb-6">
        <div className="flex items-center justify-between mb-6">
          <Link
            href="/blog"
            className="text-sm font-medium text-gray-500 dark:text-slate-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            &larr; All Posts
          </Link>
          <Link
            href="/"
            className="text-sm font-medium text-gray-500 dark:text-slate-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            Portfolio
          </Link>
        </div>

        <time className="text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-neutral-500">
          {new Date(post.frontmatter.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-montserrat text-gray-900 dark:text-white mt-2 mb-4">
          {post.frontmatter.title}
        </h1>

        {post.frontmatter.excerpt && (
          <p className="text-lg text-gray-600 dark:text-neutral-300 leading-relaxed mb-6">
            {post.frontmatter.excerpt}
          </p>
        )}

        {post.frontmatter.tags && post.frontmatter.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {post.frontmatter.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-medium text-gray-500 dark:text-neutral-400 bg-gray-100 dark:bg-neutral-800 px-2 py-0.5 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="border-t border-gray-200 dark:border-slate-800" />
      </div>

      <article className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12 pb-12">
        <MDXRemote source={post.content} components={mdxComponents} />
      </article>

      <div className="border-t border-gray-100 dark:border-slate-800/50 py-6">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex justify-center gap-3">
            <a
              href="#"
              className="px-4 py-2 text-xs font-medium text-gray-500 dark:text-neutral-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              &uarr; Top
            </a>
            <Link
              href="/blog"
              className="px-4 py-2 text-xs font-medium text-gray-500 dark:text-neutral-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              &larr; All Posts
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
