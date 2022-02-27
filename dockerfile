# START FROM IMAGE NODE-ALPINE WITH NODE VER 16.14
FROM node:16.14-alpine

# INSTALL AND SETUP GIT
RUN apk add git
RUN git config --global user.name "Kamil Pieczyk"
RUN git config --global user.email "kamil.pieczyk@gmail.com"

# CREATE PROJECT DIRECTORY
WORKDIR /recruit2022_kamil

# INSTALL ALL DEPENDENCIES AND FILES
COPY package*.json ./
COPY tsconfig.json ./
RUN yarn install
COPY . .
RUN yarn install

# START THE APP AT PORT 3000
CMD ["yarn", "start"]
EXPOSE 3000