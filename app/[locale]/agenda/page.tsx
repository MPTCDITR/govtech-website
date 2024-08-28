import { Button } from '@/components/ui/button';
import { useTranslations } from 'next-intl';
import Text from '../../../components/ui/text';

const schedule = [
    {
        time: '07:30-08:30',
        session: (
            <>
                <p className='text-center'> Arrival and Registration</p>
            </>
        ),
    },
    {
        time: '08:30-09:30',
        session: (
            <>
                <p className='text-center'> Opening Ceremony</p>
            </>
        ),
    },
    {
        time: '',
        session: (
            <>
                <strong>Main Stage</strong> <br />
                Presentation WoG
            </>
        ),
    },
    {
        time: '',
        session: (
            <>
                <strong>Main Stage</strong> <br />
                Presentation WoG
            </>
        ),
    },
    {
        time: '09:30-11:00',
        session: (
            <>
                <strong>Room1</strong>
                <br /> There are many variations of passages of Lorem Ipsum available, but the
                majority have suffered alteration in some form, by injected humour, or
                randomised words which don't look even slightly believable.
            </>
        ),
    },
    {
        time: '',
        session: (
            <>
                <strong>Room2</strong>
                <br />
                There are many variations of passages of Lorem Ipsum available, but the majority
                have suffered alteration in some form, by injected humour, or randomised words
                which don't look even slightly believable.
            </>
        ),
    },
    {
        time: '',
        session: (
            <>
                <strong>Room3</strong> <br /> There are many variations of passages of Lorem
                Ipsum available, but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even slightly believable.
            </>
        ),
    },
    {
        time: '12:00-13:00',
        session: (
            <>
                <p className='text-center'> Lunch Break</p>
            </>
        ),
    },
    {
        time: '',
        session: (
            <>
                <strong>Main Stage</strong> <br />
                Presentation WoG
            </>
        ),
    },
    {
        time: '',
        session: (
            <>
                <strong>Main Stage</strong>
                <br /> Presentation WoG
            </>
        ),
    },
    {
        time: '14:30-15:00',
        session: (
            <>
                <strong>Room2</strong> <br />
                There are many variations of passages of Lorem Ipsum available, but the majority
                have suffered alteration in some form, by injected humour, or randomised words
                which don't look even slightly believable.
            </>
        ),
    },
    {
        time: '',
        session: (
            <>
                <strong>Room3</strong>
                <br /> There are many variations of passages of Lorem Ipsum available, but the
                majority have suffered alteration in some form, by injected humour, or
                randomised words which don't look even slightly believable.
            </>
        ),
    },
    {
        time: '',
        session: (
            <>
                <strong>Main Stage</strong> <br />
                Presentation WoG
            </>
        ),
    },
    {
        time: '',
        session: (
            <>
                <strong>Main Stage</strong> <br />
                Presentation WoG
            </>
        ),
    },
    {
        time: '15:30-17:00',
        session: (
            <>
                <strong>Room2</strong> <br /> There are many variations of passages of Lorem
                Ipsum available, but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even slightly believable.
            </>
        ),
    },
    {
        time: '',
        session: (
            <>
                <strong>Room3</strong> <br /> There are many variations of passages of Lorem
                Ipsum available, but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even slightly believable.
            </>
        ),
    },
    {
        time: '17:00-18:00',
        session: (
            <>
                <p className='text-center'>Closing Ceremony</p>
            </>
        ),
    },
];
export default function Agenda() {
    const t = useTranslations('Agenda');
    return (
        <main className='flex flex-col items-center justify-between gap-4 p-4'>
            <div className='w-full sm:w-3/4 md:w-2/3'>
                <Text variant='subheading' className='text-center font-sans text-[#0F45A8]'>
                    {t('agenda')}
                </Text>
                <Text variant='body' className='mt-8 w-full text-center font-sans'>
                    It was popularised in the 1960s with the release of Letraset sheets
                    containing Lorem Ipsum passages, and more recently with desktop publishing
                    software like Aldus PageMaker including versions of Lorem Ipsum.
                </Text>
                <Text variant='body' className=' mt-8 font-sans'>
                    {t('date')}
                </Text>
                <div className='mt-8 flex justify-items-center'>
                    <table className='border-collapse border border-slate-500'>
                        <thead>
                            <tr className='h-14'>
                                <th className='w-28 border border-slate-600'>Time</th>
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
            <a href='/NT.pdf'>
                <Button className='mt-5 mb-5 text-white'>Download Agenda</Button>
            </a>
        </main>
    );
}
