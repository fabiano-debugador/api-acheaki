import { Request, Response } from "express";
import { UpdateProductCategoryUseCase } from "./UpdateProductCategoryUseCase";

export class UpdateProductCategoryController {
  constructor(
    private updateProductCategoryUseCase: UpdateProductCategoryUseCase
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { idLogin, category, categorySlug } = request.body;
    let filename = null;
    if (request.file) filename = request.file.path;
    try {
      const updatedData = await this.updateProductCategoryUseCase.execute({
        id,
        idLogin,
        category,
        categorySlug,
        image: filename,
      });
      return response.status(200).send(updatedData);
    } catch (error: any) {
      return response.status(400).json({
        message: error.message || "Unexpected error",
      });
    }
  }
}
