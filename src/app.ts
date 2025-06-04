import Fastify from "fastify";

const server = Fastify({ logger: true });


server.listen({ port: 4000 }, (err, address) => {
    if (err) {
        server.log.error(err);
        process.exit(1);
    }
    server.log.info(`Server listening at ${address}`);
})