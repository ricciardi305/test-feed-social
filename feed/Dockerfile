FROM node:16

USER root

WORKDIR /feed

COPY "package.json" ./feed/

RUN yarn

COPY . ./feed/

EXPOSE 5173

CMD ["yarn", "dev"]