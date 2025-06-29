# ---------------------
# 1. Build frontend
# ---------------------
FROM oven/bun:latest AS builder

WORKDIR /app

# Copy and install backend deps
COPY bun.lock package.json tsconfig.json ./
RUN bun install

# Copy frontend + backend code
COPY client ./client
COPY server ./server

# Install frontend deps
RUN cd client && bun install

# Build client
RUN cd client && bunx --bun vite build

# ---------------------
# 2. Final runtime image
# ---------------------
FROM oven/bun:latest

WORKDIR /app

# Copy deps + lockfile
COPY --from=builder /app/bun.lock ./
COPY --from=builder /app/package.json ./
COPY --from=builder /app/tsconfig.json ./
RUN bun install --production

# Copy built client + backend code
COPY --from=builder /app/client/dist ./client/dist
COPY --from=builder /app/server ./server

# Expose app port
EXPOSE 3000

# Start server
CMD ["bun", "server/index.ts"]
