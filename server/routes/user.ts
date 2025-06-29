import { Hono } from "hono";
import { z } from "zod";
import { zValidator } from "@hono/zod-validator";

const numberRegex = "{[0-9]+}";

const createUserSchema = z.object({
  name: z.string().min(3, "name should atleast be 3 characters"),
});

type User = z.infer<typeof createUserSchema>;

export const userRoutes = new Hono()
  .get("/", (c) => {
    return c.json({ users: [] });
  })
  .get(`/:id${numberRegex}`, (c) => {
    const id = Number.parseInt(c.req.param("id"));
    return c.json({ users: [] });
  })
  .post("/", zValidator("json", createUserSchema), (c) => {
    const data = c.req.valid("json");
    return c.json({ users: [] });
  })
  .put("/", (c) => {
    return c.json({ users: [] });
  });
