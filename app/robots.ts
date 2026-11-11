import type { MetadataRoute } from "next";
import { brand } from "@/lib/brand";

export const dynamic = "force-static";

const aiAndSearchBots = ["GPTBot", "OAI-SearchBot", "ChatGPT-User", "ClaudeBot", "Claude-SearchBot", "PerplexityBot", "Google-Extended", "Bingbot", "Googlebot"];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      ...aiAndSearchBots.map((userAgent) => ({ userAgent, allow: "/" })),
      { userAgent: "*", allow: "/" },
    ],
    sitemap: `${brand.url}/sitemap.xml`,
    host: brand.url,
  };
}
