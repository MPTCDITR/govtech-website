import { Button } from '@/components/ui/button';
import { useTranslations } from 'next-intl';
import Text from '../../../components/ui/text';

const scheduleOne = [
    {
        time: '08:00 am - 08:30 am',
        session: (
            <>
                <p className='text-center font-semibold'>REGISTRATION AND WELLCOME COFFEE</p>
            </>
        ),
    },
    {
        time: '08:30 am - 09:30 am',
        session: (
            <>
                <p className='text-center font-semibold'>
                    OPENING CEREMONY & EXHIBITION BOOTH VISIT
                </p>
                <br />
                <p className='text-center font-semibold'>Dr. Seng Sopheap</p>
                <p className='text-center'>
                    President of the Cambodia Academy of Digital Technology
                </p>
                <br />
                <p className='text-center font-semibold'>H.E. Stefan Messerer</p>
                <p className='text-center'>
                    Ambassador of the Federal Republic of Germany to Cambodia
                </p>
                <br />
                <p className='text-center font-semibold'>H.E. Dr. Chea Vandeth</p>
                <p className='text-center'>
                    Minister of the Ministry of Post and Telecommunications And Chair of the
                    Digital Government Committee
                </p>
            </>
        ),
    },
    {
        time: '09:30 am - 10-45 am',
        session: (
            <>
                <p className='text-center font-semibold'>
                    FOLLOWING A WHOLE OF GOVERNMENT APPROACH
                </p>
                <br />
                <p className='text-center'>Keynote Speech by</p>
                <br />
                <p className='text-center font-semibold'>H.E. Chea Sereyvath</p>
                <p className='text-center'>Secretary General, Digital Government Committee</p>
                <br />
                <p className='text-center'>Panel Discussion with</p>
                <br />
                <p className='text-center font-semibold'>H.E. Chea Sereyvath</p>
                <p className='text-center'>Secretary General, Digital Government Committee</p>
                <br />
                <p className='text-center font-semibold'>Mr. Maonh Sayonsomaly</p>
                <p className='text-center'>Ministry of Interior</p>
                <br />
                <p className='text-center font-semibold'>Mr. Nabhonil Roy Chowdhury</p>
                <p className='text-center'>
                    GovStack Global Coordinator of International Telecommunication Union (ITU)
                </p>
                <br />
                <p className='text-center font-semibold'>Moderator: Mr. Jonas Herzing</p>
                <p className='text-center'>
                    Senior Advisor, Digital Transformation Center, GIZ
                </p>
            </>
        ),
    },
    {
        time: '10:45 am - 11-15 am',
        session: (
            <>
                <p className='text-center font-semibold'>TEA & COFFEE BREAK</p>
            </>
        ),
    },
    {
        time: '11-15 am - 12:30 pm',
        session: (
            <>
                <p className='text-center font-semibold'>TOWARDS A CAMBODIAN AI GOVERNANCE</p>
                <br />
                <p className='text-center'>Presentation 1</p>
                <br />
                <p className='text-center font-semibold'>
                    “Artificial Intelligence: Current Status of AI Development under Ministry of
                    Post and Telecommunications(MPTC)”
                </p>
                <p className='text-center font-semibold'>Speaker: Dr. En Sovann</p>
                <p className='text-center'>
                    Chair of AI and Data Science Working Group, Ministry of Post and
                    Telecommunications
                </p>
                <br />
                <p className='text-center'>Presentation 2</p>
                <br />
                <p className='text-center font-semibold'>
                    “AI Landscape in Cambodia – Use Cases from CADT”
                </p>
                <p className='text-center font-semibold'>Speaker: Dr. Ly Rottana</p>
                <p className='text-center'>
                    R&D Director, Institute of Digital Research and Innovation (IDRI)
                </p>
                <br />
                <p className='text-center'>Presentation 3</p>
                <br />
                <p className='text-center font-semibold'>
                    “UNESCO AI Readiness Assessment Methodology(RAM)”
                </p>
                <p className='text-center font-semibold'>Speaker: Ms. Wenjing Man</p>
                <p className='text-center'>Associate Project Officer, UNESCO Phnom Penh</p>
            </>
        ),
    },
    {
        time: '12:30 pm - 14-00 pm',
        session: (
            <>
                <p className='text-center font-semibold'>
                    NETWORKING LUNCH & EXHIBITION BOOTH VISIT
                </p>
            </>
        ),
    },
    {
        time: '14:00 pm - 15:15 pm',
        session: (
            <>
                <p className='text-center font-semibold'>
                    OPEN DATA AND DATA SECURITY IN THE CONTEXT OF SMART GOVERNMENT
                </p>
                <br />
                <p className='text-center'>Keynote Speech by</p>
                <br />
                <p className='text-center font-semibold'>Mrs. Hyejeong Lim</p>
                <p className='text-center'>
                    Director, Department of Open Data, National Information Society Agency(NIA),
                    South Korea
                </p>
                <br />
                <p className='text-center'>Panel Discussion With</p>
                <br />
                <p className='text-center font-semibold'>Mr. Ou Phannarith</p>
                <p className='text-center'>
                    Director of ICT Security, Ministry of Post and Telecommunications
                </p>
                <br />
                <p className='text-center font-semibold'>Mr. Thy Try</p>
                <p className='text-center'>
                    Executive Director, Open Development Cambodia(ODC)
                </p>
                <br />
                <p className='text-center font-semibold'>Mrs. Lorida Sereipheap Leon</p>
                <p className='text-center'>Country Lead, Microsoft MDP Cambodia and Laos</p>
                <br />
                <p className='text-center font-semibold'>Moderator: Mrs. Nguon Somaly</p>
                <p className='text-center'>
                    Director General, Institute of Digital Governance(IDG)
                </p>
            </>
        ),
    },
    {
        time: '15:15 pm - 15:45 pm',
        session: (
            <>
                <p className='text-center font-semibold'>TEA & COFFEE BREAK</p>
            </>
        ),
    },
    {
        time: '15:45 pm - 17:00 pm',
        session: (
            <>
                <p className='text-center font-semibold'>
                    THE ROLE OF DIGITAL PUBLIC INFRASTRUCTURE
                </p>
                <br />
                <p className='text-center'>Keynote Speech by</p>
                <br />
                <p className='text-center font-semibold'>Mr. Krishnan Rajagopalan</p>
                <p className='text-center'>Head of Country Implementations, MOSIP, India</p>
                <br />
                <p className='text-center'>Panel Discussion with</p>
                <br />
                <p className='text-center font-semibold'>Mr. Ouk Sarat</p>
                <p className='text-center'>
                    Deputy Director General of Banking Operation Directorate and Director of
                    Payment System Department, National Bank of Cambodia
                </p>
                <br />
                <p className='text-center font-semibold'>Mr. Tit Darayong</p>
                <p className='text-center'>Deputy Executive Director, Techo Startup Center</p>
                <br />
                <p className='text-center font-semibold'>Moderator: Mr. Krishnan Rajagopalan</p>
                <p className='text-center'>Head of Country Implementations, MOSIP, India</p>
            </>
        ),
    },
    {
        time: '17:00 pm - 17:30 pm',
        session: (
            <>
                <p className='text-center font-semibold'>CLOSING CEREMONY</p>
            </>
        ),
    },
];

const scheduleTwo = [
    {
        time: '14:00 pm - 17:00 pm',
        session: {
            session1: (
                <>
                    <p className='text-center font-semibold'>
                        HOW TO DESIGN DIGITAL GOVERNMENT SERVICES
                    </p>
                    <br />
                    <p className='text-center font-semibold'>Mr. Nabhonil Roy Chowdhury</p>
                    <p className='text-center'>
                        Govstack Global Coordinator, International Telecommunication Union (ITU)
                    </p>
                </>
            ),
            session2: (
                <>
                    <p className='text-center font-semibold'>SHOWCASING AI TOOLS</p>
                </>
            ),
        },
    },
];

export default function Agenda() {
    const t = useTranslations('Agenda');
    return (
        <main className='flex flex-col items-center justify-center'>
            <div className='w-full px-4 py-8 sm:w-3/4 sm:px-0 md:w-2/3'>
                <Text
                    variant='heading'
                    className='container mx-auto py-4 text-center text-primary'
                >
                    {t('agenda')}
                </Text>
                <Text variant='subheading' className='container mx-auto px-4 py-2 text-center'>
                    Towards a Smart Government
                </Text>
                <Text variant='body' className='container mx-auto px-4 py-2 text-center italic'>
                    Tuesday 19th November 2024 at CADT
                </Text>
                <div className='container mx-auto py-5 text-center'>
                    <a href='/Agenda - GovTech Conference 2024.pdf' download>
                        <Button className='text-white'>Download Agenda</Button>
                    </a>
                </div>
                <Text variant='body' className='container mx-auto py-4 '>
                    {t('date')}
                </Text>
                <div className='flex justify-items-center py-4'>
                    <table className='w-full border-collapse border border-slate-500 '>
                        <thead>
                            <tr className='h-14'>
                                <th className='w-44 border border-slate-600'>Time</th>
                                <th className='border border-slate-600'>Session</th>
                            </tr>
                        </thead>
                        <tbody>
                            {scheduleOne.map((item, index) => (
                                <tr
                                    key={index}
                                    className={`h-14 ${item.time === '' ? 'border-slate-700 ' : ''}`}
                                >
                                    <td
                                        className={`border text-center ${item.time === '' ? 'border-slate-700 ' : 'border-slate-700'}`}
                                    >
                                        {item.time}
                                    </td>
                                    <td className='border border-slate-700 p-2'>
                                        {item.session}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <Text variant='title' className='py-6 italic'>
                    The agenda is subject to change without prior notice.
                </Text>
                <Text variant='title' className='italic'>
                    Technical Workshops that run in parallel to the afternoon program.
                </Text>
                <div className='flex justify-items-center py-4'>
                    <table className='w-full table-fixed border-collapse border border-slate-500'>
                        <thead>
                            <tr className='h-14'>
                                <th className='w-44 border border-slate-600'>Time</th>
                                <th colSpan={2} className='border border-slate-600'>
                                    Session
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {scheduleTwo.map((item, index) => (
                                <tr
                                    key={index}
                                    className={`h-14 ${item.time === '' ? 'border-slate-700 ' : ''}`}
                                >
                                    <td
                                        className={`w-44 border text-center ${item.time === '' ? 'border-slate-700 ' : 'border-slate-700'}`}
                                    >
                                        {item.time}
                                    </td>
                                    <td className='w-1/2 border border-slate-700 p-2'>
                                        {item.session.session1}
                                    </td>
                                    <td className='w-1/2 border border-slate-700 p-2'>
                                        {item.session.session2}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    );
}
