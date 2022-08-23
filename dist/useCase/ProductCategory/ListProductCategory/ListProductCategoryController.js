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
exports.ListProductCategoryController = void 0;
class ListProductCategoryController {
    constructor(listproductCategory) {
        this.listproductCategory = listproductCategory;
    }
    listAll(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idLogin } = request.body;
            try {
                const category = yield this.listproductCategory.listAll({
                    idLogin,
                });
                if (category) {
                    return response.status(200).send({ category });
                }
                return response.status(404).send();
            }
            catch (error) {
                return response.status(400).json({
                    message: error.message || "Unexpected error",
                });
            }
        });
    }
    getOne(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = request.params;
            try {
                const category = yield this.listproductCategory.listOne({ id });
                if (category) {
                    return response.status(200).send(category);
                }
                return response.status(404).send();
            }
            catch (error) {
                return response.status(400).json({
                    message: error.message || "Unexpected error",
                });
            }
        });
    }
}
exports.ListProductCategoryController = ListProductCategoryController;
