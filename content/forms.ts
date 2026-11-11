import type { FieldDef } from "@/components/LeadForm";
import { industries } from "@/content/catalog";

const revenueGroups = [
  { label: "India (INR)", options: ["Under ₹10 lakh", "₹10 lakh to ₹50 lakh", "₹50 lakh to ₹2 crore", "₹2 crore to ₹10 crore", "Above ₹10 crore"] },
  { label: "International (USD)", options: ["Under $25k", "$25k to $100k", "$100k to $500k", "$500k to $2M", "Above $2M"] },
];

const spendGroups = [
  { label: "India (INR)", options: ["Under ₹1 lakh", "₹1 lakh to ₹5 lakh", "₹5 lakh to ₹20 lakh", "₹20 lakh to ₹1 crore", "Above ₹1 crore"] },
  { label: "International (USD)", options: ["Under $2k", "$2k to $10k", "$10k to $50k", "$50k to $200k", "Above $200k"] },
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

export const reviewFields: FieldDef[] = [
  { name: "name", label: "Full name", type: "text", autoComplete: "name" },
  { name: "email", label: "Email", type: "email", autoComplete: "email" },
  { name: "website", label: "Website", type: "url", autoComplete: "url" },
  { name: "platform", label: "Ad platform to review", type: "select", options: ["Meta (Facebook and Instagram)", "Google Ads", "Both Meta and Google Ads"] },
  { name: "spend", label: "Monthly ad spend range", type: "select", groups: spendGroups },
];
