// File: app/api/register/[userId]/route.ts

import { db } from '@/db';
import { userUpdateSchema } from '@/db/schema';
import { user } from '@/db/schema';
import { validateRequest } from '@/lib/auth';
import { eq } from 'drizzle-orm';
import { type NextRequest, NextResponse } from 'next/server';
import sanitizeHtml from 'sanitize-html';

interface SanitizationResult {
    original: string;
    sanitized: string;
}

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
    try {
        // Validate the request
        const { user: authenticatedUser, session } = await validateRequest();

        // Check if the user is authenticated
        if (!authenticatedUser || !session) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const userId = params.id;

        // Check if the authenticated user is trying to update their own profile
        if (authenticatedUser.id !== userId) {
            return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
        }

        const requestBody = await request.json();

        const sanitizationResults = Object.entries(requestBody).reduce<
            Record<string, SanitizationResult>
        >((acc, [key, value]) => {
            if (typeof value === 'string') {
                const sanitizedValue = sanitizeHtml(value.trim(), {
                    allowedTags: [],
                    allowedAttributes: {},
                });
                if (sanitizedValue !== value) {
                    acc[key] = { original: value, sanitized: sanitizedValue };
                }
            }
            return acc;
        }, {});

        // If any field needed sanitization, return a 400 error with details
        if (Object.keys(sanitizationResults).length > 0) {
            return NextResponse.json(
                {
                    error: 'Invalid input detected',
                    message:
                        'Please provide clean input without HTML tags or special characters',
                    sanitizationDetails: sanitizationResults,
                },
                { status: 400 },
            );
        }

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
