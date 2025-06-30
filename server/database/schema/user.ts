import { pgTable, serial, varchar, uniqueIndex } from "drizzle-orm/pg-core";
import {
  createInsertSchema,
  createSelectSchema,
  createUpdateSchema,
} from "drizzle-zod";
import { z } from "zod";
export const users = pgTable(
  "users",
  {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 100 }).notNull(),
    email: varchar("email", { length: 255 }).notNull(),
  },
  (users) => [uniqueIndex("email_idx").on(users.email)]
);

export const insertUserSchema = createInsertSchema(users, {
  name: (schema) => schema.min(3, "Name must have atleast 3 characters"),
});
export const updateUserSchema = createUpdateSchema(users);
export const selectUserSchema = createSelectSchema(users);
