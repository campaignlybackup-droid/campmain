import type { FieldDef } from "@/components/LeadForm";
import { industries } from "@/content/catalog";

const revenueGroups = [
  { label: "India (INR)", options: ["Under ₹10 lakh", "₹10 lakh to ₹50 lakh", "₹50 lakh to ₹2 crore", "₹2 crore to ₹10 crore", "Above ₹10 crore"] },
  { label: "International (USD)", options: ["Under $25k", "$25k to $100k", "$100k to $500k", "$500k to $2M", "Above $2M"] },
];

export const applyFields: FieldDef[] = [
  { name: "name", label: "Full name", type: "text", autoComplete: "name" },
  { name: "email", label: "Work email", type: "email", autoComplete: "email" },
  { name: "company", label: "Company", type: "text", autoComplete: "organization" },
  { name: "website", label: "Website", type: "url", autoComplete: "url" },
  { name: "industry", label: "Industry", type: "select", options: [...industries.map((i) => i.label), "Other"] },
  { name: "revenue", label: "Monthly revenue range", type: "select", groups: revenueGroups },
  {
    name: "goal",
    label: "Growth goal",
    type: "textarea",
    hint: "What do you want to achieve in the next 6 to 12 months, and what is in the way?",
  },
];

