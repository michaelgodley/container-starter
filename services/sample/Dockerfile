FROM node:latest
MAINTAINER Mike Godley <michaelgodley@gmail.com>

# create app dir in container
RUN mkdir -p /app/dev

# Set default working dir
WORKDIR /app/dev

# Copy package.json
COPY package.json /app/dev

RUN npm install
# RUN npm install --only=production

# copy src files to container
COPY gulpfile.babel.js /app/dev
COPY .env /app/dev
COPY src /app/dev/src

# command to start service
CMD ["npm", "start"]

