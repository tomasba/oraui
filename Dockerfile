FROM node:18-alpine AS build
WORKDIR /app
ARG API_URL
COPY package*.json ./
RUN npm ci
COPY . .
RUN sed -i "s|apiUrl: '.*'|apiUrl: '${API_URL}'|" src/environments/environment.ts
RUN npx ng build --configuration=production

FROM nginx:alpine
COPY --from=build /app/dist/oraui /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
