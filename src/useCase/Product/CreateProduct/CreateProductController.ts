import { Request, Response } from "express";
import { CreateProductUseCase } from "./CreateProductUseCase";

export class CreateProductController {
  constructor(private createProductUseCase: CreateProductUseCase) {}
  async handle(request: Request, response: Response): Promise<Response> {
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
      await this.createProductUseCase.execute({
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

      return response.status(201).send();
    } catch (error: any) {
      return response.status(400).json({
        message: error.message || "Unexpected error",
      });
    }
  }
}
