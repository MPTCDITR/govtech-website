import SpeakerCard from '@/components/speaker-card/speaker-card';

const speakers = [
    {
        name: 'Name',
        bio: 'The generated Lorem Ipsum is therefore always free from repetition, injected humour.',
        imageUrl: '/people.png',
    },
    {
        name: 'Name',
        bio: 'The generated Lorem Ipsum is therefore always free from repetition, injected humour.',
        imageUrl: '/people.png',
    },
    {
        name: 'Name',
        bio: 'The generated Lorem Ipsum is therefore always free from repetition, injected humour.',
        imageUrl: '/people.png',
    },
    {
        name: 'Name',
        bio: 'The generated Lorem Ipsum is therefore always free from repetition, injected humour.',
        imageUrl: '/people.png',
    },
    {
        name: 'Name',
        bio: 'The generated Lorem Ipsum is therefore always free from repetition, injected humour.',
        imageUrl: '/people.png',
    },
    {
        name: 'Name',
        bio: 'The generated Lorem Ipsum is therefore always free from repetition, injected humour.',
        imageUrl: '/people.png',
    },
    {
        name: 'Name',
        bio: 'The generated Lorem Ipsum is therefore always free from repetition, injected humour.',
        imageUrl: '/people.png',
    },
    {
        name: 'Name',
        bio: 'The generated Lorem Ipsum is therefore always free from repetition, injected humour.',
        imageUrl: '/people.png',
    },

    // Add more speakers as needed
];

export default function SpeakerList() {
    return (
        <ul className='container grid list-none grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-4'>
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
    );
}
