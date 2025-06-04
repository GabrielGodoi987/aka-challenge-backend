FROM node:21-slim

RUN apt-get update && apt-get install -y

WORKDIR /app

COPY . .

COPY ./entrypoint.sh /entrypoint.sh

RUN chmod +x /entrypoint.sh

ENTRYPOINT [ "/entrypoint.sh" ]