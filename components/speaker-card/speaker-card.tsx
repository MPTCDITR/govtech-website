import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import React from 'react';
import { AspectRatio } from '../ui/aspect-ratio';
interface SpeakerProps {
    title: string;
    bio: string;
    imageUrl: string;
}

export default function SpeakerCard({ title, bio, imageUrl }: SpeakerProps) {
    return (
        <Card className='rounded-[20px] border-[5px] border-blue-700 p-4'>
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
            <CardTitle className='mt-2 mb-4 font-bold text-gray-900 text-xl tracking-tight dark:text-white'>
                {title}
            </CardTitle>
            <CardDescription className='font-normal text-gray-700 dark:text-gray-400'>
                {bio}
            </CardDescription>
        </Card>
    );
}
