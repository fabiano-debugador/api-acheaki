import { Request, Response } from "express";
import { UpdateProductUseCase } from "./UpdateProductUseCase";

export class UpdateProductController {
  constructor(private updateProductUseCase: UpdateProductUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const {
      idLogin,
      idCategory,
      name,
      slug,
      price,
      description,
      image,
      page,
      tag,
      vote,
      like,
      point,
    } = request.body;

    try {
      await this.updateProductUseCase.execute({
        id,
        idLogin,
        idCategory,
        name,
        slug,
        price,
        description,
        image,
        page,
        tag,
        vote,
        like,
        point,
      });

      return response.status(200).send();
    } catch (error: any) {
      return response.status(400).json({
        message: error.message || "Unexpected error",
      });
    }
  }
}
