# base image
FROM tarampampam/node:11-alpine

# set working directory
RUN mkdir -p /usr/src/app/mobile
WORKDIR /usr/src/app/mobile

# install and cache app dependencies
COPY package.json /usr/src/app/mobile
COPY package-lock.json /usr/src/app/mobile
RUN npm install

COPY . /usr/src/app/mobile

# start app
CMD ["npm", "start"]
