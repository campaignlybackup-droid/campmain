import Link from "next/link";
import { categories, type PostMeta } from "@/lib/blog";

export function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
}

export function PostList({ posts }: { posts: PostMeta[] }) {
  return (
    <ul className="border-t border-line">
      {posts.map((p) => (
        <li key={p.slug} className="border-b border-line">
          <Link href={`/blog/${p.slug}/`} className="group grid gap-3 py-8 md:grid-cols-12 md:gap-6">
            <span className="text-sm text-mute md:col-span-3">
              {categories[p.category].label}
              <span className="block">
                <time dateTime={p.published}>{formatDate(p.published)}</time>
              </span>
            </span>
            <span className="md:col-span-8">
              <span className="block font-display text-2xl transition-colors group-hover:text-gold-deep md:text-3xl">{p.h1}</span>
              <span className="mt-2 block text-mute">{p.description}</span>
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
