import { Profile } from "../../../entities/Profile";
import { IProfileRepository } from "../../../repositories/IProfileRepository";
import { IListAllProfileDTO } from "./ListAllProfileDTO";

export class ListAllProfileUseCase {
  constructor(private profileRepository: IProfileRepository) {}

  async listAll(profile: IListAllProfileDTO): Promise<Profile[]> {
    const profiles = await this.profileRepository.listAll(profile.idLogin);

    if (!profiles) {
      throw new Error("No profiles found");
    }

    return profiles;
  }
}
