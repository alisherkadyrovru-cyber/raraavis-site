"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/lib/site";
import { getContent } from "@/lib/getContent";
import { withLang } from "@/lib/lang";

export default function Footer() {
  const pathname = usePathname();
  const content = getContent(pathname);

  return (
    <footer className="border-t bg-white/90 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 py-12 grid gap-10 md:grid-cols-3">
        {/* Brand */}
        <div>
          <div className="text-lg font-semibold">{site.name}</div>
          <div className="mt-2 text-sm text-gray-600">{site.tagline}</div>

          <div className="mt-6 space-y-2 text-sm">
            <div>
              <span className="text-gray-500">{content.footer.phoneLabel}: </span>
              <a className="hover:text-black" href={site.phoneHref}>
                {site.phone}
              </a>
            </div>
            <div>
              <span className="text-gray-500">{content.footer.emailLabel}: </span>
              <a className="hover:text-black" href={site.emailHref}>
                {site.email}
              </a>
            </div>
            <div>
              <span className="text-gray-500">{content.footer.addressLabel}: </span>
              <span>{site.address}</span>
            </div>
          </div>
        </div>

        {/* Links */}
        <div>
          <div className="text-sm font-semibold">{content.footer.sections}</div>
          <div className="mt-4 flex flex-col gap-2 text-sm">
            {[
              { href: "/", label: content.nav.home },
              { href: "/services", label: content.nav.services },
              { href: "/references", label: content.nav.references },
              { href: "/contacts", label: content.nav.contacts },
              { href: "/news", label: content.nav.news },
            ].map((n) => (
              <Link
                key={n.href}
                href={withLang(pathname, n.href)}
                className="text-gray-700 hover:text-black"
              >
                {n.label}
                </Link>
            ))}
          </div>
        </div>

        {/* CTA + Social */}
        <div>
          <div className="text-sm font-semibold">{content.footer.contact}</div>
          <p className="mt-4 text-sm text-gray-600">{content.footer.blurb}</p>

          <div className="mt-5 flex gap-3">
            <a
              href={site.whatsappHref}
              className="inline-flex items-center justify-center rounded-md bg-black px-4 py-2 text-sm font-medium text-white hover:bg-gray-800"
              target="_blank"
              rel="noreferrer"
            >
              {content.footer.whatsapp}
            </a>

            <a
              href={site.emailHref}
              className="inline-flex items-center justify-center rounded-md border px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50"
            >
              {content.footer.email}
            </a>
          </div>

          {site.socials.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-4 text-sm text-gray-700">
              {site.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="hover:text-black"
                  target="_blank"
                  rel="noreferrer"
                >
                  {s.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="border-t">
        <div className="max-w-7xl mx-auto px-4 py-4 text-xs text-gray-500 flex flex-col md:flex-row gap-2 md:items-center md:justify-between">
          <div>
            © {new Date().getFullYear()} {site.name}. {content.footer.rights}
          </div>
          <div className="text-gray-400">raraavis.com.tr</div>
        </div>
      </div>
    </footer>
  );
}
