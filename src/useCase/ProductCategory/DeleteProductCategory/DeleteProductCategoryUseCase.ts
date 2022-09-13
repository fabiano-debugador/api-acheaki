import { IDeleteProductCategory } from "../../../repositories/IProductCategoryRepository";
import { IDeleteProductCategoryDTO } from "./DeleteProductCategoryDTO";

export class DeleteProductCategoryUseCase {
  constructor(private productCategoryRepository: IDeleteProductCategory) {}

  async execute(data: IDeleteProductCategoryDTO): Promise<boolean> {
    const existProductCategory = await this.productCategoryRepository.findById(
      data.id
    );

    if (existProductCategory) {
      await this.productCategoryRepository.delete(data.id);
      return true;
    }
    return false;
  }
}
