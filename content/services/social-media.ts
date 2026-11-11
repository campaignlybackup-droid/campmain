import type { DetailContent } from "@/content/types";

const content: DetailContent = {
  path: "/services/social-media/",
  slug: "social-media",
  eyebrow: "Social media growth",
  question: "What does social media strategy and management include?",
  answer:
    "Social media strategy and management means deciding what your brand says on social channels, to whom and why, then running the content system that delivers it. Campaignly plans organic social around positioning and commercial goals, connects it to paid campaigns, and measures it by enquiries, demand signals and creative insight rather than follower counts.",
  service: { name: "Social media strategy and management", serviceType: "Social media marketing" },
  sections: [
    {
      kind: "prose",
      heading: "Why does Campaignly treat social media as part of advertising?",
      paragraphs: [
        "Organic reach on most platforms is limited, so organic social rarely grows a business on its own. Its real value is different: it shows buyers who check you out that you are credible and active, it tests messages cheaply, and it supplies proof and creative that paid campaigns then scale.",
        "That is why our social programmes sit beside paid media, not apart from it. We are not a posting service, and we do not sell follower growth as a goal.",
      ],
    },
    {
      kind: "scope",
      heading: "What is included?",
      included: [
        { item: "Channel strategy", detail: "Which platforms matter for your buyers, and what role each plays." },
        { item: "Content pillars", detail: "Topics tied to positioning, objections and proof." },
        { item: "Content calendar", detail: "Planned around launches, seasons and campaigns." },
        { item: "Production and publishing", detail: "Posts, short video and carousels in your brand system." },
        { item: "Founder and leadership content", detail: "LinkedIn content for founders who sell through their own credibility." },
        { item: "Reporting", detail: "Profile visits, enquiries, saves and shares, and what content to promote with paid spend." },
      ],
      excluded: [
        { item: "Buying followers or engagement", detail: "We never do this." },
        { item: "Influencer contracts", detail: "Scoped separately when needed." },
        { item: "Paid social management", detail: "Covered by Meta ads management.", href: "/services/meta-ads/" },
      ],
    },
    {
      kind: "table",
      heading: "Which platforms suit which businesses?",
      caption: "Platform fit by business type",
      columns: ["Platform", "Strongest for"],
      rows: [
        ["Instagram", "D2C, hospitality, real estate, healthcare and education brands with visual products or experiences"],
        ["LinkedIn", "B2B, SaaS and professional services; founder-led selling"],
        ["YouTube", "Considered purchases where buyers research by video"],
        ["Facebook", "Community groups and older audiences in India and North America"],
      ],
    },
    {
      kind: "steps",
      heading: "How does the programme run?",
      steps: [
        { title: "Audit and positioning", text: "We review what you post, what competitors post and what your buyers respond to." },
        { title: "Content system", text: "Pillars, formats and a calendar that a small team can sustain." },
        { title: "Produce and publish", text: "Content is batched, approved and scheduled in advance." },
        { title: "Promote what works", text: "Posts that earn attention organically are tested as paid ads." },
      ],
    },
  ],
  related: [
    {
      heading: "Social media by industry",
      items: [
        { href: "/industries/hospitality/", label: "Social media for hotels and resorts", summary: "Experience-led content that drives direct bookings." },
        { href: "/industries/b2b-professional-services/", label: "LinkedIn for B2B firms", summary: "Founder and expert content that opens sales conversations." },
        { href: "/industries/education/", label: "Social media for colleges", summary: "Student-facing content that supports admissions." },
      ],
    },
    {
      heading: "Related services",
      items: [
        { href: "/services/ad-creative/", label: "Performance ad creative", summary: "Turn winning posts into paid ads." },
        { href: "/services/brand-strategy/", label: "Brand strategy and positioning", summary: "What your content should stand for." },
        { href: "/services/meta-ads/", label: "Meta ads management", summary: "Paid reach for what works organically." },
      ],
    },
  ],
  faqs: [
    {
      q: "How often should a business post on social media?",
      a: "As often as you can sustain good work. A consistent, realistic cadence beats bursts of activity followed by silence. We set frequency from your goals and capacity.",
    },
    {
      q: "Will you grow our follower count?",
      a: "Followers may grow as a side effect, but we do not treat them as the goal. We measure enquiries, profile visits, saves, shares and how well content performs when promoted.",
    },
    {
      q: "Do you create the content or do we?",
      a: "Either. We can produce everything, or plan and edit content your team captures. Many businesses get the best results from a mix, with real team footage edited by us.",
    },
    {
      q: "Do you reply to comments and messages?",
      a: "Community management can be included, with clear rules on what we answer and what goes to your team. Sales enquiries are routed to you quickly.",
    },
  ],
};

export default content;
