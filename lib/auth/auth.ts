import { env } from "@/env";
import { DrizzleSQLiteAdapter } from "@lucia-auth/adapter-drizzle";
import { Keycloak } from "arctic";
import { Lucia } from "lucia";
import { db } from "../../db";
import { session, user } from "../../db/schema";

export const keycloak = new Keycloak(
  env.KEYCLOAK_REALMURL,
  env.KEYCLOAK_CLIENT_ID,
  env.KEYCLOAK_CLIENT_SECRET,
  `${env.BASE_URL}/login/keycloak/callback`,
);
const adapter = new DrizzleSQLiteAdapter(db, session, user);

export const lucia = new Lucia(adapter, {
  sessionCookie: {
    attributes: {
      secure: process.env.NODE_ENV === "production",
    },
  },
  getUserAttributes: (attributes) => {
    return {
      name: attributes.name,
      email: attributes.email,
    };
  },
});

declare module "lucia" {
  interface Register {
    Lucia: typeof lucia;
    DatabaseUserAttributes: {
      name: string;
      email: string;
    };
  }
}
