"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getContent } from "@/lib/getContent";
import { withLang } from "@/lib/lang";

export default function ReferencesPreview() {
  const pathname = usePathname();
  const content = getContent(pathname);

  return (
    <section className="py-14 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">
              {content.references.title}
            </h2>
            <p className="mt-2 text-gray-600">{content.references.subtitle}</p>
          </div>

          <Link
            href={withLang(pathname, "/references")}
            className="text-sm font-medium text-gray-700 hover:text-black"
          >
            {content.references.viewAll}
          </Link>
        </div>

        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {content.references.items.map((name) => (
            <div
              key={name}
              className="h-16 rounded-xl border bg-white flex items-center justify-center text-xs text-gray-500"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
