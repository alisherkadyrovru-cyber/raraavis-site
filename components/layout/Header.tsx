"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";
import { usePathname } from "next/navigation";
import { getContent } from "@/lib/getContent";
import { withLang } from "@/lib/lang";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const content = getContent(pathname);

  const nav = [
    { href: "/", label: content.nav.home },
    { href: "/services", label: content.nav.services },
    { href: "/references", label: content.nav.references },
    { href: "/contacts", label: content.nav.contacts },
    { href: "/news", label: content.nav.news },
  ];

  // Закрывать меню при переходе/перезагрузке
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header
      className="w-full border-b shadow-sm"
      style={{ backgroundColor: "var(--header-bg)", borderColor: "var(--border)" }}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between gap-3">
        {/* Logo */}
        <Link href={withLang(pathname, "/")} className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Image
            src="/logo.png"
            alt={`${site.name} logo`}
            width={64}
            height={64}
            className="h-14 w-14 object-contain"
            priority
          />
          <div className="leading-tight">
            <div className="text-lg font-semibold tracking-tight">{site.name}</div>
            <div className="text-xs text-gray-500">{site.tagline}</div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={withLang(pathname, item.href)}
              className="text-gray-700 hover:text-black"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <a
            href={site.whatsappHref}
            className="inline-flex items-center rounded-full bg-black px-5 py-2.5 text-sm font-semibold text-white hover:bg-gray-800 transition"
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp
          </a>
        </div>

        {/* Mobile burger */}
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center rounded-md border px-3 py-2 text-sm font-medium"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile slide-over */}
      {open && (
        <div className="md:hidden fixed inset-0 z-50">
          {/* Backdrop */}
          <button
            className="absolute inset-0 bg-black/40"
            aria-label="Close menu backdrop"
            onClick={() => setOpen(false)}
          />

          {/* Panel */}
          <div className="absolute right-0 top-0 h-full w-[86%] max-w-sm bg-white shadow-xl p-5">
            <div className="flex items-center justify-between">
              <div className="text-sm font-semibold">Меню</div>
              <button
                className="rounded-md border px-3 py-2 text-sm font-medium"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
              >
                ✕
              </button>
            </div>

            <div className="mt-5 flex flex-col gap-2">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={withLang(pathname, item.href)}
                  className="rounded-lg px-3 py-3 text-base font-medium text-gray-800 hover:bg-gray-100"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="mt-6 border-t pt-5 space-y-3">
              <a
                href={site.whatsappHref}
                className="w-full inline-flex items-center justify-center rounded-md bg-black px-4 py-3 text-sm font-semibold text-white hover:bg-gray-800"
                target="_blank"
                rel="noreferrer"
              >
                Связаться в WhatsApp
              </a>

              <div className="text-sm text-gray-600">
                <div>
                  <span className="text-gray-500">Тел: </span>
                  <a href={site.phoneHref} className="hover:text-black">
                    {site.phone}
                  </a>
                </div>
                <div className="mt-1">
                  <span className="text-gray-500">Email: </span>
                  <a href={site.emailHref} className="hover:text-black">
                    {site.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
