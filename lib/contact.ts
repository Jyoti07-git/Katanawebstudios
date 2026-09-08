import { z } from "zod";

export const projectBriefSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name.").max(80),
  email: z.string().trim().email("Please enter a valid email address.").max(160),
  company: z.string().trim().max(120).optional().default(""),
  phone: z.string().trim().max(40).optional().default(""),
  budget: z.string().trim().min(1, "Please select a budget range.").max(80),
  timeline: z.string().trim().min(1, "Please select a timeline.").max(80),
  services: z.array(z.string().trim().min(1)).min(1, "Select at least one service.").max(5),
  description: z.string().trim().min(20, "Tell us a little more about the project.").max(3000),
  website: z.string().max(0).optional().default(""),
});

export type ProjectBrief = z.infer<typeof projectBriefSchema>;

export function briefToText(brief: ProjectBrief) {
  return [
    `Name: ${brief.name}`,
    `Email: ${brief.email}`,
    `Company: ${brief.company || "Not provided"}`,
    `Phone: ${brief.phone || "Not provided"}`,
    `Budget: ${brief.budget}`,
    `Timeline: ${brief.timeline}`,
    `Services: ${brief.services.join(", ")}`,
    "",
    "Project brief:",
    brief.description,
  ].join("\n");
}
