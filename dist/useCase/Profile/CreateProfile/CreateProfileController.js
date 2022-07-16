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
exports.CreateProfileController = void 0;
class CreateProfileController {
    constructor(createProfileUseCase) {
        this.createProfileUseCase = createProfileUseCase;
    }
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            // let obj = {name:'', age: ''};
            function empetyObject(obj) {
                for (var prop in obj) {
                    if (obj[prop] === '')
                        return false;
                }
                return true;
            }
            const { idLogin, name, slogan, description, titleSlug, imageProfile, banner, tag, follower, point, vote } = request.body;
            try {
                if (empetyObject({
                    idLogin,
                    name,
                    slogan,
                    description,
                    titleSlug,
                    imageProfile,
                    banner,
                    tag,
                    follower,
                    point,
                    vote
                })) {
                    yield this.createProfileUseCase.execute({
                        idLogin,
                        name,
                        slogan,
                        description,
                        titleSlug,
                        imageProfile,
                        banner,
                        tag,
                        follower,
                        point,
                        vote
                    });
                    return response.status(201).send();
                }
                return response.status(400).json({
                    message: 'Some field is empty.'
                });
            }
            catch (error) {
                return response.status(400).json({
                    message: error || 'Unexpedted error.'
                });
            }
        });
    }
}
exports.CreateProfileController = CreateProfileController;
