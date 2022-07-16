import { Request, response, Response } from "express";
import { UpdateProductCategoryUseCase } from "./UpdateProductCategoryUseCase";
import { ProductCategory } from "../../../entities/ProductCategory";

export class UpdateProductCategoryController {
  constructor(
    private updateProductCategoryUseCase: UpdateProductCategoryUseCase
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { idLogin, category, categorySlug, image }: ProductCategory =
      request.body;

    try {
      await this.updateProductCategoryUseCase.execute({
        id,
        idLogin,
        category,
        categorySlug,
        image,
      });
      return response.status(204).send();
    } catch (error) {
      return response.status(400).json({
        message: error || "Unexpected error",
      });
    }
  }
}
