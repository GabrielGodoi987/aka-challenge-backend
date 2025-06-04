import { Client, ClientUpdate, CreateClient } from "./client.interface";

export interface ClientRepository {
    findAll(): Promise<Client[]>;
    findById(id: string): Promise<Client | null>;
    create(client: CreateClient): Promise<Client>;
    update(id: string, client: ClientUpdate): Promise<Client | null>;
    deactivate(id: string): Promise<Client | null>;
    addAssetToClient(clientId: string, assetId: string): Promise<Client | null>;
}