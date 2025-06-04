import { AssetRespository } from "../../../domain/interfaces/asset/asset.repository";
import { Assets } from "../../../domain/interfaces/asset/asset.interface";
import { Prisma } from "../prisma/prisma-client";
import { PrismaClient } from "@prisma/client";

export class AssetRespositoryImpl implements AssetRespository {
  private readonly prisma: PrismaClient = Prisma;

  findAll(): Promise<Assets[]> {
    return this.prisma.assets.findMany();
  }

  findById(id: string): Promise<Assets | null> {
    return this.prisma.assets.findUnique({
      where: { id },
    });
  }
  findByClientId(clientId: string): Promise<Assets[]> {
    return this.prisma.assets.findMany({
      where: { clientId },
    });
  }
}
