FROM node:18-alpine
WORKDIR /usr/local/clg/next
COPY package*.json ./
RUN npm install
COPY ./ .
CMD ["npm", "run", "dev"]