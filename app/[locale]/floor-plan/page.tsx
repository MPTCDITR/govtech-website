import TextElement from '@/components/TextElement';
import { useTranslations } from 'next-intl';

export default function FloorPlan() {
    const t = useTranslations('FloorPlan');
    return (
        <main className='container flex flex-col items-center justify-between gap-8'>
            <div className='w-full'>
                <TextElement
                    variant='heading'
                    className='container mx-auto py-4 text-center text-primary'
                >
                    {t('title')}
                </TextElement>
                <TextElement variant='body' className='container mx-auto px-4 py-4 text-center'>
                    The GovTech Conference will convene on September 17th, 2024 at CADT, Phnom
                    Penh, Kingdom of Cambodia.
                </TextElement>
                <img
                    key='govtech-2024-floor-plan'
                    src='/dgf-floor-plan.jpg'
                    alt='govtech-2024-floor-plan'
                    className='m-4'
                />
            </div>
        </main>
    );
}
