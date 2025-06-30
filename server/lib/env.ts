import { config } from "dotenv";
import { expand } from "dotenv-expand";
import { z } from "zod";
import type { ZodError } from "zod";

expand(config());

const EnvSchema = z.object({
  NODE_ENV: z.enum(["development", "production"]).default("development"),
  PORT: z.coerce.number().default(3000),
  DATABASE_URL: z.string().nonempty("No db url"),
});

let env: z.infer<typeof EnvSchema>;

try {
  env = EnvSchema.parse(process.env);
} catch (e) {
  const error = e as ZodError;
  console.error("Invalid ENV");
  console.error(error.flatten());
  process.exit(1);
}

export { env };
