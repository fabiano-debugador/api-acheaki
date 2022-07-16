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
exports.PostgresProductCategoryRepository = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class PostgresProductCategoryRepository {
    findByCategory(category) {
        return __awaiter(this, void 0, void 0, function* () {
            const categoryProduct = yield prisma.categoryProduct.findFirst({
                where: {
                    category: category,
                },
            });
            return categoryProduct;
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const category = yield prisma.categoryProduct.findUnique({
                where: {
                    id,
                },
            });
            return category;
        });
    }
    update(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, idLogin, category, categorySlug, image } = data;
            yield prisma.categoryProduct.update({
                where: {
                    id,
                },
                data: {
                    idLogin,
                    category,
                    categorySlug,
                    image,
                },
            });
        });
    }
    save(category) {
        return __awaiter(this, void 0, void 0, function* () {
            yield prisma.categoryProduct.create({ data: category });
        });
    }
}
exports.PostgresProductCategoryRepository = PostgresProductCategoryRepository;
