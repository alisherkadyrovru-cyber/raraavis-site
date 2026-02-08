"use client";

import { site } from "@/lib/site";
import { usePathname } from "next/navigation";

function IconInstagram(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Z"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M12 16.2A4.2 4.2 0 1 0 12 7.8a4.2 4.2 0 0 0 0 8.4Z"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M17.3 6.9h.01"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconTelegram(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M20.8 4.6 3.7 11.2c-1 .4-1 1.8.1 2.1l4.6 1.4 1.7 5.1c.3.9 1.5 1 2 .2l2.6-3.9 4.7 3.4c.8.6 1.9.1 2.1-.9l2.6-12.2c.2-1-0.8-1.8-1.8-1.4Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M8.4 14.7 19.6 7.7"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function TopBar() {
  const pathname = usePathname();
  return (
    <div
      className="w-full text-sm text-gray-700 border-b"
      style={{ backgroundColor: "var(--topbar-bg)", borderColor: "var(--border)" }}
    >
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-start justify-between gap-3">
        {/* Left: contacts + socials */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <a href={site.phoneHref} className="hover:text-black">
            {site.phone}
              <span className="text-gray-400"> |</span>
          </a>

          <a href={site.emailHref} className="hover:text-black">
            {site.email}
              <span className="text-gray-400"> |</span>
          </a>

          <span className="hidden md:inline">
            {site.address}
              <span className="text-gray-400"> |</span>
          </span>

          {/* Social icons right after address */}
          <div className="flex items-center gap-3 text-gray-600">
            {site.socials?.some((s) => s.label === "Instagram") && (
              <a
                href={site.socials.find((s) => s.label === "Instagram")!.href}
                className="hover:text-black"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                title="Instagram"
              >
                <IconInstagram className="h-4 w-4" />
              </a>
            )}

            {site.socials?.some((s) => s.label === "Telegram") && (
              <a
                href={site.socials.find((s) => s.label === "Telegram")!.href}
                className="hover:text-black"
                target="_blank"
                rel="noreferrer"
                aria-label="Telegram"
                title="Telegram"
              >
                <IconTelegram className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>

        {/* Right: languages */}
        <div className="flex items-center gap-2 text-xs font-semibold">
          {site.languages.map((l) => {
            const isActive =
              (l.href === "/" && pathname === "/") ||
              (l.href !== "/" && pathname.startsWith(l.href));

            return (
              <a
                key={l.code}
                href={l.href}
                className={`rounded-md px-2 py-1 ${
                  isActive
                    ? "bg-black text-white"
                    : "text-gray-700 hover:bg-gray-200 hover:text-black"
                }`}
              >
                {l.label}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
