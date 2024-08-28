import TextElement from '@/components/TextElement';

export default function FloorPlan() {
    return (
        <main className='container flex flex-col items-center justify-between gap-8'>
            <TextElement variant='heading' className='mt-4 text-primary'>
                Floor Plan
            </TextElement>
            <TextElement variant='body'>
                The GovTech Conference will convene on September 17th, 2024 at CADT, Phnom Penh,
                Kingdom of Cambodia.
            </TextElement>
            <img
                key='govtech-2024-floor-plan'
                src='/dgf-floor-plan.jpg'
                alt='govtech-2024-floor-plan'
            />
        </main>
    );
}
