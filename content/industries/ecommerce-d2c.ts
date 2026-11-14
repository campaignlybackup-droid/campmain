import type { DetailContent } from "@/content/types";

const content: DetailContent = {
  path: "/industries/ecommerce-d2c/",
  slug: "ecommerce-d2c",
  eyebrow: "Ecommerce and D2C",
  question: "What does a D2C marketing agency do?",
  answer:
    "A D2C marketing agency acquires customers for brands that sell directly online, then makes every customer more profitable. Campaignly runs Meta and Google acquisition, produces performance creative, lifts store conversion and builds WhatsApp and email retention. Everything is managed against contribution margin, so every gain in revenue is a gain in profit.",
  sections: [
    {
      kind: "prose",
      heading: "Managing to margin",
      paragraphs: [
        "Platform ROAS counts the revenue an ad platform credits to itself. It ignores product cost, shipping, payment fees, returns and the customers who would have bought anyway. A brand can hit its ROAS target and still lose money on every single order.",
        "So we plan D2C growth around contribution margin per order and marketing efficiency ratio (total revenue over total marketing spend). ROAS stays on the dashboard as a diagnostic. Profit makes the decisions.",
      ],
    },
    {
      kind: "table",
      heading: "What the programme covers",
      caption: "D2C growth programme components",
      columns: ["Stage", "What we do"],
      rows: [
        ["Diagnose", "Unit economics, attribution check, account and store audit"],
        ["Position", "Hero products, offer architecture and the angle for each audience"],
        ["Acquire", "Meta and Google campaigns, creative testing, marketplace balance"],
        ["Convert", "Product pages, checkout, speed, cash-on-delivery confirmation"],
        ["Retain", "Post-purchase, replenishment and win-back flows on WhatsApp and email"],
        ["Scale", "Budget increases only where margin per order holds"],
      ],
    },
    {
      kind: "list",
      heading: "Selling D2C in India",
      items: [
        "Cash on delivery remains common, so order confirmation and return-to-origin tracking belong in the acquisition plan.",
        "Festive seasons concentrate demand and push up ad costs. Creative and inventory are planned weeks ahead.",
        "Marketplaces compete with your own site for the same buyer, so pricing and product mix follow a clear rule.",
        "WhatsApp is frequently the strongest retention channel, ahead of email.",
      ],
    },
    {
      kind: "definitions",
      heading: "The numbers we track",
      items: [
        { term: "CAC", def: "Customer acquisition cost: marketing spend divided by new customers acquired." },
        { term: "Contribution margin", def: "What is left from an order after product, fulfilment, fees, returns and marketing." },
        { term: "Payback period", def: "How long a customer takes to repay their acquisition cost through margin." },
        { term: "MER", def: "Marketing efficiency ratio: total revenue divided by total marketing spend." },
      ],
    },
  ],
  related: [
    {
      heading: "Services for D2C brands",
      items: [
        { href: "/services/meta-ads/", label: "Meta ads for D2C brands", summary: "Prospecting and retargeting on Facebook and Instagram." },
        { href: "/services/ecommerce-growth/", label: "Ecommerce CRO and retention", summary: "Conversion, order value and repeat purchase." },
        { href: "/services/ad-creative/", label: "UGC and video ads for D2C", summary: "Creative produced for testing at volume." },
        { href: "/services/google-ads/", label: "Google Shopping and Performance Max", summary: "Capture high-intent product searches." },
      ],
    },
    {
      heading: "Markets",
      items: [
        { href: "/locations/india/", label: "D2C growth in India", summary: "COD, festive seasons and WhatsApp retention." },
        { href: "/locations/usa/", label: "D2C growth for US brands", summary: "USD billing and US privacy rules." },
        { href: "/locations/uae/", label: "D2C growth in the UAE", summary: "Arabic and English creative." },
      ],
    },
  ],
  faqs: [
    {
      q: "What size of D2C brand do you work with?",
      a: "Brands that already sell, have a product customers reorder or recommend, and hold a monthly acquisition budget they intend to grow. Pre-launch brands with no testing budget are best served a little later.",
    },
    {
      q: "Should a D2C brand sell on marketplaces too?",
      a: "Often yes, with a rule. Marketplaces bring volume and trust; your own site brings data and margin. We set which products and prices belong where, so the channels strengthen each other.",
    },
    {
      q: "How do you measure success for D2C?",
      a: "Contribution margin, new customer acquisition cost, payback period and marketing efficiency ratio. Platform ROAS is tracked as a diagnostic only.",
    },
    {
      q: "Can you reduce our cash-on-delivery returns?",
      a: "Yes. WhatsApp order confirmation, prepaid incentives and excluding high-return areas from targeting all bring them down, and we track return-to-origin rates by channel to prove what works.",
    },
    {
      q: "Do you handle email and WhatsApp retention?",
      a: "Yes. Welcome, abandoned cart, post-purchase, replenishment and win-back flows are part of the retention stage of the programme.",
    },
  ],
};

export default content;
