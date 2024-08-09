import SpeakerCardList from "@/components/speaker-card/speaker-card-list";

export default function SpeakerPage() {
    return (
        <main className="mt-8 mb-20 flex justify-center">
            <div className="w-full max-w-7xl px-4">
                <div className="text-center">
                    <h1 className="mb-4 font-bold text-4xl">Speaker Section</h1>
                    <p className="mb-4 text-lg">List of Speakers</p>
                    <div>
                        <SpeakerCardList />
                    </div>
                </div>
            </div>
        </main>
    );
}
