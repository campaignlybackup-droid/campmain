import { findDetail, industryContent } from "@/content/details";
import { DetailPage, detailMetadata } from "@/lib/detail-page";

export const dynamicParams = false;

export function generateStaticParams() {
  return industryContent.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return detailMetadata(findDetail(industryContent, slug));
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <DetailPage content={findDetail(industryContent, slug)} />;
}
