import type { DetailContent } from "@/content/types";

const content: DetailContent = {
  path: "/services/brand-strategy/",
  slug: "brand-strategy",
  eyebrow: "Brand strategy",
  question: "What does a brand strategy agency deliver?",
  answer:
    "A brand strategy agency defines who you serve, what you promise, why you are the better choice and how you say it. Campaignly builds positioning, messaging and offer strategy for acquisition, so every ad, landing page and sales conversation makes the same compelling argument. You receive a working document your team uses every day.",
  service: { name: "Brand strategy and positioning", serviceType: "Brand positioning and messaging strategy" },
  sections: [
    {
      kind: "prose",
      heading: "Positioning comes before advertising",
      paragraphs: [
        "Ads amplify whatever message you hand them. Give them a vague one and more budget simply buys more indifference. Sharp positioning lowers acquisition cost, because the right buyers recognise themselves instantly and the wrong ones step aside.",
        "Our brand work is the foundation under every campaign: the audience, the problem, the promise, the proof and the exact words.",
      ],
    },
    {
      kind: "scope",
      heading: "What is included",
      included: [
        { item: "Research", detail: "Customer interviews, sales call reviews, competitor messaging and search data." },
        { item: "Positioning", detail: "Target customer, category, alternatives, differentiators and proof." },
        { item: "Messaging framework", detail: "Core promise, supporting messages and objection handling." },
        { item: "Offer strategy", detail: "What you sell, how it is packaged and the entry offer that starts the relationship." },
        { item: "Voice guidelines", detail: "How the brand sounds, with words to use and words to avoid." },
        { item: "Campaign translation", detail: "Ad angles, landing page structure and sales talking points." },
      ],
      excluded: [
        { item: "Logo and visual identity design", detail: "Can be arranged with design partners when needed." },
        { item: "Naming and trademark checks", detail: "Outside scope; we recommend specialist advice." },
      ],
    },
    {
      kind: "steps",
      heading: "How an engagement runs",
      steps: [
        { title: "Listen", text: "Interviews with customers, lost prospects and your own team." },
        { title: "Map the alternatives", text: "What buyers would do if you did not exist, including doing nothing." },
        { title: "Draft the positioning", text: "One page that states who, what, why you and why now. Nothing more is needed." },
        { title: "Test the message", text: "Messages go live in ads and landing pages, where real buyers vote with clicks and enquiries." },
        { title: "Roll out", text: "Guidelines and templates so sales, marketing and partners all make the same argument." },
      ],
    },
    {
      kind: "definitions",
      heading: "Terms we use",
      items: [
        { term: "Positioning", def: "The place you choose to occupy in the buyer's mind relative to the alternatives." },
        { term: "Value proposition", def: "The specific outcome you promise to a specific customer, and why it is believable." },
        { term: "Messaging framework", def: "The hierarchy of what you say first, second and in response to objections." },
        { term: "Entry offer", def: "The low-risk first step that starts a relationship, such as an audit or trial." },
      ],
    },
  ],
  related: [
    {
      heading: "Brand strategy by industry",
      items: [
        { href: "/industries/saas/", label: "Positioning for SaaS companies", summary: "Category and messaging that shorten sales cycles." },
        { href: "/industries/ecommerce-d2c/", label: "Brand positioning for D2C brands", summary: "Standing out in crowded categories." },
        { href: "/industries/b2b-professional-services/", label: "Positioning for professional services firms", summary: "Clear expertise that wins better clients." },
      ],
    },
    {
      heading: "Where strategy is applied",
      items: [
        { href: "/services/ad-creative/", label: "Ad creative built on the positioning", summary: "Angles and hooks that carry the message." },
        { href: "/services/landing-pages/", label: "Landing pages that make the argument", summary: "Message, proof and offer in order." },
        { href: "/services/social-media/", label: "Social media strategy", summary: "Content pillars tied to positioning." },
      ],
    },
  ],
  faqs: [
    {
      q: "How long does a brand strategy project take?",
      a: "It depends on the research required and how quickly interviews can be booked. You get a timeline at scoping, and you see the positioning draft before the full framework, so your input shapes it early.",
    },
    {
      q: "Do you design logos?",
      a: "Visual identity is outside our core service. Our work defines what the brand stands for and says, and we partner closely with your designers on the visual side.",
    },
    {
      q: "Is brand strategy only for new companies?",
      a: "No. It often delivers the most for established businesses whose message has drifted, whose market has moved, or whose ads stopped working as they scaled.",
    },
    {
      q: "How do you know the positioning works?",
      a: "We test it where buyers decide: in ads, landing pages and sales conversations. Click-through, conversion and close rates settle the question. Opinions do not.",
    },
  ],
};

export default content;
