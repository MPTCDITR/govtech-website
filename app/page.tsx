import AboutGovtech from "@/components/about-govtech/about-govtech";
import HeroSectionHeader from "@/components/homepage/hero-section-header";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between ">
      <HeroSectionHeader />
      <AboutGovtech />
    </main>
  );
}
