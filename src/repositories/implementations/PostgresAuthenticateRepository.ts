import { Client } from "../../entities/Client";
import { IAuthenticateRepository } from "../IAuthenticateRepository";
import { PrismaClient } from "@prisma/client";
import { hash } from "bcrypt";

const prisma = new PrismaClient();

export class PostgresAuthenticateRepository implements IAuthenticateRepository {
  async verify(login: string): Promise<Client | null> {
    const client = await prisma.client.findFirst({
      where: {
        login,
      },
    });
    return client;
  }
}
