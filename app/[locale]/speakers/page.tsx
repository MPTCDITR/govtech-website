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
                    <div>
                        <SpeakerCardList />
                    </div>
                </div>
            </div>
        </main>
    );
}
