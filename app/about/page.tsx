import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";

export const metadata = { title: "About", description: "KatanaWebstudios is an independent digital studio for businesses that want to move with intent." };

export default function AboutPage() {
  return <><PageHero eyebrow="The studio" title="Small by design. Sharp by nature." intro="Katana is an independent studio for businesses who know that their next website is more than a coat of paint." />
    <section className="shell section about-story"><Reveal><p className="eyebrow">Our point of view</p><h2>Good digital work should feel <em>inevitable.</em></h2></Reveal><Reveal delay={0.12}><div><p>It should say the right thing before a visitor has to ask. It should move with purpose. And it should make the next step feel natural—not forced.</p><p>We work at the intersection of business clarity and creative instinct. That means less busywork, fewer layers, and a site built around what matters to the people you need to reach.</p><Link href="/contact" className="text-link">Work with Katana <ArrowUpRight /></Link></div></Reveal></section>
    <section className="values"><div className="shell"><p className="eyebrow">What you can expect</p><div className="values__grid"><div><span>01</span><h3>Directness</h3><p>Clear recommendations, candid feedback, and no agency fog.</p></div><div><span>02</span><h3>Momentum</h3><p>A deliberate process that moves the work forward every week.</p></div><div><span>03</span><h3>Care</h3><p>Every interaction is considered—from the strategy to the last hover state.</p></div></div></div></section>
  </>;
}
