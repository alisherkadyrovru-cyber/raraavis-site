import { ru } from "./content/ru";
import { en } from "./content/en";
import { tr } from "./content/tr";

export function getContent(pathname: string) {
  if (pathname.startsWith("/en")) return en;
  if (pathname.startsWith("/tr")) return tr;
  return ru;
}
