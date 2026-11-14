import type { DetailContent } from "@/content/types";

const content: DetailContent = {
  path: "/locations/india/",
  slug: "india",
  eyebrow: "India",
  question: "What does a performance marketing agency in India do differently?",
  answer:
    "A performance marketing agency in India must master a market where WhatsApp is the main conversation channel, buyers move between English and regional languages, cash on delivery shapes ecommerce, and festive seasons swing demand and ad costs. Campaignly runs Meta, Google and automation programmes built for exactly those conditions, priced in INR and worked in IST.",
  sections: [
    {
      kind: "table",
      heading: "Working together in India",
      caption: "Engagement details for Indian businesses",
      columns: ["Item", "How it works"],
      rows: [
        ["Currency", "Proposals and invoices in INR, with GST applied as required by law"],
        ["Working hours", "Indian Standard Time (UTC+5:30), Monday to Friday"],
        ["Communication", "Video calls, email and a shared WhatsApp group for day-to-day questions"],
        ["Ad accounts", "Your own Meta Business Manager and Google Ads accounts, billed by the platforms to you"],
        ["Reporting", "Weekly performance notes and a monthly review against agreed targets"],
      ],
    },
    {
      kind: "list",
      heading: "The Indian market",
      items: [
        "WhatsApp is where Indian buyers expect to talk to businesses, so lead follow-up and retention run on the WhatsApp Business Platform.",
        "Language matters: Hindi, Tamil, Telugu, Marathi, Bengali, Kannada and other regional-language creative often outperforms English outside the metros.",
        "Festive seasons such as Diwali, Navratri, Onam and Pongal reshape demand and auction costs. Campaigns and creative are ready weeks ahead.",
        "Cash on delivery and return-to-origin rates affect ecommerce profitability, so targeting is reviewed by region and pin code.",
        "Price sensitivity shifts sharply between metro, tier-2 and tier-3 cities, so offers and messaging are tested city tier by city tier.",
      ],
    },
    {
      kind: "table",
      heading: "Platforms in India",
      caption: "Platform roles in India",
      columns: ["Platform", "Typical role"],
      rows: [
        ["Meta (Facebook, Instagram)", "Primary demand creation for D2C, education, real estate and healthcare"],
        ["Google Search and YouTube", "Capturing intent; YouTube for reach in regional languages"],
        ["WhatsApp Business Platform", "Lead response, qualification, order confirmation and retention"],
        ["LinkedIn", "B2B and professional services"],
      ],
    },
    {
      kind: "prose",
      heading: "Rules that apply in India",
      paragraphs: [
        "The Digital Personal Data Protection Act, 2023 and its Rules, notified in November 2025, set consent and data handling obligations that phase in over 18 months. Forms, WhatsApp opt-ins and CRM practices should be designed with them in mind now.",
        "Sector rules also apply: RERA registration details in property ads, medical advertising restrictions in healthcare, and the Advertising Standards Council of India's code for claims in all categories.",
      ],
      sources: [{ label: "PIB: DPDP Rules, 2025 explainer", href: "https://static.pib.gov.in/WriteReadData/specificdocs/documents/2025/nov/doc20251117695301.pdf" }],
    },
  ],
  related: [
    {
      heading: "Services for Indian businesses",
      items: [
        { href: "/services/meta-ads/", label: "Meta ads agency for Indian brands", summary: "Facebook and Instagram campaigns in INR." },
        { href: "/services/ai-automation/", label: "WhatsApp automation for Indian businesses", summary: "Official Business Platform builds." },
        { href: "/services/google-ads/", label: "Google Ads management in India", summary: "Search and YouTube in English and regional languages." },
        { href: "/services/ecommerce-growth/", label: "Ecommerce growth for Indian D2C", summary: "COD, RTO and UPI built into the plan." },
      ],
    },
    {
      heading: "Industries we serve in India",
      items: [
        { href: "/industries/education/", label: "Student admission campaigns", summary: "Intake-driven campaigns for institutions." },
        { href: "/industries/real-estate/", label: "Real estate lead generation in India", summary: "RERA-compliant project campaigns." },
        { href: "/industries/ecommerce-d2c/", label: "D2C marketing in India", summary: "Profitable growth for direct brands." },
        { href: "/industries/healthcare/", label: "Healthcare marketing in India", summary: "Within Indian medical advertising rules." },
      ],
    },
  ],
  faqs: [
    {
      q: "Do you charge GST?",
      a: "Yes. Services to Indian businesses are invoiced in INR with GST applied as required by law. Ad spend is billed by Meta and Google directly to your accounts.",
    },
    {
      q: "Do you run ads in regional Indian languages?",
      a: "Yes. Creative and landing pages can be produced in major regional languages, written for the market rather than translated word for word, and reviewed by native speakers.",
    },
    {
      q: "Do you work only with businesses in certain cities?",
      a: "No. We work with businesses across India remotely, and every campaign is planned by city tier and region. One national template never fits India.",
    },
    {
      q: "How does the DPDP Act affect lead generation?",
      a: "It requires clear, specific consent and responsible handling of personal data, with obligations phasing in through 2027. We design forms, WhatsApp opt-ins and data flows with consent records from the start.",
    },
    {
      q: "Do you plan campaigns around festivals?",
      a: "Yes. Festive periods change both demand and ad costs, so creative, offers and budgets are prepared ahead of each season relevant to your category and region.",
    },
  ],
};

export default content;
