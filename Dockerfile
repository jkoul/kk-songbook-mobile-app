# base image
FROM tarampampam/node:11-alpine

# set working directory
RUN mkdir -p /usr/src/app/mobile-client
WORKDIR /usr/src/app/mobile-client

# install and cache app dependencies
COPY package.json /usr/src/app/mobile-client
COPY package-lock.json /usr/src/app/mobile-client
RUN npm install

COPY . /usr/src/app/mobile-client

# start app
CMD ["npm", "start"]
