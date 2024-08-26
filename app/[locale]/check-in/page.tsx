import HistoryCheckInCard from '@/components/history-check-in/history-check-in-card';
import { type CheckInHistoryItem, fetchCheckInHistory } from '@/controller/history.controller';

export default async function CheckIn() {
    const response = await fetchCheckInHistory();

    if (!response.ok) {
        // Handle error response
        return (
            <main className='container mx-auto px-4 py-10 lg:px-auto'>
                <div className='flex flex-col gap-6 lg:px-20'>
                    <p>Error fetching check-in history: {response.statusText}</p>
                </div>
            </main>
        );
    }

    const checkInHistory: CheckInHistoryItem[] = await response.json();

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
