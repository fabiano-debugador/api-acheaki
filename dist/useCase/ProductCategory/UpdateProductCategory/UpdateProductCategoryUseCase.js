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
exports.UpdateProductCategoryUseCase = void 0;
class UpdateProductCategoryUseCase {
    constructor(productCategoryRepository) {
        this.productCategoryRepository = productCategoryRepository;
    }
    execute(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const verifiedCategory = yield this.productCategoryRepository.validateCategoryAndProfile(data.id, data.idLogin);
            const categoryExists = yield this.productCategoryRepository.findByCategory(data.category);
            if (!verifiedCategory) {
                throw new Error("Category not found in this account");
            }
            if (categoryExists) {
                throw new Error("Category already exists");
            }
            yield this.productCategoryRepository.update(data);
        });
    }
}
exports.UpdateProductCategoryUseCase = UpdateProductCategoryUseCase;
