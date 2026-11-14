"use client";

import { useEffect, useId, useRef, useState, type FormEvent } from "react";
import { readAttribution, track } from "@/lib/analytics";

export type FieldDef =
  | { name: string; label: string; type: "text" | "email" | "url"; autoComplete?: string; hint?: string; required?: boolean }
  | { name: string; label: string; type: "textarea"; hint?: string; required?: boolean }
  | {
      name: string;
      label: string;
      type: "select";
      hint?: string;
      required?: boolean;
      options?: string[];
      groups?: { label: string; options: string[] }[];
    };

type Status = "idle" | "submitting" | "success" | "error";

const MIN_FILL_MS = 3000;
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const URLISH = /^(https?:\/\/)?([a-z0-9-]+\.)+[a-z]{2,}(\/\S*)?$/i;

function validate(field: FieldDef, raw: string): string | null {
  const v = raw.trim();
  if (field.required !== false && !v) return `Enter your ${field.label.toLowerCase()}.`;
  if (!v) return null;
  if (field.type === "email" && !EMAIL.test(v)) return "Enter an email address in the format name@company.com.";
  if (field.type === "url" && !URLISH.test(v)) return "Enter a website address, for example yourcompany.com.";
  if (v.length > 2000) return "This answer is too long.";
  return null;
}

export function LeadForm({
  formType,
  endpoint,
  fields,
  submitLabel,
  successHeading,
  successBody,
  fallback,
}: {
  formType: "apply";
  endpoint: string;
  fields: FieldDef[];
  submitLabel: string;
  successHeading: string;
  successBody: string;
  /** Shown with the error message, e.g. an email address */
  fallback?: { label: string; href: string } | null;
}) {
  const uid = useId();
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const startedAt = useRef<number>(0);
  const summaryRef = useRef<HTMLDivElement>(null);
  const successRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    startedAt.current = Date.now();
  }, []);

  useEffect(() => {
    if (status === "success") successRef.current?.focus();
  }, [status]);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const nextErrors: Record<string, string> = {};
    for (const f of fields) {
      const err = validate(f, String(data.get(f.name) ?? ""));
      if (err) nextErrors[f.name] = err;
    }
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      setStatus("idle");
      requestAnimationFrame(() => summaryRef.current?.focus());
      return;
    }

    const elapsed = Date.now() - startedAt.current;
    const honeypot = String(data.get("fax_number") ?? "");
    // Bots: fake success so they get no signal; nothing is sent.
    if (honeypot || elapsed < MIN_FILL_MS) {
      setStatus("success");
      return;
    }

    setStatus("submitting");
    const payload = {
      formType,
      fields: Object.fromEntries(fields.map((f) => [f.name, String(data.get(f.name) ?? "").trim()])),
      pageUrl: window.location.href,
      attribution: readAttribution(),
      submittedAt: new Date().toISOString(),
      elapsedMs: elapsed,
    };
    try {
      // text/plain keeps this a "simple" CORS request, which Apps Script web apps accept without preflight.
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(payload),
      });
      const json = (await res.json().catch(() => ({}))) as { ok?: boolean };
      if (!res.ok || json.ok !== true) throw new Error("Submission rejected");
      track("generate_lead", { form_type: formType });
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div ref={successRef} tabIndex={-1} role="status" className="rounded-3xl border border-gold/50 bg-gold-tint p-8 outline-none md:p-10">
        <p className="eyebrow">Received</p>
        <h2 className="mt-4 text-display-md">{successHeading}</h2>
        <p className="mt-4 text-mute">{successBody}</p>
      </div>
    );
  }

  const errorList = fields.filter((f) => errors[f.name]);
  const inputCls =
    "mt-2 block w-full rounded-xl border border-line-strong bg-paper px-4 py-3 text-ink transition-shadow placeholder:text-mute/70 focus:border-gold focus:shadow-[0_0_0_4px_rgb(201_168_76/0.18)] focus:outline-none aria-[invalid=true]:border-red-text";

  return (
    <form noValidate onSubmit={onSubmit} aria-describedby={`${uid}-req`} className="grid gap-7">
      <p id={`${uid}-req`} className="text-sm text-mute">
        All fields are required unless marked optional.
      </p>

      {errorList.length > 0 ? (
        <div ref={summaryRef} tabIndex={-1} role="alert" className="border border-red-text/60 p-5 outline-none">
          <p className="font-medium text-red-text">Please correct {errorList.length === 1 ? "1 field" : `${errorList.length} fields`}:</p>
          <ul className="mt-2 list-disc pl-5 text-sm">
            {errorList.map((f) => (
              <li key={f.name}>
                <a href={`#${uid}-${f.name}`} className="underline underline-offset-4">
                  {errors[f.name]}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {fields.map((f) => {
        const id = `${uid}-${f.name}`;
        const errId = `${id}-err`;
        const hintId = `${id}-hint`;
        const describedBy = [f.hint ? hintId : null, errors[f.name] ? errId : null].filter(Boolean).join(" ") || undefined;
        const common = {
          id,
          name: f.name,
          "aria-invalid": errors[f.name] ? true : undefined,
          "aria-describedby": describedBy,
          required: f.required !== false,
          className: inputCls,
        } as const;
        return (
          <div key={f.name}>
            <label htmlFor={id} className="block font-medium">
              {f.label}
              {f.required === false ? <span className="font-normal text-mute"> (optional)</span> : null}
            </label>
            {f.hint ? (
              <p id={hintId} className="mt-1 text-sm text-mute">
                {f.hint}
              </p>
            ) : null}
            {f.type === "textarea" ? (
              <textarea {...common} rows={5} maxLength={2000} />
            ) : f.type === "select" ? (
              <select {...common} defaultValue="">
                <option value="" disabled>
                  Select an option
                </option>
                {f.options?.map((o) => (
                  <option key={o}>{o}</option>
                ))}
                {f.groups?.map((g) => (
                  <optgroup key={g.label} label={g.label}>
                    {g.options.map((o) => (
                      <option key={o}>{o}</option>
                    ))}
                  </optgroup>
                ))}
              </select>
            ) : (
              <input
                {...common}
                type={f.type === "url" ? "text" : f.type}
                inputMode={f.type === "url" ? "url" : f.type === "email" ? "email" : undefined}
                autoComplete={f.autoComplete}
                spellCheck={f.type === "text" ? undefined : false}
                maxLength={300}
              />
            )}
            {errors[f.name] ? (
              <p id={errId} className="mt-2 text-sm text-red-text">
                {errors[f.name]}
              </p>
            ) : null}
          </div>
        );
      })}

      {/* Honeypot: hidden from people and assistive technology */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor={`${uid}-fax`}>Fax number</label>
        <input id={`${uid}-fax`} name="fax_number" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div aria-live="polite">
        {status === "error" ? (
          <p className="border border-red-text/60 p-4 text-sm">
            <span className="font-medium text-red-text">Your details were not sent.</span> Please try again in a moment.
            {fallback ? (
              <>
                {" "}
                If it keeps failing, contact us at{" "}
                <a href={fallback.href} className="underline underline-offset-4">
                  {fallback.label}
                </a>
                .
              </>
            ) : null}
          </p>
        ) : null}
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn btn-primary px-8 disabled:opacity-60 sm:justify-self-start"
      >
        {status === "submitting" ? "Sending…" : submitLabel}
      </button>
    </form>
  );
}
