FROM node:10.15.1

RUN mkdir app

WORKDIR /app


RUN npm install

RUN npm install http-server -g

COPY . .

EXPOSE 3000

CMD http-server -p 3000


