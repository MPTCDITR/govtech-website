import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface SpeakerProps {
    name: string;
    bio: string;
    imageUrl: string;
}

export default function SpeakerCard({ name, bio, imageUrl }: SpeakerProps) {
    return (
        <Card className='rounded-[20px] border-[5px] border-blue-700 p-4'>
            <figure className='h-[20rem]'>
                <img
                    className='h-full w-full rounded-[20px] object-cover'
                    src={imageUrl}
                    alt={name}
                />
            </figure>
            <CardTitle className=' mt-2 mb-4 '>{name}</CardTitle>
            <CardDescription className=' line-clamp-3 '>{bio}</CardDescription>
        </Card>
    );
}
