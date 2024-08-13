import SpeakerCardList from '@/components/speaker-card/speaker-card-list';
import TextElement from '@/components/TextElement';

export default function SpeakerPage() {
    return (
        <main className='mt-4 mb-20 flex justify-center'>
            <div className='w-full max-w-7xl px-4'>
                <div className='text-center'>
                    <TextElement
                        variant='heading'
                        className='mt-4 mb-10 text-primary'
                    >
                        Our Speakers
                    </TextElement>
                    <div>
                        <SpeakerCardList />
                    </div>
                </div>
            </div>
        </main>
    );
}
