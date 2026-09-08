import Link from "next/link";
import { Brand } from "@/components/brand";
import { navigation, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-top">
        <div><Brand light /><p>Digital experiences with an edge.</p></div>
        <div className="footer-links">
          <div><p className="footer-label">Explore</p>{navigation.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}</div>
          <div><p className="footer-label">Connect</p><a href={`mailto:${site.email}`}>{site.email}</a><a href={site.social.instagram} target="_blank" rel="noreferrer">Instagram ↗</a><a href={site.social.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a></div>
        </div>
      </div>
      <div className="shell footer-bottom"><span>© {new Date().getFullYear()} Katana Webstudios</span><span>Built to move business forward.</span></div>
    </footer>
  );
}
