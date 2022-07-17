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

  async validateCategoryAndProfile(
    id: string,
    idLogin: string
  ): Promise<boolean> {
    const category = await prisma.categoryProduct.findMany({
      where: {
        idLogin,
        id: {
          equals: id,
        },
      },
    });

    if (category.length === 0) {
      return false;
    }
    return true;
  }

  async findById(id: string): Promise<ProductCategory | null> {
    const category = await prisma.categoryProduct.findUnique({
      where: {
        id,
      },
    });

    return category;
  }

  async update(data: ProductCategory): Promise<void> {
    const { id, idLogin, category, categorySlug, image } = data;

    await prisma.categoryProduct.update({
      where: {
        id,
      },
      data: {
        idLogin,
        category,
        categorySlug,
        image,
      },
    });
  }

  async save(category: ProductCategory): Promise<void> {
    await prisma.categoryProduct.create({ data: category });
  }
}
