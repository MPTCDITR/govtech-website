import TextElement from '@/components/TextElement';
import ExhibitioncardList from '@/components/exhibition/exhibition-card-list';
import React from 'react';

const Exhibition = () => {
    return (
        <main className='container flex flex-col items-center justify-between gap-4'>
            <TextElement variant='heading' className='my-4 text-center text-primary'>
                Exhibition
            </TextElement>
            <TextElement variant='body' className='text-center'>
                The GovTech Conference will convene on Tuesday 19th November 2024 at CADT, Phnom
                Penh, Kingdom of Cambodia.
            </TextElement>
            <ExhibitioncardList />
        </main>
    );
};

export default Exhibition;
