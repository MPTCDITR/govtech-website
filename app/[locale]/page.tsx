import TextElement from '@/components/TextElement';
import AboutGovtech from '@/components/about-govtech/about-govtech';
import GoalSection from '@/components/goal-section/goal-section';
import HeroSectionHeader from '@/components/homepage/hero-section-header';
import SpeakerCardList from '@/components/speaker-card/speaker-card-list';
import { SupportedBySection } from '@/components/supported-by/supported-by-section';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const revalidate = 0;

export default function Home() {
    return (
        <main className='flex min-h-screen flex-col justify-between gap-16 pb-16'>
            <HeroSectionHeader />
            <section aria-labelledby='about-govtech'>
                <AboutGovtech />
            </section>
            <section aria-labelledby='supported-by' className='bg-primary p-8'>
                <TextElement
                    variant='subheading'
                    id='supported-by'
                    className='mb-4 text-center text-white'
                >
                    Supported By
                </TextElement>
                <SupportedBySection />
            </section>
            <section aria-labelledby='our-speakers'>
                <TextElement
                    variant='subheading'
                    id='our-speakers'
                    className='mb-5 text-center text-primary'
                >
                    Our Speakers
                </TextElement>
                <SpeakerCardList />
                <div className='mt-3 flex justify-center'>
                    <Link href='/speakers'>
                        <Button className='w-48 bg-primary text-white'>
                            View All Speakers
                        </Button>
                    </Link>
                </div>
            </section>
            <section aria-labelledby='our-goals'>
                <TextElement
                    variant='subheading'
                    id='our-goals'
                    className='mb-4 text-center text-primary'
                >
                    Our Goals
                </TextElement>
                <GoalSection />
            </section>
        </main>
    );
}
