import { Product } from "../entities/Product";

export interface IProductRepository {
  findByName(name: string): Promise<Product | null>;
  findById(id: string): Promise<Product | null>;
  listAll(idLogin: string): Promise<Product[]>;
}

export interface ISaveProductRepository extends IProductRepository {
  save(product: Product): Promise<void>;
}

export interface IUpdateProductRepository extends IProductRepository {
  update(product: Product): Promise<void>;
}

export interface IDeleteProductRepository extends IProductRepository {
  delete(id: string): Promise<void>;
}
