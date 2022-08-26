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
exports.UpdateProfileController = void 0;
class UpdateProfileController {
    constructor(updateProfileUseCase) {
        this.updateProfileUseCase = updateProfileUseCase;
    }
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = request.params;
            const { name, slogan, description, titleSlug, imageProfile, banner, tag, follower, point, vote, } = request.body;
            try {
                yield this.updateProfileUseCase.execute({
                    id,
                    name,
                    slogan,
                    description,
                    titleSlug,
                    imageProfile,
                    banner,
                    tag,
                    follower,
                    point,
                    vote,
                });
                return response.status(200).send();
            }
            catch (error) {
                return response.status(400).json({
                    message: error.message || "Unexpected error",
                });
            }
        });
    }
}
exports.UpdateProfileController = UpdateProfileController;