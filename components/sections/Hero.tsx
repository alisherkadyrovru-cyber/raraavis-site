"use client";

import { usePathname } from "next/navigation";
import { getContent } from "@/lib/getContent";
import { site } from "@/lib/site";

export default function Hero() {
  const pathname = usePathname();
  const content = getContent(pathname);

  return (
    <section className="relative min-h-[85vh] w-full">
      {/* Background */}
      <div
        className="absolute inset-0 bg-contain bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero.jpg')", backgroundColor: "#69a3af" }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/25 to-black/60" />
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 py-24 md:py-28">
        <div className="max-w-2xl text-white drop-shadow-[0_2px_18px_rgba(0,0,0,0.45)]">
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
            {content.hero.title}
          </h1>

          <p className="mt-5 text-base md:text-lg text-white/90">
            {content.hero.subtitle}
          </p>

          <div className="mt-8">
            <a
              href={site.whatsappHref}
              className="inline-flex items-center justify-center rounded-full border border-white/70 bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/20 transition"
              target="_blank"
              rel="noreferrer"
            >
              {content.hero.ctaWhatsapp}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
