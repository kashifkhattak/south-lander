# Use a Node.js base image with the desired version
FROM node:18

# Set the working directory in the container

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application files to the working directory
COPY . .

# Build the React application
RUN npm run build

# Expose a port (change it to match your application's port)
EXPOSE 3000

# Install serve globally (if not already installed)
RUN npm install -g serve

# Start the application with serve
CMD ["serve", "-s", "build", "-l", "3000"]
