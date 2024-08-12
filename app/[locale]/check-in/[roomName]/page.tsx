'use client';

import { Button } from '@/components/ui/button';
import { useParams, useRouter } from 'next/navigation';
import { useState } from 'react';

//TO DO: Handle the error with sooner
export default function CheckInPage() {
    const params = useParams();
    const router = useRouter();
    const [isChecking, setIsChecking] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const roomName = params.roomName as string;

    const handleCheckIn = async () => {
        setIsChecking(true);
        setError(null);

        try {
            const response = await fetch('/api/check-in', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ roomName }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Failed to check in');
            }

            const data = await response.json();
            alert(`Check-in successful! Check-in ID: ${data.checkInId}`);
            router.push('/check-in'); // Redirect to the check-in history page
        } catch (error) {
            if (error instanceof Error) {
                setError(error.message);
            } else {
                setError('An unexpected error occurred');
            }
        } finally {
            setIsChecking(false);
        }
    };

    return (
        <div className='container mx-auto px-4 py-10'>
            <h1 className='mb-4 font-bold text-2xl'>Check-in to {roomName}</h1>
            <Button onClick={handleCheckIn} disabled={isChecking}>
                {isChecking ? 'Checking in...' : 'Confirm Check-in'}
            </Button>
            {error && <p className='mt-4 text-red-500'>{error}</p>}
        </div>
    );
}
