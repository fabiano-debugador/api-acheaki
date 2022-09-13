import { IProfileUpdateRepository } from "../../../repositories/IProfileRepository";
import { IUpdateProfileDTO } from "./UpdateProfileDTO";

export class UpdateProfileUseCase {
  constructor(private profileRepository: IProfileUpdateRepository) {}

  async execute(profile: IUpdateProfileDTO) {
    const existsProfile = await this.profileRepository.findById(profile.id);

    if (!existsProfile) {
      throw new Error("Profile not found.");
    }

    const profileData = {
      ...profile,
      banner: profile.banner.banner[0].path,
      imageProfile: profile.imageProfile.banner[0].path,
    };

    await this.profileRepository.update(profileData);
  }
}
