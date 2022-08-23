import { IProductRepository } from "../IProductRepositories";
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

  async save(product: Product): Promise<void> {
    await prisma.product.create({ data: product });
  }
}
