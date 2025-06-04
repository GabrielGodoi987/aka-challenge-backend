import { Client } from "../client/client.interface";

export interface Assets {
    id: string;
    name: string;
    currtentValue: number;
    clients: Client[];
}

export interface CreateAsset{
    name: string;
    currtentValue: number;
}