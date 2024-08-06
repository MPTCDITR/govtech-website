import TextElement from '@/components/TextElement';
import AboutGovtech from '@/components/about-govtech/about-govtech';
import GoalSection from '@/components/goal-section/goal-section';
import HeroSectionHeader from '@/components/homepage/hero-section-header';
import SpeakerSection from '@/components/speaker-section/speaker-section';
import { SupportedBySection } from '@/components/supported-by/supported-by-section';

export const revalidate = 0;

export default function Home() {
    return (
        <main className='flex min-h-screen flex-col justify-between '>
            <HeroSectionHeader />
            <section aria-labelledby='about-govtech'>
                <AboutGovtech />
            </section>
            <section aria-labelledby='supported-by'>
                <SupportedBySection />
            </section>
            <section aria-labelledby='our-speakers'>
                <TextElement
                    variant='subheading'
                    id='our-speakers'
                    className='mb-4 text-center'
                >
                    Our Speakers
                </TextElement>
                <SpeakerSection />
            </section>
            <section aria-labelledby='our-goals'>
                <TextElement variant='subheading' id='our-goals' className='mb-4 text-center'>
                    Our Goals
                </TextElement>
                <GoalSection />
            </section>
        </main>
    );
}
