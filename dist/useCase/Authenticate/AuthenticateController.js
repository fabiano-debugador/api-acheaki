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
exports.AuthenticateController = void 0;
class AuthenticateController {
    constructor(authenticateUseCase) {
        this.authenticateUseCase = authenticateUseCase;
    }
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { login, password } = request.body;
            try {
                const token = yield this.authenticateUseCase.execute({ login, password });
                return response.status(200).send(token);
            }
            catch (error) {
                return response.status(401).json({ message: "Client not authozized" });
            }
        });
    }
}
exports.AuthenticateController = AuthenticateController;
