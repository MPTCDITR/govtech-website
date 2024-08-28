import TextElement from '@/components/TextElement';
import { useTranslations } from 'next-intl';

export default function FloorPlan() {
    const t = useTranslations('FloorPlan');
    return (
        <main className='container flex flex-col items-center justify-between gap-8 p-4'>
            <TextElement variant='heading' className='mt-4 text-primary'>
                {t('title')}
            </TextElement>
            <TextElement variant='body'>
                The GovTech Conference will convene on September 17th, 2024 at CADT, Phnom Penh,
                Kingdom of Cambodia.
            </TextElement>
            <img
                key='govtech-2024-floor-plan'
                src='/dgf-floor-plan.jpg'
                alt='govtech-2024-floor-plan'
                className='m-4'
            />
        </main>
    );
}
