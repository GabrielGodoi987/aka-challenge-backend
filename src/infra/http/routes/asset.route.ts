import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { AssetUseCase } from "../../../domain/usecases/asset.useCase";

export async function AssetRoutes(fastify: FastifyInstance) {
   const assetUseCase = new AssetUseCase();

  fastify.get("/", async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      const assets = await assetUseCase.getAssets();
      reply.send(assets);
    } catch (error) {
      reply.status(500).send({ error: "Failed to retrieve assets" });
    }
  });
  fastify.get(
    "/:id",
    async (request: FastifyRequest, reply: FastifyReply) => {
        const { id } = request.params as { id: string };
        try {
            const asset = await assetUseCase.getAssetById(id);
            if (!asset) {
            return reply.status(404).send({ error: "Asset not found" });
            }
            reply.send(asset);
        } catch (error) {
            reply.status(500).send({ error: "Failed to retrieve asset" });
        }
    }
  );
  fastify.get(
    "/client/:clientId/assets",
    async (request: FastifyRequest, reply: FastifyReply) => {
        const { clientId } = request.params as { clientId: string };
        try {
            const assets = await assetUseCase.getAssetByClientId(clientId);
            if (!assets || assets.length === 0) {
                return reply.status(404).send({ error: "No assets found for this client" });
            }
            reply.send(assets);
        } catch (error) {
            reply.status(500).send({ error: "Failed to retrieve assets for client" });
        }
    }
  );
}
