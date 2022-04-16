import { Client } from "../../entities/Client";
import { IClientsRepository } from "../IClientsRepositories";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class PostgresClientRepository implements IClientsRepository {
  private clients: Client[] = [];

  async findByLogin(login: string): Promise<Client | null> {
    // const client = this.clients.find(client => client.login === login);
    const client = await prisma.client.findUnique({
      where: {
        login: String(login),
      },
    });
    return client;
  }

  async save(client: Client): Promise<void> {
    await prisma.client.create({ data: client });
  }
}
