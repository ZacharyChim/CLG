FROM node:18-alpine
RUN apk update && apk add build-base gcc autoconf automake zlib-dev libpng-dev vips-dev && rm -rf /var/cache/apk/* > /dev/null 2>&1
WORKDIR /usr/local/backend
COPY package*.json ./
RUN npm install
COPY ./ .
# RUN npm install --ignore-scripts=false --foreground-scripts --verbose sharp
RUN npm install --arch=arm64 --platform=linux --libc=musl sharp
RUN npm run build
EXPOSE 1337
CMD ["npm", "run", "develop"]