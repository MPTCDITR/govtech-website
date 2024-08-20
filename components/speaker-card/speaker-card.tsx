import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface SpeakerProps {
    name: string;
    bio: string;
    imageUrl: string;
}

export default function SpeakerCard({ name, bio, imageUrl }: SpeakerProps) {
    return (
        <Card className='mb-4 rounded-[35px] border-[6px] border-blue-700'>
            <CardHeader className='max-w-full p-4'>
                <img
                    className='mb-3 h-[23rem] rounded-[20px] sm:h-[40rem] md:h-[25rem] '
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
