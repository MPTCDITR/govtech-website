import TextElement from '@/components/TextElement';
import ExhibitioncardList from '@/components/exhibition/exhibition-card-list';
import React from 'react';

const Exhibition = () => {
    return (
        <main className='container'>
            <TextElement variant='heading' className='my-4 text-center text-primary'>
                Exhibition
            </TextElement>
            <TextElement variant='body' className='text-center'>
                The GovTech Conference will convene on September 17th, 2024 at CADT, Phnom Penh,
                Kingdom of Cambodia.
            </TextElement>
            <div className=''>
                <div className='mt-8'>
                    <ExhibitioncardList />
                </div>
            </div>
        </main>
    );
};

export default Exhibition;
