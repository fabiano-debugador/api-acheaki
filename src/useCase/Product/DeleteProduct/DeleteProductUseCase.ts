import { IDeleteProductRepository } from "../../../repositories/IProductRepositories";
import { IDeleteProductDTO } from "./DeleteProductDTO";

export class DeleteProductUseCase {
  constructor(private productRepository: IDeleteProductRepository) {}

  async execute(product: IDeleteProductDTO): Promise<void> {
    const existsProduct = await this.productRepository.findById(product.id);

    if (!existsProduct) {
      throw new Error("Product not found.");
    }

    await this.productRepository.delete(product.id);
  }
}
