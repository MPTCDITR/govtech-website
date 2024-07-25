import React from "react";
import SpeakerCard from "@/components/speaker-card/speaker-card";

export default function SpeakerPage() {
  return (
    <div className="flex flex-col items-center mt-9">
      <h1 className="text-4xl font-bold mb-4">Speaker Page</h1>
      <p className="text-lg mb-6">List of Speakers</p>
      <div className="grid grid-cols-3 gap-x-4 gap-y-10">
        <SpeakerCard />
        <SpeakerCard />
        <SpeakerCard />
        <SpeakerCard />
        <SpeakerCard />
        <SpeakerCard />
      </div>
    </div>
  );
}
