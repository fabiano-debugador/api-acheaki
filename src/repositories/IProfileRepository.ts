import { Profile } from "../entities/Profile";

export interface IProfileRepository {
  findByIdLogin(idLogin: string): Promise<Profile | null>;
}

export interface IProfileSaveRepository extends IProfileRepository {
  save(profile: Profile): Promise<void>;
}
