# Use a base image with Node.js pre-installed
FROM node:latest

# Set the working directory inside the container
WORKDIR /app

# Install nodemon globally
# RUN npm install -g nodemon

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the server code to the container
COPY . .

# Set the command to start the server
CMD [ "npm", "start" ]
