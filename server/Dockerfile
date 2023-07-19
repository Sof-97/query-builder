# Use a base image with Node.js pre-installed
FROM node:latest

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Install nodemon globally
RUN npm install -g nodemon

# Copy the rest of the server code to the container
COPY . .

EXPOSE 3005

# Set the command to start the server with nodemon
CMD [ "node", "index.js" ]
