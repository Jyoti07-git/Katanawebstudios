import { describe, expect, it } from "vitest";
import { briefToText, projectBriefSchema } from "../lib/contact";
import { whatsappUrl } from "../lib/site";

const validBrief = {
  name: "Avery Singh",
  email: "avery@example.com",
  company: "Northstar",
  phone: "",
  budget: "₹3L – ₹7L",
  timeline: "1–3 months",
  services: ["Web design & development"],
  description: "We need a clearer website to support our growing consultancy practice.",
  website: "",
};

describe("project brief validation", () => {
  it("accepts a complete project brief", () => {
    expect(projectBriefSchema.safeParse(validBrief).success).toBe(true);
  });

  it("rejects a short description and invalid email", () => {
    const result = projectBriefSchema.safeParse({ ...validBrief, email: "not-an-email", description: "Too short" });
    expect(result.success).toBe(false);
  });

  it("formats messages and WhatsApp handoffs safely", () => {
    const parsed = projectBriefSchema.parse(validBrief);
    expect(briefToText(parsed)).toContain("Northstar");
    expect(whatsappUrl("A project & a question")).toContain("A%20project%20%26%20a%20question");
  });
});
