import { Client } from "../../entities/Client";
import { IAllClients } from "../IClientsRepositories";
import { PrismaClient } from "@prisma/client";
import { hash } from "bcrypt";

const prisma = new PrismaClient();

export class PostgresClientRepository implements IAllClients {
  async findByLogin(login: string): Promise<Client | null> {
    const client = await prisma.client.findFirst({
      where: {
        login,
      },
    });
    return client;
  }

  async findById(id: string): Promise<Client | null> {
    const client = await prisma.client.findUnique({
      where: {
        id: id,
      },
    });

    return client;
  }

  async save(client: Client): Promise<Client> {
    const passwordHash = await hash(client.password, 8);
    const newclient = await prisma.client.create({
      data: {
        login: client.login,
        password: passwordHash,
      },
    });

    await prisma.profile.create({ data: { idLogin: newclient.id } });
    return newclient;
  }

  async createProfile(idLogin: string): Promise<void> {
    await prisma.profile.create({ data: { idLogin } });
  }

  async findAll(): Promise<any> {
    const clients = await prisma.client.findMany();

    return clients;
  }

  async update(data: Client): Promise<void> {
    const { id, login, password } = data;
    const passwordHash = await hash(password, 8);

    await prisma.client.update({
      where: {
        id,
      },
      data: {
        login,
        password: passwordHash,
      },
    });
  }

  async delete(id: string): Promise<void> {
    await prisma.client.delete({
      where: {
        id: id,
      },
    });
  }
}
