import SpeakerCard from '@/components/speaker-card/speaker-card';

const speakers = [
    { name: 'Name1', bio: 'Description.', imageUrl: '/people.jpg' },
    { name: 'Name2', bio: 'Description.', imageUrl: '/people.jpg' },
    { name: 'Name3', bio: 'Description.', imageUrl: '/people.jpg' },
    { name: 'Name4', bio: 'Description.', imageUrl: '/people.jpg' },
    { name: 'Name5', bio: 'Description.', imageUrl: '/people.jpg' },
    { name: 'Name6', bio: 'Description.', imageUrl: '/people.jpg' },
    // Add more speakers as needed
];

export default function SpeakerList() {
    return (
        <main className='mt-8 mb-9'>
            <ul className='container grid list-none grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 p-0'>
                {speakers.map((speaker) => (
                    <li key={speaker.name}>
                        <SpeakerCard
                            name={speaker.name}
                            bio={speaker.bio}
                            imageUrl={speaker.imageUrl}
                        />
                    </li>
                ))}
            </ul>
        </main>
    );
}
