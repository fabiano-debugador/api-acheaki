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
exports.PostgresClientRepository = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class PostgresClientRepository {
    findByLogin(login) {
        return __awaiter(this, void 0, void 0, function* () {
            const client = yield prisma.client.findUnique({
                where: {
                    login: String(login),
                },
            });
            return client;
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const client = yield prisma.client.findUnique({
                where: {
                    id: id,
                },
            });
            return client;
        });
    }
    save(client) {
        return __awaiter(this, void 0, void 0, function* () {
            const newclient = yield prisma.client.create({ data: client });
            return newclient;
        });
    }
    createProfile(idLogin) {
        return __awaiter(this, void 0, void 0, function* () {
            yield prisma.profile.create({ data: { idLogin } });
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const clients = yield prisma.client.findMany();
            return clients;
        });
    }
    update(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, login, password } = data;
            yield prisma.client.update({
                where: {
                    id: id,
                },
                data: {
                    login: login,
                    password: password,
                },
            });
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield prisma.client.delete({
                where: {
                    id: id,
                },
            });
        });
    }
}
exports.PostgresClientRepository = PostgresClientRepository;
