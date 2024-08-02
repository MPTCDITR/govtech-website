import { eq } from 'drizzle-orm';
import { db } from '.';
import { type InsertUser, user } from './schema';

export async function createUser(data: InsertUser) {
    await db.insert(user).values(data);
}

export async function findUserByEmail(email: string) {
    return await db.query.user.findFirst({
        where: eq(user.email, email),
    });
}
