import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";

const postsDirectory = path.join(process.cwd(), "content", "blog");

export type PostFrontmatter = {
  title: string;
  description: string;
  date: string;
  author: string;
  cover: string;
  tags: string[];
  featured?: boolean;
};

export type PostSummary = PostFrontmatter & { slug: string };

function readPost(slug: string): PostSummary & { content: string } {
  const file = fs.readFileSync(path.join(postsDirectory, `${slug}.mdx`), "utf8");
  const { data, content } = matter(file);
  return { ...(data as PostFrontmatter), slug, content };
}

export function getAllPosts(): PostSummary[] {
  return fs
    .readdirSync(postsDirectory)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => readPost(file.replace(/\.mdx$/, "")))
    .sort((a, b) => +new Date(b.date) - +new Date(a.date))
    .map(({ content: _content, ...post }) => post);
}

export async function getPost(slug: string) {
  const post = readPost(slug);
  const { content } = await compileMDX<{ title: string }>({
    source: post.content,
    options: { parseFrontmatter: false, mdxOptions: { remarkPlugins: [remarkGfm] } },
  });
  return { ...post, content };
}

export function formatDate(date: string) {
  return new Intl.DateTimeFormat("en", { month: "long", day: "numeric", year: "numeric" }).format(
    new Date(date),
  );
}
