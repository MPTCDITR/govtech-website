import React from "react";
import SpeakerCard from "@/components/speaker-card/speaker-card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function SpeakerSection() {
  return (
    <div className="text-center mt-4">
      <h1 className="text-4xl font-bold mb-4">Speaker Section</h1>
      <p className="text-lg mb-4">List of Speakers</p>
      <div className="grid grid-cols-3 gap-4">
        <SpeakerCard />
        <SpeakerCard />
        <SpeakerCard />
        <SpeakerCard />
        <SpeakerCard />
        <SpeakerCard />
      </div>
      <div className="mt-8">
        <Link href="/speaker-page">
          <Button className="bg-primary hover:bg-sky-500 text-white">
            <b>View all Speakers</b>
          </Button>
        </Link>
      </div>
    </div>
  );
}
