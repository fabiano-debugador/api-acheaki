import { Client } from '../entities/Client';

export interface IClientsRepository {
  findByLogin(login: string): Promise<Client | null>;
  save(client: Client): Promise<void>;
}
