# START FROM IMAGE NODE-ALPINE WITH NODE VER 16.14
FROM node:16.14-alpine

# INSTALL AND SETUP GIT
RUN apk add git
RUN git config --global user.name "Kamil Pieczyk"
RUN git config --global user.email "kamil.pieczyk@gmail.com"

# CREATE PROJECT DIRECTORY AND COPY ALL FILES
WORKDIR /recruit2022_kamil
COPY . .

# INSTALL ALL DEPENDENCIES AND START THE APP AT PORT 3000
RUN yarn install
CMD ["yarn", "start"]
EXPOSE 3000