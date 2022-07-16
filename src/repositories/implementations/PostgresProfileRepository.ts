import { Profile } from "../../entities/Profile";
import { IProfileSaveRepository } from "../IProfileRepositories";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class PostgresProfileRepository implements IProfileSaveRepository {
  async findByIdLogin(idLogin: string): Promise<Profile | null> {
    const profile = await prisma.profile.findUnique({
      where: {
        idLogin: idLogin,
      },
    });

    return profile;
  }

  async save(profile: Profile): Promise<void> {
    await prisma.profile.create({ data: profile });
  }
}
