FROM node:latest

RUN npm install --production phantom express busboy

COPY ./ /web

WORKDIR /web

ENV PORT=8080

CMD node run.js

