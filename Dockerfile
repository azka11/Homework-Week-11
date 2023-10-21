FROM node:18-alphine

WORKDIR /homework/app

COPY package*.json./

RUN npm install --save

EXPOSE 3000
EXPOSE 5433