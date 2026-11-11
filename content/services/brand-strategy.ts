import type { DetailContent } from "@/content/types";

const content: DetailContent = {
  path: "/services/brand-strategy/",
  slug: "brand-strategy",
  eyebrow: "Brand strategy",
  question: "What does a brand strategy agency deliver?",
  answer:
    "A brand strategy agency defines who you serve, what you promise, why you are the better choice and how you say it. Campaignly builds positioning, messaging and offer strategy specifically for acquisition, so every ad, landing page and sales conversation makes the same clear argument. The output is a working document your team uses daily.",
  service: { name: "Brand strategy and positioning", serviceType: "Brand positioning and messaging strategy" },
  sections: [
    {
      kind: "prose",
      heading: "Why does positioning matter for advertising?",
      paragraphs: [
        "Ads amplify whatever message you give them. If the message is vague, more budget buys more indifference. Clear positioning lowers acquisition cost because the right buyers recognise themselves faster and the wrong ones self-select out.",
        "Our brand work is not a logo project. It is the strategic layer under every campaign: the audience, the problem, the promise, the proof and the words.",
      ],
    },
    {
      kind: "scope",
      heading: "What is included in brand strategy?",
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
      heading: "How does a brand strategy engagement run?",
      steps: [
        { title: "Listen", text: "Interviews with customers, lost prospects and your team." },
        { title: "Map the alternatives", text: "What buyers would do if you did not exist, including doing nothing." },
        { title: "Draft the positioning", text: "One page that states who, what, why you and why now." },
        { title: "Test the message", text: "Messages are tested in ads and landing pages, where real buyers vote with clicks and enquiries." },
        { title: "Roll out", text: "Guidelines and templates so sales, marketing and partners say the same thing." },
      ],
    },
    {
      kind: "definitions",
      heading: "Which brand strategy terms do we use?",
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
      a: "It depends on the research needed and how quickly interviews can be arranged. We give a timeline after scoping, and share the positioning draft before the full framework so you can react early.",
    },
    {
      q: "Do you design logos?",
      a: "Logo and visual identity are not our core service. Our work defines what the brand stands for and says; we can work with your designers or partners on the visual side.",
    },
    {
      q: "Is brand strategy only for new companies?",
      a: "No. It is often most valuable for established businesses whose message has drifted, whose market has changed, or whose ads have stopped working as they scaled.",
    },
    {
      q: "How do you know the positioning works?",
      a: "We test it where buyers decide: in ads, landing pages and sales conversations. Changes in click-through, conversion and close rates tell us more than opinions.",
    },
  ],
};

export default content;
