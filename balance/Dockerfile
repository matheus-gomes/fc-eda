FROM node:20-alpine

WORKDIR /app

COPY ./package.json ./

RUN npm i

EXPOSE 3003

CMD [ "npm", "run", "start:dev" ]