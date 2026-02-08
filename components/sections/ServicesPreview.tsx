"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getContent } from "@/lib/getContent";
import { withLang } from "@/lib/lang";

export default function ServicesPreview() {
  const pathname = usePathname();
  const content = getContent(pathname);

  return (
    <section className="py-14">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">
              {content.services.title}
            </h2>
            <p className="mt-2 text-gray-600">{content.services.subtitle}</p>
          </div>

          <Link
            href={withLang(pathname, "/services")}
            className="text-sm font-medium text-gray-700 hover:text-black"
          >
            {content.services.viewAll}
          </Link>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {content.services.items.map((s) => (
            <div key={s.title} className="rounded-xl border bg-white p-6 shadow-sm">
              <div className="text-lg font-semibold">{s.title}</div>
              <p className="mt-2 text-sm text-gray-600">{s.desc}</p>
              <div className="mt-5">
                <Link
                  href={withLang(pathname, "/services")}
                  className="text-sm font-medium text-gray-700 hover:text-black"
                >
                  {content.services.more}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
