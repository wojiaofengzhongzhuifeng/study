###  docker ENV ,npm install 不同点

docker ENV=PRODUCTION ，那么 npm install 的时候不会安装**开发依赖**( package.json devDependencies)

```
FROM 130132914922.dkr.ecr.us-east-1.amazonaws.com/ci-base/node14/v1:14.15.4-alpine3.10 AS builder
WORKDIR /app
COPY . .


ENV NODE_ENV=production
RUN npm cache clean --force
RUN rm -rf node_modules
RUN rm -f package-lock.json
RUN npm install
RUN npm run build
RUN npx next telemetry disable

CMD ["node_modules/.bin/next", "start", "-p", "8080"]

EXPOSE 8080

```

