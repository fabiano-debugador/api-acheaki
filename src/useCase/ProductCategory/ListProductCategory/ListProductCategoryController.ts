import { Request, Response } from "express";
import { ListProductCategoryUseCase } from "./ListProductCategoryUseCase";

export class ListProductCategoryController {
  constructor(private listproductCategory: ListProductCategoryUseCase) {}

  async listAll(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    try {
      const category = await this.listproductCategory.listAll({
        idLogin: id,
      });

      if (category) {
        return response.status(200).send({ category });
      }

      return response.status(404).send();
    } catch (error: any) {
      return response.status(400).json({
        message: error.message || "Unexpected error",
      });
    }
  }

  async getOne(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    try {
      const category = await this.listproductCategory.listOne({ id });

      if (category) {
        return response.status(200).send(category);
      }

      return response.status(404).send();
    } catch (error: any) {
      return response.status(400).json({
        message: error.message || "Unexpected error",
      });
    }
  }
}
