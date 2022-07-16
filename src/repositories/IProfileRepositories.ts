import { Profile } from "../entities/Profile";

export interface IProfileSaveRepository {
  findByIdLogin(idLogin: string): Promise<Profile | null>;
  save(profile: Profile): Promise<void>;
}
