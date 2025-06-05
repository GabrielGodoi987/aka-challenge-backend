FROM node:21-slim

RUN apt-get update && apt-get install -y default-mysql-client

WORKDIR /app

COPY . .

COPY ./entrypoint.sh /entrypoint.sh

RUN chmod +x /entrypoint.sh

EXPOSE 4000

ENTRYPOINT [ "/entrypoint.sh" ]