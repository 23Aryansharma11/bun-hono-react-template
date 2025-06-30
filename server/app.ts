import { Hono } from "hono";
import { logger } from "hono/logger";
import { userRoutes } from "./routes/user";
import { serveStatic } from "hono/bun";
import { errorHandler } from "./middlewares/errorHandler";

const app = new Hono();

app.use(logger());

const apiRoutes = app.basePath("/api").route("/user", userRoutes);

// Serve static react app
app.use("*", serveStatic({ root: "./client/dist" }));
app.use("*", serveStatic({ path: "./client/dist/index.html" }));
// Can throw errors like
/*
 throw new HTTPException(StatusCodes.BAD_REQUEST, {
message: 'Username is required',
 });
*/
app.onError(errorHandler);
export default app;
// Hono RPC
export type ApiRoutes = typeof apiRoutes;
