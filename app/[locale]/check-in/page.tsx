import HistoryCheckInCard from '@/components/history-check-in/history-check-in-card';
import { Button } from '@/components/ui/button';
import CheckInHistory from './checkInHistory/page';

export default function CheckIn() {
    return (
        <main className='container mx-auto px-4 py-10 lg:px-auto'>
            <div className='flex flex-col gap-6 lg:px-20'>
                <div className='flex flex-col items-center gap-4'>
                    <Button className='w-3/4 text-white'>Check In</Button>
                </div>
                <CheckInHistory />
            </div>
        </main>
    );
}
