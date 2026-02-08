"use client";

import { usePathname } from "next/navigation";
import { getContent } from "@/lib/getContent";
import { site } from "@/lib/site";

export default function ContactsPage() {
  const pathname = usePathname();
  const content = getContent(pathname);

  return (
    <main className="max-w-7xl mx-auto px-4 py-12">
      <div className="max-w-2xl">
        <h1 className="text-3xl md:text-4xl font-semibold">
          {content.contacts.title}
        </h1>
        <p className="mt-4 text-gray-600">{content.contacts.subtitle}</p>
      </div>

      <div className="mt-12 grid gap-10 md:grid-cols-2">
        <div className="space-y-6">
          <div>
            <div className="text-sm text-gray-500">Телефон</div>
            <a href={site.phoneHref} className="text-lg font-medium hover:text-black">
              {site.phone}
            </a>
          </div>

          <div>
            <div className="text-sm text-gray-500">Email</div>
            <a href={site.emailHref} className="text-lg font-medium hover:text-black">
              {site.email}
            </a>
          </div>

          <div>
            <div className="text-sm text-gray-500">Адрес</div>
            <div className="text-lg">{site.address}</div>
          </div>

          <div className="pt-4">
            <a
              href={site.whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-black px-6 py-3 text-sm font-semibold text-white hover:bg-gray-800"
            >
              {content.contacts.whatsapp}
            </a>
          </div>
        </div>

        <div className="w-full h-[360px] rounded-xl overflow-hidden border">
          <iframe
            title="Rara Avis location"
            src="https://www.google.com/maps?q=Regus%20Istanbul%20Zincirlikuyu&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </main>
  );
}
