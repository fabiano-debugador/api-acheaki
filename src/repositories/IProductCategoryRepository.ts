import { ProductCategory } from "../entities/ProductCategory";

export interface IProductCategoryRepository {
  findByCategory(category: string): Promise<ProductCategory | null | undefined>;
  save(productCategory: ProductCategory): Promise<void>;
}
