import SpeakerCard from '@/components/speaker-card/speaker-card';

const speakers = [
    {
        name: 'H.E. Keo Sothie',
        bio: 'Secretaries of State of Ministry Post and Telecommunications.',
        imageUrl: '/HE-Keo-Sothie.webp',
    },
    {
        name: 'H.E. Chea Sereyvath',
        bio: 'Secretary General, Digital Government Committee.',
        imageUrl: '/HE-Chea-Sereyvath.webp',
    },
    {
        name: 'H.E. Chanty Sothy',
        bio: 'Advisor of the Ministry of Posts and Telecommunications.',
        imageUrl: '/HE-Chanty-Sothy.webp',
    },
    {
        name: 'H.E. Dr. Taing Nguonly',
        bio: 'Deputy Secretary General, Techo Startup Center.',
        imageUrl: '/HE-Taing-Nguonly.webp',
    },
    {
        name: 'H.E. Lieutenant Oukchay Panhara',
        bio: 'Deputy Director, Ministry of Interior.',
        imageUrl: '/HE-Oukchay-Panhara.webp',
    },
    {
        name: 'H.E Thong Sopymakara',
        bio: 'Deputy Secretary General of the General Secretariat of the Digital Government Committee.',
        imageUrl: '/HE-Thong-Sopymakara.webp',
    },
    {
        name: 'Mr. Jonas Herzing',
        bio: 'Senior Advisor, Digital Transformation Center, GIZ.',
        imageUrl: '/Mr-Jonas-Herzing.webp',
    },
    {
        name: 'Mr. Nabhonil Roy Chowdhury',
        bio: 'GovStack Global Coordinator of International Telecommunication Union (ITU).',
        imageUrl: '/Mr.-Nabhonil-Roy-Chowdhury.webp',
    },
    {
        name: 'Mr. Taing Bunhong',
        bio: 'Director of Policy and Legal Affairs Department, General Secretariat of Digital Government Committee.',
        imageUrl: '/Mr-Taing-Bunhong.webp',
    },
    {
        name: 'Mr. Krishnan Rajagopalan',
        bio: 'Head of Country Implementations of MOSIP',
        imageUrl: '/avatar.webp',
    },
    {
        name: 'Dr. Ly Rattana',
        bio: 'R&D Director, Institute of Digital Research and Innovation (IDRI).',
        imageUrl: '/avatar.webp',
    },
    {
        name: 'Mr. Tith Darayong',
        bio: 'Deputy Director of the Techo Startup Center.',
        imageUrl: '/avatar.webp',
    },
    {
        name: 'Mrs. Nguon Somaly',
        bio: 'Director General, Institute of Digital Governance (IDG)',
        imageUrl: '/avatar-girl.webp',
    },
    {
        name: 'Mr. Thy Try',
        bio: 'Executive Director, Open Development Cambodia (ODC)',
        imageUrl: '/avatar.webp',
    },
    {
        name: 'Mr. Chea Linna',
        bio: 'Security Specialist, Ministry of Post and Telecommunications.',
        imageUrl: '/avatar.webp',
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
