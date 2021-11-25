FROM node:14.17-alpine3.11 as builder

ENV NODE_ENV build

WORKDIR /home/node

COPY . /home/node/

RUN yarn install --frozen-lockfile && yarn build && yarn install --production

FROM node:14.17-alpine3.11

ENV NODE_ENV production

USER node

WORKDIR /home/node

COPY --from=builder /home/node/package*.json /home/node/
COPY --from=builder /home/node/node_modules/ /home/node/node_modules/
COPY --from=builder /home/node/dist/ /home/node/dist/

CMD ["node", "dist/main.js"]