import { ClientStatus } from "../../enums/ClientStatus.enum";
import { Assets } from "../asset/asset.interface";

export interface Client {
  id: string;
  name: string;
  email: string;
  status: ClientStatus;
  assets: Assets[];
}

export interface CreateClient {
  name: string;
  email: string;
}

export interface ClientUpdate {
  id: string;
  name?: string;
  email?: string;
  status?: ClientStatus;
}
