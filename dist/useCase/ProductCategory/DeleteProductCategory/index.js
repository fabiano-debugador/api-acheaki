"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProductCategoryController = exports.deleteProductCategoryUseCase = void 0;
const PostgresProductCategoryRepository_1 = require("../../../repositories/implementations/PostgresProductCategoryRepository");
const DeleteProductCategoryController_1 = require("./DeleteProductCategoryController");
const DeleteProductCategoryUseCase_1 = require("./DeleteProductCategoryUseCase");
const postgresProductCategoryRepository = new PostgresProductCategoryRepository_1.PostgresProductCategoryRepository();
const deleteProductCategoryUseCase = new DeleteProductCategoryUseCase_1.DeleteProductCategoryUseCase(postgresProductCategoryRepository);
exports.deleteProductCategoryUseCase = deleteProductCategoryUseCase;
const deleteProductCategoryController = new DeleteProductCategoryController_1.DeleteProductCategoryController(deleteProductCategoryUseCase);
exports.deleteProductCategoryController = deleteProductCategoryController;
