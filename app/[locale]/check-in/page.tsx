import HistoryCheckInCard from '@/components/history-check-in/history-check-in-card';
import { fetchCheckInHistory } from '@/controller/history.controller';
import { validateRequest } from '@/lib/auth';
import { redirect } from 'next/navigation';

export default async function CheckIn() {
    const { user } = await validateRequest();

    if (!user) {
        redirect('/');
    }

    const checkInHistory = await fetchCheckInHistory(user.id);
    return (
        <main className='container mx-auto px-4 py-10 lg:px-auto'>
            <div className='flex flex-col gap-6 lg:px-20'>
                <ul className='flex flex-col gap-4'>
                    {checkInHistory.map((CheckInHistory, index) => (
                        <HistoryCheckInCard key={index} checkIn={CheckInHistory} />
                    ))}
                </ul>
            </div>
        </main>
    );
}
