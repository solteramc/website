FROM node:alpine
# copy package.json and install
COPY package.json .
RUN yarn install
# build next
RUN yarn run next build

FROM node:alpine
# copy package.json and install
COPY package.json .
RUN yarn install --prod
# copy built server
COPY .next .next
# run next
ENTRYPOINT [ "yarn", "start" ]
