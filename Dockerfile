# Use a specific Node.js base image for a minimal environment
FROM node:alpine

# Set the working directory in the container
WORKDIR /app

# Install dependencies before copying the entire code
# to leverage Docker caching for layers
COPY package.json pnpm-lock.yaml ./

# Install `pnpm` and the project's dependencies
RUN npm install -g pnpm
RUN pnpm install

# Copy the rest of your application code
COPY . .

# Build the production version of the application
# if it's needed (e.g., with webpack for the frontend)
RUN pnpm run build:prod

# Expose the port the application listens on
EXPOSE 3000

# Define the command to start your Node.js application with proper JSON syntax
ENTRYPOINT ["node", "index.js"]
