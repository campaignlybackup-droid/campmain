import type { DetailContent } from "@/content/types";

const content: DetailContent = {
  path: "/industries/real-estate/",
  slug: "real-estate",
  eyebrow: "Real estate",
  question: "How does real estate lead generation work for developers?",
  answer:
    "Real estate lead generation for developers combines Meta and Google campaigns, project landing pages and fast qualification to turn interest into site visits and bookings. Campaignly runs project campaigns across India and the UAE, including NRI audiences, qualifies every buyer on WhatsApp by budget, configuration and timeline, and reports cost per site visit and per booking.",
  sections: [
    {
      kind: "table",
      heading: "Property advertising rules",
      intro: "Real estate advertising is regulated in every market we serve. Our campaigns comply from the very first draft.",
      caption: "Property advertising rules by market",
      columns: ["Market", "Rule", "What it means"],
      rows: [
        ["India", "RERA Act, 2016, section 11(2)", "Ads for registered projects must show the project's RERA registration number and the regulator's website address. Several state regulators add placement and size rules."],
        ["UAE (Dubai)", "Dubai Land Department advertising permit (Trakheesi)", "Property ads in Dubai need an advertising permit, and the permit details must appear on the ad."],
        ["USA and Canada", "Meta Housing Special Ad Category", "Housing ads must be declared, and age, gender, postcode and some interest targeting is restricted."],
      ],
      sources: [{ label: "Meta Marketing API: Special Ad Categories", href: "https://developers.facebook.com/docs/marketing-api/special-ad-category" }],
    },
    {
      kind: "steps",
      heading: "How a project campaign runs",
      steps: [
        { title: "Understand the project", text: "Configurations, price bands, location advantages, possession timeline and the buyer each unit suits." },
        { title: "Build the project page", text: "Floor plans, pricing approach, location, approvals and a clear site-visit offer." },
        { title: "Launch Meta and Google", text: "Meta builds desire among likely buyers; Google captures people searching by location and configuration." },
        { title: "Qualify on WhatsApp", text: "Budget, configuration, timeline and financing settled before your sales team picks up the phone." },
        { title: "Book site visits", text: "Qualified buyers choose a visit slot, with reminders that cut no-shows." },
        { title: "Report on bookings", text: "Cost per qualified lead, per site visit and per booking, by campaign." },
      ],
    },
    {
      kind: "list",
      heading: "Reaching NRI buyers",
      intro: "Non-resident Indians in the UAE, USA, Canada and beyond are a major audience for Indian projects, and they buy differently.",
      items: [
        "Target by country and language, with creative that addresses remote buying: virtual tours, documentation and payment process.",
        "Follow up in the buyer's time zone. Automation answers instantly and books calls at hours that suit them.",
        "Offer video walkthroughs and live video site visits as an alternative to physical visits.",
        "Make the RERA registration and approvals easy to verify, since remote buyers need more trust signals.",
      ],
    },
  ],
  related: [
    {
      heading: "Services for real estate",
      items: [
        { href: "/services/meta-ads/", label: "Meta ads for real estate projects", summary: "Lead campaigns built for site visits." },
        { href: "/services/ai-automation/", label: "WhatsApp qualification for property leads", summary: "Budget and timeline checked before sales calls." },
        { href: "/services/landing-pages/", label: "Project landing pages", summary: "Pages that answer buyer questions and book visits." },
        { href: "/services/ad-creative/", label: "Property video and walkthrough ads", summary: "Creative that sells the location and the unit." },
      ],
    },
    {
      heading: "Markets",
      items: [
        { href: "/locations/india/", label: "Real estate marketing in India", summary: "RERA-compliant project campaigns." },
        { href: "/locations/uae/", label: "Real estate marketing in the UAE", summary: "Arabic and English campaigns for UAE property." },
      ],
    },
  ],
  faqs: [
    {
      q: "Are Meta ads good for real estate leads in India?",
      a: "Yes. Meta is a high-volume source of residential leads in India, and quality is what separates winners. It comes from qualifying questions in forms, fast WhatsApp follow-up and site-visit outcomes sent back to Meta.",
    },
    {
      q: "Do real estate ads in India need the RERA number?",
      a: "Yes. Section 11(2) of the RERA Act requires advertisements for registered projects to show the RERA registration number and the regulator's website. State regulators may add their own display rules.",
    },
    {
      q: "Do you work with brokers or only developers?",
      a: "Both. Developers with a defined project, inventory and sales team get the most from full campaigns.",
    },
    {
      q: "How do you measure real estate campaign success?",
      a: "Cost per qualified lead, cost per site visit and cost per booking. Raw lead counts are tracked, and they never define success.",
    },
    {
      q: "Can you run campaigns for Dubai property?",
      a: "Yes, for developers and agencies with the required permits. Dubai property ads need a Dubai Land Department advertising permit, which must be in place before campaigns launch.",
    },
  ],
};

export default content;
