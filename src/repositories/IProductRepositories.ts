import { Product } from "../entities/Product";

export interface IProductRepository {
  findByName(name: string): Promise<Product | null>;
  findById(id: string): Promise<Product | null>;
}

export interface ICreateProductRepository extends IProductRepository {
  save(product: Product): Promise<void>;
}

export interface IUpdateProductRepository extends IProductRepository {
  update(product: Product): Promise<void>;
}

export interface IDeleteProductRepository extends IProductRepository {
  delete(id: string): Promise<void>;
}
