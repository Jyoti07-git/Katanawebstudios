import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { formatDate, getAllPosts } from "@/lib/content";

export const metadata = { title: "Insights", description: "Notes on building sharper websites, brands, and digital growth systems." };

export default function BlogPage() {
  const posts = getAllPosts();
  const featured = posts.find((post) => post.featured) || posts[0];
  const rest = posts.filter((post) => post.slug !== featured.slug);
  return <><PageHero eyebrow="Insights" title="A sharper point of view." intro="Notes on the decisions that make digital work clearer, faster, and much harder to ignore." />
    <section className="shell section blog-list">
      <Reveal><Link href={`/blog/${featured.slug}`} className="featured-post"><div className="featured-post__art"><span>Field notes<br />by Katana</span><i /></div><div><p className="eyebrow">Featured · {formatDate(featured.date)}</p><h2>{featured.title}</h2><p>{featured.description}</p><span className="text-link">Read article <ArrowUpRight /></span></div></Link></Reveal>
      <div className="post-grid">{rest.map((post, index) => <Reveal key={post.slug} delay={index * 0.08}><article className="post-card"><p className="eyebrow">{post.tags[0]} · {formatDate(post.date)}</p><h2><Link href={`/blog/${post.slug}`}>{post.title}</Link></h2><p>{post.description}</p><Link href={`/blog/${post.slug}`} className="text-link">Read article <ArrowUpRight /></Link></article></Reveal>)}</div>
    </section>
  </>;
}
