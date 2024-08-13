import SpeakerCardList from '@/components/speaker-card/speaker-card-list';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function SpeakerSection() {
    return (
        <div className='mt-8 flex justify-center'>
            <div className='w-full max-w-7xl px-4'>
                <div className='text-center mb-15'>
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
