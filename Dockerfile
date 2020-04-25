FROM node:12 as base

RUN mkdir /app
WORKDIR /app
COPY . .

RUN rm -rf node_modules
RUN npm install
RUN ls
RUN npm run build

FROM nginx
COPY nginx.config /etc/nginx/conf.d/default.conf
COPY --from=base app/dist /usr/share/nginx/html
