import SpeakerCard from '@/components/speaker-card/speaker-card';
import { title } from 'process';

const speakers = [
    {
        title: 'Name',
        bio: 'The generated Lorem Ipsum is therefore always free from repetition, injected humour.',
        imageUrl: '/images.jpg',
    },
    {
        title: 'Name',
        bio: 'The generated Lorem Ipsum is therefore always free from repetition, injected humour.',
        imageUrl: '/gg.jpg',
    },
    {
        title: 'Name',
        bio: 'The generated Lorem Ipsum is therefore always free from repetition, injected humour.',
        imageUrl: '/people.png',
    },
    {
        title: 'Name',
        bio: 'The generated Lorem Ipsum is therefore always free from repetition, injected humour.',
        imageUrl: '/people.png',
    },
    {
        title: 'Name',
        bio: 'The generated Lorem Ipsum is therefore always free from repetition, injected humour.',
        imageUrl: '/people.png',
    },
    {
        title: 'Name',
        bio: 'The generated Lorem Ipsum is therefore always free from repetition, injected humour.',
        imageUrl: '/people.png',
    },
    {
        title: 'Name',
        bio: 'The generated Lorem Ipsum is therefore always free from repetition, injected humour.',
        imageUrl: '/people.png',
    },
    {
        title: 'Name',
        bio: 'The generated Lorem Ipsum is therefore always free from repetition, injected humour.',
        imageUrl: '/people.png',
    },

    // Add more speakers as needed
];

export default function SpeakerList() {
    return (
        <ul className='container grid list-none grid-cols-1 gap-4 p-4 md:grid-cols-3 lg:grid-cols-4'>
            {speakers.map((speaker) => (
                <li key={speaker.title}>
                    <SpeakerCard
                        title={speaker.title}
                        bio={speaker.bio}
                        imageUrl={speaker.imageUrl}
                    />
                </li>
            ))}
        </ul>
    );
}
