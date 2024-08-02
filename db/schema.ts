import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const user = sqliteTable('users', {
    id: text('id').primaryKey(),
    name: text('name').notNull(),
    email: text('email').unique().notNull(),
});

export const session = sqliteTable('session', {
    id: text('id').primaryKey(),
    userId: text('user_id')
        .notNull()
        .references(() => user.id),
    expiresAt: integer('expires_at').notNull(),
});

export type InsertUser = typeof user.$inferInsert;
export type SelectUser = typeof user.$inferSelect;
