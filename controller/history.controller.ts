import { db } from '@/db';
import { checkIns } from '@/db/schema';
import { eq } from 'drizzle-orm';
import { desc } from 'drizzle-orm';

export async function fetchCheckInHistory(userId: string): Promise<any[]> {
    const checkInHistory = await db.query.checkIns.findMany({
        where: eq(checkIns.userId, userId),
        orderBy: [desc(checkIns.checkInTime)],
    });

    if (checkInHistory.length === 0) {
        throw new Error('No check-in history found.');
    }

    return checkInHistory;
}
