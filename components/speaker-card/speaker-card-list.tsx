import SpeakerCard from "@/components/speaker-card/speaker-card";

export default function SpeakerList() {
    return (
        <main className="mt-8 mb-12">
            <div className="container grid list-none grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 p-0">
                <SpeakerCard
                    name="Name1"
                    bio="Description."
                    imageUrl="/people.jpg"
                />
                <SpeakerCard
                    name="Name2"
                    bio="Description."
                    imageUrl="/people.jpg"
                />
                <SpeakerCard
                    name="Name3"
                    bio="Description."
                    imageUrl="/people.jpg"
                />
                <SpeakerCard
                    name="Name4"
                    bio="Description."
                    imageUrl="/people.jpg"
                />
                <SpeakerCard
                    name="Name5"
                    bio="Description."
                    imageUrl="/people.jpg"
                />
                <SpeakerCard
                    name="Name6"
                    bio="Description."
                    imageUrl="/people.jpg"
                />
            </div>
        </main>
    );
}
