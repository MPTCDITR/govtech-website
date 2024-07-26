import HeroSectionHeader from "@/components/homepage/hero-section-header";
import SpeakerSection from "@/components/speaker-section/speaker-section";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between ">
      <HeroSectionHeader />
      <SpeakerSection />
    
    </main>
  );
}
