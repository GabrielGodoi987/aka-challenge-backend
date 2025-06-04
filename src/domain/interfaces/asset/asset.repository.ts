import { Assets } from "./asset.interface";

export interface AssetRespository{
    findAll(): Promise<Assets[]>;
    findById(id: string): Promise<Assets | null>;
    findByClientId(clientId: string): Promise<Assets[]>;
}