import SpeakerCardList from '@/components/speaker-card/speaker-card-list';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function SpeakerSection() {
    return (
        <div className='mt-8 flex justify-center'>
            <div className='w-full max-w-7xl px-4'>
                <div className='text-center mb-20'>
                    <h1 className='mb-4 font-bold text-4xl'>Speaker Section</h1>
                    <p className='mb-4 text-lg'>List of Speakers</p>
                    <div>
                            <SpeakerCardList />

                            <Link href='/speakers'>
                            <Button className='bg-primary text-white hover:bg-sky-500'>
                                <b>View all Speakers</b>
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
