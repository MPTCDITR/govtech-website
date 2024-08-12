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
    firstName: z.string().trim().min(1).max(50),
    lastName: z.string().trim().min(1).max(50),
    gender: z.enum(['male', 'female', 'other']),
    phoneNumber: z
        .string()
        .trim()
        .regex(/^\+?[0-9]{10,14}$/),
    occupation: z.string().trim().min(1).max(100),
    workPlace: z.string().trim().min(1).max(100),
    position: z.string().trim().min(1).max(100),
    skill: z.string().trim().min(1).max(100),
    country: z.string().trim().min(1).max(100),
});

export type InsertUser = typeof user.$inferInsert;
export type SelectUser = typeof user.$inferSelect;
export type UserUpdateInput = z.infer<typeof userUpdateSchema>;
