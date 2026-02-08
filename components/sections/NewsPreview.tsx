"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getContent } from "@/lib/getContent";
import { withLang } from "@/lib/lang";

export default function NewsPreview() {
  const pathname = usePathname();
  const content = getContent(pathname);

  return (
    <section className="py-14">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">
              {content.news.title}
            </h2>
            <p className="mt-2 text-gray-600">{content.news.subtitle}</p>
          </div>

          <Link
            href={withLang(pathname, "/news")}
            className="text-sm font-medium text-gray-700 hover:text-black"
          >
            {content.news.viewAll}
          </Link>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {content.news.posts.map((p) => (
            <Link
              key={p.title}
              href={withLang(pathname, "/news")}
              className="rounded-xl border bg-white p-6 shadow-sm hover:shadow-md transition"
            >
              <div className="text-xs text-gray-500">{p.date}</div>
              <div className="mt-2 text-lg font-semibold">{p.title}</div>
              <p className="mt-2 text-sm text-gray-600">{p.excerpt}</p>
              <div className="mt-5 text-sm font-medium text-gray-700">
                {content.news.read}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
