import Link from "next/link";
import { trail, type PagePath } from "@/content/pages";

export interface Crumb {
  path: string;
  label: string;
}

export function crumbsFor(path: PagePath): Crumb[] {
  return trail(path).map((p) => ({ path: p.path, label: p.label }));
}

export function Breadcrumbs({ path, items }: { path?: PagePath; items?: Crumb[] }) {
  const list = items ?? (path ? crumbsFor(path) : []);
  return (
    <nav aria-label="Breadcrumb" className="container-site pt-8 md:pt-10">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-mute">
        {list.map((item, i) => {
          const last = i === list.length - 1;
          return (
            <li key={item.path} className="flex items-center gap-2">
              {last ? (
                <span aria-current="page" className="text-ink">
                  {item.label}
                </span>
              ) : (
                <>
                  <Link href={item.path} className="link-quiet hover:text-ink">
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
