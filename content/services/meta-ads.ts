import type { DetailContent } from "@/content/types";

const content: DetailContent = {
  path: "/services/meta-ads/",
  slug: "meta-ads",
  eyebrow: "Meta ads",
  question: "What does a Meta ads agency do?",
  answer:
    "Campaignly is a Meta ads agency that plans, builds and runs Facebook and Instagram advertising for scaling businesses. We rebuild tracking with the Pixel and Conversions API, structure campaigns around your margins, test creative without pause and report on what pays the bills: qualified leads and revenue. Reach, clicks and followers never lead the report.",
  service: { name: "Meta ads management", serviceType: "Facebook and Instagram advertising management" },
  sections: [
    {
      kind: "scope",
      heading: "What is included",
      intro:
        "Everything inside the ad account, and every piece of tracking that feeds it. Production and page builds are scoped on their own, so you pay only for what the plan calls for.",
      included: [
        { item: "Account and tracking audit", detail: "Business Manager, Pixel, Conversions API, event priority and attribution settings, checked line by line." },
        { item: "Conversion tracking setup", detail: "Browser and server events mapped to the actions that make money: purchase, qualified lead, booked call." },
        { item: "Campaign architecture", detail: "Prospecting, retargeting and Advantage+ built so every ad set can exit learning and stay out of it." },
        { item: "Audience and offer strategy", detail: "Who to reach, what to offer and which angle to lead with, set per market." },
        { item: "Creative strategy and testing", detail: "Briefs, hooks and a testing roadmap. Every result shapes the next round." },
        { item: "Budget, bids and pacing", detail: "Spend moves to whatever returns a qualified result at a cost you can sustain." },
        { item: "Lead quality loop", detail: "CRM outcomes flow back to Meta, so delivery learns to find people who buy." },
        { item: "Reporting", detail: "Revenue, cost per qualified result and the next change we are making, in plain language." },
      ],
      excluded: [
        { item: "Ad spend", detail: "Paid by you directly to Meta, from your own ad account." },
        { item: "Video and ad production", detail: "Scoped separately through our ad creative service.", href: "/services/ad-creative/" },
        { item: "Landing page builds", detail: "Scoped separately through landing pages and web.", href: "/services/landing-pages/" },
        { item: "Organic posting and community", detail: "Covered by social media strategy and management.", href: "/services/social-media/" },
      ],
    },
    {
      kind: "steps",
      heading: "How we run an account",
      intro:
        "Six steps, always in this order. Tracking and structure come first, because a creative test run on broken data proves nothing.",
      steps: [
        { title: "Diagnose the account", text: "We study account history, tracking, past creative and your unit economics, then tell you plainly what is working, what is failing and why." },
        { title: "Position the offer", text: "We lock in who the campaign is for, what it promises and what proof backs it before a single new ad is written." },
        { title: "Rebuild tracking and structure", text: "Events are fixed first. Campaigns are then consolidated so every ad set gets the data it needs to learn." },
        { title: "Launch and let delivery learn", text: "Meta says an ad set generally needs about 50 optimisation events within 7 days of its last significant edit to exit the learning phase. We protect that window and avoid edits that reset it." },
        { title: "Test creative continuously", text: "New hooks, formats and angles go head to head with the current winners, one variable at a time." },
        { title: "Scale what holds", text: "Budget rises only where cost per qualified result stays on target as spend climbs." },
      ],
      sources: [{ label: "Meta Business Help Centre: about the learning phase", href: "https://www.facebook.com/business/help/112167992830700" }],
    },
    {
      kind: "table",
      heading: "When Meta is the right channel",
      intro:
        "Meta wins when it creates demand for something people are not yet searching for. Where buyers already search, or the audience is a narrow list of job titles, other channels lead.",
      caption: "Where Meta advertising usually fits",
      columns: ["Situation", "Meta ads"],
      rows: [
        ["Visual consumer products and D2C brands", "Usually the strongest primary channel"],
        ["Lead generation with fast follow-up (education, real estate, healthcare)", "Strong when leads are qualified and contacted within minutes"],
        ["Demand people already search for", "Best as support to Google Ads"],
        ["Narrow B2B audiences (specific job titles)", "Usually outperformed by LinkedIn and search"],
        ["Housing, employment, financial products, social issues or politics", "Possible, with targeting restricted under Special Ad Categories"],
      ],
      sources: [{ label: "Meta Marketing API: Special Ad Categories", href: "https://developers.facebook.com/docs/marketing-api/special-ad-category" }],
    },
    {
      kind: "definitions",
      heading: "How performance is measured",
      intro: "By the numbers your finance team trusts. Platform-reported ROAS is one input, never the verdict.",
      items: [
        { term: "ROAS", def: "Return on ad spend: revenue attributed to ads divided by ad spend." },
        { term: "Cost per qualified lead", def: "Ad spend divided by the leads that meet the qualification criteria you set." },
        { term: "Contribution margin", def: "Revenue minus product, fulfilment and ad costs. The number that proves whether growth is profitable." },
        { term: "MER", def: "Marketing efficiency ratio: total revenue divided by total marketing spend, across every channel." },
      ],
    },
  ],
  related: [
    {
      heading: "Meta ads by industry",
      items: [
        { href: "/industries/ecommerce-d2c/", label: "Meta ads for D2C and ecommerce brands", summary: "Growth measured on contribution margin, with ROAS as one input." },
        { href: "/industries/education/", label: "Meta ads for student admissions", summary: "Admission campaigns measured on applications and enrolments." },
        { href: "/industries/real-estate/", label: "Meta ads for real estate developers", summary: "Campaigns built for site visits and bookings in India and the UAE." },
      ],
    },
    {
      heading: "Services that make Meta ads work harder",
      items: [
        { href: "/services/ad-creative/", label: "Performance ad creative", summary: "Video, UGC and static ads produced as testable variants." },
        { href: "/services/ai-automation/", label: "WhatsApp and CRM lead automation", summary: "Every Meta lead answered and qualified within minutes." },
        { href: "/services/landing-pages/", label: "Landing pages for paid traffic", summary: "Fast, message-matched pages that convert the click." },
        { href: "/locations/india/", label: "Meta ads for Indian businesses", summary: "INR budgets, regional creative and WhatsApp-led follow-up." },
      ],
    },
  ],
  faqs: [
    {
      q: "How much should I spend on Meta ads?",
      a: "Enough for each ad set to reach about 50 optimisation events a week, the threshold Meta cites for exiting the learning phase. A practical starting point: your target cost per result, multiplied by 50, divided by 7, as a daily budget per ad set. We confirm the exact figure after the diagnosis.",
    },
    {
      q: "How long does it take to see results from Meta ads?",
      a: "Every new or significantly edited ad set spends its first days in the learning phase, and reliable reads on creative and audiences take several weeks of data. Your written plan sets out a specific timeline based on your budget and conversion volume.",
    },
    {
      q: "Do I keep ownership of my ad account, Pixel and data?",
      a: "Yes, always. We work inside your own Business Manager as a partner. The ad account, Pixel, audiences and history stay in your name, and you can remove our access at any time.",
    },
    {
      q: "Why are my Meta lead form leads low quality, and can you fix it?",
      a: "Low-quality leads come from easy forms, broad offers and slow follow-up. We fix all three: higher-intent form settings with qualifying questions, instant follow-up through WhatsApp or CRM automation, and qualified outcomes sent back to Meta so delivery optimises for real buyers.",
    },
    {
      q: "Can you run ads in Meta's Special Ad Categories?",
      a: "Yes. Ads about housing, employment, financial products and services, or social issues, elections and politics must be declared as a Special Ad Category. Targeting is restricted for these ads, so we win on creative, offer and placement instead of audience settings.",
    },
    {
      q: "Do you only manage Meta ads, or other channels too?",
      a: "Meta ads can run on their own, and they perform best alongside Google Ads, ad creative, landing pages and lead automation. The plan recommends the channel mix your business needs. We never sell every service by default.",
    },
    {
      q: "Do you manage Meta ads for businesses outside India?",
      a: "Yes. We run Meta advertising for businesses in India, the USA, Canada and the UAE, with campaigns, currencies, languages and schedules built for each market.",
    },
  ],
  cta: {
    heading: "See what your Meta account is leaving on the table.",
    body: "Apply to partner. We start with a full diagnosis of your account, tracking and funnel, and propose nothing until the evidence is in.",
  },
};

export default content;
