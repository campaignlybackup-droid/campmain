import type { DetailContent } from "@/content/types";

const content: DetailContent = {
  path: "/industries/hospitality/",
  slug: "hospitality",
  eyebrow: "Hospitality",
  question: "How does hotel digital marketing increase direct bookings?",
  answer:
    "Hotel digital marketing grows direct bookings by reaching travellers before they settle on an online travel agent, then making your own website the easier, better-value way to book. Campaignly runs Google Search and hotel campaigns, social video for discovery and retargeting, and sharpens the booking path. We measure direct revenue and the share of bookings you keep.",
  sections: [
    {
      kind: "prose",
      heading: "The case for direct bookings",
      paragraphs: [
        "Online travel agents bring reach, and they charge commission on every booking while keeping much of the guest relationship. Every booking won on your own website keeps more revenue and gives you the guest's details for every future stay.",
        "Travel agents keep their place in the mix. Our job is to win every guest who would happily book direct once your website, rates and follow-up make it the obvious choice.",
      ],
    },
    {
      kind: "table",
      heading: "Channels that drive direct bookings",
      caption: "Hotel direct booking channels",
      columns: ["Channel", "Role"],
      rows: [
        ["Google Search (brand)", "Protect your own name from intermediaries bidding on it"],
        ["Google Hotel Ads and free booking links", "Show your direct rate next to OTA rates in Google results"],
        ["Meta and Instagram", "Inspire trips with video; retarget website visitors"],
        ["YouTube", "Experience-led video for destination and resort stays"],
        ["Email and WhatsApp", "Pre-arrival, upsell and return-visit offers for past guests"],
      ],
    },
    {
      kind: "steps",
      heading: "How the programme runs",
      steps: [
        { title: "Audit the booking path", text: "Speed, rate display, booking engine steps and mobile experience." },
        { title: "Protect the brand search", text: "Brand campaigns and Google hotel listings so searches for you lead to you." },
        { title: "Build reasons to book direct", text: "Perks and flexible terms available only on your own site." },
        { title: "Run discovery and retargeting", text: "Video and social for travellers still choosing, retargeting for those comparing rates." },
        { title: "Bring guests back", text: "Past-guest campaigns by email and WhatsApp with consent." },
      ],
    },
  ],
  related: [
    {
      heading: "Services for hospitality",
      items: [
        { href: "/services/google-ads/", label: "Google Ads for hotels", summary: "Brand protection and hotel campaigns." },
        { href: "/services/ad-creative/", label: "Video ads for hotels and resorts", summary: "Experience-led creative." },
        { href: "/services/social-media/", label: "Social media for hospitality", summary: "Content that inspires bookings." },
        { href: "/services/ecommerce-growth/", label: "Booking conversion optimisation", summary: "Fewer drop-offs in the booking engine." },
      ],
    },
    {
      heading: "Markets",
      items: [
        { href: "/locations/uae/", label: "Hotel marketing in the UAE", summary: "Arabic and English campaigns for UAE hospitality." },
        { href: "/locations/india/", label: "Hotel and resort marketing in India", summary: "Festive and long-weekend demand." },
      ],
    },
  ],
  faqs: [
    {
      q: "Can a hotel reduce its dependence on online travel agents?",
      a: "Yes, steadily. Protecting brand searches, showing a direct rate in Google, offering direct-only perks and re-marketing to past guests all shift share toward direct bookings.",
    },
    {
      q: "Should hotels bid on their own brand name?",
      a: "Usually yes. Other advertisers, including intermediaries, can appear on your brand searches. A brand campaign keeps the top result pointing to your own website.",
    },
    {
      q: "Do you work with restaurants?",
      a: "Our hospitality focus is hotels, resorts and serviced stays. Restaurant groups with a substantial acquisition budget can be assessed case by case.",
    },
    {
      q: "How do you measure hotel campaigns?",
      a: "Direct booking revenue, room nights, cost per booking and the share of bookings that come direct, tracked through the booking engine.",
    },
  ],
};

export default content;
