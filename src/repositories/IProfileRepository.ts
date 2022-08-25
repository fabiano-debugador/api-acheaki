import { Profile } from "../entities/Profile";

export interface IProfileRepository {
  // findByIdLogin(idLogin: string): Promise<Profile | null>;
  findById(id: string): Promise<Profile | null>;
  listAll(idLogin: string): Promise<Profile[]>;
}

// export interface IProfileSaveRepository extends IProfileRepository {
//   save(profile: Profile): Promise<void>;
// }

export interface IProfileUpdateRepository extends IProfileRepository {
  update(profile: Profile): Promise<void>;
}
