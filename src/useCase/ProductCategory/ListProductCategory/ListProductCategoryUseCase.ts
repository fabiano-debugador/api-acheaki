import { IListProductCategoryDTO } from "./ListProductCategoryDTO";
import { IProductCategoryRepository } from "../../../repositories/IProductCategoryRepository";
import { IListOneProductCategoryDTO } from "./ListOneProductCategoryDTO";

export class ListProductCategoryUseCase {
  constructor(private listProductCategoryUseCase: IProductCategoryRepository) {}

  async listAll(data: IListProductCategoryDTO) {
    const categories = await this.listProductCategoryUseCase.findAllCategory(
      data.idLogin
    );

    return categories;
  }

  async listOne(data: IListOneProductCategoryDTO) {
    const category = await this.listProductCategoryUseCase.findCategory(
      data.id
    );

    return category;
  }
}
