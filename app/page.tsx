import AboutGovtech from "@/components/about-govtech/about-govtech";
import HeroSectionHeader from "@/components/homepage/hero-section-header";
import { SupportedBySection } from "@/components/supported-by/supported-by-section";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between ">
      <HeroSectionHeader />
      <AboutGovtech />
      <SupportedBySection />
    </main>
  );
}
