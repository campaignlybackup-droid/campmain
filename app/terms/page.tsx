import { LegalTemplate } from "@/components/LegalTemplate";
import { siteConfig } from "@/content/site.config";
import { brand } from "@/lib/brand";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata("/terms/");

export default function Terms() {
  const who = siteConfig.legalName ?? brand.displayName;
  return (
    <LegalTemplate
      path="/terms/"
      updated="2026-11-11"
      sections={[
        {
          heading: "About these terms",
          paragraphs: [
            `These terms govern your use of campaignlymedia.com, operated by ${who}. By using the site you accept them. Client engagements are governed by a separate written agreement, which takes precedence over anything on this website.`,
          ],
        },
        {
          heading: "Information on this site",
          paragraphs: [
            "Content on this site is general information about digital marketing and our services. It is not legal, financial or regulatory advice. Advertising platform policies and laws change; check current rules before acting on them.",
            "Any results described on this site relate to specific businesses, periods and conditions and do not guarantee similar results for you.",
          ],
        },
        {
          heading: "Intellectual property",
          paragraphs: [
            "The text, design and code of this site belong to Campaignly or its licensors. You may share links to our pages and quote short extracts with attribution. Other reproduction requires our written permission.",
          ],
        },
        {
          heading: "Links to other sites",
          paragraphs: ["We link to external sources for reference. We are not responsible for their content or practices."],
        },
        {
          heading: "Liability",
          paragraphs: [
            "The site is provided as is. To the extent permitted by law, we are not liable for losses arising from use of the site or reliance on its content.",
          ],
        },
        {
          heading: "Changes",
          paragraphs: ["We may update these terms. The date at the top shows the latest version."],
        },
      ]}
    />
  );
}
