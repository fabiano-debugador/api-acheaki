import { IUpdateProductRepository } from "../../../repositories/IProductRepository";
import { IUpdateProductDTO } from "./UpdateProductDTO";

export class UpdateProductUseCase {
  constructor(private updateProductRepository: IUpdateProductRepository) {}

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
