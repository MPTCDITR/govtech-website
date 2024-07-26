import React from "react";
import SpeakerCard from "@/components/speaker-card/speaker-card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function SpeakerSection() {
  return (
    <div className="flex justify-center mt-8">
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
          <div className="mt-8 mb-12">
            <Link href="/speakers">
              <Button className="bg-primary hover:bg-sky-500 text-white">
                <b>View all Speakers</b>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
