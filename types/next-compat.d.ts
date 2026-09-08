// Some sandboxed npm installs omit this declaration although Next's generated
// route checker imports it. The runtime module remains supplied by Next.
declare module "next/dist/lib/metadata/types/metadata-interface.js" {
  export type ResolvingMetadata = unknown;
  export type ResolvingViewport = unknown;
}

declare module "next/server.js" {
  export class NextRequest extends Request {}
  export class NextResponse extends Response {
    static json(data: unknown, init?: ResponseInit): NextResponse;
  }
}

declare module "next/types.js" {
  export type ResolvingMetadata = unknown;
  export type ResolvingViewport = unknown;
}

// The package contents available to this sandbox are missing a number of the
// declaration files published with Next. Keep the local app type-checkable
// without changing its runtime imports; a normal npm install uses Next's own
// richer declarations instead.
declare module "next" {
  export interface NextConfig { reactStrictMode?: boolean }
  export interface Metadata { [key: string]: unknown }
  export namespace MetadataRoute {
    export type Sitemap = Array<{ url: string; lastModified?: Date | string; changeFrequency?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never"; priority?: number }>;
  }
}

declare module "next/link" {
  const Link: (props: any) => any;
  export default Link;
}

declare module "next/navigation" {
  export function notFound(): never;
}

declare module "next/server" {
  export class NextRequest extends Request {}
  export class NextResponse extends Response {
    static json(data: unknown, init?: ResponseInit): NextResponse;
  }
}
