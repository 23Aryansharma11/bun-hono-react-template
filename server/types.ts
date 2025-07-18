import { z } from "zod";

export const createUserSchema = z.object({
  name: z.string().min(3, "name should atleast be 3 characters"),
  email: z.string(),
});
