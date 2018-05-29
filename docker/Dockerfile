FROM node:10.2.1-slim

RUN apt-get update
#RUN apt-get install -y make g++ python libssl-dev libsasl2-dev git

WORKDIR /usr/app/

COPY package.json /usr/app/
COPY package-lock.json /usr/app/
COPY tsconfig.json /usr/app/
COPY typings.d.ts /usr/app/

RUN npm install

#RUN apk del make g++ python libssl-dev

COPY src/ /usr/app/src/
#COPY test/ /usr/app/test/
#COPY config/ /usr/app/config/

COPY docker/docker-entrypoint.sh /usr/app
RUN chmod +x docker-entrypoint.sh

#RUN npm test
RUN npm run build

EXPOSE 8000

ENTRYPOINT ["/usr/app/docker-entrypoint.sh"]

CMD ["'npm start'"]
 