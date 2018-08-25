FROM node:alpine as builder

RUN apk update && apk upgrade && \
    apk add --no-cache bash git openssh

RUN npm install -g create-react-app

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package*.json /usr/src/app/

RUN npm install

COPY ./public /usr/src/app/public
COPY ./src /usr/src/app/src
COPY ./config /usr/src/app/config
COPY ./scripts /usr/src/app/scripts
RUN npm run build

RUN rm -rf /srv/* || true
RUN ls -la /srv
RUN chmod -R 777 /usr/src/app/build/.
RUN ls -la /usr/src/app/build/

FROM abiosoft/caddy
COPY --from=builder /usr/src/app/build/. /srv


