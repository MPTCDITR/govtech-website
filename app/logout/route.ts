import { lucia, validateRequest } from '@/lib/auth';
import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function GET(): Promise<Response> {
    const { session } = await validateRequest();
    if (!session) {
        return NextResponse.json(null, { status: 401 });
    }

    await lucia.invalidateSession(session.id);
    const sessionCookie = lucia.createBlankSessionCookie();
    cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);

    revalidatePath('/');
    return new Response(null, {
        status: 302,
        headers: {
            Location: '/check-in',
        },
    });
}
