import { fetchCheckInHistory } from '@/controller/history.controller';
import { validateRequest } from '@/lib/auth';
import { type NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest): Promise<NextResponse> {
    try {
        // Validate the user's session
        const { user: authenticatedUser, session } = await validateRequest();
        if (!authenticatedUser || !session) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const userId = authenticatedUser.id;
        const history = await fetchCheckInHistory(userId);

        return NextResponse.json(
            { message: 'Check-in history retrieved successfully.', history: history },
            { status: 200 },
        );
    } catch (error) {
        console.error('Error retrieving check-in history:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
