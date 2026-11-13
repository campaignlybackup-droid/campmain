import type { Metadata } from "next";
import { ButtonLink } from "@/components/Button";

export const metadata: Metadata = {
  title: { absolute: "Page Not Found | Campaignly" },
  description: "The page you were looking for does not exist or has moved.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="container-site py-28 md:py-40">
      <p className="eyebrow">Error 404</p>
      <h1 className="mt-6 max-w-3xl text-display-xl">This page does not exist.</h1>
      <p className="mt-8 max-w-xl text-lead text-mute">
        It may have moved during our site rebuild. These are the most useful places to continue.
      </p>
      <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
        <ButtonLink href="/">Campaignly home</ButtonLink>
        <ButtonLink href="/services/" variant="text">
          Performance marketing services
        </ButtonLink>
        <ButtonLink href="/contact/" variant="text">
          Contact
        </ButtonLink>
      </div>
    </section>
  );
}
