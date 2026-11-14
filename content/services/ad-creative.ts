import type { DetailContent } from "@/content/types";

const content: DetailContent = {
  path: "/services/ad-creative/",
  slug: "ad-creative",
  eyebrow: "Video and ad creative",
  question: "What does a performance ad creative agency do?",
  answer:
    "A performance ad creative agency produces video, UGC-style and static ads built to compete against each other. Campaignly writes hooks and scripts from your own account data, produces variants in every format each placement demands, and lets results decide what we make next. Creative becomes a system that compounds, and every shoot earns its place.",
  service: { name: "Performance ad creative production", serviceType: "Advertising creative production" },
  sections: [
    {
      kind: "scope",
      heading: "What we produce",
      included: [
        { item: "Creative audit", detail: "Which hooks, formats and angles have won in your account, and exactly why." },
        { item: "Concepts and scripts", detail: "Angles built from real customer language, objections and proof." },
        { item: "Video ads", detail: "Short-form edits, founder-led and demo videos, cut for every placement." },
        { item: "UGC-style ads", detail: "Creator-shot content, briefed tightly and edited for performance." },
        { item: "Static and carousel ads", detail: "Designs that land the offer in the first second." },
        { item: "Variants for testing", detail: "Hook, opening and format variations, so every test isolates one variable." },
        { item: "Creative reporting", detail: "Hook rate, hold rate and cost per result by concept." },
      ],
      excluded: [
        { item: "Media buying", detail: "Managed through Meta ads or Google Ads.", href: "/services/meta-ads/" },
        { item: "Large-crew brand films", detail: "Outside scope. We specialise in testable performance assets." },
        { item: "Creator fees", detail: "Paid to creators, quoted separately and agreed in advance." },
      ],
    },
    {
      kind: "table",
      heading: "Formats by placement",
      intro: "One master asset never fits every placement. These are the ratios we deliver as standard.",
      caption: "Common ad aspect ratios by placement",
      columns: ["Placement", "Recommended ratio", "Note"],
      rows: [
        ["Instagram and Facebook Reels, Stories", "9:16 vertical", "Keep text and key visuals out of the top and bottom safe zones"],
        ["Facebook and Instagram feed", "4:5 or 1:1", "4:5 takes more screen space on mobile"],
        ["YouTube Shorts", "9:16 vertical", "Hook in the first seconds; Shorts are skippable by swipe"],
        ["YouTube in-stream", "16:9 horizontal", "Brand and offer early, before the skip option"],
      ],
    },
    {
      kind: "steps",
      heading: "How we test creative",
      steps: [
        { title: "Mine the data", text: "Account results, reviews, sales calls and support tickets reveal the angles worth testing." },
        { title: "Write concepts first", text: "Each concept carries one idea: a problem, a proof point or an objection answered." },
        { title: "Produce variants", text: "Every concept gets several hooks and formats, so tests pinpoint what made the difference." },
        { title: "Test against the current winner", text: "New creative has to beat what already works. Nothing is replaced blind." },
        { title: "Feed results into the next brief", text: "Winning hooks and angles become the starting line for the next round." },
      ],
    },
    {
      kind: "definitions",
      heading: "How creative is measured",
      items: [
        { term: "Hook rate", def: "The share of impressions where viewers watched past the first few seconds. Shows whether the opening stops the scroll." },
        { term: "Hold rate", def: "The share of viewers who keep watching to a later point. Shows whether the story holds attention." },
        { term: "Cost per result by concept", def: "Results grouped by idea, so you learn which message sells." },
        { term: "Creative fatigue", def: "Performance decline as the same audience sees an ad too often. The signal to refresh." },
      ],
    },
  ],
  related: [
    {
      heading: "Creative by industry",
      items: [
        { href: "/industries/ecommerce-d2c/", label: "Ad creative for D2C brands", summary: "Product demos, UGC and offers built to scale." },
        { href: "/industries/real-estate/", label: "Ad creative for real estate projects", summary: "Walkthroughs and site-visit offers." },
        { href: "/industries/hospitality/", label: "Ad creative for hotels and resorts", summary: "Experience-led video for direct bookings." },
      ],
    },
    {
      heading: "Where the creative runs",
      items: [
        { href: "/services/meta-ads/", label: "Meta ads management", summary: "Facebook and Instagram campaigns run on these assets." },
        { href: "/services/google-ads/", label: "YouTube and Google Ads", summary: "Video for Demand Gen and YouTube." },
        { href: "/services/social-media/", label: "Organic social strategy", summary: "Content systems that feed paid testing." },
        { href: "/locations/uae/", label: "Arabic and English creative for the UAE", summary: "Bilingual assets for UAE audiences." },
      ],
    },
  ],
  faqs: [
    {
      q: "How many ad creatives do I need each month?",
      a: "Enough to keep new concepts competing with your current winners without starving any test of budget. Smaller accounts need fewer, sharply different concepts; larger accounts need more volume to beat fatigue. Your plan sizes output to your spend.",
    },
    {
      q: "Do you work with UGC creators?",
      a: "Yes. We brief creators on the angle and the hook, then edit their footage into performance variants. Creator fees are quoted separately and agreed before production begins.",
    },
    {
      q: "Can you produce ads in regional Indian languages or Arabic?",
      a: "Yes. Scripts are written for each market from day one and reviewed by native speakers before production.",
    },
    {
      q: "Do I own the creative you produce?",
      a: "Yes, once paid for. Creator usage rights are agreed per creator and stated before production, since some creators licence content for a set period.",
    },
    {
      q: "Can you work with creative made by our in-house team?",
      a: "Yes. We can brief your team, test what they make and report what wins, or cover the formats they do not produce.",
    },
  ],
};

export default content;
