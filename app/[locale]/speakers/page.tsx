import TextElement from '@/components/TextElement';
import SpeakerCardList from '@/components/speaker-card/speaker-card-list';

export default function SpeakerPage() {
    return (
        <main className='container mt-4 mb-8 flex justify-center'>
            <div className='w-full'>
                <div>
                    <TextElement
                        variant='heading'
                        className='mt-4 mb-10 text-center text-primary'
                    >
                        Our Speakers
                    </TextElement>
                    <TextElement variant='body' className='mt-4 mb-10 text-center '>
                        The GovTech Conference will convene on September 17th, 2024 at CADT,
                        Phnom Penh, Kingdom of Cambodia.
                    </TextElement>
                    <div>
                        <SpeakerCardList />
                    </div>
                </div>
            </div>
        </main>
    );
}
