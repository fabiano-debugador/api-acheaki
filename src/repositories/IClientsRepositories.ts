import { Client } from '../entities/Client';

export interface IClientsRepository {
  findByLogin(login: string): Promise<Client | Client[] | null>;
  save(client: Client): Promise<void>;
}

export interface IAllClients extends IClientsRepository {
  [x: string]: any;
  findAll(): Promise<Client[] | null>;
}

export interface IUpdateClientRepository extends IClientsRepository {
  update(client: Client): Promise<void>;
}

export interface IDeleteClientRepository extends IClientsRepository {
  delete(id: string): Promise<void>
  findById(id: string): Promise<Client | Client[] | null>;
}
