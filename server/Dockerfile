FROM node:8-alpine

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

# copy package.json and install pacakages. (This improves the build speed)
COPY package.json package.json

RUN npm install

#  copy sorce files
COPY . .

ENV PORT 5000

ENV MONGO_DB_URL mongodb://db:27017/database

EXPOSE ${PORT}

CMD ["npm", "start"]