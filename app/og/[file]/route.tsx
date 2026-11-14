import fs from "node:fs";
import path from "node:path";
import { ImageResponse } from "next/og";
import { ogKey } from "@/lib/og";
import { allRoutes } from "@/lib/routes";

export const dynamic = "force-static";
export const dynamicParams = false;

export async function generateStaticParams() {
  return (await allRoutes()).map((r) => ({ file: `${ogKey(r.path)}.png` }));
}

const fraunces = fs.readFileSync(path.join(process.cwd(), "assets/fonts/Fraunces-Regular.ttf"));
const inter = fs.readFileSync(path.join(process.cwd(), "assets/fonts/Inter-Regular.ttf"));

/** Type-led 1200x630 image per page: brand, section and the page's H1. */
export async function GET(_req: Request, { params }: { params: Promise<{ file: string }> }) {
  const { file } = await params;
  const key = file.replace(/\.png$/, "");
  const route = (await allRoutes()).find((r) => ogKey(r.path) === key);
  const heading = route?.heading ?? "Campaignly Media";
  const eyebrow = route?.eyebrow ?? "Campaignly Media";
  const size = heading.length > 70 ? 54 : heading.length > 45 ? 64 : 76;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #0a1626 0%, #0d1b2e 60%, #1a2a40 100%)",
          color: "#ffffff",
          padding: "72px 80px",
          fontFamily: "Inter",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", fontFamily: "Fraunces", fontSize: 40 }}>
            Campaignly<span style={{ color: "#C9A24A" }}>.</span>
          </div>
          <div style={{ display: "flex", fontSize: 22, letterSpacing: 4, color: "#C9A24A", textTransform: "uppercase" }}>{eyebrow}</div>
        </div>
        <div style={{ display: "flex", fontFamily: "Fraunces", fontSize: size, lineHeight: 1.08, maxWidth: 1000 }}>{heading}</div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: 24, color: "#a9b6c8" }}>
          <div style={{ display: "flex" }}>Outperform. Outshine. Outwin.</div>
          <div style={{ display: "flex", width: 120, height: 2, background: "#C9A24A" }} />
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        { name: "Fraunces", data: fraunces, weight: 400, style: "normal" },
        { name: "Inter", data: inter, weight: 400, style: "normal" },
      ],
    },
  );
}
