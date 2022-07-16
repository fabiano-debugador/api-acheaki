import { PostgresProductCategoryRepository } from "../../../repositories/implementations/PostgresProductCategoryRepository";
import { UpdateProductCategoryController } from "./UpdateProductCategoryController";
import { UpdateProductCategoryUseCase } from "./UpdateProductCategoryUseCase";

const postgresProductCategoryRepository =
  new PostgresProductCategoryRepository();

const updateProductCategoryUseCase = new UpdateProductCategoryUseCase(
  postgresProductCategoryRepository
);

const updateProductCategoryController = new UpdateProductCategoryController(
  updateProductCategoryUseCase
);

export { updateProductCategoryUseCase, updateProductCategoryController };
