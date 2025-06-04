import Fastify from "fastify";
import {
  serializerCompiler,
  validatorCompiler,
  ZodTypeProvider,
} from "fastify-type-provider-zod";
import z from "zod";
import { AssetRoutes } from "./infra/http/routes/asset.route";

const server = Fastify({ logger: true });

server.withTypeProvider<ZodTypeProvider>();
server.setValidatorCompiler(validatorCompiler);
server.setSerializerCompiler(serializerCompiler);

server.register(AssetRoutes, { prefix: "/assets" });

server.get("/", async (request, reply) => {
  return { message: "Hello, World!" };
});

server.listen({ port: 4000 }, (err, address) => {
  if (err) {
    server.log.error(err);
    process.exit(1);
  }
  server.log.info(`Server listening at ${address}`);
});
