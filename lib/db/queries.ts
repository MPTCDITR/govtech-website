import { db } from "../db";
import { type InsertUser, usersTable } from "./schema";

export async function createUser(data: InsertUser) {
  await db.insert(usersTable).values(data);
}
