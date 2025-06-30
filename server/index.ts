import app from "./app";
import { env } from "./lib/env";

const PORT = Number(env.PORT);

if (env.NODE_ENV == "development") {
  console.log(`Server running on http://localhost:${PORT}`);
} else {
  console.log("Server running", new Date().toUTCString());
}

Bun.serve({
  port: PORT,
  fetch: app.fetch,
});
