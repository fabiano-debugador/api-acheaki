import { ProductCategory } from "../../entities/ProductCategory";
import { IProductCategoryRepository } from "../IProductCategoryRepository";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class PostgresProductCategoryRepository
  implements IProductCategoryRepository
{
  async findByCategory(category: string): Promise<ProductCategory | null> {
    const categoryProduct = await prisma.categoryProduct.findFirst({
      where: {
        category: category,
      },
    });

    return categoryProduct;
  }

  async save(category: ProductCategory): Promise<void> {
    await prisma.categoryProduct.create({ data: category });
  }
}
