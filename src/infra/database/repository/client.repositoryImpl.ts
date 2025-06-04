import { PrismaClient } from "@prisma/client";
import {
  Client,
  CreateClient,
  ClientUpdate,
} from "../../../domain/interfaces/client/client.interface";
import { ClientRepository } from "../../../domain/interfaces/client/client.repository";
import { Prisma } from "../prisma/prisma-client";

export class ClientRepositoryImpl implements ClientRepository {
  private readonly prisma: PrismaClient = Prisma;

  findAll(): Promise<Client[]> {
    return this.prisma.client.findMany({
      where: { isActive: true },
    });
  }
  findById(id: string): Promise<Client | null> {
    return this.prisma.client.findUnique({
      where: { id },
      include: {
        assets: true,
      },
    });
  }
  create(client: CreateClient): Promise<Client> {
    return this.prisma.client.create({
      data: client,
    });
  }
  update(id: string, client: ClientUpdate): Promise<Client | null> {
    return this.prisma.client.update({
      where: { id },
      data: client,
    });
  }
  deactivate(id: string): Promise<Client | null> {
    return this.prisma.client.update({
      where: { id },
      data: { isActive: false },
    });
  }
  getClientByEmail(email: string): Promise<Client | null> {
    return this.prisma.client.findUnique({
      where: { email },
    });
  }
  addAssetToClient(clientId: string, assetId: string): Promise<Client | null> {
    return this.prisma.client.upsert({
      where: { id: clientId },
      data: {
        assets: {
          connect: { id: assetId },
        },
      },
      include: {
        assets: true,
      },
    });
  }
}
