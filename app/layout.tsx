import type { Metadata } from "next";
import "./globals.css";
import { EntryLoader } from "@/components/entry-loader";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "Katana Webstudios — Websites with an edge", template: "%s | Katana Webstudios" },
  description: site.description,
  openGraph: { type: "website", siteName: site.name, title: "Katana Webstudios — Websites with an edge", description: site.description },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <EntryLoader />
        <a className="skip-link" href="#main-content">Skip to content</a>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
