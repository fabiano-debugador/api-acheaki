import { ProductCategory } from "../../../entities/ProductCategory";
import { ISaveProductCategory } from "../../../repositories/IProductCategoryRepository";
import { ICreateProductCategoryRequestDTO } from "./CreateProductCategoryDTO";

export class CreateProductCategoryUseCase {
  constructor(private productCategoryRepository: ISaveProductCategory) {}

  async execute(data: ICreateProductCategoryRequestDTO) {
    const categoryAlreadyExists =
      await this.productCategoryRepository.findByCategory(data.category);

    if (categoryAlreadyExists) {
      throw new Error("Category alredy exists.");
    }

    const category = new ProductCategory(data);

    await this.productCategoryRepository.save(category);
  }
}
