import { AssetRespositoryImpl } from "../../infra/database/repository/asset.repositoryImpl";

export class AssetUseCase{
    private readonly assetsRepositoryImpl: AssetRespositoryImpl;
    constructor() {
        this.assetsRepositoryImpl = new AssetRespositoryImpl();
    }

    async getAssets() {
        return await this.assetsRepositoryImpl.findAll();
    }

    async getAssetById(id: string) {
        return await this.assetsRepositoryImpl.findById(id);
    }

    async getAssetByClientId(clientId: string){
        return await this.assetsRepositoryImpl.findByClientId(clientId);
    }
}