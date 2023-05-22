# Use a base image with Node.js pre-installed
FROM node:latest

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the client code to the container
COPY . .

# Build the client application
# RUN npm run build

# Set the command to start the client
CMD [ "npm", "run", "dev" ]
