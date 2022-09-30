FROM node:16.14

WORKDIR /usr/src/app

RUN npm install -g pnpm

COPY package.json ./
COPY pnpm-lock.yaml ./

RUN pnpm install

COPY . .

EXPOSE $PORT

RUN pnpm run build
CMD pnpm run start:prod

