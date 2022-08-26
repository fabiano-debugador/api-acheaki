import { Profile } from "../../entities/Profile";
import { IProfileRepository } from "../IProfileRepository";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class PostgresProfileRepository implements IProfileRepository {
  // async findByIdLogin(idLogin: string): Promise<Profile | null> {
  //   const profile = await prisma.profile.findUnique({
  //     where: {
  //       idLogin: idLogin,
  //     },
  //   });

  //   return profile;
  // }

  async findById(id: string): Promise<any> {
    const profile = await prisma.profile.findFirst({
      where: {
        id,
      },
    });

    return profile;
  }

  async listAll(idLogin: string): Promise<any> {
    const product = await prisma.profile.findMany({
      where: {
        idLogin,
      },
    });

    return product;
  }

  async update(profile: Profile): Promise<void> {
    await prisma.profile.update({
      where: {
        id: profile.id,
      },
      data: profile,
    });
  }
}
