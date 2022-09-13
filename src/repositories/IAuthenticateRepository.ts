import { Client } from "../entities/Client";

export interface IAuthenticateRepository {
  verify(login: string): Promise<Client | null>;
}
