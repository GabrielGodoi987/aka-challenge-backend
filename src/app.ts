import Fastify, { FastifyRequest } from "fastify";
import {
  jsonSchemaTransform,
  serializerCompiler,
  validatorCompiler,
  ZodTypeProvider,
} from "fastify-type-provider-zod";

import fastifySwagger from "@fastify/swagger";
import swaggerUi from "@fastify/swagger-ui"

import { AssetRoutes } from "./infra/http/routes/asset.route";
import { clientRoutes } from "./infra/http/routes/client.route";

const server = Fastify({ logger: true });

server.withTypeProvider<ZodTypeProvider>();
server.setValidatorCompiler(validatorCompiler);
server.setSerializerCompiler(serializerCompiler);

server.register(fastifySwagger, {
  openapi: {
    info: {
      title: "Aka challenge",
      description: "Api to manage clients and assets related to the clients",
      version: "1.0.0"
    },
  },
  transform: jsonSchemaTransform
});
server.register(swaggerUi, {
  routePrefix: "/swagger-doc"
})

server.register(AssetRoutes, { prefix: "/assets" });
server.register(clientRoutes, { prefix: "/clients" });

server.get("/", async (request: FastifyRequest, reply) => {
  return {
    message: "Hello, World!",
    health: {
      ip: request.ip,
      info: request.id
    }
  };
});

server.listen({ port: 4000 }, (err, address) => {
  if (err) {
    server.log.error(err);
    process.exit(1);
  }
  server.log.info(`Server listening at ${address}`);
});
