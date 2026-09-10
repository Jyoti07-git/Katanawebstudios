export const site = {
  name: "Katana Webstudios",
  shortName: "KATANA",
  description:
    "Katana Webstudios designs sharp, high-converting digital experiences for ambitious businesses.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://katanawebstudios.com",
  email: process.env.CONTACT_EMAIL || "contact@katanawebstudios.com",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "917656945023",
  social: {
    instagram: "https://www.instagram.com/katanawebstudios?stkn=MTV3dWtpMWdwdnpyZg==",
    linkedin: "https://www.linkedin.com/company/katana-web-studios/",
  },
} as const;

export const navigation = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
] as const;

export const services = [
  {
    number: "01",
    title: "Web design & development",
    summary: "Distinctive, fast websites that make your business impossible to ignore.",
    detail: "Strategy, UX, visual direction, development, CMS-ready architecture, and launch support.",
  },
  {
    number: "02",
    title: "SEO foundations",
    summary: "Findable from day one, built around the language your buyers actually use.",
    detail: "Technical SEO, on-page structure, content opportunities, analytics, and reporting foundations.",
  },
  {
    number: "03",
    title: "Growth campaigns",
    summary: "Landing pages and creative that give your paid attention somewhere worth landing.",
    detail: "Campaign pages, conversion paths, creative direction, and performance-ready measurement.",
  },
] as const;

export const work = [
  {
    slug: "northstar-Gym",
    client: "Northstar Gym",
    category: "Brand platform · Website",
    title: "Confidence for every next move.",
    description: "A clarity-first gym for a modern finance partner.",
    type: "northstar",
  },
  {
    slug: "Lumeas-Skincare",
    client: "Lumeas-Skincare",
    category: "Ecommerce · Editorial",
    title: "Objects with a point of view.",
    description: "A refined commerce experience for a design-led homeware label.",
    type: "morrow",
  },
   {
    slug: "Photography-studios",
    client: "Photography-studios",
    category: "Brand Platform · Editorial",
    title: "Objects with a point of view.",
    description: "A refined brand experience for a design label.",
    type: "morrow",
  },
  {
    slug: "archform",
    client: "Archform",
    category: "Strategy · Website",
    title: "Architecture in motion.",
    description: "A vivid portfolio system for a practice shaping contemporary spaces.",
    type: "archform",
  },
] as const;

export function whatsappUrl(message = "Hi Katana Webstudios, I'd like to discuss a new website project.") {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
