import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Text from '../ui/text';
import Image from 'next/image';
import { AspectRatio } from '../ui/aspect-ratio';
interface SpeakerProps {
    name: string;
    bio: string;
    imageUrl: string;
}

export default function SpeakerCard({ name, bio, imageUrl }: SpeakerProps) {
    return (
        <div className='rounded-[20px] border-[5px] border-blue-700 p-4'>
            <AspectRatio ratio={1 / 1}>
                <Image
                    src={imageUrl}
                    alt={name}
                    fill
                    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                    style={{ objectFit: 'cover' }}
                    className='rounded-[0.8rem]'
                />
            </AspectRatio>
            <Text variant='title' className='my-2 grow text-bold'>
                    {name}
                </Text>
                <Text variant='small' className='line-clamp-3'>
                    {bio}
                </Text>
        </div>
    );
}