FROM node:18-alpine
WORKDIR /app
COPY package*.json .
RUN npm ci
RUN npm run build
COPY . .
RUN npm run build
CMD [ "npm", "start" ]