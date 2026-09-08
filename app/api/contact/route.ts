import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { briefToText, projectBriefSchema } from "@/lib/contact";
import { site } from "@/lib/site";

export const runtime = "nodejs";

const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 5;
const attempts = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(ip: string) {
  const now = Date.now();
  const current = attempts.get(ip);
  if (!current || now > current.resetAt) {
    attempts.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }
  current.count += 1;
  return current.count > MAX_REQUESTS;
}

export async function POST(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (isRateLimited(ip)) return NextResponse.json({ message: "Please wait a few minutes before trying again." }, { status: 429 });

  let payload: unknown;
  try { payload = await request.json(); } catch { return NextResponse.json({ message: "Invalid request." }, { status: 400 }); }
  if (typeof payload === "object" && payload !== null && "website" in payload && (payload as { website?: unknown }).website) return NextResponse.json({ ok: true });

  const parsed = projectBriefSchema.safeParse(payload);
  if (!parsed.success) {
    const errors = Object.fromEntries(Object.entries(parsed.error.flatten().fieldErrors).map(([key, value]) => [key, value?.[0] || "Please check this field."]));
    return NextResponse.json({ message: "Please check the highlighted fields.", errors }, { status: 422 });
  }

  const brief = parsed.data;
  if (!process.env.RESEND_API_KEY) {
    if (process.env.NODE_ENV === "production") return NextResponse.json({ message: "We couldn’t send your brief right now. Please use WhatsApp instead." }, { status: 503 });
    console.info("[Katana contact brief — configure Resend to send]", briefToText(brief));
    return NextResponse.json({ ok: true });
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: process.env.EMAIL_FROM || "Katana Webstudios <onboarding@resend.dev>",
      to: [process.env.CONTACT_EMAIL || site.email],
      replyTo: brief.email,
      subject: `New project brief — ${brief.name}${brief.company ? ` / ${brief.company}` : ""}`,
      text: briefToText(brief),
    });
    if (error) throw error;
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[Katana contact email failed]", error);
    return NextResponse.json({ message: "We couldn’t send your brief right now. Please use WhatsApp instead." }, { status: 503 });
  }
}
