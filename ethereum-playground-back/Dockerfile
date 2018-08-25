FROM node:alpine

RUN apk update && apk upgrade && \
    apk add --no-cache bash git openssh

WORKDIR /app

COPY package*.json /app/

RUN npm install

COPY . /app

CMD [ "npm", "start" ]


