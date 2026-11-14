import type { DetailContent } from "@/content/types";

const content: DetailContent = {
  path: "/locations/canada/",
  slug: "canada",
  eyebrow: "Canada",
  question: "What should Canadian businesses expect from a performance marketing partner?",
  answer:
    "Canadian businesses need a partner that plans for smaller audience pools than the US, runs English and French campaigns where Quebec matters, and builds follow-up that complies with Canada's Anti-Spam Legislation. Campaignly runs Google, Meta and LinkedIn programmes for Canadian companies, invoiced in CAD, with live calls in the Canadian morning.",
  sections: [
    {
      kind: "table",
      heading: "Working together from Canada",
      caption: "Engagement details for Canadian businesses",
      columns: ["Item", "How it works"],
      rows: [
        ["Currency", "Proposals and invoices in CAD"],
        ["Time zones", "Calls scheduled in the Eastern or Pacific morning, overlapping the Indian evening"],
        ["Languages", "English campaigns, and French campaigns for Quebec and bilingual audiences"],
        ["Ad accounts", "Your own accounts; ad spend billed by the platforms to you"],
      ],
    },
    {
      kind: "list",
      heading: "The Canadian market",
      items: [
        "Audiences are smaller and more concentrated than in the US, so campaigns saturate faster and creative is refreshed sooner.",
        "Quebec's Charter of the French Language requires commercial advertising aimed at Quebec to be available in French, so bilingual creative and landing pages are planned from the start.",
        "Canada's Anti-Spam Legislation (CASL) requires consent before sending commercial electronic messages, including email and text messages, and every message must identify the sender and offer an unsubscribe.",
        "Meta's Special Ad Categories apply to housing, employment and financial services ads in Canada, restricting targeting.",
      ],
      sources: [{ label: "Government of Canada: Canada's anti-spam legislation", href: "https://ised-isde.canada.ca/site/canada-anti-spam-legislation/en" }],
    },
    {
      kind: "table",
      heading: "Platforms in Canada",
      caption: "Platform roles in Canada",
      columns: ["Platform", "Typical role"],
      rows: [
        ["Google Search and YouTube", "Intent capture across English and French queries"],
        ["Meta", "Demand creation for ecommerce and consumer services"],
        ["LinkedIn", "B2B and SaaS targeting by role and company"],
        ["Microsoft Ads", "Additional search reach, worth testing for B2B"],
      ],
    },
  ],
  related: [
    {
      heading: "Services for Canadian businesses",
      items: [
        { href: "/services/google-ads/", label: "Google Ads agency for Canada", summary: "Search in English and French." },
        { href: "/services/meta-ads/", label: "Meta ads agency for Canada", summary: "Facebook and Instagram campaigns in CAD." },
        { href: "/services/ai-automation/", label: "CASL-aware lead automation", summary: "Consent-based follow-up flows." },
      ],
    },
    {
      heading: "Industries we serve in Canada",
      items: [
        { href: "/industries/saas/", label: "SaaS acquisition in Canada", summary: "Google and LinkedIn for SaaS." },
        { href: "/industries/b2b-professional-services/", label: "B2B lead generation in Canada", summary: "Search, LinkedIn and content." },
        { href: "/industries/real-estate/", label: "Real estate marketing for NRI buyers in Canada", summary: "Indian projects marketed to Canadian buyers." },
      ],
    },
  ],
  faqs: [
    {
      q: "Do you run French-language campaigns?",
      a: "Yes. Campaigns for Quebec and bilingual audiences are written in French by native speakers, with matching French landing pages.",
    },
    {
      q: "How does CASL affect lead follow-up?",
      a: "Commercial emails and text messages need express or implied consent, must identify the sender and must include an unsubscribe option. We build consent capture into forms and keep records of it.",
    },
    {
      q: "Do you invoice in Canadian dollars?",
      a: "Yes. Canadian engagements are proposed and invoiced in CAD. Ad spend is billed directly by the platforms to your accounts.",
    },
    {
      q: "Is Canada treated as part of a US campaign?",
      a: "No. Canadian campaigns get their own budgets, language, creative and compliance, because audience size, regulation and buyer behaviour are distinct.",
    },
  ],
};

export default content;
