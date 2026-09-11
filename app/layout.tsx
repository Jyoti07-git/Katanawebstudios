
import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { EntryLoader } from "@/components/entry-loader";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),

  title: {
    default: "Katana Webstudios — Web Design & Development",
    template: "%s | Katana Webstudios",
  },

  description:
    "Katana Webstudios creates high-converting websites, WordPress websites, React websites, redesigns and digital experiences for ambitious businesses.",

  keywords: [
    "Katana Webstudios",
    "web design",
    "web development",
    "WordPress web developer",
    "WordPress website development",
    "Elementor developer",
    "React web development",
    "Next.js development",
    "website redesign",
    "responsive web design",
    "SEO-friendly website development",
    "freelance web developer",
  ],

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    siteName: "Katana Webstudios",
    title: "Katana Webstudios — Web Design & Development",
    description:
      "High-converting websites, WordPress development, React websites and digital experiences for ambitious businesses.",
    url: "/",
  },

  twitter: {
    card: "summary_large_image",
    title: "Katana Webstudios — Web Design & Development",
    description:
      "Web design, WordPress, React and website development for ambitious businesses.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-QDBZF7H09T"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-QDBZF7H09T');
          `}
        </Script>

        <EntryLoader />
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}

