import React from "react";
import SpeakerCard from "@/components/speaker-card/speaker-card.tsx";

export default function SpeakerPage() {
  return (
    <main className="flex justify-center mt-8 mb-20">
      <div className="max-w-7xl w-full px-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Speaker Section</h1>
          <p className="text-lg mb-4">List of Speakers</p>
          <div className="grid grid-cols-3 gap-x-0 gap-y-9">
            <div className="flex items-center justify-center">
              <SpeakerCard />
            </div>
            <div className="flex items-center justify-center">
              <SpeakerCard />
            </div>
            <div className="flex items-center justify-center">
              <SpeakerCard />
            </div>
            <div className="flex items-center justify-center">
              <SpeakerCard />
            </div>
            <div className="flex items-center justify-center">
              <SpeakerCard />
            </div>
            <div className="flex items-center justify-center">
              <SpeakerCard />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
