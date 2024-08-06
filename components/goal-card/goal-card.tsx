import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface GoalCardProps {
    title: string;
    description: string;
}

const GoalCard = ({ title, description }: GoalCardProps) => (
    <Card className='flex h-full flex-col items-start gap-2 rounded-lg border bg-card p-5 text-card-foreground'>
        <CardTitle className='text-lg text-primary'>{title}</CardTitle>
        <CardDescription className='line-clamp-4 text-pretty'>{description}</CardDescription>
    </Card>
);

export default GoalCard;
