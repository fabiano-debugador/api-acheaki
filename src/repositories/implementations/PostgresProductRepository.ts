import { IProductRepository } from "../IProductRepository";
import { PrismaClient } from "@prisma/client";
import { Product } from "../../entities/Product";

const prisma = new PrismaClient();

export class PostgresProductRepository implements IProductRepository {
  async findByName(name: string): Promise<Product | null> {
    const product = await prisma.product.findFirst({
      where: {
        name,
      },
    });

    return product;
  }

  async listAll(idLogin: string): Promise<Product[]> {
    const product = await prisma.product.findMany({
      where: {
        idLogin,
      },
    });

    return product;
  }

  async save(product: Product): Promise<void> {
    await prisma.product.create({ data: product });
  }

  async findById(id: string): Promise<Product | null> {
    const product = prisma.product.findUnique({
      where: {
        id,
      },
    });

    return product;
  }

  async update(product: Product): Promise<void> {
    await prisma.product.update({
      where: {
        id: product.id,
      },
      data: product,
    });
  }

  async delete(id: string): Promise<void> {
    await prisma.product.delete({
      where: {
        id,
      },
    });
  }
}
