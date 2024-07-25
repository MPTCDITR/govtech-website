import Image from "next/image";
import SpeakerSection from "@/components/speaker-section/speaker-section.tsx";


import SpeakerPage from "@/app/speaker-page.tsx";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1>Wellcome to GovTech Website 2024</h1>
        <SpeakerSection />
        
      </div>
    </main>
  );
}
