import type { DetailContent } from "@/content/types";

const content: DetailContent = {
  path: "/industries/healthcare/",
  slug: "healthcare",
  eyebrow: "Healthcare",
  question: "What does a healthcare digital marketing agency do?",
  answer:
    "A healthcare digital marketing agency helps hospitals, clinics and health brands attract patients through search, social and local visibility while staying within platform policies and medical advertising rules. Campaignly plans patient acquisition around services people actively look for, writes compliant ads, and automates appointment follow-up so enquiries become booked consultations.",
  sections: [
    {
      kind: "table",
      heading: "Advertising rules in healthcare",
      intro: "Healthcare is one of the most restricted advertising categories. These are the main constraints we plan around; your legal and medical teams have the final word on claims.",
      caption: "Key healthcare advertising constraints",
      columns: ["Rule", "What it means for campaigns"],
      rows: [
        ["Google healthcare and medicines policy", "Some treatments, medicines and services are restricted or need certification before ads can run."],
        ["Meta personal attributes policy", "Ads cannot assert or imply a person has a medical condition, so copy speaks to the topic and never to the reader's own diagnosis."],
        ["Meta health and wellness data restrictions", "Since early 2025, Meta limits the conversion events some health advertisers can send and optimise for, which changes campaign setup."],
        ["India: Drugs and Magic Remedies Act, 1954", "Prohibits advertisements claiming to cure or treat listed diseases and conditions."],
        ["India: National Medical Commission conduct rules", "Restrict how registered medical practitioners may promote themselves."],
      ],
      sources: [
        { label: "Google Ads: healthcare and medicines policy", href: "https://support.google.com/adspolicy/answer/176031" },
        { label: "Meta Advertising Standards: personal attributes", href: "https://transparency.meta.com/policies/ad-standards/objectionable-content/personal-attributes" },
      ],
    },
    {
      kind: "steps",
      heading: "How the programme runs",
      steps: [
        { title: "Choose the services to promote", text: "We start with treatments people search for and that your capacity and margins support." },
        { title: "Check policy before creative", text: "Each service is checked against platform policy and local rules before ads are written." },
        { title: "Build service pages", text: "Clear pages covering the treatment, the doctors, what to expect and how to book." },
        { title: "Run search and local", text: "Google Search and Maps visibility capture patients ready to book." },
        { title: "Automate appointment follow-up", text: "WhatsApp confirmations and reminders reduce missed appointments." },
        { title: "Measure booked consultations", text: "Reporting follows each enquiry through to a booked appointment." },
      ],
    },
    {
      kind: "list",
      heading: "Lines we do not cross",
      items: [
        "Promise outcomes or cures, or use before-and-after claims that policy or law prohibits.",
        "Target or imply a person's health condition in ad copy.",
        "Send identifiable health information to ad platforms.",
        "Publish patient testimonials without documented consent and policy review.",
      ],
    },
  ],
  related: [
    {
      heading: "Services for healthcare",
      items: [
        { href: "/services/google-ads/", label: "Google Ads for clinics and hospitals", summary: "Search campaigns for patients ready to book." },
        { href: "/services/seo/", label: "Healthcare SEO", summary: "Accurate content patients and search engines trust." },
        { href: "/services/ai-automation/", label: "Appointment automation on WhatsApp", summary: "Confirmations and reminders." },
        { href: "/services/landing-pages/", label: "Treatment landing pages", summary: "Clear pages that answer patient questions." },
      ],
    },
    {
      heading: "Markets",
      items: [
        { href: "/locations/india/", label: "Healthcare marketing in India", summary: "Within Indian medical advertising rules." },
        { href: "/locations/uae/", label: "Healthcare marketing in the UAE", summary: "Arabic and English patient campaigns." },
        { href: "/locations/usa/", label: "Healthcare marketing for US practices", summary: "Tracking set up with privacy in mind." },
      ],
    },
  ],
  faqs: [
    {
      q: "Can hospitals and clinics advertise on Meta and Google?",
      a: "Yes, within policy. Many treatments and services can be advertised, but some medicines and procedures are restricted, and ads cannot imply a reader has a condition. We check each service before building campaigns.",
    },
    {
      q: "How has Meta's 2025 health data restriction affected advertising?",
      a: "Meta now limits which conversion events some health and wellness advertisers can share and optimise for. Campaigns often need to optimise for upper-funnel actions and rely more on Google and first-party follow-up for booking data.",
    },
    {
      q: "Do you use patient testimonials?",
      a: "Only with documented patient consent and after checking platform policy and local rules. Many claims that work in other industries are not allowed in healthcare.",
    },
    {
      q: "How do you track appointments without sharing health data?",
      a: "We track anonymous conversion events such as a submitted booking request, and keep medical details out of ad platforms entirely.",
    },
    {
      q: "Do you work with single-doctor clinics?",
      a: "We work best with clinics, hospital groups and health brands that have an acquisition budget and a team able to respond to enquiries quickly.",
    },
  ],
};

export default content;
