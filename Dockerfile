FROM node:lts-alpine
WORKDIR /app
COPY package*.json /app
RUN npm install
COPY . /app
EXPOSE 4000
CMD npm run dev