"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProductCategoryController = exports.updateProductCategoryUseCase = void 0;
const PostgresProductCategoryRepository_1 = require("../../../repositories/implementations/PostgresProductCategoryRepository");
const UpdateProductCategoryController_1 = require("./UpdateProductCategoryController");
const UpdateProductCategoryUseCase_1 = require("./UpdateProductCategoryUseCase");
const postgresProductCategoryRepository = new PostgresProductCategoryRepository_1.PostgresProductCategoryRepository();
const updateProductCategoryUseCase = new UpdateProductCategoryUseCase_1.UpdateProductCategoryUseCase(postgresProductCategoryRepository);
exports.updateProductCategoryUseCase = updateProductCategoryUseCase;
const updateProductCategoryController = new UpdateProductCategoryController_1.UpdateProductCategoryController(updateProductCategoryUseCase);
exports.updateProductCategoryController = updateProductCategoryController;