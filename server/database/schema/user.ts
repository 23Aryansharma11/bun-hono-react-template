import { pgTable, serial, varchar, uniqueIndex } from "drizzle-orm/pg-core";

export const users = pgTable(
  "users",
  {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 100 }).notNull(),
    email: varchar("email", { length: 255 }).notNull(),
  },
  (users) => [uniqueIndex("email_idx").on(users.email)]
);
