import { Button } from '@/components/ui/button';
import { useTranslations } from 'next-intl';
import Text from '../../../components/ui/text';

const schedule = [
    {
        time: '07:30 am - 08:30 am',
        session: (
            <>
                <p className='text-center'> Arrival and Registration</p>
            </>
        ),
    },
    {
        time: '08:30 am - 08:35 am',
        session: (
            <>
                <p className='text-center'> National Anthem</p>
            </>
        ),
    },
    {
        time: '08:35 am - 09:30 am',
        session: (
            <div>
                <p> Welcome Remarks</p>
                <strong> H.E. Dr. Seng Sopheap</strong>
                <p>President of CADT</p>
                <hr className='mx-auto h-1 w-full border-slate-500' />
                <p> Welcome Remarks</p>
                <strong> H.E. Stefan Messerer</strong>
                <p>Ambassador of the Federal Republic of Germany to the Kingdom of Cambodia</p>
                <hr className='mx-auto h-1 w-full border-slate-500' />
                <p> Opening Remarks</p>
                <strong> H.E. Dr. Chea Vandeth</strong>
                <p>
                    {' '}
                    Minister of Ministry of Post and Telecommunications and Chair of Digital
                    Government Committee
                </p>
            </div>
        ),
    },
    {
        time: '09:30 am - 10:45 am',
        session: (
            <div>
                <p>
                    Keynote: <strong>"Whole of Government Approach"</strong>
                </p>
                <p>Speaker:</p>
                <hr className='mx-auto h-1 w-full border-slate-500' />
                <p>
                    {' '}
                    Panel Discussion: <strong>"Whole of Government Approach"</strong>
                </p>
                <p>
                    {' '}
                    Moderator: <strong>Mr. Chanty Sothy</strong>, DGC
                </p>
                <p>
                    {' '}
                    Panelists: <strong>Mr. Taing Nguonly</strong>, MEF
                </p>
            </div>
        ),
    },
    {
        time: '10:45 am - 11:15 am',
        session: (
            <>
                <p> Coffee Break</p>
            </>
        ),
    },
    {
        time: '11:15 am - 12:30 pm',
        session: (
            <div>
                <p>
                    {' '}
                    Presentation: <strong>"AI Governance"</strong>
                </p>
                <p> Speaker:</p>
                <hr className='mx-auto h-1 w-full border-slate-500' />
                <p>
                    {' '}
                    Panel Discussion: <strong>"AI Governance"</strong>
                </p>
                <p>
                    {' '}
                    Moderator: <strong>Mr. Taing Bunhong</strong>, DGC
                </p>
                <p>
                    {' '}
                    Panelists: <strong>Ms. Ly Tathna</strong>, CADT
                </p>
            </div>
        ),
    },
    {
        time: '12:30 pm - 02:30 pm',
        session: (
            <>
                <p> Networking Lunch</p>
                <p> Booth Visit</p>
            </>
        ),
    },
    {
        time: '02:00 pm - 03:15 pm',
        session: (
            <div>
                <p>
                    {' '}
                    Keynote: <strong>"Data for Policy"</strong>
                </p>
                <p> Speaker:</p>
                <hr className='mx-auto h-1 w-full border-slate-500' />
                <p>
                    {' '}
                    Panel Discussion: <strong>"Data for Policy"</strong>
                </p>
                <p>
                    {' '}
                    Moderator: <strong>Mr. Jonas Herzing</strong>, GIZ
                </p>
                <p> Panelists:</p>
            </div>
        ),
    },
    {
        time: '03:15 pm - 03:45 pm',
        session: (
            <>
                <p> Coffee Break</p>
            </>
        ),
    },
    {
        time: '03:45 pm - 05:00 pm',
        session: (
            <>
                <div>
                    <p>
                        {' '}
                        Keynote: <strong>"Digital Public Infrastructure"</strong>
                    </p>
                    <p> Speaker:</p>
                    <hr className='mx-auto h-1 w-full border-slate-500' />
                    <p>
                        {' '}
                        Panel Discussion: <strong>"Digital Public Infrastructure"</strong>
                    </p>
                    <p>
                        {' '}
                        Moderator: <strong>Mr. Pisal Chanty</strong>, GIZ
                    </p>
                    <p>
                        {' '}
                        Panelists: <strong>Ms. Ly Tathna</strong>, CADT
                    </p>
                </div>
            </>
        ),
    },
    {
        time: '5:00 pm - 5:30 pm',
        session: (
            <>
                <p> Closing Remarks</p>
                <strong> Mr. Jonas Herzing</strong>
                <p> Senior Advisor, Digital Tranformation Center, GIZ</p>
                <hr className='mx-auto h-1 w-full border-slate-500' />
                <strong> H.E. Thong Sopymakara</strong>
                <p> Deputy General Secretary, Secretariate of Digital Government Committee</p>
            </>
        ),
    },
];

export default function Agenda() {
    const t = useTranslations('Agenda');
    return (
        <main className='flex flex-col items-center justify-between'>
            <div className='w-full sm:w-3/4 md:w-2/3'>
                <Text
                    variant='heading'
                    className='container mx-auto py-4 text-center text-primary'
                >
                    {t('agenda')}
                </Text>
                <Text variant='body' className='container mx-auto px-4 py-4 text-center '>
                    Digital Governance and Tectnology Promotion Conference
                </Text>
                <Text variant='body' className='container mx-auto px-4 py-4 text-center '>
                    GovTech Conference
                </Text>
                <div className='container mx-auto py-5 text-center'>
                    <a href='/NT.pdf'>
                        <Button className='text-white'>Download Agenda</Button>
                    </a>
                </div>
                <Text variant='body' className='container mx-auto px-5 py-4 '>
                    {t('date')}
                </Text>
                <div className='flex justify-items-center py-4'>
                    <table className='border-collapse border border-slate-500'>
                        <thead>
                            <tr className='h-14'>
                                <th className='w-44 border border-slate-600'>Time</th>
                                <th className='border border-slate-600'>Session</th>
                            </tr>
                        </thead>
                        <tbody>
                            {schedule.map((item, index) => (
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
            </div>
        </main>
    );
}
