import type { DetailContent } from "@/content/types";

const content: DetailContent = {
  path: "/services/ai-automation/",
  slug: "ai-automation",
  eyebrow: "AI automation",
  question: "What does AI marketing automation do for lead generation?",
  answer:
    "AI marketing automation responds to, qualifies and routes leads without waiting for a person. Campaignly builds WhatsApp flows on Meta's official Business Platform, connects them to your CRM and ad accounts, uses AI to sort serious buyers from browsers, and hands qualified leads to your team with context, typically within minutes of the enquiry.",
  service: { name: "AI marketing automation", serviceType: "Marketing automation and lead qualification" },
  sections: [
    {
      kind: "scope",
      heading: "What we automate",
      included: [
        { item: "Instant lead response", detail: "A WhatsApp or email reply the moment a form, ad lead or call comes in." },
        { item: "Lead qualification", detail: "Questions and AI scoring that separate buyers from browsers using your criteria." },
        { item: "Routing and handover", detail: "Qualified leads assigned to the right person with a summary of the conversation." },
        { item: "CRM updates", detail: "Every lead, answer and status written to your CRM or Google Sheet automatically." },
        { item: "Follow-up sequences", detail: "Reminders and nudges for leads who go quiet, within platform rules." },
        { item: "Feedback to ad platforms", detail: "Qualified and won outcomes sent back to Meta and Google to improve targeting." },
      ],
      excluded: [
        { item: "WhatsApp message fees", detail: "Charged by Meta per delivered template message, paid through your provider." },
        { item: "CRM licences", detail: "Paid to your CRM vendor; we work with the CRM you already use where possible." },
        { item: "Unofficial WhatsApp tools", detail: "We only build on the official Business Platform to avoid number bans." },
      ],
    },
    {
      kind: "prose",
      heading: "Why we only use the official WhatsApp platform",
      paragraphs: [
        "Automated and bulk WhatsApp messaging is only permitted through Meta's WhatsApp Business Platform. Unofficial tools that automate the consumer or Business app put the number at risk of being banned, which can take years of customer conversations with it.",
        "The official platform has rules that shape the design. You need the customer's opt-in before sending business-initiated messages. Free-form replies are allowed within a 24-hour window after the customer last messaged you; outside it, you must use pre-approved message templates. Since 1 July 2025, Meta charges per delivered template message rather than per conversation.",
      ],
      sources: [
        { label: "Meta for Developers: WhatsApp Business Platform pricing", href: "https://developers.facebook.com/docs/whatsapp/pricing" },
      ],
    },
    {
      kind: "steps",
      heading: "How we build an automation",
      steps: [
        { title: "Map the lead journey", text: "We trace what happens from enquiry to sale today, and where leads wait or get lost." },
        { title: "Define qualification", text: "Your sales team's real criteria become questions and scoring rules." },
        { title: "Build on official APIs", text: "WhatsApp Business Platform, your CRM's API and ad platform conversion APIs, connected securely." },
        { title: "Write the conversation", text: "Messages sound like your team, ask one thing at a time and offer a human at any point." },
        { title: "Test with real leads", text: "We run the flow alongside your team, review transcripts and fix friction." },
        { title: "Hand over and document", text: "You own the accounts, templates and documentation, with a clear way to change copy and rules." },
      ],
    },
    {
      kind: "table",
      heading: "Where automation pays off",
      caption: "Where lead automation has the most effect",
      columns: ["Business type", "What automation solves"],
      rows: [
        ["Education", "Hundreds of enquiries during admission season, each needing course and eligibility answers"],
        ["Real estate", "Lead volume from ads, with site visits to book and NRI buyers in other time zones"],
        ["Healthcare", "Appointment requests that need fast confirmation and reminders"],
        ["Ecommerce", "Cash-on-delivery confirmation, cart recovery and reorder reminders"],
        ["B2B services", "Inbound enquiries that need qualifying before a sales call"],
      ],
    },
  ],
  related: [
    {
      heading: "Automation by industry",
      items: [
        { href: "/industries/education/", label: "Admission enquiry automation", summary: "Answer every student lead during peak season." },
        { href: "/industries/real-estate/", label: "Site visit booking automation", summary: "Qualify buyers and book visits automatically." },
        { href: "/industries/healthcare/", label: "Appointment automation for clinics", summary: "Confirmations and reminders on WhatsApp." },
      ],
    },
    {
      heading: "Services that feed automation",
      items: [
        { href: "/services/meta-ads/", label: "Meta lead generation campaigns", summary: "Lead ads connected straight into WhatsApp." },
        { href: "/services/google-ads/", label: "Google Ads with offline conversions", summary: "Qualified outcomes sent back to bidding." },
        { href: "/locations/uae/", label: "WhatsApp automation for UAE businesses", summary: "Arabic and English flows." },
      ],
    },
  ],
  faqs: [
    {
      q: "Do I need the WhatsApp Business API for automation?",
      a: "Yes, for automated or bulk messaging. The free WhatsApp Business app supports simple quick replies and greetings, but automation, integrations and multiple agents need the WhatsApp Business Platform through Meta or an approved provider.",
    },
    {
      q: "Can I keep my existing WhatsApp number?",
      a: "Usually yes. Meta's coexistence option lets many numbers already on the WhatsApp Business app connect to the Business Platform while staying active in the app, keeping chat history. Where a number is not eligible, it moves to the platform only. We check which applies before migrating.",
    },
    {
      q: "How much does WhatsApp messaging cost?",
      a: "Meta charges per delivered template message, with rates that vary by country and message category (marketing, utility, authentication). Replies within 24 hours of a customer message are not charged. We estimate costs from your expected volumes before building.",
    },
    {
      q: "Will customers know they are talking to automation?",
      a: "They should. We write flows that are clear about being automated and always offer a route to a person. That builds more trust than pretending.",
    },
    {
      q: "Which CRMs do you connect to?",
      a: "Any CRM with an API, including common choices such as HubSpot, Zoho and Salesforce, plus Google Sheets for simpler setups. We confirm the integration during scoping.",
    },
    {
      q: "Is lead data kept secure?",
      a: "Data stays in your accounts: your WhatsApp Business account, your CRM and your ad platforms. We use access you grant and can revoke, and we design flows to collect only the data qualification needs.",
    },
  ],
};

export default content;
