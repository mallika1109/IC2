# Use official Node.js runtime as base image
     FROM node:20

     # Set working directory
     WORKDIR /app

     # Copy package.json and package-lock.json
     COPY package.json package-lock.json* ./

     # Install dependencies
     RUN npm install

     # Copy the rest of the application code
     COPY . .

     # Expose port 3000
     EXPOSE 3000

     # Start the application
     CMD ["node", "src/app.js"]
