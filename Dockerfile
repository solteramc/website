FROM node:alpine
WORKDIR /app
# install dependencies
COPY package.json .
COPY yarn.lock .
RUN yarn install --frozen-lockfile
# build
COPY . .
RUN yarn build
# run
ENTRYPOINT [ "yarn", "dev" ]
