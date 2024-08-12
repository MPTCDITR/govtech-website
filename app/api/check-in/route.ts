import { db } from '@/db';
import { RoomName, type RoomNameType, checkIns } from '@/db/schema';
import { validateRequest } from '@/lib/auth';
import { generateId } from 'lucia';
import { type NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest): Promise<NextResponse> {
    try {
        // Validate the user's session
        const { user, session } = await validateRequest();
        if (!user || !session) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        // Parse the request body
        const body = await request.json();
        const { roomName } = body;

        // Validate the room name
        if (!Object.values(RoomName).includes(roomName)) {
            return NextResponse.json({ error: 'Invalid room name' }, { status: 400 });
        }

        // Create a new check-in record
        const checkInId = generateId(15);
        await db.insert(checkIns).values({
            id: checkInId,
            userId: user.id,
            roomName: roomName as RoomNameType,
            checkInTime: new Date(),
        });

        return NextResponse.json(
            { message: 'Check-in successful', checkInId },
            { status: 200 },
        );
    } catch (error) {
        console.error('Error during check-in:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
