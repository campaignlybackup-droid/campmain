import type { DetailContent } from "@/content/types";

const content: DetailContent = {
  path: "/industries/education/",
  slug: "education",
  eyebrow: "Education",
  question: "How does student admission lead generation work?",
  answer:
    "Student admission lead generation uses search, social ads, landing pages and fast follow-up to turn prospective students into applications and enrolments. Campaignly runs campaigns for universities, colleges and edtech providers around each intake, qualifies enquiries automatically on WhatsApp, and measures cost per application and per admission instead of cost per lead.",
  sections: [
    {
      kind: "prose",
      heading: "Cost per admission over cost per lead",
      paragraphs: [
        "Cheap leads are easy to buy. A form that asks for a phone number in exchange for a brochure will fill fast, and most of those enquiries will never apply. Counsellors then spend their time calling people who were never going to enrol.",
        "We optimise for the stages that matter: verified enquiry, counselling call, application, admission. When those outcomes are sent back to Meta and Google, the platforms learn to find more students like the ones who enrolled.",
      ],
    },
    {
      kind: "table",
      heading: "The admission funnel",
      caption: "Admission funnel stages and measures",
      columns: ["Stage", "What happens", "Measure"],
      rows: [
        ["Enquiry", "Form, call or WhatsApp message from a prospective student or parent", "Cost per verified enquiry"],
        ["Qualification", "Course interest, eligibility, intake and location confirmed", "Qualified enquiry rate"],
        ["Counselling", "Conversation with an admissions counsellor", "Counselling show rate"],
        ["Application", "Application submitted, fee paid where applicable", "Cost per application"],
        ["Admission", "Seat confirmed and enrolled", "Cost per admission"],
      ],
    },
    {
      kind: "steps",
      heading: "How an admission campaign runs",
      steps: [
        { title: "Map the intake calendar", text: "Campaigns are planned backwards from application deadlines and results dates." },
        { title: "Build programme pages", text: "Each course gets a page that answers fees, eligibility, outcomes and next steps." },
        { title: "Launch search and social", text: "Google captures students searching for courses; Meta and YouTube reach those still deciding." },
        { title: "Qualify on WhatsApp", text: "Automated flows confirm course, eligibility and intake, then hand over to counsellors." },
        { title: "Feed back outcomes", text: "Applications and admissions are sent to ad platforms so bidding favours real students." },
      ],
    },
    {
      kind: "list",
      heading: "What to watch in education marketing",
      items: [
        "Claims about placements, rankings and salaries must be accurate and supportable; regulators and platforms treat misleading education claims seriously.",
        "Parents are often decision-makers, so creative and follow-up need to speak to them as well as to students.",
        "Peak season brings lead spikes; response time falls apart unless follow-up is automated.",
        "Study-abroad and international programmes need campaigns timed to other countries' academic calendars.",
      ],
    },
  ],
  related: [
    {
      heading: "Services for education",
      items: [
        { href: "/services/meta-ads/", label: "Meta ads for student admissions", summary: "Reach students and parents while they decide." },
        { href: "/services/google-ads/", label: "Google Ads for course searches", summary: "Capture students searching by course and city." },
        { href: "/services/ai-automation/", label: "WhatsApp admission enquiry automation", summary: "Qualify enquiries within minutes." },
        { href: "/services/landing-pages/", label: "Programme landing pages", summary: "Course pages built to convert." },
      ],
    },
    {
      heading: "Markets",
      items: [
        { href: "/locations/india/", label: "Admission campaigns in India", summary: "Regional languages and intake calendars." },
        { href: "/locations/uae/", label: "Education marketing in the UAE", summary: "Campaigns for students and parents in the UAE." },
      ],
    },
  ],
  faqs: [
    {
      q: "Which institutions do you work with?",
      a: "Universities, colleges, schools, coaching institutes and edtech providers that have a defined intake and an admissions team able to follow up quickly.",
    },
    {
      q: "When should admission campaigns start?",
      a: "Well before the application deadline. Search demand and decision-making start months earlier than most institutions advertise, so we plan backwards from each intake.",
    },
    {
      q: "How do you improve lead quality for admissions?",
      a: "Better forms with qualifying questions, course-specific landing pages, instant WhatsApp qualification, and sending application and admission data back to the ad platforms.",
    },
    {
      q: "Can you integrate with our admissions CRM?",
      a: "Yes, if it has an API or can import and export data. Common setups include education CRMs, Zoho, Salesforce or Google Sheets.",
    },
    {
      q: "Do you advertise to international students?",
      a: "Yes. We run campaigns for programmes recruiting students from other countries, timed to their academic calendars and in the right languages.",
    },
  ],
};

export default content;
