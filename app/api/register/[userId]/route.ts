// File: app/api/register/[userId]/route.ts

import { db } from '@/db';
import { userUpdateSchema } from '@/db/schema';
import { user } from '@/db/schema';
import { validateRequest } from '@/lib/auth';
import { eq } from 'drizzle-orm';
import { type NextRequest, NextResponse } from 'next/server';

export async function PUT(request: NextRequest, { params }: { params: { userId: string } }) {
    try {
        console.log('API call sucessfully');
        // Validate the request
        const { user: authenticatedUser, session } = await validateRequest();

        // Check if the user is authenticated
        if (!authenticatedUser || !session) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const userId = params.userId;

        // Check if the authenticated user is trying to update their own profile
        if (authenticatedUser.id !== userId) {
            return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
        }

        const requestBody = await request.json();

        // Validate the request body
        const validationResult = userUpdateSchema.safeParse(requestBody);

        if (!validationResult.success) {
            return NextResponse.json(
                { error: 'Invalid request body', details: validationResult.error.errors },
                { status: 400 },
            );
        }

        const validatedUserData = validationResult.data;

        // Fetch the user from the database using the URL parameter
        const dbUser = await db.query.user.findFirst({
            where: eq(user.id, userId),
        });

        // Check if the user exists in the database
        if (!dbUser) {
            return NextResponse.json({ error: 'User not found' }, { status: 404 });
        }

        // Update user information
        await db.update(user).set(validatedUserData).where(eq(user.id, userId));

        return NextResponse.json(
            { message: 'User information updated successfully' },
            { status: 200 },
        );
    } catch (error) {
        console.error('Error updating user information:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
