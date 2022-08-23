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
exports.PostgresProductRepository = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class PostgresProductRepository {
    findByName(name) {
        return __awaiter(this, void 0, void 0, function* () {
            const product = yield prisma.product.findFirst({
                where: {
                    name,
                },
            });
            return product;
        });
    }
    save(product) {
        return __awaiter(this, void 0, void 0, function* () {
            yield prisma.product.create({ data: product });
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const product = prisma.product.findUnique({
                where: {
                    id,
                },
            });
            return product;
        });
    }
    update(product) {
        return __awaiter(this, void 0, void 0, function* () {
            yield prisma.product.update({
                where: {
                    id: product.id,
                },
                data: product,
            });
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield prisma.product.delete({
                where: {
                    id,
                },
            });
        });
    }
}
exports.PostgresProductRepository = PostgresProductRepository;
