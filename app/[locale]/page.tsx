import AboutGovtech from "@/components/about-govtech/about-govtech";
import GoalSection from "@/components/goal-section/goal-section";
import HeroSectionHeader from "@/components/homepage/hero-section-header";
import SpeakerSection from "@/components/speaker-section/speaker-section";
import { SupportedBySection } from "@/components/supported-by/supported-by-section";

export const revalidate = 0;

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between ">
      <HeroSectionHeader />
      <AboutGovtech />
      <SupportedBySection />
      <SpeakerSection />
      <GoalSection />
    </main>
  );
}
