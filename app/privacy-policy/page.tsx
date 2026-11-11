import { LegalTemplate } from "@/components/LegalTemplate";
import { siteConfig } from "@/content/site.config";
import { brand } from "@/lib/brand";
import { buildMetadata } from "@/lib/seo";
import { trackingConfigured } from "@/lib/env";

export const metadata = buildMetadata("/privacy-policy/");

export default function PrivacyPolicy() {
  const who = siteConfig.legalName ?? brand.displayName;
  const contact = siteConfig.email
    ? `email ${siteConfig.email}`
    : "use the details on our contact page at campaignlymedia.com/contact/";
  return (
    <LegalTemplate
      path="/privacy-policy/"
      updated="2026-11-11"
      sections={[
        {
          heading: "Who we are",
          paragraphs: [
            `This policy explains how ${who} ("Campaignly", "we") collects and uses personal data through campaignlymedia.com. To ask about it or to exercise your rights, ${contact}.`,
          ],
        },
        {
          heading: "What we collect",
          items: [
            "Details you submit in our forms: your name, work email, company, website, industry, revenue or ad spend range, advertising platform and growth goal.",
            "The page you submitted the form from and any campaign tags (UTM parameters) in the link that brought you to the site.",
            "If you accept analytics and advertising cookies: pages visited, device and browser information, and interactions, collected by Google Analytics 4 and the Meta Pixel.",
            "Standard server logs kept by our hosting provider, such as IP address and request time, for security and reliability.",
          ],
        },
        {
          heading: "How we use it",
          items: [
            "To review your application or ad account review request and reply to you.",
            "To understand which pages and campaigns bring enquiries, so we can improve the site and our marketing.",
            "To measure and improve our own advertising, only if you have accepted advertising cookies.",
            "To keep the site secure and comply with legal obligations.",
          ],
          paragraphs: ["We do not sell your personal data."],
        },
        {
          heading: "Where it is stored and who processes it",
          items: [
            "Form submissions are sent to a Google Apps Script service, stored in a Google Sheet in our Google Workspace account and emailed to our team.",
            "Google Analytics 4 is provided by Google; the Meta Pixel is provided by Meta Platforms. Both load only after you consent.",
            "If you click a WhatsApp link, the conversation takes place on WhatsApp under Meta's terms and privacy policy.",
            "Our website is hosted by Hostinger.",
          ],
          paragraphs: [
            "These providers may process data outside your country. We rely on their contractual and technical safeguards for such transfers.",
          ],
        },
        {
          heading: "Cookies and similar technologies",
          paragraphs: [
            trackingConfigured
              ? "Essential storage remembers your cookie choice and the campaign tags of your visit (in your browser's local and session storage). Analytics and advertising cookies are set only if you choose to accept them, and you can change your choice at any time using the cookie settings link in the footer."
              : "This site currently uses no analytics or advertising cookies. Your browser's session storage keeps the campaign tags of your visit so they can be included with a form submission; it is cleared when you close the tab. If we add analytics later, it will load only after you consent.",
          ],
        },
        {
          heading: "How long we keep it",
          paragraphs: [
            "We keep enquiry data for as long as needed to respond and, if we work together, for the duration of the relationship and any legal retention period afterwards. Enquiries that do not lead to a relationship are deleted when no longer needed. Analytics data is retained according to the retention settings of the analytics provider.",
          ],
        },
        {
          heading: "Your rights",
          paragraphs: [
            "Depending on where you live, including under India's Digital Personal Data Protection Act, 2023, Canada's PIPEDA, the UAE's Federal Decree-Law No. 45 of 2021 and US state privacy laws, you may have the right to access, correct or delete your personal data, to withdraw consent, and to nominate someone to exercise your rights. To make a request, contact us using the details above. You may also complain to your local data protection authority.",
          ],
        },
        {
          heading: "Changes to this policy",
          paragraphs: ["We will update this page when our practices change and revise the date at the top."],
        },
      ]}
    />
  );
}
