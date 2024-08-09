import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';
import { z } from 'zod';

export const user = sqliteTable('users', {
    id: text('id').primaryKey(),
    firstName: text('first_name'),
    lastName: text('last_name'),
    gender: text('gender'),
    phoneNumber: text('phone_number'),
    email: text('email').unique().notNull(),
    occupation: text('occupation'),
    workPlace: text('work_place'),
    position: text('position'),
    skill: text('skill'),
    country: text('country'),
    name: text('name').notNull(),
});

export const session = sqliteTable('session', {
    id: text('id').primaryKey(),
    userId: text('user_id')
        .notNull()
        .references(() => user.id),
    expiresAt: integer('expires_at').notNull(),
});

export const userUpdateSchema = z.object({
    firstName: z.string().min(1).max(50),
    lastName: z.string().min(1).max(50),
    gender: z.enum(['male', 'female', 'other']),
    phoneNumber: z.string().regex(/^\+?[0-9]{10,14}$/),
    occupation: z.string().min(1).max(100),
    workPlace: z.string().min(1).max(100),
    position: z.string().min(1).max(100),
    skill: z.string().min(1).max(100),
    country: z.string().min(1).max(100),
});

export type InsertUser = typeof user.$inferInsert;
export type SelectUser = typeof user.$inferSelect;
export type UserUpdateInput = z.infer<typeof userUpdateSchema>;
