import { Profile } from "../../../entities/Profile";
import { IProfileRepository } from "../../../repositories/IProfileRepository";
import { IListOneProfileDTO } from "./ListOneProfileDTO";

export class ListOneProfileUseCase {
  constructor(private profileRepository: IProfileRepository) {}

  async listOne(profile: IListOneProfileDTO): Promise<Profile> {
    const getProfile = await this.profileRepository.findById(profile.id);

    if (!getProfile) {
      throw new Error("No profile found");
    }

    return getProfile;
  }
}
