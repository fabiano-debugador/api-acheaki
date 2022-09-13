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
exports.CreateProductController = void 0;
class CreateProductController {
    constructor(createProductUseCase) {
        this.createProductUseCase = createProductUseCase;
    }
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idLogin, idCategory, name, slug, price, description, image, page, tag, vote, like, point, } = request.body;
            let filename = "";
            if (request.file) {
                filename = request.file.path;
            }
            try {
                yield this.createProductUseCase.execute({
                    idLogin,
                    idCategory,
                    name,
                    slug,
                    price: parseInt(price),
                    description,
                    image: filename,
                    page,
                    tag,
                    vote: parseInt(vote),
                    like: parseInt(like),
                    point: parseInt(point),
                });
                return response.status(201).send();
            }
            catch (error) {
                return response.status(400).json({
                    message: error.message || "Unexpected error",
                });
            }
        });
    }
}
exports.CreateProductController = CreateProductController;
