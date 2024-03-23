FROM node:alpine3.19

COPY package.json /app/

COPY src /app/

WORKDIR /app

RUN npm install

CMD ["node", "server.js"]

