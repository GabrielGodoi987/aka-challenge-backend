import { ClientRepositoryImpl } from "../../infra/database/repository/client.repositoryImpl";
import { ClientUpdate, CreateClient } from "../interfaces/client/client.interface";

export class ClientUseCase{
    private readonly clienteRepositoryImpl: ClientRepositoryImpl;

    constructor() {
        this.clienteRepositoryImpl = new ClientRepositoryImpl();
    }
    
    async getAllClients() {
        return await this.clienteRepositoryImpl.findAll();
    }
    async getClientById(id: string) {
        return await this.clienteRepositoryImpl.findById(id);
    }
    async createClient(client: CreateClient) {
        return await this.clienteRepositoryImpl.create(client);
    }
    async updateClient(id: string, client: ClientUpdate) {
        return await this.clienteRepositoryImpl.update(id, client);
    }
  
    async deactivateClient(id: string) {
        return await this.clienteRepositoryImpl.deactivate(id);
    }

    async getClientByEmail(email: string) {
        return await this.clienteRepositoryImpl.getClientByEmail(email);
    }

    async addAssetToClient(clientId: string, assetId: string) {
        return await this.clienteRepositoryImpl.addAssetToClient(clientId, assetId);
    }
}