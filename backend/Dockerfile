# Use a Node.js base image
FROM node:18

# Set the working directory in the container

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the dependencies
RUN npm install
RUN npm rebuild bcrypt --build-from-source
# Copy the rest of the application files to the working directory
COPY . .

# Expose a port (change it to match your application's port)
EXPOSE 4000

# Install PM2 globally
RUN npm install pm2 -g

# Start the application with PM2
CMD [ "npm", "start" ]
