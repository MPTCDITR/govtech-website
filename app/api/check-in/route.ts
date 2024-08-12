// File: app/api/check-in/route.ts

import { db } from '@/db';
import { RoomName, type RoomNameType, checkIns, user, userUpdateSchema } from '@/db/schema';
import { validateRequest } from '@/lib/auth';
import { eq } from 'drizzle-orm';
import { generateId } from 'lucia';
import { type NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const fullyRegisteredUserSchema = userUpdateSchema.extend({
    id: z.string(),
    email: z.string().email(),
    name: z.string(),
});

export async function POST(request: NextRequest): Promise<NextResponse> {
    try {
        // Validate the user's session
        const { user: authenticatedUser, session } = await validateRequest();
        if (!authenticatedUser || !session) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        // Parse the request body
        const body = await request.json();
        const { roomName } = body;

        // Validate the room name
        if (!Object.values(RoomName).includes(roomName)) {
            return NextResponse.json({ error: 'Invalid room name' }, { status: 400 });
        }

        const fullUserDetails = await db.query.user.findFirst({
            where: eq(user.id, authenticatedUser.id),
        });

        const validationResult = fullyRegisteredUserSchema.safeParse(fullUserDetails);
        if (!validationResult.success) {
            return NextResponse.json(
                {
                    error: 'Please complete your profile before checking in',
                    details: validationResult.error.errors,
                },
                { status: 403 },
            );
        }

        // Create a new check-in record
        const checkInId = generateId(15);
        await db.insert(checkIns).values({
            id: checkInId,
            userId: authenticatedUser.id,
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
