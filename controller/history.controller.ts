import { db } from '@/db';
import { checkIns } from '@/db/schema';
import { validateRequest } from '@/lib/auth';
import { desc, eq } from 'drizzle-orm';
import { NextResponse } from 'next/server';

export interface CheckInHistoryItem {
    id: string;
    userId: string;
    roomName: string;
    checkInTime: Date;
}

export async function fetchCheckInHistory(): Promise<NextResponse> {
    try {
        const { user: authenticatedUser, session } = await validateRequest();
        if (!authenticatedUser || !session) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const checkInHistory = await db.query.checkIns.findMany({
            where: eq(checkIns.userId, authenticatedUser.id),
            orderBy: [desc(checkIns.checkInTime)],
        });

        if (checkInHistory.length === 0) {
            return NextResponse.json([]);
        }

        return NextResponse.json(checkInHistory);
    } catch (error) {
        console.error('Error retrieving check-in history:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
