import { Hono } from "hono";
import { logger } from "hono/logger";
import { userRoutes } from "./routes/user";
import { serveStatic } from "hono/bun";

const app = new Hono();

app.use(logger());

const apiRoutes = app.basePath("/api").route("/user", userRoutes);

// Serve static react app
app.use("*", serveStatic({ root: "./client/dist" }));
app.use("*", serveStatic({ path: "./client/dist/index.html" }));

export default app;
// Hono RPC
export type ApiRoutes = typeof apiRoutes;
