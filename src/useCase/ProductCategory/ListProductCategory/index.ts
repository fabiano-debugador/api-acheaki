import { PostgresProductCategoryRepository } from "../../../repositories/implementations/PostgresProductCategoryRepository";
import { ListProductCategoryController } from "./ListProductCategoryController";
import { ListProductCategoryUseCase } from "./ListProductCategoryUseCase";

const postgresProductCategoryRepository =
  new PostgresProductCategoryRepository();

const listProductCategoryUseCase = new ListProductCategoryUseCase(
  postgresProductCategoryRepository
);

const listProductCategoryController = new ListProductCategoryController(
  listProductCategoryUseCase
);

export { listProductCategoryUseCase, listProductCategoryController };
