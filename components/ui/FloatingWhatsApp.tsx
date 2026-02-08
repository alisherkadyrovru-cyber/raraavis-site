"use client";

import { site } from "@/lib/site";

export default function FloatingWhatsApp() {
  return (
    <a
      href={site.whatsappHref}
      target="_blank"
      rel="noreferrer"
      className="
        md:hidden
        fixed right-4 bottom-4 z-50
        inline-flex items-center justify-center
        rounded-full bg-black text-white
        h-14 w-14 shadow-lg
        hover:bg-gray-800
      "
      aria-label="WhatsApp"
      title="WhatsApp"
    >
      WA
    </a>
  );
}
