import TextElement from '@/components/TextElement';
import SpeakerCardList from '@/components/speaker-card/speaker-card-list';

export default function SpeakerPage() {
    return (
        <main className='container flex flex-col items-center justify-between gap-8 p-4'>
            <TextElement variant='heading' className='mt-4 text-primary'>
                Our Speakers
            </TextElement>
            <TextElement variant='body'>
                The GovTech Conference will convene on September 17th, 2024 at CADT, Phnom Penh,
                Kingdom of Cambodia.
            </TextElement>
            <div>
                <SpeakerCardList />
            </div>
        </main>
    );
}
