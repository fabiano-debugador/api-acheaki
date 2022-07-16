import { PostgresProductCategoryRepository } from "../../../repositories/implementations/PostgresProductCategoryRepository";
import { CreateProductCategoryController } from "./CreateProductCategoryController";
import { CreateProductCategoryUseCase } from "./CreateProductCategoryUseCase";

const postgresProductCategoryRepository =
  new PostgresProductCategoryRepository();

const createProductCategoryUseCase = new CreateProductCategoryUseCase(
  postgresProductCategoryRepository
);

const createProductCategoryController = new CreateProductCategoryController(
  createProductCategoryUseCase
);

export { createProductCategoryUseCase, createProductCategoryController };
