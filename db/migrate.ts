import "dotenv/config";
import { createClient } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";
import { migrate } from "drizzle-orm/libsql/migrator";
import * as schema from "./schema";

async function main() {
  console.log("Running migrations...");

  const DATABASE_URL = process.env.DATABASE_URL;
  const DATABASE_TOKEN = process.env.DATABASE_TOKEN;

  if (!DATABASE_URL || !DATABASE_TOKEN) {
    throw new Error("Missing DATABASE_URL or DATABASE_TOKEN environment variable");
  }

  const client = createClient({
    url: DATABASE_URL,
    authToken: DATABASE_TOKEN,
  });

  const migrationsFolder = "./drizzle";

  const migrationDB = drizzle(client, { schema });

  await migrate(migrationDB, { migrationsFolder });

  console.log("Migrations complete!");

  process.exit(0);
}

main().catch((error) => {
  console.error("Migration failed!");
  console.error(error);
  process.exit(1);
});
