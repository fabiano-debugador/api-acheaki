import { IProfileUpdateRepository } from "../../../repositories/IProfileRepository";
import { IUpdateProfileDTO } from "./UpdateProfileDTO";

export class UpdateProfileUseCase {
  constructor(private profileRepository: IProfileUpdateRepository) {}

  async execute(profile: IUpdateProfileDTO) {
    const existsProfile = await this.profileRepository.findById(profile.id);

    if (!existsProfile) {
      throw new Error("Profile not found.");
    }

    await this.profileRepository.update(profile);
  }
}
