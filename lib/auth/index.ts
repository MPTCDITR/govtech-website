import { env } from '@/env';
import { DrizzleSQLiteAdapter } from '@lucia-auth/adapter-drizzle';
import { Google } from 'arctic';
import { Lucia, type Session, type User } from 'lucia';
import { cookies } from 'next/headers';
import { cache } from 'react';
import { db } from '../../db';
import { session, user } from '../../db/schema';

export const google = new Google(
    env.GOOGLE_CLIENT_ID ?? '',
    env.GOOGLE_CLIENT_SECRET ?? '',
    `${env.BASE_URL}/login/google/callback`,
);

const adapter = new DrizzleSQLiteAdapter(db, session, user);

export const lucia = new Lucia(adapter, {
    sessionCookie: {
        attributes: {
            secure: process.env.NODE_ENV === 'production',
        },
    },
    getUserAttributes: (attributes) => {
        return {
            name: attributes.name,
            email: attributes.email,
        };
    },
});

export const validateRequest = cache(
    async (): Promise<{ user: User; session: Session } | { user: null; session: null }> => {
        const sessionId = cookies().get(lucia.sessionCookieName)?.value ?? null;
        if (!sessionId) {
            return {
                user: null,
                session: null,
            };
        }

        const result = await lucia.validateSession(sessionId);

        try {
            if (result.session?.fresh) {
                const sessionCookie = lucia.createSessionCookie(result.session.id);
                cookies().set(
                    sessionCookie.name,
                    sessionCookie.value,
                    sessionCookie.attributes,
                );
            }
            if (!result.session) {
                const sessionCookie = lucia.createBlankSessionCookie();
                cookies().set(
                    sessionCookie.name,
                    sessionCookie.value,
                    sessionCookie.attributes,
                );
            }
        } catch {
            // Next.js throws error when attempting to set cookies when rendering page
        }
        return result;
    },
);

declare module 'lucia' {
    interface Register {
        Lucia: typeof lucia;
        DatabaseUserAttributes: {
            name: string;
            email: string;
        };
    }
}
