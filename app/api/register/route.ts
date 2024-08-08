import { db } from '@/db';
import { userUpdateSchema } from '@/db/schema';
import { user } from '@/db/schema';
import { validateRequest } from '@/lib/auth';
import { eq } from 'drizzle-orm';
import { type NextRequest, NextResponse } from 'next/server';

export async function PUT(request: NextRequest) {
    try {
        // Validate the request
        const { user: authenticatedUser, session } = await validateRequest();

        // Check if the user is authenticated
        if (!authenticatedUser || !session) {
            //To do : redirect back to login page
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
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

        // Fetch the user from the database using the request ID
        const dbUser = await db
            .select()
            .from(user)
            .where(eq(user.id, validatedUserData.id))
            .limit(1);

        // Check if the user exists in the database
        if (!dbUser || dbUser.length === 0) {
            return NextResponse.json({ error: 'User not found' }, { status: 404 });
        }

        // Check if the authenticated user's ID matches the ID from the database
        if (authenticatedUser.id !== dbUser[0].id) {
            return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
        }

        // Update user information
        await db.update(user).set(validatedUserData).where(eq(user.id, authenticatedUser.id));

        return NextResponse.json(
            { message: 'User information updated successfully' },
            { status: 200 },
        );
    } catch (error) {
        console.error('Error updating user information:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
