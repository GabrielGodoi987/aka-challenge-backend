import { FastifyInstance } from "fastify";
import { ClientUseCase } from "../../../domain/usecases/client.useCase";

export async function clientRoute(fastify: FastifyInstance) {
    const clientUseCase = new ClientUseCase();

    fastify.get('/', async (request, reply) => {});
    fastify.get("/:id", async (request, reply) => {});
    fastify.post('/', async (request, reply) => {});
    fastify.post("/addAsset/client/:clientId/asset/:assetId", async (request, reply) => {});
    fastify.put('/:id', async (request, reply) => {});
    fastify.delete('/deactivate/:id', async (request, reply) => {});
}