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
        <div className='flex flex-col rounded-md border-4 border-primary p-4'>
            <AspectRatio ratio={1 / 1}>
                <Image
                    src={imageUrl}
                    alt={title}
                    fill
                    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                    style={{ objectFit: 'cover' }}
                    className='rounded-sm'
                />
            </AspectRatio>
            <Text variant='smallheading' className='my-2 grow text-base'>
                {title}
            </Text>
            <Text variant='body' className='line-clamp-3 '>
                {description}
            </Text>
        </div>
    );
};

export default ExhibitionCard;
