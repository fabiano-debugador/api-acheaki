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
exports.UpdateProfileUseCase = void 0;
class UpdateProfileUseCase {
    constructor(profileRepository) {
        this.profileRepository = profileRepository;
    }
    execute(profile) {
        return __awaiter(this, void 0, void 0, function* () {
            const existsProfile = yield this.profileRepository.findById(profile.id);
            if (!existsProfile) {
                throw new Error("Profile not found.");
            }
            const profileData = Object.assign(Object.assign({}, profile), { banner: profile.banner.banner[0].path, imageProfile: profile.imageProfile.banner[0].path });
            yield this.profileRepository.update(profileData);
        });
    }
}
exports.UpdateProfileUseCase = UpdateProfileUseCase;
