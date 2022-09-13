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
exports.UpdateProductCategoryController = void 0;
class UpdateProductCategoryController {
    constructor(updateProductCategoryUseCase) {
        this.updateProductCategoryUseCase = updateProductCategoryUseCase;
    }
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = request.params;
            const { idLogin, category, categorySlug } = request.body;
            let filename = null;
            if (request.file)
                filename = request.file.path;
            try {
                const updatedData = yield this.updateProductCategoryUseCase.execute({
                    id,
                    idLogin,
                    category,
                    categorySlug,
                    image: filename,
                });
                return response.status(200).send(updatedData);
            }
            catch (error) {
                return response.status(400).json({
                    message: error.message || "Unexpected error",
                });
            }
        });
    }
}
exports.UpdateProductCategoryController = UpdateProductCategoryController;
