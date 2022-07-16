import { IProductCategoryRepository } from "../../../repositories/IProductCategoryRepository";
import { IUpdateProductCategoryRequestDTO } from "./UpdateProductCategoryDTO";

export class UpdateProductCategoryUseCase {
  constructor(private productCategoryRepository: IProductCategoryRepository) {}

  async execute(data: IUpdateProductCategoryRequestDTO) {
    const categoryExists = await this.productCategoryRepository.findByCategory(
      data.category
    );

    if (categoryExists) {
      throw new Error("Category already exists");
    }

    await this.productCategoryRepository.update(data);
  }
}
