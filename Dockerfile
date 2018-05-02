FROM node:6.9.1
RUN mkdir -p /src/app/restaurant
COPY dist /src/app/restaurant/dist
COPY deploy-package.json /src/app/restaurant/package.json
COPY deploy-server.js /src/app/restaurant
WORKDIR /src/app/restaurant
RUN npm install
EXPOSE 3000
CMD ["npm", "start"]