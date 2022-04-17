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
exports.UpdateClientController = void 0;
class UpdateClientController {
    constructor(updateClientUseCase) {
        this.updateClientUseCase = updateClientUseCase;
    }
    update(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = request.params;
            const { login, password } = request.body;
            try {
                yield this.updateClientUseCase.execute({
                    id,
                    login,
                    password
                });
                return response.status(204).send();
            }
            catch (error) {
                return response.status(400).json({
                    message: error || 'Unexpected error.'
                });
            }
        });
    }
}
exports.UpdateClientController = UpdateClientController;
