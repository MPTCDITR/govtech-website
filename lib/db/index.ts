import { env } from "@/env";
import { createClient } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";

const client = createClient({
  url: env.DATABASE_URL,
  authToken: env.DATABASE_TOKEN,
});

export default drizzle(client);
