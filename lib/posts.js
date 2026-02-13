import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "content", "posts");

function isValidSlug(slug) {
  return typeof slug === "string" && /^[a-zA-Z0-9][a-zA-Z0-9_-]*$/.test(slug);
}

export function getAllPosts() {
  if (!fs.existsSync(postsDirectory)) return [];

  const fileNames = fs.readdirSync(postsDirectory);

  const posts = fileNames
    .filter((name) => name.endsWith(".mdx"))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, "");
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);

      return {
        slug,
        ...data,
      };
    })
    .filter((post) => post.published !== false)
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  return posts;
}

export function getPostBySlug(slug) {
  if (!isValidSlug(slug)) return null;

  const fullPath = path.join(postsDirectory, `${slug}.mdx`);

  if (!fullPath.startsWith(postsDirectory)) return null;
  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    frontmatter: data,
    content,
  };
}

export function getAllPostSlugs() {
  if (!fs.existsSync(postsDirectory)) return [];

  return fs
    .readdirSync(postsDirectory)
    .filter((name) => name.endsWith(".mdx"))
    .map((name) => name.replace(/\.mdx$/, ""));
}
