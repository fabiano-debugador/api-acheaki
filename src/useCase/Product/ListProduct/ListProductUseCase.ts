import { Product } from "../../../entities/Product";
import { IProductRepository } from "../../../repositories/IProductRepositories";
import { IListAllProductDTO } from "./ListAllProductDTO";
import { IListOneProductDTO } from "./ListOneProductDTO";

export class ListProductUseCase {
  constructor(private productRepository: IProductRepository) {}

  async listAll(product: IListAllProductDTO): Promise<Product[]> {
    const products = await this.productRepository.listAll(product.idLogin);

    if (!products) {
      throw new Error("No products found");
    }

    return products;
  }

  async listOne(product: IListOneProductDTO): Promise<Product> {
    const products = await this.productRepository.findById(product.id);

    if (!products) {
      throw new Error("No products found");
    }

    return products;
  }
}
