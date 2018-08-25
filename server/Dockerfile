FROM node

RUN apk update
RUN apk add postgresql-dev
RUN apk add python
RUN apk add build-base
RUN apk add git

RUN yarn install

CMD yarn start