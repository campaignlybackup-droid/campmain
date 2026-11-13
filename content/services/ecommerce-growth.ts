import type { DetailContent } from "@/content/types";

const content: DetailContent = {
  path: "/services/ecommerce-growth/",
  slug: "ecommerce-growth",
  eyebrow: "Ecommerce growth",
  question: "What does an ecommerce growth agency do beyond running ads?",
  answer:
    "An ecommerce growth agency improves the economics behind the ad account: conversion rate, average order value, repeat purchase and margin per order. Campaignly audits your store and funnel, fixes what loses buyers between click and checkout, builds retention through email and WhatsApp, and ties every change to contribution margin, so more ad spend produces more profit.",
  service: { name: "Ecommerce growth and conversion optimisation", serviceType: "Ecommerce conversion and retention marketing" },
  sections: [
    {
      kind: "table",
      heading: "The levers that move ecommerce revenue",
      intro: "Revenue is traffic multiplied by conversion rate and average order value, then repeated. Ads only control the first.",
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
        { title: "Funnel and data audit", text: "We trace where buyers drop between landing, product page, cart and checkout, and check tracking accuracy." },
        { title: "Prioritise by impact", text: "Fixes are ranked by expected revenue effect and effort, so the first month pays for itself where possible." },
        { title: "Fix the store", text: "Page speed, product page content, checkout steps and payment methods are improved in order." },
        { title: "Test offers and bundles", text: "Order value experiments run with clear success criteria and enough traffic to read them." },
        { title: "Build retention flows", text: "Welcome, abandoned cart, post-purchase and win-back flows by email and WhatsApp." },
        { title: "Scale acquisition", text: "With better conversion and retention, paid budgets can rise at the same or better efficiency." },
      ],
    },
    {
      kind: "list",
      heading: "Selling online in India",
      intro: "Indian ecommerce has operational issues that other markets do not, and they belong in the growth plan.",
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
      a: "No. Shopify is the most common platform we see, but the same work applies to WooCommerce and custom stores. Platform-specific changes are scoped after the audit.",
    },
    {
      q: "What is a good ecommerce conversion rate?",
      a: "It depends on category, price, device and traffic source, so a single benchmark is misleading. We compare your rate against your own history by channel and device, then set targets for each.",
    },
    {
      q: "Can you reduce cash-on-delivery returns?",
      a: "We can reduce them. No one can remove them entirely. Order confirmation by WhatsApp, prepaid incentives and excluding high-RTO areas from ad targeting are the usual levers.",
    },
    {
      q: "Do you run A/B tests on our store?",
      a: "Yes, where traffic is high enough to reach a reliable result in a reasonable time. Where it is not, we make changes based on evidence and monitor before-and-after performance.",
    },
    {
      q: "Is this the same as your D2C industry service?",
      a: "This page covers the store and retention work. The D2C industry page covers how we approach acquisition and the whole growth programme for D2C brands.",
    },
  ],
};

export default content;
