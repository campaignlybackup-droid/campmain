import type { DetailContent } from "@/content/types";

const content: DetailContent = {
  path: "/locations/uae/",
  slug: "uae",
  eyebrow: "UAE",
  question: "How does performance marketing work for UAE businesses?",
  answer:
    "Performance marketing in the UAE means reaching a multinational, bilingual population across Google, Meta, Snapchat and TikTok, often in both Arabic and English, while following local advertising permits and data rules. Campaignly runs these programmes for UAE businesses, invoiced in AED, in a time zone only 90 minutes behind India for same-day collaboration.",
  sections: [
    {
      kind: "table",
      heading: "How does working with Campaignly in the UAE work?",
      caption: "Engagement details for UAE businesses",
      columns: ["Item", "How it works"],
      rows: [
        ["Currency", "Proposals and invoices in AED"],
        ["Time zone", "Gulf Standard Time (UTC+4), 1.5 hours behind India: the full working day overlaps"],
        ["Languages", "Arabic and English creative, written by native speakers"],
        ["Ad accounts", "Your own accounts; ad spend billed by the platforms to you"],
      ],
    },
    {
      kind: "list",
      heading: "What makes the UAE market different?",
      items: [
        "The population is highly international, so audiences are segmented by language and nationality, not just location.",
        "Arabic and English creative serve different audiences; Arabic ads are written for the market, not translated.",
        "Snapchat and TikTok matter more here than in many markets, alongside Google and Meta.",
        "Real estate and hospitality are major advertising categories with their own permit rules.",
        "Ramadan and the Eid holidays change media consumption and buying patterns, so campaigns are planned around them.",
      ],
    },
    {
      kind: "table",
      heading: "Which UAE rules affect advertising?",
      caption: "UAE advertising rules",
      columns: ["Rule", "What it means"],
      rows: [
        ["UAE Media Council Advertiser Permit", "Since 2025, individuals publishing promotional content on social media, paid or unpaid, need an advertiser permit; check creator permits before influencer or UGC work."],
        ["Dubai property advertising permit (Trakheesi)", "Property ads in Dubai need a Dubai Land Department permit, shown on the ad."],
        ["Federal data protection law (PDPL)", "Federal Decree-Law No. 45 of 2021 governs personal data, which affects forms, tracking and CRM handling."],
        ["Healthcare advertising approvals", "Health-related ads may need approval from the relevant health authority before publishing."],
      ],
      sources: [{ label: "WAM: UAE Media Council launches Advertiser Permit", href: "https://www.wam.ae/en/article/bkxzoe1-uae-media-council-launches-advertiser-permit" }],
    },
  ],
  related: [
    {
      heading: "Services for UAE businesses",
      items: [
        { href: "/services/meta-ads/", label: "Meta ads agency for Dubai and the UAE", summary: "Arabic and English campaigns in AED." },
        { href: "/services/google-ads/", label: "Google Ads agency for Dubai and the UAE", summary: "Search in Arabic and English." },
        { href: "/services/ad-creative/", label: "Arabic and English ad creative", summary: "Bilingual video and static ads." },
        { href: "/services/ai-automation/", label: "WhatsApp automation for UAE businesses", summary: "Bilingual lead qualification." },
      ],
    },
    {
      heading: "Industries we serve in the UAE",
      items: [
        { href: "/industries/real-estate/", label: "Dubai property lead generation", summary: "Permit-ready project campaigns." },
        { href: "/industries/hospitality/", label: "Hotel marketing in the UAE", summary: "Direct bookings for hotels and resorts." },
        { href: "/industries/healthcare/", label: "Healthcare marketing in the UAE", summary: "Patient acquisition within the rules." },
      ],
    },
  ],
  faqs: [
    {
      q: "Do you create Arabic ads?",
      a: "Yes. Arabic creative is written by native speakers for the target audience, rather than translated from English, and reviewed before launch.",
    },
    {
      q: "How does the time difference work?",
      a: "Gulf Standard Time is 1.5 hours behind India Standard Time, so the whole UAE working day overlaps with ours. Same-day calls and changes are normal.",
    },
    {
      q: "Do influencers and UGC creators in the UAE need a permit?",
      a: "Individuals publishing promotional content on social media in the UAE need an Advertiser Permit from the UAE Media Council. We check creator permits before commissioning UAE creator content.",
    },
    {
      q: "Do you invoice in AED?",
      a: "Yes. UAE engagements are proposed and invoiced in AED, with VAT where applicable. Ad spend is billed by the platforms to your accounts.",
    },
    {
      q: "Can you advertise Dubai property?",
      a: "Yes, for developers and brokers holding the required Dubai Land Department advertising permits. Permit details must appear on property ads.",
    },
  ],
};

export default content;
