import { ProductCategory } from "../entities/ProductCategory";

export interface IProductCategoryRepository {
  findByCategory(category: string): Promise<ProductCategory | null | undefined>;
  findById(id: string): Promise<ProductCategory | null>;
  validateCategoryAndProfile(id: string, idLogin: string): Promise<boolean>;

  save(productCategory: ProductCategory): Promise<void>;
  update(category: ProductCategory): Promise<void>;
  delete(id: string): Promise<void>;
}
