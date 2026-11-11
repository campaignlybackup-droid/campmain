import type { DetailContent } from "@/content/types";

const content: DetailContent = {
  path: "/services/meta-ads/",
  slug: "meta-ads",
  eyebrow: "Meta ads",
  question: "What does a Meta ads agency do?",
  answer:
    "Campaignly is a Meta ads agency that plans, builds and manages Facebook and Instagram advertising for scaling businesses. We set up conversion tracking with the Pixel and Conversions API, structure campaigns around your margins, run a continuous creative testing programme, and report on qualified leads and revenue rather than reach, clicks or followers.",
  service: { name: "Meta ads management", serviceType: "Facebook and Instagram advertising management" },
  sections: [
    {
      kind: "scope",
      heading: "What does Meta ads management include?",
      intro:
        "Management covers everything inside the ad account and the tracking that feeds it. Production and page builds are scoped separately so you only pay for what you need.",
      included: [
        { item: "Account and tracking audit", detail: "Business Manager, Pixel, Conversions API, event priority and attribution settings." },
        { item: "Conversion tracking setup", detail: "Browser and server events mapped to the actions that matter: purchase, qualified lead, booked call." },
        { item: "Campaign architecture", detail: "Prospecting, retargeting and Advantage+ campaigns structured so each ad set can exit learning." },
        { item: "Audience and offer strategy", detail: "Who to reach, what to offer them and which angle to lead with, per market." },
        { item: "Creative strategy and testing", detail: "Briefs, hooks and a testing roadmap; results feed the next round of creative." },
        { item: "Budget, bids and pacing", detail: "Spend moved toward what returns a qualified result at a cost you can sustain." },
        { item: "Lead quality loop", detail: "CRM outcomes sent back to Meta so delivery optimises for buyers, not form fills." },
        { item: "Reporting", detail: "Revenue, cost per qualified result and what we are changing next, in plain language." },
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
      heading: "How does Campaignly run a Meta ads account?",
      intro:
        "In six steps, in this order. Tracking and structure come before new creative, because creative tests are meaningless on broken data.",
      steps: [
        { title: "Diagnose the account", text: "We review account history, tracking, past creative and your unit economics, and tell you what is working, what is not and why." },
        { title: "Position the offer", text: "We agree who the campaign is for, what it promises and what proof it uses, before any new ad is written." },
        { title: "Rebuild tracking and structure", text: "Events are fixed first, then campaigns are consolidated so each ad set gets enough data to learn." },
        { title: "Launch and let delivery learn", text: "Meta says an ad set generally needs about 50 optimisation events within 7 days of its last significant edit to exit the learning phase, so we avoid edits that reset it." },
        { title: "Test creative continuously", text: "New hooks, formats and angles are tested against the current winners, with one variable changed at a time." },
        { title: "Scale what holds", text: "Budget increases go only where cost per qualified result stays within target as spend rises." },
      ],
      sources: [{ label: "Meta Business Help Centre: about the learning phase", href: "https://www.facebook.com/business/help/112167992830700" }],
    },
    {
      kind: "table",
      heading: "Is Meta advertising right for your business?",
      intro:
        "Meta is strongest when it creates demand for something people do not yet search for. It is weaker where buyers already search, or where the audience is a narrow set of job titles.",
      caption: "Where Meta advertising usually fits",
      columns: ["Situation", "Meta ads"],
      rows: [
        ["Visual consumer products and D2C brands", "Usually a strong primary channel"],
        ["Lead generation with fast follow-up (education, real estate, healthcare)", "Strong when leads are qualified and contacted within minutes"],
        ["Demand people already search for", "Better as support to Google Ads than as the first channel"],
        ["Narrow B2B audiences (specific job titles)", "Usually weaker than LinkedIn and search"],
        ["Housing, employment, financial products, social issues or politics", "Possible, but targeting is restricted under Special Ad Categories"],
      ],
      sources: [{ label: "Meta Marketing API: Special Ad Categories", href: "https://developers.facebook.com/docs/marketing-api/special-ad-category" }],
    },
    {
      kind: "definitions",
      heading: "How is Meta ads performance measured?",
      intro: "By the numbers your finance team uses. Platform-reported ROAS is one input, not the verdict.",
      items: [
        { term: "ROAS", def: "Return on ad spend: revenue attributed to ads divided by ad spend." },
        { term: "Cost per qualified lead", def: "Ad spend divided by leads that meet the qualification criteria you set, not all form fills." },
        { term: "Contribution margin", def: "Revenue minus product, fulfilment and ad costs. The number that says whether growth is profitable." },
        { term: "MER", def: "Marketing efficiency ratio: total revenue divided by total marketing spend, across every channel." },
      ],
    },
  ],
  related: [
    {
      heading: "Meta ads by industry",
      items: [
        { href: "/industries/ecommerce-d2c/", label: "Meta ads for D2C and ecommerce brands", summary: "Profitable scale measured on contribution margin, not ROAS alone." },
        { href: "/industries/education/", label: "Meta ads for student admissions", summary: "Admission campaigns measured on applications and enrolments." },
        { href: "/industries/real-estate/", label: "Meta ads for real estate developers", summary: "Campaigns built for site visits and bookings, in India and the UAE." },
      ],
    },
    {
      heading: "Services that make Meta ads work harder",
      items: [
        { href: "/services/ad-creative/", label: "Performance ad creative", summary: "Video, UGC and static ads produced as testable variants." },
        { href: "/services/ai-automation/", label: "WhatsApp and CRM lead automation", summary: "Answer and qualify every Meta lead within minutes." },
        { href: "/services/landing-pages/", label: "Landing pages for paid traffic", summary: "Fast, message-matched pages that convert the click." },
        { href: "/locations/india/", label: "Meta ads for Indian businesses", summary: "INR budgets, regional creative and WhatsApp-led follow-up." },
      ],
    },
  ],
  faqs: [
    {
      q: "How much should I spend on Meta ads?",
      a: "Enough for each ad set to reach about 50 optimisation events a week, which Meta cites as the threshold to exit the learning phase. A practical starting point is your target cost per result multiplied by 50, divided by 7, as a daily budget per ad set. We confirm the number after the diagnosis.",
    },
    {
      q: "How long does it take to see results from Meta ads?",
      a: "Each new or significantly edited ad set spends its first days in the learning phase, and reliable reads on creative and audiences need several weeks of data. We give you a specific timeline in the written plan after the diagnosis, based on your budget and conversion volume.",
    },
    {
      q: "Do I keep ownership of my ad account, Pixel and data?",
      a: "Yes. We work inside your own Business Manager as a partner. The ad account, Pixel, audiences and history stay in your name, and you can remove our access at any time.",
    },
    {
      q: "Why are my Meta lead form leads low quality, and can you fix it?",
      a: "Low-quality leads usually come from easy forms, broad offers and slow follow-up. We use higher-intent form settings and qualifying questions, follow up instantly through WhatsApp or CRM automation, and send qualified outcomes back to Meta so delivery optimises for them.",
    },
    {
      q: "Can you run ads in Meta's Special Ad Categories?",
      a: "Yes. Ads about housing, employment, financial products and services, or social issues, elections and politics must be declared as a Special Ad Category. Targeting options are restricted for these ads, so the strategy relies more on creative, offer and placement than on audience settings.",
    },
    {
      q: "Do you only manage Meta ads, or other channels too?",
      a: "Meta ads can be managed on their own, but they work best alongside Google Ads, ad creative, landing pages and lead automation. We recommend the channel mix in the plan rather than selling every service by default.",
    },
    {
      q: "Do you manage Meta ads for businesses outside India?",
      a: "Yes. We manage Meta advertising for businesses in India, the USA, Canada and the UAE, with campaigns, currencies, languages and schedules set up for each market.",
    },
  ],
  cta: {
    heading: "Find out what your Meta account is leaving on the table.",
    body: "Start with a free review of your ad account, or apply for a full growth partnership if you are ready to scale.",
  },
};

export default content;
