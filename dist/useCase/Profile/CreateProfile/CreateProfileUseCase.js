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
exports.CreateProfileUseCase = void 0;
const Profile_1 = require("../../../entities/Profile");
class CreateProfileUseCase {
    constructor(profileRepository) {
        this.profileRepository = profileRepository;
    }
    execute(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const profileAlreadyExists = yield this.profileRepository.findByIdLogin(data.idLogin);
            if (profileAlreadyExists) {
                throw new Error('Profile already exists.');
            }
            const profile = new Profile_1.Profile(data);
            yield this.profileRepository.save(profile);
        });
    }
}
exports.CreateProfileUseCase = CreateProfileUseCase;
