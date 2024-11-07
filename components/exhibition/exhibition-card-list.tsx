import React from 'react';
import ExhibitionCard from './exhibition-card';
const Image = [
    {
        title: 'Title 1',
        description:
            'The generated Lorem Ipsum is therefore always free from repetition, injected humour',
        imageUrl: '/dgc.png', // Update with correct path
    },
    {
        title: 'Title 2',
        description:
            'The generated Lorem Ipsum is therefore always free from repetition, injected humour',
        imageUrl: '/cadt.webp', // Update with correct path
    },
    // Add more items as needed
];

const ExhibitioncardList = () => {
    return (
        <div className=' my-4 grid list-none auto-rows-fr grid-cols-1 place-items-center gap-8 md:grid-cols-3 lg:grid-cols-4 '>
            {Image.map((item) => (
                <ExhibitionCard
                    key={item.title}
                    title={item.title}
                    description={item.description}
                    imageUrl={item.imageUrl}
                />
            ))}
        </div>
    );
};

export default ExhibitioncardList;
