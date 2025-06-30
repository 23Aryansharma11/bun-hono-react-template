import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { env } from "../lib/env";

// Remove empty string later
const dbClient = postgres(env.DATABASE_URL); // Postgres url
export const db = drizzle(dbClient);
