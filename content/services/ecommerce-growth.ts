import type { DetailContent } from "@/content/types";

const content: DetailContent = {
  path: "/services/ecommerce-growth/",
  slug: "ecommerce-growth",
  eyebrow: "Ecommerce growth",
  question: "What does an ecommerce growth agency do beyond running ads?",
  answer:
    "An ecommerce growth agency strengthens the economics behind the ad account: conversion rate, average order value, repeat purchase and margin per order. Campaignly audits your store and funnel, fixes every leak between click and checkout, builds retention through email and WhatsApp, and ties each change to contribution margin. More spend then means more profit.",
  service: { name: "Ecommerce growth and conversion optimisation", serviceType: "Ecommerce conversion and retention marketing" },
  sections: [
    {
      kind: "table",
      heading: "The levers that move ecommerce revenue",
      intro: "Revenue is traffic multiplied by conversion rate and average order value, then repeated. Ads control only the first. We work all four.",
      caption: "Ecommerce growth levers",
      columns: ["Lever", "What we work on", "Measured by"],
      rows: [
        ["Conversion rate", "Product pages, checkout friction, speed, trust signals, payment options", "Sessions to orders"],
        ["Average order value", "Bundles, thresholds, upsells and cross-sells", "Revenue per order"],
        ["Repeat purchase", "Post-purchase flows, replenishment reminders, WhatsApp and email", "Returning customer rate"],
        ["Margin per order", "Discount discipline, shipping thresholds, return and RTO reduction", "Contribution margin per order"],
      ],
    },
    {
      kind: "steps",
      heading: "How the programme runs",
      steps: [
        { title: "Funnel and data audit", text: "We trace exactly where buyers drop between landing, product page, cart and checkout, and verify every number we rely on." },
        { title: "Prioritise by impact", text: "Fixes are ranked by revenue impact and effort, so the earliest work carries the biggest return." },
        { title: "Fix the store", text: "Page speed, product content, checkout steps and payment methods, improved in order of impact." },
        { title: "Test offers and bundles", text: "Order value experiments run with clear success criteria and enough traffic to read them with confidence." },
        { title: "Build retention flows", text: "Welcome, abandoned cart, post-purchase and win-back flows by email and WhatsApp." },
        { title: "Scale acquisition", text: "With stronger conversion and retention, paid budgets rise at the same or better efficiency." },
      ],
    },
    {
      kind: "list",
      heading: "Selling online in India",
      intro: "Indian ecommerce carries operational realities other markets do not. We build them into the growth plan from day one.",
      items: [
        "Cash on delivery: confirming orders by WhatsApp before dispatch and nudging prepaid payment to reduce returned shipments.",
        "Return to origin (RTO): tracking undelivered orders by pin code and channel so ad spend avoids loss-making areas.",
        "UPI and wallet payments: making prepaid checkout as quick as possible on mobile.",
        "Marketplace and D2C balance: deciding which products to push to your own site and which to sell through marketplaces.",
      ],
    },
    {
      kind: "definitions",
      heading: "The metrics we manage to",
      items: [
        { term: "Conversion rate", def: "Orders divided by sessions. Read by device and traffic source, never as one site-wide number." },
        { term: "AOV", def: "Average order value: revenue divided by number of orders." },
        { term: "LTV", def: "Customer lifetime value: total margin a customer generates over their relationship with you." },
        { term: "Contribution margin", def: "Revenue minus cost of goods, fulfilment, payment fees, returns and marketing." },
      ],
    },
  ],
  related: [
    {
      heading: "Who this is for",
      items: [
        { href: "/industries/ecommerce-d2c/", label: "D2C marketing for scaling brands", summary: "Acquisition, creative and retention for D2C." },
        { href: "/industries/hospitality/", label: "Direct booking growth for hotels", summary: "The same conversion logic applied to bookings." },
        { href: "/locations/india/", label: "Ecommerce growth in India", summary: "COD, RTO and UPI built into the plan." },
      ],
    },
    {
      heading: "Services that pair with ecommerce growth",
      items: [
        { href: "/services/meta-ads/", label: "Meta ads for ecommerce", summary: "Acquisition that scales on better unit economics." },
        { href: "/services/ai-automation/", label: "WhatsApp automation for ecommerce", summary: "Order confirmation, cart recovery and reorders." },
        { href: "/services/landing-pages/", label: "Fast product and landing pages", summary: "Speed and message match that lift conversion." },
      ],
    },
  ],
  faqs: [
    {
      q: "Do you work only with Shopify stores?",
      a: "No. Shopify is the most common platform we work on, and the same discipline applies to WooCommerce and custom stores. Platform-specific changes are scoped after the audit.",
    },
    {
      q: "What is a good ecommerce conversion rate?",
      a: "It depends on category, price, device and traffic source, so any single benchmark misleads. We measure your rate against your own history by channel and device, then set a target for each.",
    },
    {
      q: "Can you reduce cash-on-delivery returns?",
      a: "Yes, we reduce them. No one can remove them entirely. WhatsApp order confirmation, prepaid incentives and excluding high-RTO areas from ad targeting are the levers that work.",
    },
    {
      q: "Do you run A/B tests on our store?",
      a: "Yes, wherever traffic can reach a reliable result in a reasonable time. Where it cannot, we make evidence-based changes and track before-and-after performance closely.",
    },
    {
      q: "Is this the same as your D2C industry service?",
      a: "This page covers the store and retention work. The D2C industry page covers how we approach acquisition and the whole growth programme for D2C brands.",
    },
  ],
};

export default content;
