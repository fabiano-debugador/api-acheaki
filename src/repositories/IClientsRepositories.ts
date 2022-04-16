import { Client } from '../entities/Client';

export interface IClientsRepository {
  findByLogin(login: string): Promise<Client | Client[] | null>;
  save(client: Client): Promise<void>;
}

export interface IAllClients extends IClientsRepository {
  [x: string]: any;
  findAll(): Promise<Client[] | null>;
}
