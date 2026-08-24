# =========================
# Stage 1: Builder
# =========================
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./

# Install all dependencies for building
RUN npm ci

COPY . .

# Build NestJS application
RUN npm run build

# Remove development dependencies
RUN npm prune --omit=dev


# =========================
# Stage 2: Production
# =========================
FROM node:20-alpine AS production

WORKDIR /app

# Copy only production dependencies
COPY --from=builder /app/node_modules ./node_modules

# Copy only compiled application
COPY --from=builder /app/dist ./dist

EXPOSE 3000

CMD ["node", "dist/main.js"]