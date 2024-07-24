import { GoalSection } from "../components/goal-section/index.jsx";

import HeroSectionHeader from "@/components/homepage/hero-section-header";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <HeroSectionHeader />
      <GoalSection />
    </main>
  );
}
