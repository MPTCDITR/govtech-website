import { Button } from '@/components/ui/button';
import { session } from '@/db/schema';
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
                <p className='text-center font-semibold'>H.E. Dr. Seng Sopheap</p>
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
                <p className='text-center font-semibold'>H.E. Chea Sereyvath</p>
                <p className='text-center'>Secretary General, Digital Government Committee</p>
                <br />
                <p className='text-center'>Panel Discussion with</p>
                <p className='text-center font-semibold'>H.E. Lieutenant Oukchay Panhara</p>
                <p className='text-center'>Deputy Director, Ministry of Interior</p>
                <br />
                <p className='text-center font-semibold'>H.E. Dr. Taing Nguonly</p>
                <p className='text-center'>Deputy Secretary General, Techo Startup Center</p>
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
                <p className='text-center'>Keynote Speech by</p>
                <p className='text-center'>TBC</p>
                <br />
                <p className='text-center'>Panel Discussion with</p>
                <br />
                <p className='text-center font-semibold'>Dr. Ly Rottana</p>
                <p className='text-center'>
                    R&D Director, Institute of Digital Research and Innovation (IDRI)
                </p>
                <br />
                <p className='text-center font-semibold'>Moderator: Mr. Taing Bunhong</p>
                <p className='text-center'>
                    Head of Department, Digital Government Committee (DGC)
                </p>
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
                <p className='text-center font-semibold'>USING DATA FOR SMART GOVERNMENT</p>
                <br />
                <p className='text-center'>Keynote Speech by</p>
                <p className='text-center'>NIA Korea</p>
                <br />
                <p className='text-center'>Panel Discussioin with</p>
                <br />
                <p className='text-center font-semibold'>NIA Korea</p>
                <br />
                <p className='text-center font-semibold'>Mr. Thy Try</p>
                <p className='text-center'>
                    Executive Director, Open Development Cambodia (ODC)
                </p>
                <br />
                <p className='text-center font-semibold'>Mr. Chea Linna</p>
                <p className='text-center'>
                    Security Specialist, Ministry of Post and Telecommunications
                </p>
                <br />
                <p className='text-center font-semibold'>Moderator: Mrs. Nguon Somaly</p>
                <p className='text-center'>
                    Director General, Institute of Digital Governance (IDG)
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
                <p className='text-center'>Head of Country Implementations of MOSIP</p>
                <br />
                <p className='text-center'>Panel Discussion with</p>
                <br />
                <p className='text-center font-semibold'>Mr. Krishnan Rajagopalan</p>
                <p className='text-center'>Head of Country Implementations of MOSIP</p>
                <br />
                <p className='text-center'>National Bank of Cambodia</p>
                <br />
                <p className='text-center font-semibold'>Mr. Tit Darayong</p>
                <p className='text-center'>Deputy Director of the Techo Startup Center</p>
                <br />
                <p className='text-center font-semibold'>Moderator:Mr. Chanty Sothy</p>
                <p className='text-center'>Advisor, Digital Government Committee (DGC)</p>
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
                    <p className='text-center font-semibold text-base lg:text-2xl'>
                        HOW TO DESIGN DIGITAL GOVERNMENT SERVICES
                    </p>
                    <br />
                    <p className='text-center'>Internationl Guest</p>
                </>
            ),
            session2: (
                <>
                    <p className='text-center font-semibold text-base lg:text-2xl'>
                        SHOWCASING AI TOOLS
                    </p>
                </>
            ),
        },
    },
];

export default function Agenda() {
    const t = useTranslations('Agenda');
    return (
        <main className='flex flex-col items-center justify-center'>
            <div className='w-full sm:w-3/4 md:w-2/3'>
                <Text
                    variant='subheading'
                    className='container mx-auto py-4 text-center text-primary'
                >
                    {t('agenda')}
                </Text>
                <Text
                    variant='smallheading'
                    className='container mx-auto px-4 py-2 text-center '
                >
                    GOVTECH CONFERENCE 2024
                </Text>
                <Text
                    variant='smallheading'
                    className='container mx-auto px-4 py-2 text-center '
                >
                    Towards a Smart Digital Government
                </Text>
                <Text variant='body' className='container mx-auto px-4 py-2 text-center '>
                    Tuesday 19th November 2024 at CADT
                </Text>
                <div className='container mx-auto py-5 text-center'>
                    <a href='/NT.pdf'>
                        <Button className='text-white'>Download Agenda</Button>
                    </a>
                </div>
                <Text variant='body' className='container mx-auto px-5 py-4 '>
                    {t('date')}
                </Text>
                <div className='flex justify-items-center py-4 '>
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
