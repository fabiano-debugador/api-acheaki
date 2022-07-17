import { IProductCategoryRepository } from "../../../repositories/IProductCategoryRepository";
import { IUpdateProductCategoryRequestDTO } from "./UpdateProductCategoryDTO";

export class UpdateProductCategoryUseCase {
  constructor(private productCategoryRepository: IProductCategoryRepository) {}

  async execute(data: IUpdateProductCategoryRequestDTO) {
    const verifiedCategory =
      await this.productCategoryRepository.validateCategoryAndProfile(
        data.id,
        data.idLogin
      );

    const categoryExists = await this.productCategoryRepository.findByCategory(
      data.category
    );

    if (!verifiedCategory) {
      throw new Error("Category not found in this account");
    }

    if (categoryExists) {
      throw new Error("Category already exists");
    }

    await this.productCategoryRepository.update(data);
  }
}
