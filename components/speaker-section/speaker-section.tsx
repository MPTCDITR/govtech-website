import SpeakerCard from '@/components/speaker-card/speaker-card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Text from '../ui/text';

export default function SpeakerSection() {
    return (
        <div className='mt-8 flex justify-center'>
            <div className='w-full max-w-7xl px-4'>
                <div className='text-center'>
                    <Text variant='subheading' className='mt-5 mb-4 text-center text-primary'>
                        Speaker Section
                    </Text>
                    <p className='mb-4 text-lg'>List of Speakers</p>
                    <div className='mt-5 grid grid-cols-1 gap-x-0 gap-y-9 md:grid-cols-2 lg:grid-cols-3'>
                        <div className='speaker-card-container flex items-center justify-center'>
                            <SpeakerCard />
                        </div>
                        <div className='speaker-card-container flex items-center justify-center'>
                            <SpeakerCard />
                        </div>
                        <div className='speaker-card-container flex items-center justify-center'>
                            <SpeakerCard />
                        </div>
                        <div className='speaker-card-container flex items-center justify-center'>
                            <SpeakerCard />
                        </div>
                        <div className='speaker-card-container flex items-center justify-center'>
                            <SpeakerCard />
                        </div>
                        <div className='speaker-card-container flex items-center justify-center'>
                            <SpeakerCard />
                        </div>
                    </div>
                    <div className='mt-8 mb-12'>
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
