import type { DetailContent } from "@/content/types";

const content: DetailContent = {
  path: "/industries/b2b-professional-services/",
  slug: "b2b-professional-services",
  eyebrow: "B2B and professional services",
  question: "What does a B2B lead generation agency do?",
  answer:
    "A B2B lead generation agency builds a predictable flow of qualified sales conversations for companies selling to other businesses. Campaignly combines Google search, LinkedIn advertising, content and automated follow-up, agrees the definition of a qualified lead with your sales team, and reports on meetings, opportunities and pipeline value rather than form fills.",
  sections: [
    {
      kind: "prose",
      heading: "Why do B2B marketing and sales disagree about leads?",
      paragraphs: [
        "Because they rarely agree what a lead is. Marketing counts form fills; sales counts people who are ready to talk about a budget. Campaigns optimised for the first produce a lot of the wrong thing.",
        "We start by writing down the qualification criteria with your sales team: company size, role, need and timing. Those criteria shape targeting, forms and follow-up, and they decide what we send back to the ad platforms as a conversion.",
      ],
    },
    {
      kind: "table",
      heading: "Which channels work for B2B lead generation?",
      caption: "B2B acquisition channels",
      columns: ["Channel", "Strength", "Limitation"],
      rows: [
        ["Google Search", "Captures buyers actively looking for a solution", "Limited to demand that already exists"],
        ["LinkedIn Ads", "Targets by job title, company and industry", "Higher cost per click; needs a strong offer"],
        ["Meta Ads", "Low cost reach for broad professional services", "Weak for narrow job-title targeting"],
        ["SEO and content", "Compounding visibility for research-stage buyers", "Slow to build"],
        ["Email and WhatsApp follow-up", "Converts enquiries into meetings", "Needs consent and careful frequency"],
      ],
    },
    {
      kind: "steps",
      heading: "How does a B2B programme run?",
      steps: [
        { title: "Define the ideal customer", text: "Firmographics, roles and triggers agreed with sales." },
        { title: "Build the offer", text: "A useful entry point such as an audit, benchmark or consultation, not a generic contact form." },
        { title: "Launch search and LinkedIn", text: "Search for active demand, LinkedIn for the accounts you want to reach." },
        { title: "Qualify and route", text: "Automated qualification and routing to the right salesperson with context." },
        { title: "Close the loop", text: "CRM opportunity data imported to the ad platforms so they optimise for pipeline." },
      ],
    },
  ],
  related: [
    {
      heading: "Services for B2B",
      items: [
        { href: "/services/google-ads/", label: "Google Ads for B2B lead generation", summary: "Search campaigns with offline conversion import." },
        { href: "/services/seo/", label: "B2B SEO and content", summary: "Answer the questions buyers research." },
        { href: "/services/ai-automation/", label: "Lead qualification and CRM automation", summary: "Route qualified leads to sales instantly." },
        { href: "/services/brand-strategy/", label: "Positioning for professional services", summary: "Clear expertise that wins better clients." },
      ],
    },
    {
      heading: "Markets",
      items: [
        { href: "/locations/usa/", label: "B2B lead generation for US companies", summary: "LinkedIn, Google and Microsoft Ads." },
        { href: "/locations/canada/", label: "B2B lead generation in Canada", summary: "CASL-aware follow-up." },
        { href: "/locations/india/", label: "B2B lead generation in India", summary: "Search and LinkedIn for Indian buyers." },
      ],
    },
  ],
  faqs: [
    {
      q: "Is LinkedIn advertising worth it for B2B?",
      a: "When your deal value can absorb its higher cost per click and the audience is defined by job title or company. For low-value services, Google Search and Meta are often more efficient.",
    },
    {
      q: "What counts as a qualified B2B lead?",
      a: "Whatever your sales team agrees it is, written down: typically the right company size, role, need and timing. We build campaigns and reporting around that definition.",
    },
    {
      q: "How long is the typical B2B lead-to-customer cycle?",
      a: "It varies widely by deal size, from days for small services to many months for enterprise contracts. We measure leading indicators such as meetings and opportunities so progress is visible before deals close.",
    },
    {
      q: "Do you do cold outreach?",
      a: "Our focus is inbound and paid acquisition. Any email or messaging follow-up is built on consent and the anti-spam rules of each market.",
    },
  ],
};

export default content;
