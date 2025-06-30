import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

// Remove empty string later
const dbClient = postgres(process.env.DATABASE_URL!); // Postgres url
export const db = drizzle(dbClient);
