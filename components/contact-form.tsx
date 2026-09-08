"use client";

import { FormEvent, useState } from "react";
import { ArrowUpRight, CheckCircle2, LoaderCircle } from "lucide-react";
import { services } from "@/lib/site";

type FieldErrors = Record<string, string>;

export function ContactForm() {
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrors({});
    setStatus("sending");
    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...payload, services: formData.getAll("services") }),
    }).catch(() => null);

    if (!response) {
      setStatus("error");
      return;
    }
    const body = await response.json();
    if (!response.ok) {
      setErrors(body.errors || {});
      setStatus("error");
      return;
    }
    form.reset();
    setStatus("success");
  }

  if (status === "success") {
    return <div className="form-success" role="status"><CheckCircle2 /><h2>Brief received.</h2><p>Thanks for reaching out. We’ll review the details and get back to you within two business days.</p><button type="button" className="text-link" onClick={() => setStatus("idle")}>Send another brief <span>↗</span></button></div>;
  }

  return (
    <form className="project-form" onSubmit={onSubmit} noValidate>
      <div className="form-grid">
        <Field label="Your name" name="name" required error={errors.name} />
        <Field label="Email address" name="email" type="email" required error={errors.email} />
        <Field label="Company / brand" name="company" error={errors.company} />
        <Field label="Phone number" name="phone" type="tel" error={errors.phone} />
        <SelectField label="Working budget" name="budget" error={errors.budget} options={["Select a range", "Under ₹1L", "₹1L – ₹3L", "₹3L – ₹7L", "₹7L+", "Let’s discuss"]} />
        <SelectField label="Ideal timeline" name="timeline" error={errors.timeline} options={["Select a timeline", "ASAP", "Within 1 month", "1–3 months", "3+ months", "Flexible"]} />
      </div>
      <fieldset className="service-checks"><legend>What can we help with?</legend><div>{services.map((service) => <label key={service.number}><input type="checkbox" name="services" value={service.title} /><span>{service.title}</span></label>)}</div>{errors.services && <p className="field-error">{errors.services}</p>}</fieldset>
      <label className="field field--full"><span>Tell us about the project <b>*</b></span><textarea name="description" rows={6} placeholder="What are you building? Where are you now, and where do you want to go?" aria-invalid={!!errors.description} aria-describedby={errors.description ? "description-error" : undefined} />{errors.description && <p id="description-error" className="field-error">{errors.description}</p>}</label>
      <label className="honeypot" aria-hidden="true">Leave this empty<input name="website" tabIndex={-1} autoComplete="off" /></label>
      {status === "error" && !Object.keys(errors).length && <p className="form-status form-status--error">Something went wrong. Please try again or contact us on WhatsApp.</p>}
      <button className="button form-submit" type="submit" disabled={status === "sending"}>{status === "sending" ? <><LoaderCircle className="spin" /> Sending</> : <>Send project brief <ArrowUpRight /></>}</button>
      <p className="form-note">We’ll only use your details to respond to this enquiry.</p>
    </form>
  );
}

function Field({ label, name, type = "text", required = false, error }: { label: string; name: string; type?: string; required?: boolean; error?: string }) {
  const errorId = `${name}-error`;
  return <label className="field"><span>{label}{required && <b> *</b>}</span><input type={type} name={name} required={required} aria-invalid={!!error} aria-describedby={error ? errorId : undefined} />{error && <p id={errorId} className="field-error">{error}</p>}</label>;
}

function SelectField({ label, name, options, error }: { label: string; name: string; options: string[]; error?: string }) {
  const errorId = `${name}-error`;
  return <label className="field"><span>{label} <b>*</b></span><select name={name} defaultValue="" required aria-invalid={!!error} aria-describedby={error ? errorId : undefined}>{options.map((option, index) => <option value={index === 0 ? "" : option} key={option} disabled={index === 0}>{option}</option>)}</select>{error && <p id={errorId} className="field-error">{error}</p>}</label>;
}
