import { PostgresProductCategoryRepository } from "../../../repositories/implementations/PostgresProductCategoryRepository";
import { DeleteProductCategoryController } from "./DeleteProductCategoryController";
import { DeleteProductCategoryUseCase } from "./DeleteProductCategoryUseCase";

const postgresProductCategoryRepository =
  new PostgresProductCategoryRepository();

const deleteProductCategoryUseCase = new DeleteProductCategoryUseCase(
  postgresProductCategoryRepository
);

const deleteProductCategoryController = new DeleteProductCategoryController(
  deleteProductCategoryUseCase
);

export { deleteProductCategoryUseCase, deleteProductCategoryController };
