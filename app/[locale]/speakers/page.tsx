import TextElement from '@/components/TextElement';
import SpeakerCardList from '@/components/speaker-card/speaker-card-list';
import { useTranslations } from 'next-intl';

export default function SpeakerPage() {
    const t = useTranslations('Speakers');
    return (
        <main className='container flex flex-col items-center justify-between gap-8'>
            <div className='w-full'>
                <div>
                    <TextElement
                        variant='heading'
                        className='container mx-auto py-4 text-center text-primary'
                    >
                        {t('title')}
                    </TextElement>
                    <TextElement
                        variant='body'
                        className='container mx-auto px-4 py-4 text-center '
                    >
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
