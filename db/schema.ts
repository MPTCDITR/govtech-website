import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';
import { z } from 'zod';

export const RoomName = {
    MAIN_HALL: 'Main Hall',
    CONFERENCE_ROOM_A: 'Conference Room A',
    CONFERENCE_ROOM_B: 'Conference Room B',
    WORKSHOP_ROOM: 'Workshop Room',
    EXHIBITION_AREA: 'Exhibition Area',
} as const;

export type RoomNameType = (typeof RoomName)[keyof typeof RoomName];

const roomNameValues = Object.values(RoomName) as [RoomNameType, ...RoomNameType[]];

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

export const checkIns = sqliteTable('check_ins', {
    id: text('id').primaryKey(),
    userId: text('user_id')
        .notNull()
        .references(() => user.id),
    roomName: text('room_name', { enum: roomNameValues }).notNull(),
    checkInTime: integer('check_in_time', { mode: 'timestamp' }).notNull(),
});

export const userUpdateSchema = z.object({
    firstName: z.string().trim().min(1, { message: 'First Name required' }).max(100),
    lastName: z.string().trim().min(1, { message: 'Last Name required' }),
    gender: z.enum(['male', 'female', 'other'], { message: 'Select a gender' }),
    //TO DO:  probably want a specific format phone numbers
    phoneNumber: z
        .string()
        .trim()
        .regex(/^(\+\d{1,3})?[-\s]?\(?(\d{1,4})\)?[-\s]?(\d{1,9})$/, {
            message: '(+855) 12 345 6789',
        }),
    occupation: z.string().trim().min(1).max(100, { message: 'Occupation required' }),
    workPlace: z.string().trim().min(1).max(100, { message: 'Work Place required' }),
    position: z.string().trim().min(1).max(100, { message: 'Position required' }),
    skill: z.string().trim().min(1).max(100, { message: 'Skill required' }),
    country: z.string().trim().min(1).max(100, { message: 'Country required' }),
});

export type InsertUser = typeof user.$inferInsert;
export type SelectUser = typeof user.$inferSelect;
export type UserUpdateInput = z.infer<typeof userUpdateSchema>;
