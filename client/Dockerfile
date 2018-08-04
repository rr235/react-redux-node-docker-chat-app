FROM node:latest

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

# copy package.json and install pacakages. (This improves the build speed)
COPY package.json package.json

RUN npm install

#  copy sorce files
COPY . .

ENV PORT 3000

EXPOSE ${PORT}

CMD ["npm", "start"]