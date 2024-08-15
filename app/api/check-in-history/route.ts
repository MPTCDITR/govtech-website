import { db } from '@/db';
import { checkIns, user } from '@/db/schema';
import { validateRequest } from '@/lib/auth';
import { eq } from 'drizzle-orm';
import { desc } from 'drizzle-orm';
import { type NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest): Promise<NextResponse> {
    try {
        // Validate the user's session
        const { user: authenticatedUser, session } = await validateRequest();
        if (!authenticatedUser || !session) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        // Fetch check-in history for the authenticated user
        const checkInHistory = await db.query.checkIns.findMany({
            where: eq(checkIns.userId, authenticatedUser.id),
            orderBy: [desc(checkIns.checkInTime)],
        });

        if (checkInHistory.length === 0) {
            return NextResponse.json(
                { message: 'No check-in history found.' },
                { status: 404 },
            );
        }

        return NextResponse.json(
            { message: 'Check-in history retrieved successfully.', history: checkInHistory },
            { status: 200 },
        );
    } catch (error) {
        console.error('Error retrieving check-in history:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
