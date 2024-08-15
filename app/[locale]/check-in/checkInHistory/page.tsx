'use client';

import HistoryCheckInCard from '@/components/history-check-in/history-check-in-card';
import React, { useEffect, useState } from 'react';

export default function CheckInHistory() {
    const [history, setHistory] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchCheckInHistory = async () => {
            try {
                const response = await fetch('/api/check-in-history');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setHistory(data.history);
                console.log('Fetched check-in history successfully', data.history);
            } catch (error) {
                console.error('There was a problem with the fetch operation:', error);
            }
        };

        fetchCheckInHistory();
    }, []);

    return (
        <ul className='flex flex-col gap-4'>
            {history.map((CheckInHistory, index) => (
                <HistoryCheckInCard key={index} checkIn={CheckInHistory} />
            ))}
        </ul>
    );
}
