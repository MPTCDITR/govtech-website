import SpeakerCard from '@/components/speaker-card/speaker-card';

const speakers = [
    {
        name: 'H.E. Chea Sereyvath',
        bio: 'Secretary General, Digital Government Committee.',
        imageUrl: '/HE-Chea-Sereyvath.webp',
    },
    {
        name: 'H.E. Dr. Taing Nguonly',
        bio: 'Deputy Secretary General, Techo Startup Center.',
        imageUrl: '/HE-Taing-Nguonly.webp',
    },
    {
        name: 'Mr. Jonas Herzing',
        bio: 'Senior Advisor, Digital Transformation Center, GIZ.',
        imageUrl: '/Mr-Jonas-Herzing.webp',
    },
    {
        name: 'Dr. En Sovann',
        bio: 'Chair of AI and Data Science Working Group, Ministry of Post and Telecommunications.',
        imageUrl: '/Dr-En-Sovann.webp',
    },
    {
        name: 'Ms. Wenjing Man',
        bio: 'Associate Project Officer, UNESCO Phnom Penh.',
        imageUrl: '/Wenjing Man.webp',
    },
    {
        name: 'Mrs. Hyejeong Lim',
        bio: 'Director, Department of Open Data, National Information Society Agency(NIA), South Korea.',
        imageUrl: '/avatar-girl.webp',
    },
    {
        name: 'Mr. Ouk Sarat',
        bio: 'Director of Payment System Department, National Bank of Cambodia.',
        imageUrl: '/Mr-Ouk-Sarat.webp',
    },
    {
        name: 'Mr. Nabhonil Roy Chowdhury',
        bio: 'GovStack Global Coordinator of International Telecommunication Union (ITU).',
        imageUrl: '/Mr.-Nabhonil-Roy-Chowdhury.webp',
    },
    {
        name: 'Mr. Krishnan Rajagopalan',
        bio: 'Head of Country Implementations of MOSIP',
        imageUrl: '/Krishnan-Rajagopalan.webp',
    },
    {
        name: 'Dr. Ly Rattana',
        bio: 'R&D Director, Institute of Digital Research and Innovation (IDRI).',
        imageUrl: '/Dr-Rattana.webp',
    },
    {
        name: 'Mr. Tith Darayong',
        bio: 'Deputy Director of the Techo Startup Center.',
        imageUrl: '/Mr-Tith-Darayong.webp',
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
