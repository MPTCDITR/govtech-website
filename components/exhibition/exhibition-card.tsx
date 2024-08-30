import { Card, CardDescription, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import React from 'react';
import { AspectRatio } from '../ui/aspect-ratio';
import Text from '../ui/text';
interface ExhibitionProps {
    title: string;
    description: string;
    imageUrl: string;
}

const ExhibitionCard = ({ title, description, imageUrl }: ExhibitionProps) => {
    return (
        <div className='flex flex-col rounded-[1rem] border-2 border-slate-300'>
            <AspectRatio ratio={1 / 1}>
                <Image
                    src={imageUrl}
                    alt={title}
                    fill
                    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                    style={{ objectFit: 'cover' }}
                    className='rounded-t-[0.8rem]'
                />
            </AspectRatio>
            <div className="p-3 ">
                <Text variant='title' className='my-2 grow text-bold'>
                    {title}
                </Text>
                <Text variant='small' className='line-clamp-3'>
                    {description}
                </Text>
            </div>
        </div>
    );
};

export default ExhibitionCard;
