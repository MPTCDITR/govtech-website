import Agenda from "@/components/agenda/agenda";
import HeroSectionHeader from "@/components/homepage/hero-section-header";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between ">
      <HeroSectionHeader />
      <Agenda />
    </main>
  );
}
