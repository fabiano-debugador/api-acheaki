import { Request, Response } from "express";
import { ProductCategory } from "../../../entities/ProductCategory";
import { CreateProductCategoryUseCase } from "./CreateProductCategoryUseCase";
export class CreateProductCategoryController {
  constructor(
    private createProductCategoryUseCase: CreateProductCategoryUseCase
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { idLogin, category, categorySlug, image }: ProductCategory =
      request.body;

    try {
      await this.createProductCategoryUseCase.execute({
        idLogin,
        category,
        categorySlug,
        image,
      });

      return response.status(201).send();
    } catch (error) {
      return response
        .status(400)
        .json({ message: error || "Unexpected error" });
    }
  }
}
