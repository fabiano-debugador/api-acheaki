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

  async findAllCategory(idLogin: string): Promise<ProductCategory[]> {
    const categories = await prisma.categoryProduct.findMany({
      where: {
        idLogin,
      },
    });
    return categories;
  }

  async findByIdLogin(idLogin: string): Promise<ProductCategory | null> {
    const category = await prisma.categoryProduct.findFirst({
      where: {
        idLogin,
      },
    });
    return category;
  }

  async findCategory(id: string): Promise<ProductCategory | null> {
    const category = await prisma.categoryProduct.findFirst({
      where: {
        id,
      },
    });
    return category;
  }

  async findById(id: string): Promise<ProductCategory | null> {
    const category = await prisma.categoryProduct.findUnique({
      where: {
        id,
      },
    });

    return category;
  }

  async update(data: ProductCategory): Promise<ProductCategory> {
    const { id, idLogin, category, categorySlug, image } = data;

    const updatedData = await prisma.categoryProduct.update({
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

    return updatedData;
  }

  async save(category: ProductCategory): Promise<void> {
    await prisma.categoryProduct.create({ data: category });
  }

  async delete(id: string): Promise<void> {
    await prisma.categoryProduct.delete({
      where: {
        id,
      },
    });
  }
}
