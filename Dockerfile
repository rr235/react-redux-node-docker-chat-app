FROM node:latest

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY server .

RUN npm install

ENV PORT 5000

EXPOSE ${PORT}

CMD ["npm", "start"]