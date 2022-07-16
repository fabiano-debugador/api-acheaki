"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProductCategoryUseCase = void 0;
const ProductCategory_1 = require("../../../entities/ProductCategory");
class CreateProductCategoryUseCase {
    constructor(productCategory) {
        this.productCategory = productCategory;
    }
    execute(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const categoryAlreadyExists = yield this.productCategory.findByCategory(data.category);
            if (categoryAlreadyExists) {
                throw new Error("Category alredy exists.");
            }
            const category = new ProductCategory_1.ProductCategory(data);
            yield this.productCategory.save(category);
        });
    }
}
exports.CreateProductCategoryUseCase = CreateProductCategoryUseCase;
