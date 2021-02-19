FROM nginx:1.19.5-alpine as nginx
COPY ./docker/nginx/conf.d/default.conf /etc/nginx/conf.d/
EXPOSE 80

FROM node:14.15-alpine as base
WORKDIR /app
COPY package*.json ./
RUN npm ci

FROM base as development
COPY . .
EXPOSE 3000
CMD ["npm", "start"]