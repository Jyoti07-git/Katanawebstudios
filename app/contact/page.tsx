import { MessageCircle } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";
import { site, whatsappUrl } from "@/lib/site";

export const metadata = { title: "Start a project", description: "Tell Katana Webstudios about the website you want to build." };

export default function ContactPage() {
  return <><PageHero eyebrow="Start a project" title="Let’s make your next move count." intro="Share the shape of the challenge. We’ll come back with a clear view on the right next step." />
    <section className="shell section contact-layout"><aside><p className="eyebrow">Prefer a conversation?</p><h2>Start where it feels easiest.</h2><p>We typically respond to new project briefs within two business days.</p><a className="contact-method" href={whatsappUrl()} target="_blank" rel="noreferrer"><MessageCircle /> Chat on WhatsApp <span>↗</span></a><a className="contact-method" href={`mailto:${site.email}`}>{site.email}<span>↗</span></a></aside><ContactForm /></section>
  </>;
}
