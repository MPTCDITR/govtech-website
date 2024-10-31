import SpeakerCard from '@/components/speaker-card/speaker-card';

const speakers = [
    {
        name: 'H.E. Chea Sereyvath',
        bio: 'Secretary-General of the General Secretariat of the Digital Government Committee.',
        imageUrl: '/HE-chea-sereyvath.png',
    },
    {
        name: 'H.E. Chanty Sothy',
        bio: 'Advisor of the Ministry of Posts and Telecommunications.',
        imageUrl: '/HE-chanty-sothy.png',
    },
    {
        name: 'H.E. Heang Sotheayuth',
        bio: 'Director General of the General Department of Technology and Public Relations of the Ministry of Public Works and Transport.',
        imageUrl: '/people.png',
    },
    {
        name: 'H.E Dr. Taing Nguonly',
        bio: 'Deputy Secretary General, General Secretariat of the Digital Economy and Business Committee.',
        imageUrl: '/HE-taing-nguonly.png',
    },
    {
        name: 'Lim Larissa',
        bio: 'Executive Manager (Ai Governance).',
        imageUrl: '/people.png',
    },
    {
        name: 'Mr. Krishnan',
        bio: 'The generated Lorem Ipsum is therefore always free from repetition, injected humour.',
        imageUrl: '/people.png',
    },
    {
        name: 'Mr. Jonaz Herzing',
        bio: 'Senior Advisor, GIZ Digital Development Center.',
        imageUrl: '/MR-jonas-herzing.png',
    },
    {
        name: 'H.E Major General Oukchay Panhara',
        bio: 'Deputy Director-General, General Department of Identification of the Ministry of Interior.',
        imageUrl: '/people.png',
    },
    {
        name: 'Mr. Taing Bunhong',
        bio: 'Director of Policy and Legal Affairs Department, General Secretariat of Digital Government Committee.',
        imageUrl: '/MR-taing-bunhong.png',
    },
    {
        name: 'Dr. Ly Rattana',
        bio: 'Lecturer of Computer Science and Research Director at Institute of Digital Research and Innovation (IDRI).',
        imageUrl: '/DR-ly-rattana.png',
    },
    {
        name: 'Mr. Tith Darayong',
        bio: 'The generated Lorem Ipsum is therefore always free from repetition, injected humour.',
        imageUrl: '/people.png',
    },
    {
        name: 'Somaly',
        bio: 'The generated Lorem Ipsum is therefore always free from repetition, injected humour.',
        imageUrl: '/people.png',
    },

    // Add more speakers as needed
];

export default function SpeakerList() {
    return (
        <ul className='container grid list-none grid-cols-1 gap-8 p-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
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
