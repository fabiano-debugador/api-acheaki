import { Client } from "../../entities/Client";
import { IAllClients } from "../IClientsRepositories";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class PostgresClientRepository implements IAllClients {

  async findByLogin(login: string): Promise<Client | null> {
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

  async findAll(): Promise<Client[] | null> {
    const clients = await prisma.client.findMany();

    return clients
  }
}
