import Link from "next/link";
import { ArrowDownRight, ArrowUpRight, Check, MoveDown } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { RibbonField } from "@/components/ribbon";
import { WorkCard } from "@/components/work-card";
import { services, whatsappUrl, work } from "@/lib/site";

const process = ["Discover the edge", "Design the difference", "Build for momentum", "Launch, learn, evolve"];

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <RibbonField />
        <div className="shell hero__content">
          <Reveal className="hero__eyebrow"><p className="eyebrow">Independent digital studio · India / Worldwide</p></Reveal>
          <Reveal delay={0.08}><h1>Websites that<br /><em>cut through.</em></h1></Reveal>
          <Reveal delay={0.18} className="hero__bottom">
            <p>We turn ambitious brands into high-converting digital experiences—with strategic clarity and a little danger.</p>
            <div className="hero__actions"><Link href="/contact" className="button">Start a project <ArrowUpRight /></Link><a href={whatsappUrl()} className="text-link" target="_blank" rel="noreferrer">Talk on WhatsApp <ArrowUpRight /></a></div>
          </Reveal>
        </div>
        <a className="scroll-cue" href="#manifesto" aria-label="Scroll to introduction"><span>Scroll to explore</span><MoveDown /></a>
      </section>

      <section id="manifesto" className="manifesto section shell">
        <Reveal><p className="eyebrow">Not another template</p></Reveal>
        <Reveal delay={0.05}><h2>Most websites blend in.<br /><span>Yours should leave a mark.</span></h2></Reveal>
        <Reveal delay={0.12} className="manifesto__body"><p>Katana is the web partner for businesses ready to move with intent. We combine sharp positioning, visceral design, and clean technology so every visit has somewhere to go.</p><Link href="/about" className="text-link">Meet the studio <ArrowUpRight /></Link></Reveal>
      </section>

      <section className="service-section section">
        <div className="shell"><Reveal><div className="section-top"><p className="eyebrow">What we sharpen</p><Link href="/services" className="text-link">All capabilities <ArrowUpRight /></Link></div></Reveal>
          <div className="service-list">{services.map((service, index) => <Reveal key={service.number} delay={index * 0.08}><article className="service-item"><span>{service.number}</span><h3>{service.title}</h3><p>{service.summary}</p><ArrowDownRight /></article></Reveal>)}</div>
        </div>
      </section>

      <section className="work-section section shell">
        <Reveal><div className="section-top"><div><p className="eyebrow">Selected work</p><h2>Made to move<br />the needle.</h2></div><Link href="/work" className="button button--ghost">Explore all work <ArrowUpRight /></Link></div></Reveal>
        <div className="work-grid">{work.slice(0, 3).map((item, index) => <Reveal key={item.slug} delay={index * 0.08}><WorkCard item={item} index={index} /></Reveal>)}</div>
      </section>

      <section className="process-section section">
        <div className="shell"><Reveal><p className="eyebrow">How we work</p><h2>Good work is a<br /><span>contact support.</span></h2></Reveal>
          <div className="process-grid">{process.map((step, index) => <Reveal key={step} delay={index * 0.08}><div className="process-step"><span>0{index + 1}</span><h3>{step}</h3><p>{["Find the signal in the noise.", "Make the strategy visible.", "Turn ambition into interaction.", "Measure what changes."][index]}</p></div></Reveal>)}</div>
        </div>
      </section>

      <section className="quote-section shell"><Reveal><blockquote>“Katana gave us a site that feels exactly like the company we’d been trying to become.”</blockquote><p>Jordan Mitchell · Founder, Northstar Finance</p></Reveal></section>

      <section className="final-cta"><RibbonField subtle /><div className="shell final-cta__inner"><Reveal><p className="eyebrow">Your next move</p><h2>Ready to make<br /><em>an impact?</em></h2><p>Tell us where you want to go. We’ll show you how to get there with an edge.</p><Link href="/contact" className="button">Tell us about it <ArrowUpRight /></Link></Reveal></div></section>
    </>
  );
}
