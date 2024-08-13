import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface SpeakerProps {
    name: string;
    bio: string;
    imageUrl: string;
}

export default function SpeakerCard({ name, bio, imageUrl }: SpeakerProps) {
    return (
        <Card className='border border-gray-200'>
            <CardHeader className='max-w-full p-4'>
                <img
                    className='mb-3 h-auto w-full rounded-lg'
                    src={imageUrl}
                    alt={name}
                    style={{ maxWidth: '100%' }}
                />
                <CardTitle className='mt-2 mb-4 font-bold text-gray-900 text-xl tracking-tight dark:text-white'>
                    {name}
                </CardTitle>
                <CardDescription className='font-normal text-gray-700 dark:text-gray-400'>
                    {bio}
                </CardDescription>
            </CardHeader>
        </Card>
    );
}
