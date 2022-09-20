

FROM node:16

USER root

WORKDIR /app

COPY ["package.json", "yarn.lock"]

RUN yarn

COPY . .

EXPOSE 3000

CMD ["yarn", "dev"]