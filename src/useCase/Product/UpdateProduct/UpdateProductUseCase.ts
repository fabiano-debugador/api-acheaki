import { IProductRepository } from "../../../repositories/IProductRepositories";
import { IUpdateProductDTO } from "./UpdateProductDTO";

export class UpdateProductUseCase {
  constructor(private updateProductRepository: IProductRepository) {}

  async execute(product: IUpdateProductDTO) {
    const existsProduct = await this.updateProductRepository.findById(
      product.id
    );

    if (!existsProduct) {
      throw new Error("Product not found");
    }

    await this.updateProductRepository.update(product);
  }
}
