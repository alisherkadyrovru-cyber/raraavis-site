export type Lang = "ru" | "en" | "tr";

export function getLangFromPath(pathname: string): Lang {
  if (pathname.startsWith("/en")) return "en";
  if (pathname.startsWith("/tr")) return "tr";
  return "ru";
}

export function withLang(pathname: string, href: string) {
  const lang = getLangFromPath(pathname);

  // внешние ссылки / якоря не трогаем
  if (href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:") || href.startsWith("#")) {
    return href;
  }

  // RU без префикса
  if (lang === "ru") return href;

  // уже с префиксом
  if (href === `/${lang}` || href.startsWith(`/${lang}/`)) return href;

  // корень
  if (href === "/") return `/${lang}`;

  return `/${lang}${href}`;
}
