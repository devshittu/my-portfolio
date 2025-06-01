# STAGE 1: Build
FROM node:18-alpine as builder

WORKDIR /app

# Install dependencies
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Copy source code
COPY . .

# Build Next.js app
RUN yarn build

# STAGE 2: Runtime
FROM node:22-alpine

WORKDIR /app

# Minimal dependencies
COPY --from=builder /app/package.json ./
COPY --from=builder /app/yarn.lock ./
RUN yarn install --production --frozen-lockfile

# Copy built artifacts
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next

# Optional: Install sharp dependencies (if used)
RUN apk add --no-cache vips-dev fftw-dev

# Run the app
EXPOSE 3000
CMD ["yarn", "start"]

# Dockerfile
