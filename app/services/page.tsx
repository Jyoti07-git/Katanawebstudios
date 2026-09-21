import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { services } from "@/lib/site";

export const metadata = {
  title: "Services",
  description:
    "Web design, development, SEO, and growth campaigns by Katana Webstudios.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  return <><PageHero eyebrow="Capabilities" title="Built to create momentum." intro="From the first strategic question to the moment your site goes live, we make every decision earn its place." />
    <section className="shell section capability-list">{services.map((service, index) => <Reveal key={service.number} delay={index * 0.08}><article className="capability"><p className="capability__number">{service.number}</p><div><p className="eyebrow">{service.title}</p><h2>{service.summary}</h2></div><div className="capability__detail"><p>{service.detail}</p><ul>{["Clear, senior-level thinking", "A focused process with no hand-offs", "Built to perform after launch"].map((item) => <li key={item}><Check />{item}</li>)}</ul></div></article></Reveal>)}</section>
    <section className="dark-banner"><div className="shell"><p className="eyebrow">One clear team</p><h2>Strategy and delivery<br /><em>in the same room.</em></h2><p>You get the people doing the thinking, the making, and the refining—without the agency layers.</p><Link href="/contact" className="button">Start a project <ArrowUpRight /></Link></div></section>
  </>;
}
