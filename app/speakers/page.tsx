import SpeakerCard from "@/components/speaker-card/speaker-card";

export default function SpeakerPage() {
  return (
    <main className="mt-8 mb-20 flex justify-center">
      <div className="w-full max-w-7xl px-4">
        <div className="text-center">
          <h1 className="mb-4 font-bold text-4xl">Speaker Section</h1>
          <p className="mb-4 text-lg">List of Speakers</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-0 gap-y-9">
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
