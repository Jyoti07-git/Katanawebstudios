import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { notFound } from "next/navigation";
import { formatDate, getAllPosts, getPost } from "@/lib/content";
import { site } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() { return getAllPosts().map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getAllPosts().find((item) => item.slug === slug);
  if (!post) return {};
  const image = "/og-card.svg";
  return { title: post.title, description: post.description, openGraph: { type: "article", publishedTime: post.date, authors: [post.author], images: [{ url: image, width: 1200, height: 630, alt: post.title }] }, twitter: { card: "summary_large_image", images: [image] } };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  if (!getAllPosts().some((item) => item.slug === slug)) notFound();
  const post = await getPost(slug);
  const related = getAllPosts().filter((item) => item.slug !== slug && item.tags.some((tag) => post.tags.includes(tag))).slice(0, 2);
  return <article className="article"><header className="shell article-header"><Link href="/blog" className="back-link"><ArrowLeft /> All insights</Link><p className="eyebrow">{post.tags.join(" · ")}</p><h1>{post.title}</h1><p className="article-header__dek">{post.description}</p><div className="article-meta"><span>{post.author}</span><span>{formatDate(post.date)}</span><span>5 min read</span></div></header>
    <div className="article-cover" aria-hidden="true"><div><span>KATANA</span><i /></div></div>
    <div className="shell article-body"><div className="prose">{post.content}</div></div>
    {related.length > 0 && <section className="shell related-posts"><p className="eyebrow">Keep reading</p><div>{related.map((item) => <Link href={`/blog/${item.slug}`} key={item.slug}><span>{item.tags[0]}</span><h2>{item.title}</h2><ArrowUpRight /></Link>)}</div></section>}
    <section className="article-cta"><div className="shell"><p className="eyebrow">Put it to work</p><h2>Have a sharper<br /><em>idea in mind?</em></h2><Link className="button" href="/contact">Start a project <ArrowUpRight /></Link></div></section>
  </article>;
}
