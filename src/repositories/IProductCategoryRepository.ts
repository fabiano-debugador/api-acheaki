import { ProductCategory } from "../entities/ProductCategory";

export interface IProductCategoryRepository {
  findById(id: string): Promise<ProductCategory | null>;
  findCategory(id: string): Promise<ProductCategory | null>;
  findByIdLogin(id: string): Promise<ProductCategory | null>;
  findAllCategory(idLogin: string): Promise<ProductCategory[]>;
  validateCategoryAndProfile(id: string, idLogin: string): Promise<boolean>;
  findByCategory(category: string): Promise<ProductCategory | null>;
}

export interface ISaveProductCategory extends IProductCategoryRepository {
  save(productCategory: ProductCategory): Promise<void>;
}

export interface IUpdateProductCategory extends IProductCategoryRepository {
  update(category: ProductCategory): Promise<ProductCategory>;
}

export interface IDeleteProductCategory extends IProductCategoryRepository {
  delete(id: string): Promise<void>;
}
