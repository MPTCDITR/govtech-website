import TextElement from '@/components/TextElement';
import ExhibitioncardList from '@/components/exhibition/exhibition-card-list';
import React from 'react';
import Text from '../../../components/ui/text';

const Exhibition = () => {
    return (
        <main className='container mb-8 p-8'>
            <TextElement variant='heading' className='mt-4 mb-10 text-primary text-center'>
                Exhibition
            </TextElement>
            <TextElement variant='body' className='mt-4 mb-10 text-center'>
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
