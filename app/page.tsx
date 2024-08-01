import HeroSectionHeader from "@/components/homepage/hero-section-header";
import SpeakerSection from "@/components/speaker-section/speaker-section";
import { SupportedBySection } from "@/components/supported-by/supported-by-section";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between ">
      <HeroSectionHeader />
      <SupportedBySection />
      <SpeakerSection />
    </main>
  );
}
