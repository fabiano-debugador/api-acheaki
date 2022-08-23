import { Product } from "../entities/Product";

export interface IProductRepository {
  findByName(name: string): Promise<Product | null>;
  save(product: Product): Promise<void>;
}
