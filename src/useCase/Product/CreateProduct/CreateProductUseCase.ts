import { Product } from "../../../entities/Product";
import { ICreateProductRepository } from "../../../repositories/IProductRepository";
import { ICreateProductDTO } from "./CreateProductDTO";

export class CreateProductUseCase {
  constructor(private ProductRepository: ICreateProductRepository) {}

  async execute(data: ICreateProductDTO) {
    const productAlreadyExists = await this.ProductRepository.findByName(
      data.name
    );

    if (productAlreadyExists) {
      throw new Error("product already exists");
    }

    const product = new Product(data);

    await this.ProductRepository.save(product);
  }
}
