import app from "./app";

const port = process.env.PORT || 3000; // Does that by default tho

Bun.serve({
  port,
  fetch: app.fetch,
});
