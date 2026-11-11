import Link from "next/link";
import { trail, type PagePath } from "@/content/pages";

export function Breadcrumbs({ path }: { path: PagePath }) {
  const items = trail(path);
  return (
    <nav aria-label="Breadcrumb" className="container-site pt-8 md:pt-10">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-mute">
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <li key={item.path} className="flex items-center gap-2">
              {last ? (
                <span aria-current="page" className="text-paper">
                  {item.label}
                </span>
              ) : (
                <>
                  <Link href={item.path} className="link-quiet hover:text-paper">
                    {item.label}
                  </Link>
                  <span aria-hidden="true" className="text-line-strong">
                    /
                  </span>
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
