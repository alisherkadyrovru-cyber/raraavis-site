import Hero from "@/components/sections/Hero";
import ServicesPreview from "@/components/sections/ServicesPreview";
import ReferencesPreview from "@/components/sections/ReferencesPreview";
import NewsPreview from "@/components/sections/NewsPreview";

export default function TrHome() {
  return (
    <main>
      <Hero />
      <ServicesPreview />
      <ReferencesPreview />
      <NewsPreview />
    </main>
  );
}
