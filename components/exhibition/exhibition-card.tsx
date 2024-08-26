import { CardDescription, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import React from 'react';
interface ExhibitionProps {
    title: string;
    description: string;
    imageUrl: string;
}

const ExhibitionCard = ({ title, description, imageUrl }: ExhibitionProps) => {
    return (
        <div className='border-[3px] rounded-[1rem] border-blue-700 '>
            <Image
                src={imageUrl}
                alt={title}
                fill
                sizes='(max-width: 100px) 100vw, (max-width: 1200px) 50vw, 33vw'
                style={{ objectFit: 'cover' }}
                className='h-48'
            />
            <div className='p-4'>
                <CardTitle className='mt-2 mb-4 font-bold text-gray-900 text-xl tracking-tight dark:text-white'>
                    {title}
                </CardTitle>
                <CardDescription className='line-clamp-3 font-normal text-gray-700 dark:text-gray-400'>
                    {description}
                </CardDescription>
            </div>
        </div>
    );
};

export default ExhibitionCard;
