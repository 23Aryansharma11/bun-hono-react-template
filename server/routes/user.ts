import { Hono } from "hono";
import { z } from "zod";
import { zValidator } from "@hono/zod-validator";
import { db } from "../database";
import { users as UserTable } from "../database/schema/user";
import { eq } from "drizzle-orm";

const numberRegex = "{[0-9]+}";

const createUserSchema = z.object({
  name: z.string().min(3, "name should atleast be 3 characters"),
  email: z.string(),
});

type User = z.infer<typeof createUserSchema>;

export const userRoutes = new Hono()
  .get("/", (c) => {
    return c.json({ users: [] });
  })
  .get(`/:id${numberRegex}`, async (c) => {
    const id = Number.parseInt(c.req.param("id"));

    const user = await db.select().from(UserTable).where(eq(UserTable.id, id));

    return c.json({ user });
  })
  .post("/", zValidator("json", createUserSchema), async (c) => {
    const data = c.req.valid("json");
    const user = await db
      .insert(UserTable)
      .values({ ...data })
      .returning()
      .then((res) => res[0]); // otherwise it returns an array

    return c.json({ user });
  })
  .delete(`/:id${numberRegex}`, (c) => {
    return c.json({ users: [] });
  });
