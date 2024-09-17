import { env } from "@/env";

export const GOOGLE_URL = new URL("/login/google", env.BASE_URL).toString();

export const KEYCLOAK_URL = new URL("/login/keycloak", env.BASE_URL).toString();
