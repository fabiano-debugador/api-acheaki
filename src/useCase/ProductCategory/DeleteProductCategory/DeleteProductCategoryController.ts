import { Request, Response } from "express";
import { DeleteProductCategoryUseCase } from "./DeleteProductCategoryUseCase";
export class DeleteProductCategoryController {
  constructor(private deleteProductCategory: DeleteProductCategoryUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    try {
      const isDeleteCategory = await this.deleteProductCategory.execute({
        id,
      });

      if (isDeleteCategory) {
        return response.status(204).send();
      }

      return response.status(404).send();
    } catch (error: any) {
      return response.status(400).json({
        message: error.message || "Unexpected error",
      });
    }
  }
}
