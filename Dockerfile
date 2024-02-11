# Stage 1: Building the app
FROM node:18-alpine AS builder

# Set the working directory in the Docker container
WORKDIR /app

# Copy the package.json and package-lock.json (or yarn.lock) files
COPY package*.json ./
# If you're using Yarn, uncomment the next line and remove the COPY command above
# COPY package.json yarn.lock ./

# Install dependencies
RUN npm install
# For Yarn, use the following command instead
# RUN yarn install

# Copy the rest of your app's source code from your host to your image filesystem.
COPY . .

# Build the Next.js application
RUN npm run build
# For Yarn, use the following command instead
# RUN yarn build

# Stage 2: Run the app
FROM node:18-alpine AS runner
WORKDIR /app

# Copy the build output from the builder stage
COPY --from=builder /app/next.config.mjs ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Expose the port Next.js runs on
EXPOSE 3000

# Command to run the app
CMD ["npm", "start"]
# For Yarn, use the following command instead
# CMD ["yarn", "start"]
