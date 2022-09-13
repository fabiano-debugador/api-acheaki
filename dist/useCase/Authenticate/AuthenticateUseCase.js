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
exports.AuthenticateUseCase = void 0;
const bcrypt_1 = require("bcrypt");
const jsonwebtoken_1 = require("jsonwebtoken");
class AuthenticateUseCase {
    constructor(authenticateRepository) {
        this.authenticateRepository = authenticateRepository;
    }
    execute({ login, password }) {
        return __awaiter(this, void 0, void 0, function* () {
            const clientAlredyExists = yield this.authenticateRepository.verify(login);
            if (!clientAlredyExists) {
                throw new Error("User or password incorrect");
            }
            const passwordMatch = yield (0, bcrypt_1.compare)(password, clientAlredyExists.password);
            if (!passwordMatch) {
                throw new Error("User or password incorrect");
            }
            const token = (0, jsonwebtoken_1.sign)({}, "13f3b6cb-3f98-4258-93c7-82878099f1d9", {
                subject: clientAlredyExists.id,
                expiresIn: "36000000s",
            });
            return { token };
        });
    }
}
exports.AuthenticateUseCase = AuthenticateUseCase;
