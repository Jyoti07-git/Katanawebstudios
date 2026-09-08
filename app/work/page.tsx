import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { WorkCard } from "@/components/work-card";
import { work } from "@/lib/site";

export const metadata = { title: "Work", description: "A selection of sharp, strategic digital experiences from Katana Webstudios." };

export default function WorkPage() {
  return <><PageHero eyebrow="Selected work" title="Work that earns attention." intro="A few examples of what happens when strategy, story, and technology pull in the same direction." />
    <section className="shell section work-grid work-grid--page">{work.map((item, index) => <Reveal key={item.slug} delay={index * 0.08}><div id={item.slug}><WorkCard item={item} index={index} /></div></Reveal>)}</section>
    <section className="shell case-note"><p className="eyebrow">A note on our portfolio</p><p>These launch-ready case studies are illustrative placeholders. Your real project stories, outcomes, and imagery can replace them without changing the site structure.</p></section>
  </>;
}
