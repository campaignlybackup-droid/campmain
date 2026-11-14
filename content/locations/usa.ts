import type { DetailContent } from "@/content/types";

const content: DetailContent = {
  path: "/locations/usa/",
  slug: "usa",
  eyebrow: "USA",
  question: "How does Campaignly work with US businesses?",
  answer:
    "Campaignly works with US companies as a remote, senior paid media and growth team. We run Google, Meta, LinkedIn and Microsoft Ads inside your own accounts, invoice in USD, meet in your morning to make the most of the time zone overlap, and build every campaign around US privacy laws and ad platform rules for regulated categories.",
  sections: [
    {
      kind: "table",
      heading: "Working across time zones",
      intro: "India Standard Time is 9.5 to 10.5 hours ahead of US Eastern Time, and 12.5 to 13.5 hours ahead of Pacific Time, depending on US daylight saving.",
      caption: "Engagement details for US businesses",
      columns: ["Item", "How it works"],
      rows: [
        ["Currency", "Proposals and invoices in USD"],
        ["Live calls", "Scheduled in the US morning, which overlaps the Indian evening"],
        ["Turnaround", "Work requested at the end of your day can be progressed overnight"],
        ["Ad accounts", "Your own accounts; ad spend billed by the platforms to you"],
        ["Reporting", "Weekly written updates plus a monthly review call"],
      ],
    },
    {
      kind: "prose",
      heading: "Working with a team outside the US",
      paragraphs: [
        "For the quality, first. US companies choose us for senior attention, transparent reporting and one team that runs paid media, creative, pages and automation as a single system, without the layers of account management common in larger agencies.",
        "Planned well, the time difference is an advantage. Launches and changes are prepared while your team sleeps, and decisions are made together in your morning.",
      ],
    },
    {
      kind: "list",
      heading: "Rules that apply in the US",
      items: [
        "Meta's Special Ad Categories apply to housing, employment, financial products and services, and social issues, elections or politics, restricting targeting options for those ads.",
        "State privacy laws, led by California's CCPA as amended by the CPRA, give residents rights over personal data and affect tracking and consent.",
        "The Telephone Consumer Protection Act requires prior consent for marketing calls and texts using automated systems, which shapes SMS and call follow-up.",
        "Healthcare advertisers must handle tracking on health-related pages carefully because of HIPAA obligations.",
      ],
      sources: [{ label: "Meta Marketing API: Special Ad Categories", href: "https://developers.facebook.com/docs/marketing-api/special-ad-category" }],
    },
    {
      kind: "table",
      heading: "Platforms in the US",
      caption: "Platform roles in the US",
      columns: ["Platform", "Typical role"],
      rows: [
        ["Google Search, Shopping, YouTube", "Intent capture and video reach"],
        ["Meta", "Demand creation for ecommerce and consumer services"],
        ["LinkedIn", "B2B and SaaS targeting by role and company"],
        ["Microsoft Ads", "Additional search reach, often efficient for B2B audiences"],
      ],
    },
  ],
  related: [
    {
      heading: "Services for US businesses",
      items: [
        { href: "/services/google-ads/", label: "Google Ads management for US companies", summary: "Search, Shopping and Performance Max." },
        { href: "/services/meta-ads/", label: "Meta ads for US brands", summary: "Facebook and Instagram campaigns in USD." },
        { href: "/services/landing-pages/", label: "Landing pages for US campaigns", summary: "Fast pages built for paid traffic." },
      ],
    },
    {
      heading: "Industries we serve in the US",
      items: [
        { href: "/industries/saas/", label: "SaaS paid acquisition", summary: "Planned around ACV and CAC payback." },
        { href: "/industries/b2b-professional-services/", label: "B2B lead generation", summary: "Pipeline that sales teams accept." },
        { href: "/industries/ecommerce-d2c/", label: "D2C and ecommerce growth", summary: "Profitable scale on contribution margin." },
      ],
    },
  ],
  faqs: [
    {
      q: "What hours can we reach your team?",
      a: "Live calls are scheduled in the US morning, which overlaps with the Indian evening. Written updates and messages are answered within the working day, and urgent issues are handled by agreement.",
    },
    {
      q: "Do you invoice in US dollars?",
      a: "Yes. US engagements are proposed and invoiced in USD. Ad spend is billed directly by the platforms to your own accounts.",
    },
    {
      q: "Can you run housing or financial services ads in the US?",
      a: "Yes, under Meta's Special Ad Categories. Targeting is restricted for these ads, so performance depends more on creative, offer and landing pages.",
    },
    {
      q: "Who owns the ad accounts and data?",
      a: "You do. We work in your accounts through partner or manager access that you control.",
    },
  ],
};

export default content;
