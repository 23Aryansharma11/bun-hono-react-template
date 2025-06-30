import { defineConfig } from "drizzle-kit";
import { env } from "./server/lib/env";

export default defineConfig({
  dialect: "postgresql",
  schema: "./server/database/schema/*",
  out: "./drizzle",
  dbCredentials: {
    url: env.DATABASE_URL,
  },
  migrations: {
    schema: "public",
  },
});

//  bun drizzle-kit generate
//  bun drizzle-kit migrate
