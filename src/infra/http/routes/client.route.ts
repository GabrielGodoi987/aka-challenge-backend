import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { ClientUseCase } from "../../../domain/usecases/client.useCase";
import { createClientSchema } from "../../../shared/zod/client.schema";
import { validateBody } from "../util/validator/body.validator";

export async function clientRoutes(fastify: FastifyInstance) {
    const clientUseCase = new ClientUseCase();

    fastify.get('/', async (_request: FastifyRequest, reply: FastifyReply) => {
        const clients = await clientUseCase.getAllClients();
        reply.send(clients);
    });

    fastify.get("/:id", async (request: FastifyRequest, reply: FastifyReply) => {
        const { id } = request.params as { id: string };
        const client = await clientUseCase.getClientById(id);
        reply.send(client);
    });

    fastify.post('/', {
        preHandler: validateBody(createClientSchema)
    }, async (request: FastifyRequest, reply: FastifyReply) => {
        const data = request.body;
        const schema = createClientSchema.parse(data);
        const newClient = await clientUseCase.createClient(schema);
        reply.code(201).send(newClient);
    });

    fastify.post("/addAsset/client/:clientId/asset/:assetId", async (request: FastifyRequest, reply: FastifyReply) => {
        const { clientId, assetId } = request.params as { clientId: string, assetId: string };
        const result = await clientUseCase.addAssetToClient(clientId, assetId);
        reply.send(result);
    });

    fastify.put('/:id', async (request: FastifyRequest, reply: FastifyReply) => {
        const { id } = request.params as { id: string };
        const data = request.body;
        const schema = createClientSchema.parse(data);
        const updatedClient = await clientUseCase.updateClient(id, schema);
        reply.send(updatedClient);
    });

    fastify.delete('/deactivate/:id', async (request: FastifyRequest, reply: FastifyReply) => {
        const { id } = request.params as { id: string };
        const result = await clientUseCase.deactivateClient(id);
        reply.send(result);
    });
}
